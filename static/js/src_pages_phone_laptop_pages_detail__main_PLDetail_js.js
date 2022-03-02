(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_phone_laptop_pages_detail__main_PLDetail_js"],{

/***/ "./src/_default/phone/comment.js":
/*!***************************************!*\
  !*** ./src/_default/phone/comment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.default_pl_detail_comment_arr = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _default_bool = __webpack_require__(/*! ../_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_content = __webpack_require__(/*! ../_common/default_content */ "./src/_default/_common/default_content.js");

var _default_id = __webpack_require__(/*! ../_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../_common/default_image */ "./src/_default/_common/default_image.js");

var _default_name = __webpack_require__(/*! ../_common/default_name */ "./src/_default/_common/default_name.js");

var _getDefaultArr = __webpack_require__(/*! ../_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

//
function getFirstLetterUserName() {
    var user_name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var last_index_of_space = user_name.indexOf(' ');

    return user_name.slice(last_index_of_space + 1, last_index_of_space + 2);
}

//
var default_pl_detail_reply_obj = function default_pl_detail_reply_obj() {
    var user_name = (0, _default_name.getRandomName)();

    //
    return {
        id: (0, _default_id.getRandomId)(),
        first_letter_user_name: getFirstLetterUserName(user_name),
        user_name: user_name,
        is_admin: (0, _default_bool.getRandomBool)(),
        content: (0, _default_content.getRandomContent)(),
        img: (0, _default_image.getRandomImgOrNull)(),
        commented_time: (0, _default_id.getRandomNumber)(1, 4) + ((0, _default_bool.getRandomBool)() ? ' tuần' : ' tháng') + ' trước',
        user_liked: (0, _default_bool.getRandomBool)(),
        user_not_liked: (0, _default_bool.getRandomBool)()
    };
};

var default_pl_detail_reply_arr = function default_pl_detail_reply_arr() {
    return (0, _default_bool.getRandomBool)() ? (0, _getDefaultArr.getDefaultArr)(default_pl_detail_reply_obj, 0, 3) : [];
};

var default_pl_detail_comment_obj = function default_pl_detail_comment_obj() {
    //
    return _extends({}, default_pl_detail_reply_obj(), {
        reply_arr: default_pl_detail_reply_arr()
    });
};

var default_pl_detail_comment_arr = exports.default_pl_detail_comment_arr = function default_pl_detail_comment_arr() {
    return (0, _getDefaultArr.getDefaultArr)(default_pl_detail_comment_obj, 10, 10);
};

/***/ }),

/***/ "./src/_hooks/useMultiPages.js":
/*!*************************************!*\
  !*** ./src/_hooks/useMultiPages.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.useMultiPages = useMultiPages;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
function useMultiPages(_ref) {

    //
    var getData_API = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var new_page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial_page;
            var start_obj_state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _ref3, data, new_count, new_pages;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    page: new_page,
                                    page_obj: _extends({}, state_obj.page_obj, _defineProperty({}, new_page, state_obj.page_obj[new_page] || [])),
                                    is_fetching: true
                                }, start_obj_state);
                            });

                            _context.next = 3;
                            return handle_API_L(new_page);

                        case 3:
                            _ref3 = _context.sent;
                            data = _ref3.data;
                            new_count = _ref3.count;
                            new_pages = _ref3.pages;


                            setStateObj(function (state_obj) {
                                return _extends({}, state_obj, {
                                    page_obj: _extends({}, state_obj.page_obj, _defineProperty({}, new_page, data))
                                }, state_obj.has_fetched ? {} : { count: new_count, pages: new_pages }, {

                                    has_fetched: true,
                                    is_fetching: false
                                });
                            });

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var _ref$initial_page = _ref.initial_page,
        initial_page = _ref$initial_page === undefined ? 1 : _ref$initial_page,
        handle_API_L = _ref.handle_API_L,
        _ref$other_state = _ref.other_state,
        other_state = _ref$other_state === undefined ? {} : _ref$other_state;

    //
    var _useState = (0, _react.useState)(_extends({
        page_obj: _defineProperty({}, initial_page, []),
        page: initial_page,
        pages: 1,
        count: 0,

        has_fetched: false,
        is_fetching: false

    }, other_state)),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var page_obj = state_obj.page_obj,
        page = state_obj.page,
        has_fetched = state_obj.has_fetched;
    function handleChangePage(new_page) {
        if (page == new_page) {
            return;
        }

        if (page_obj[new_page]) {
            setStateObj(_extends({}, state_obj, {
                page: new_page
            }));

            return;
        }

        getData_API(new_page);
    }

    //
    function refreshData_API(_ref4) {
        var new_page = _ref4.new_page,
            _ref4$start_obj_state = _ref4.start_obj_state,
            start_obj_state = _ref4$start_obj_state === undefined ? {} : _ref4$start_obj_state;

        getData_API(new_page, _extends({
            has_fetched: false,
            page_obj: _defineProperty({}, new_page, []),
            pages: 1,
            count: 0

        }, start_obj_state));
    }

    //
    return {
        state_obj: state_obj,
        setStateObj: setStateObj,
        getData_API: getData_API,
        refreshData_API: refreshData_API,
        handleChangePage: handleChangePage
    };
}

/***/ }),

/***/ "./src/_icons_svg/icons_post/IconsPost.js":
/*!************************************************!*\
  !*** ./src/_icons_svg/icons_post/IconsPost.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./IconsPost.scss */ "./src/_icons_svg/icons_post/IconsPost.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
IconsPost.propTypes = {
    size_icon: _propTypes2.default.string,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
};

IconsPost.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem'
};

/**
 *icons post: (x, y)
 *   @.icon tag: (0, 0)
 *   @.icon comment: (200, 0)
 *   @.icon share: (0, 200)
 */
function IconsPost(_ref) {
    var size_icon = _ref.size_icon,
        x = _ref.x,
        y = _ref.y;

    //
    return _react2.default.createElement(
        'svg',
        {
            className: 'IconsPost',
            viewBox: x + ' ' + y + ' 200 200',
            width: size_icon,
            height: size_icon
            //
            , fill: 'none',
            stroke: 'var(--md-color)',
            strokeLinecap: 'round'
        },
        _react2.default.createElement('path', {
            fill: 'var(--blue)',
            d: 'M10,95 L0,0 L95,10 L200,115 L115,200 Z'
        }),
        _react2.default.createElement(
            'g',
            { stroke: 'var(--blue)', fill: 'white', strokeWidth: '5' },
            _react2.default.createElement('circle', { cx: '50', cy: '50', r: '20' }),
            _react2.default.createElement('circle', { cx: '80', cy: '165', r: '30' }),
            _react2.default.createElement('line', { x1: '80', y1: '145', x2: '80', y2: '185' }),
            _react2.default.createElement('line', { x1: '100', y1: '165', x2: '60', y2: '165' })
        ),
        _react2.default.createElement(
            'g',
            { className: 'IconsPost_cmt', strokeWidth: '10' },
            _react2.default.createElement('path', {
                d: 'M230,190 L230,165 L230,165 Q210,165 210,130 L210,30 Q210,5 230,5\r L370,5 Q390,5 390,30 L390,130 Q390,165 360,165 L270,165 Z'
            }),
            _react2.default.createElement('line', { x1: '240', y1: '40', x2: '360', y2: '40' }),
            _react2.default.createElement('line', { x1: '240', y1: '80', x2: '360', y2: '80' }),
            _react2.default.createElement('line', { x1: '240', y1: '120', x2: '360', y2: '120' })
        ),
        _react2.default.createElement('path', {
            className: 'IconsPost_share',
            d: 'M180,300 L125,240 L125,280 Q40,290 25,380 Q40,330 125,320 L125,360 Z',
            strokeWidth: '10'
        })
    );
}

exports.default = IconsPost;

/***/ }),

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

/***/ "./src/api/api_django_no_token/phone_laptop/comment.js":
/*!*************************************************************!*\
  !*** ./src/api/api_django_no_token/phone_laptop/comment.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_PLComment_L = undefined;

var _AxiosNoToken = __webpack_require__(/*! ../_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _comment = __webpack_require__(/*! ../../../_default/phone/comment */ "./src/_default/phone/comment.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//


// 

//
var API_PLComment_L = exports.API_PLComment_L = function API_PLComment_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)((0, _comment.default_pl_detail_comment_arr)(), function () {
        return (0, _AxiosNoToken2.default)({
            url: 'api/phone/comment-l/',
            method: 'GET',
            params: params
        });
    }, params);
};
//

/***/ }),

/***/ "./src/component/bread_crumb/BreadCrumb.js":
/*!*************************************************!*\
  !*** ./src/component/bread_crumb/BreadCrumb.js ***!
  \*************************************************/
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

var _IconsArrow = __webpack_require__(/*! ../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// import './BreadCrumb.scss';

//
BreadCrumb.propTypes = {
    link_arr: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        link_to: _propTypes2.default.string,
        name: _propTypes2.default.string
    }))
};

//

//
function BreadCrumb(_ref) {
    var link_arr = _ref.link_arr;

    //
    return _react2.default.createElement(
        'div',
        { className: 'BreadCrumb' },
        _react2.default.createElement(
            'div',
            { className: 'BreadCrumb_row display-flex' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'color-inherit', to: link_arr[0].link_to },
                link_arr[0].name
            ),
            link_arr.slice(1).map(function (item, ix) {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    { key: ix },
                    _react2.default.createElement(
                        'span',
                        { className: 'BreadCrumb_icon margin-x-10px text-third' },
                        _react2.default.createElement(_IconsArrow2.default, { x: 200, size_icon: '0.75rem' })
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { className: 'color-inherit', to: item.link_to },
                        item.name
                    )
                );
            })
        )
    );
}

exports.default = BreadCrumb;

/***/ }),

/***/ "./src/pages/phone_laptop/components/bars_rate/_main/PLBarsRate.js":
/*!*************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/bars_rate/_main/PLBarsRate.js ***!
  \*************************************************************************/
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

var _PLBarsRateItem = __webpack_require__(/*! ../item/PLBarsRateItem */ "./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.js");

var _PLBarsRateItem2 = _interopRequireDefault(_PLBarsRateItem);

var _PLBarsRateHead = __webpack_require__(/*! ../head/PLBarsRateHead */ "./src/pages/phone_laptop/components/bars_rate/head/PLBarsRateHead.js");

var _PLBarsRateHead2 = _interopRequireDefault(_PLBarsRateHead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLBarsRate.propTypes = _extends({
    rating_arr: _propTypes2.default.arrayOf(_propTypes2.default.number)
}, _PLBarsRateHead2.default.propTypes);

//
function PLBarsRate(_ref) {
    var product_id = _ref.product_id,
        rating_arr = _ref.rating_arr,
        rating_avg = _ref.rating_avg,
        rating_count = _ref.rating_count;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLBarsRate' },
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLBarsRateHead2.default, {
                product_id: product_id,
                rating_avg: rating_avg,
                rating_count: rating_count
            })
        ),
        _react2.default.createElement(
            'ul',
            { className: 'list-none font-12px' },
            rating_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: ix, className: 'margin-bottom-5px' },
                    _react2.default.createElement(_PLBarsRateItem2.default, {
                        product_id: product_id,
                        star_num: ix + 1,
                        percent: Math.round(item * 100 / rating_count)
                    })
                );
            })
        )
    );
}

exports.default = PLBarsRate;

/***/ }),

/***/ "./src/pages/phone_laptop/components/bars_rate/head/PLBarsRateHead.js":
/*!****************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/bars_rate/head/PLBarsRateHead.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StarsRate = __webpack_require__(/*! ../../../../../component/stars_rate/_main/StarsRate */ "./src/component/stars_rate/_main/StarsRate.js");

var _StarsRate2 = _interopRequireDefault(_StarsRate);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLBarsRateHead.propTypes = {
    rating_avg: _propTypes2.default.number,
    rating_count: _propTypes2.default.number
};

//
function PLBarsRateHead(_ref) {
    var product_id = _ref.product_id,
        rating_avg = _ref.rating_avg,
        rating_count = _ref.rating_count;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLBarsRateHead' },
        _react2.default.createElement(
            'div',
            { className: 'PLBarsRateHead_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'font-22px text-star font-700' },
                rating_avg
            ),
            _react2.default.createElement(
                'div',
                { className: 'margin-x-10px' },
                _react2.default.createElement(_StarsRate2.default, {
                    rate_avg: rating_avg,
                    size_icon: '18px',
                    color: 'var(--star)'
                })
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'color-inherit',
                    to: '/phone-laptop/rate?product_id=' + product_id
                },
                rating_count,
                ' \u0111\xE1nh gi\xE1'
            )
        )
    );
}

exports.default = PLBarsRateHead;

/***/ }),

/***/ "./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.js":
/*!****************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.js ***!
  \****************************************************************************/
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

var _IconsStar = __webpack_require__(/*! ../../../../../_icons_svg/icons_star/IconsStar */ "./src/_icons_svg/icons_star/IconsStar.js");

var _IconsStar2 = _interopRequireDefault(_IconsStar);

__webpack_require__(/*! ./PLBarsRateItem.scss */ "./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLBarsRateItem.propTypes = {};

//

//
function PLBarsRateItem(_ref) {
    var product_id = _ref.product_id,
        star_num = _ref.star_num,
        percent = _ref.percent;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLBarsRateItem' },
        _react2.default.createElement(
            'div',
            { className: 'PLBarsRateItem_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'PLBarsRateItem_star' },
                _react2.default.createElement(
                    'span',
                    { className: 'margin-right-3px' },
                    star_num
                ),
                _react2.default.createElement(_IconsStar2.default, { size_icon: '12px', color: 'currentColor' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLBarsRateItem_bar pos-rel flex-grow-1' },
                _react2.default.createElement('div', { className: 'pos-abs-100 bg-ccc' }),
                _react2.default.createElement('div', {
                    className: 'pos-abs left-0 top-0 h-100per bg-star',
                    style: { width: percent + '%' }
                })
            ),
            _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    to: '/phone-laptop/rate?s=' + star_num + '&product_id=' + product_id,
                    className: 'PLBarsRateItem_percent text-align-end'
                },
                percent,
                '%'
            )
        )
    );
}

exports.default = PLBarsRateItem;

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/_main/PLComments.js":
/*!************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/_main/PLComments.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//

//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _observerToDo = __webpack_require__(/*! ../../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _useMultiPages2 = __webpack_require__(/*! ../../../../../_hooks/useMultiPages */ "./src/_hooks/useMultiPages.js");

var _Pagination = __webpack_require__(/*! ../../../../../component/pagination/_main/Pagination */ "./src/component/pagination/_main/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PLCommentsInput = __webpack_require__(/*! ../input/_main/PLCommentsInput */ "./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.js");

var _PLCommentsInput2 = _interopRequireDefault(_PLCommentsInput);

var _PLCmtTotal = __webpack_require__(/*! ../total/PLCmtTotal */ "./src/pages/phone_laptop/components/comments/total/PLCmtTotal.js");

var _PLCmtTotal2 = _interopRequireDefault(_PLCmtTotal);

var _PLCmtSearch = __webpack_require__(/*! ../search/PLCmtSearch */ "./src/pages/phone_laptop/components/comments/search/PLCmtSearch.js");

var _PLCmtSearch2 = _interopRequireDefault(_PLCmtSearch);

var _PLCmtSort = __webpack_require__(/*! ../sort/_main/PLCmtSort */ "./src/pages/phone_laptop/components/comments/sort/_main/PLCmtSort.js");

var _PLCmtSort2 = _interopRequireDefault(_PLCmtSort);

var _PLCmtItem = __webpack_require__(/*! ../cmt/_main/PLCmtItem */ "./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.js");

var _PLCmtItem2 = _interopRequireDefault(_PLCmtItem);

var _PLReplies = __webpack_require__(/*! ../replies/_main/PLReplies */ "./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.js");

var _PLReplies2 = _interopRequireDefault(_PLReplies);

__webpack_require__(/*! ./PLComments.scss */ "./src/pages/phone_laptop/components/comments/_main/PLComments.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
var SORT_ARR = ['Độ chính xác', 'Mới nhất'];
var SORT_KEY_ARR = ['exact', '-created_time'];

//
PLComments.propTypes = {};

//
function PLComments(_ref) {
    var _handle_API_L = _ref.handle_API_L;

    //
    var ref_main_elm = (0, _react.useRef)(null);

    var ref_tech_checked = (0, _react.useRef)(false);
    var ref_search_value = (0, _react.useRef)('');
    var ref_sort_key = (0, _react.useRef)('');

    //

    var _useMultiPages = (0, _useMultiPages2.useMultiPages)({
        initial_page: 1,
        handle_API_L: function handle_API_L(new_page) {
            return _handle_API_L({
                page: new_page,
                tech_checked: ref_tech_checked.current,
                search: ref_search_value.current,
                sort_by: ref_sort_key.current
            });
        },

        other_state: {
            tech_checked: false,
            sort_ix: -1,
            files: [],
            img_preview_arr: [] || 0
        }
    }),
        state_obj = _useMultiPages.state_obj,
        setStateObj = _useMultiPages.setStateObj,
        getData_API = _useMultiPages.getData_API,
        handleChangePage = _useMultiPages.handleChangePage,
        refreshData_API = _useMultiPages.refreshData_API;

    var page_obj = state_obj.page_obj,
        page = state_obj.page,
        pages = state_obj.pages,
        count = state_obj.count,
        files = state_obj.files,
        img_preview_arr = state_obj.img_preview_arr,
        tech_checked = state_obj.tech_checked,
        sort_ix = state_obj.sort_ix,
        is_fetching = state_obj.is_fetching,
        has_fetched = state_obj.has_fetched;

    //

    (0, _react.useEffect)(function () {
        (0, _observerToDo2.default)({
            elm: ref_main_elm.current,
            callback: function callback() {
                getData_API(1);
            }
        });
    }, []);

    // ------

    //
    function handelLikeAndNotLike(_ref2) {
        var _ref2$is_like = _ref2.is_like,
            is_like = _ref2$is_like === undefined ? true : _ref2$is_like,
            cmt_ix = _ref2.cmt_ix,
            reply_ix = _ref2.reply_ix;

        setStateObj(function (state_obj) {
            var page = state_obj.page;

            var new_page_obj = _extends({}, state_obj.page_obj);

            if (reply_ix != null) {
                new_page_obj[page][cmt_ix].reply_arr[reply_ix][is_like ? 'user_liked' : 'user_not_liked'] = true;
            } else {
                new_page_obj[page][cmt_ix][is_like ? 'user_liked' : 'user_not_liked'] = true;
            }

            return _extends({}, state_obj, {
                page_obj: new_page_obj
            });
        });
    }

    // ------

    //
    function chooseImages(_ref3) {
        var new_files = _ref3.files,
            vid_pics = _ref3.vid_pics;

        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                files: [].concat(_toConsumableArray(state_obj.files), _toConsumableArray(new_files)),
                img_preview_arr: [].concat(_toConsumableArray(state_obj.img_preview_arr), _toConsumableArray(vid_pics))
            });
        });
    }

    //
    function deleteImg(ix) {
        setStateObj(function (state_obj) {
            var new_files = [].concat(_toConsumableArray(state_obj.files));
            var new_img_preview_arr = [].concat(_toConsumableArray(state_obj.img_preview_arr));

            new_files.splice(ix, 1);
            new_img_preview_arr.splice(ix, 1);

            return _extends({}, state_obj, {
                files: new_files,
                img_preview_arr: new_img_preview_arr
            });
        });
    }

    //
    function sendComment(content) {
        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                files: [],
                img_preview_arr: []
            });
        });
    }

    //
    function handleCheckedTech() {
        var new_tech_checked = !ref_tech_checked.current;
        ref_tech_checked.current = new_tech_checked;

        refreshData_API({
            new_page: 1,
            start_obj_state: {
                tech_checked: new_tech_checked
            }
        });
    }

    //
    function handleSearch(new_search_value) {
        if (new_search_value.trim() == ref_search_value.current.trim()) {
            return;
        }

        ref_search_value.current = new_search_value;

        refreshData_API({
            new_page: 1
        });
    }

    //
    function handleSort(new_sort_ix) {
        ref_sort_key.current = SORT_KEY_ARR[new_sort_ix];

        refreshData_API({
            new_page: 1,
            start_obj_state: {
                sort_ix: new_sort_ix
            }
        });
    }

    //
    function onChangePage(new_page) {
        ref_main_elm.current.scrollIntoView();
        handleChangePage(new_page);
    }

    // -----

    //
    function goToReply(_ref4) {
        var cmt_ix = _ref4.cmt_ix,
            reply_ix = _ref4.reply_ix;

        setStateObj(function (state_obj) {
            var page = state_obj.page;

            var new_page_obj = _extends({}, state_obj.page_obj);

            new_page_obj[page][cmt_ix].open_reply = true;

            return _extends({}, state_obj, {
                page_obj: new_page_obj
            });
        });

        setTimeout(function () {
            var textarea = ref_main_elm.current.getElementsByClassName('PLComments_cmt_item')[cmt_ix].getElementsByTagName('textarea')[0];

            var reply_user_name = reply_ix != null ? page_obj[page][cmt_ix].reply_arr[reply_ix].user_name : page_obj[page][cmt_ix].user_name;

            textarea.value = '@' + reply_user_name + ': ';
            textarea.focus();
        }, 0);
    }

    //
    function handleLike(_ref5) {
        var cmt_ix = _ref5.cmt_ix,
            reply_ix = _ref5.reply_ix;

        handelLikeAndNotLike({
            is_like: true,
            cmt_ix: cmt_ix,
            reply_ix: reply_ix
        });
    }

    //
    function handleNotLike(_ref6) {
        var cmt_ix = _ref6.cmt_ix,
            reply_ix = _ref6.reply_ix;

        handelLikeAndNotLike({
            is_like: false,
            cmt_ix: cmt_ix,
            reply_ix: reply_ix
        });
    }

    // ------

    //
    function chooseReplyImages(_ref7) {
        var cmt_ix = _ref7.cmt_ix,
            new_files = _ref7.files,
            vid_pics = _ref7.vid_pics;

        setStateObj(function (state_obj) {
            var _new_page_obj$page$cm, _new_page_obj$page$cm2;

            var page = state_obj.page;

            var new_page_obj = _extends({}, state_obj.page_obj);

            (_new_page_obj$page$cm = new_page_obj[page][cmt_ix].files).push.apply(_new_page_obj$page$cm, _toConsumableArray(new_files));
            (_new_page_obj$page$cm2 = new_page_obj[page][cmt_ix].img_preview_arr).push.apply(_new_page_obj$page$cm2, _toConsumableArray(vid_pics));

            return _extends({}, state_obj, {
                page_obj: new_page_obj
            });
        });
    }

    //
    function deleteReplyImg(_ref8) {
        var cmt_ix = _ref8.cmt_ix,
            del_ix = _ref8.del_ix;

        setStateObj(function (state_obj) {
            var page = state_obj.page;

            var new_page_obj = _extends({}, state_obj.page_obj);

            new_page_obj[page][cmt_ix].files.splice(del_ix, 1);
            new_page_obj[page][cmt_ix].img_preview_arr.splice(del_ix, 1);

            return _extends({}, state_obj, {
                page_obj: new_page_obj
            });
        });
    }

    //
    function sendReply(_ref9) {
        var cmt_ix = _ref9.cmt_ix,
            content = _ref9.content;

        setStateObj(function (state_obj) {
            var page = state_obj.page;

            var new_page_obj = _extends({}, state_obj.page_obj);

            new_page_obj[page][cmt_ix].files = [];
            new_page_obj[page][cmt_ix].img_preview_arr = [];

            return _extends({}, state_obj, {
                page_obj: new_page_obj
            });
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { ref: ref_main_elm, className: 'PLComments' },
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLCommentsInput2.default, {
                img_preview_arr: img_preview_arr,
                chooseImages: chooseImages,
                deleteImg: deleteImg,
                sendComment: sendComment
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(
                'div',
                { className: 'PLComments_total_search display-flex space-between margin-bottom-15px padding-y-10px' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_PLCmtTotal2.default, {
                        count: count,
                        tech_checked: tech_checked,
                        handleCheckedTech: handleCheckedTech
                    })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_PLCmtSearch2.default, { handleSearch: handleSearch })
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PLCmtSort2.default, {
                    sort_arr: SORT_ARR,
                    sort_ix: sort_ix,
                    handleSort: handleSort
                })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLComments_cmt margin-bottom-15px padding-top-15px border-top-blur' },
            _react2.default.createElement(
                'ul',
                { className: 'list-none' },
                page_obj[page].map(function (cmt_obj, cmt_ix) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: cmt_obj.id,
                            className: 'PLComments_cmt_item margin-bottom-15px'
                        },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_PLCmtItem2.default, {
                                ix_obj: {
                                    cmt_ix: cmt_ix,
                                    reply_ix: null
                                },
                                first_letter_user_name: cmt_obj.first_letter_user_name,
                                user_name: cmt_obj.user_name,
                                is_admin: cmt_obj.is_admin,
                                content: cmt_obj.content,
                                img: cmt_obj.img,
                                commented_time: cmt_obj.commented_time,
                                user_liked: cmt_obj.user_liked,
                                user_not_liked: cmt_obj.user_not_liked
                                //
                                , goToReply: goToReply,
                                handleLike: handleLike,
                                handleNotLike: handleNotLike
                            })
                        ),
                        cmt_obj.reply_arr.length ? _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_PLReplies2.default, {
                                cmt_ix: cmt_ix,
                                reply_arr: cmt_obj.reply_arr,
                                goToReply: goToReply,
                                handleLike: handleLike,
                                handleNotLike: handleNotLike
                            })
                        ) : null,
                        cmt_obj.open_reply ? _react2.default.createElement(
                            'div',
                            { className: 'margin-top-15px' },
                            _react2.default.createElement(_PLCommentsInput2.default, {
                                img_preview_arr: cmt_obj.img_preview_arr,
                                chooseImages: function chooseImages(data) {
                                    return chooseReplyImages(_extends({}, data, {
                                        cmt_ix: cmt_ix
                                    }));
                                },
                                deleteImg: function deleteImg(del_ix) {
                                    return deleteReplyImg({
                                        cmt_ix: cmt_ix,
                                        del_ix: del_ix
                                    });
                                },
                                sendComment: function sendComment(content) {
                                    return sendReply({
                                        content: content,
                                        cmt_ix: cmt_ix
                                    });
                                }
                            })
                        ) : null
                    );
                })
            )
        ),
        _react2.default.createElement('div', {
            className: 'h-100vh ' + (is_fetching ? '' : 'display-none')
        }),
        _react2.default.createElement(
            'div',
            {
                className: 'PLComments_pagination ' + (has_fetched && pages > 1 ? '' : 'display-none')
            },
            _react2.default.createElement(_Pagination2.default, {
                count: pages,
                num_side_center: 2,
                current: page,
                is_fetching: is_fetching,
                handleChangePage: onChangePage
            })
        )
    );
}

exports.default = PLComments;

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.js":
/*!***************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.js ***!
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

var _IconLike = __webpack_require__(/*! ../../../../../../_icons_svg/icons_like/icon_like/IconLike */ "./src/_icons_svg/icons_like/icon_like/IconLike.js");

var _IconLike2 = _interopRequireDefault(_IconLike);

var _symbol_tgdd = __webpack_require__(/*! ../../../../../../../image/symbol_tgdd.png */ "./image/symbol_tgdd.png");

var _symbol_tgdd2 = _interopRequireDefault(_symbol_tgdd);

__webpack_require__(/*! ./PLCmtItem.scss */ "./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLCmtItem.propTypes = {};

//

//

//
function PLCmtItem(_ref) {
    var ix_obj = _ref.ix_obj,
        first_letter_user_name = _ref.first_letter_user_name,
        user_name = _ref.user_name,
        is_admin = _ref.is_admin,
        content = _ref.content,
        img = _ref.img,
        commented_time = _ref.commented_time,
        user_liked = _ref.user_liked,
        user_not_liked = _ref.user_not_liked,
        goToReply = _ref.goToReply,
        handleLike = _ref.handleLike,
        handleNotLike = _ref.handleNotLike;

    //
    function onGoToReply() {
        goToReply(ix_obj);
    }

    //
    function onLike() {
        handleLike(ix_obj);
    }

    //
    function onNotLike() {
        handleNotLike(ix_obj);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLCmtItem' },
        _react2.default.createElement(
            'div',
            { className: 'PLCmtItem_name display-flex align-items-center' },
            is_admin ? _react2.default.createElement('img', { src: _symbol_tgdd2.default, alt: '', width: '23', height: '23' }) : _react2.default.createElement(
                'div',
                { className: 'PLCmtItem_name_first display-flex-center bg-ccc font-11px' },
                first_letter_user_name
            ),
            _react2.default.createElement(
                'div',
                { className: 'margin-left-10px font-16px' },
                _react2.default.createElement(
                    'strong',
                    null,
                    user_name
                )
            ),
            is_admin ? _react2.default.createElement(
                'div',
                { className: 'margin-left-10px padding-x-2px bg-gold font-11px' },
                'Qu\u1EA3n tr\u1ECB vi\xEAn'
            ) : null
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            content
        ),
        img ? _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            _react2.default.createElement('img', {
                className: 'brs-5px object-fit-cover',
                src: img,
                alt: '',
                width: '200',
                height: '200'
            })
        ) : null,
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center flex-wrap margin-top-10px text-blue font-13px' },
            _react2.default.createElement(
                'div',
                { className: 'cursor-pointer', onClick: onGoToReply },
                'Tr\u1EA3 l\u1EDDi'
            ),
            is_admin ? _react2.default.createElement(
                'div',
                { className: 'display-flex align-items-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'margin-x-5px' },
                    '-'
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'display-flex align-items-center cursor-pointer',
                        onClick: onLike
                    },
                    _react2.default.createElement(_IconLike2.default, {
                        size_icon: '14px',
                        fill: user_liked ? 'var(--blue)' : 'var(--ccc)',
                        stroke: 'none'
                    }),
                    _react2.default.createElement(
                        'span',
                        { className: 'margin-left-3px' },
                        'H\xE0i l\xF2ng'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-x-5px' },
                    '-'
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'display-flex align-items-center cursor-pointer',
                        onClick: onNotLike
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'inline-flex rotate-180' },
                        _react2.default.createElement(_IconLike2.default, {
                            size_icon: '14px',
                            fill: user_not_liked ? 'var(--blue)' : 'var(--ccc)',
                            stroke: 'none'
                        })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'margin-left-3px' },
                        'Kh\xF4ng h\xE0i l\xF2ng'
                    )
                )
            ) : null,
            _react2.default.createElement(
                'div',
                { className: 'margin-x-5px' },
                '-'
            ),
            _react2.default.createElement(
                'div',
                { className: 'text-third' },
                commented_time
            )
        )
    );
}

exports.default = PLCmtItem;

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.js ***!
  \***********************************************************************************/
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

var _IconsInput = __webpack_require__(/*! ../../../../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

var _InputFile = __webpack_require__(/*! ../../../../../../component/input/input_file/InputFile */ "./src/component/input/input_file/InputFile.js");

var _InputFile2 = _interopRequireDefault(_InputFile);

var _ImgVidPreview = __webpack_require__(/*! ../../../../../../component/input_img_vid_preview/img_vid_preview/ImgVidPreview */ "./src/component/input_img_vid_preview/img_vid_preview/ImgVidPreview.js");

var _ImgVidPreview2 = _interopRequireDefault(_ImgVidPreview);

__webpack_require__(/*! ./PLCommentsInput.scss */ "./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.scss");

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PLCommentsInput.propTypes = {};

//

//
function PLCommentsInput(_ref) {
    var img_preview_arr = _ref.img_preview_arr,
        chooseImages = _ref.chooseImages,
        deleteImg = _ref.deleteImg,
        sendComment = _ref.sendComment;

    //
    var ref_textarea = (0, _react.useRef)(null);

    //
    function onSendComment() {
        var content = ref_textarea.current.value;

        if (content.trim()) {
            sendComment(content);

            ref_textarea.current.value = '';
        }
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLCommentsInput brs-5px border-blur line-16px overflow-hidden' },
        _react2.default.createElement('textarea', {
            ref: ref_textarea,
            className: 'PLCommentsInput_textarea w-100per padding-10px border-none outline-none scroll-thin',
            rows: 5,
            placeholder: 'Vi\u1EBFt b\xECnh lu\u1EADn...'
        }),
        _react2.default.createElement(
            'div',
            { className: 'flex-between-center padding-x-10px padding-y-5px border-top-blur' },
            _react2.default.createElement(
                'div',
                { className: 'display-flex align-items-center' },
                _react2.default.createElement(
                    _InputFile2.default,
                    {
                        name: 'images',
                        vid_pic_key: 'url',
                        file_multiple: true,
                        accept: 'image/**',
                        face_circle: false,
                        should_reset: true,
                        handleChange: chooseImages
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'inline-flex align-items-center text-blue cursor-pointer' },
                        _react2.default.createElement(_IconsInput2.default, { size_icon: '16px' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'margin-left-5px' },
                            'G\u1EEDi \u1EA3nh'
                        )
                    )
                ),
                _Constant.IS_MOBILE ? null : _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'margin-x-10px text-third' },
                        '|'
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/phone-laptop/comment-guide' },
                        'Quy \u0111\u1ECBnh \u0111\u0103ng b\xECnh lu\u1EADn'
                    )
                )
            ),
            _react2.default.createElement(
                'button',
                {
                    className: 'btn btn-hv btn-active padding-y-6px padding-x-20px brs-3px bg-blue text-white text-upper cursor-pointer',
                    type: 'button',
                    onClick: onSendComment
                },
                'G\u1EEDi'
            )
        ),
        img_preview_arr.length ? _react2.default.createElement(
            'div',
            { className: 'padding-10px' },
            _react2.default.createElement(_ImgVidPreview2.default, {
                urls: img_preview_arr,
                show_all: true,
                deleteAnItem: deleteImg
            })
        ) : null
    );
}

exports.default = PLCommentsInput;

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.js ***!
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

var _PLCmtItem = __webpack_require__(/*! ../../cmt/_main/PLCmtItem */ "./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.js");

var _PLCmtItem2 = _interopRequireDefault(_PLCmtItem);

__webpack_require__(/*! ./PLReplies.scss */ "./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLReplies.propTypes = {};

//

// 
function PLReplies(_ref) {
    var cmt_ix = _ref.cmt_ix,
        reply_arr = _ref.reply_arr,
        goToReply = _ref.goToReply,
        handleLike = _ref.handleLike,
        handleNotLike = _ref.handleNotLike;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLReplies padding-top-10px' },
        _react2.default.createElement(
            'div',
            { className: 'PLReplies_contain pos-rel padding-x-15px padding-top-15px bg-fb' },
            _react2.default.createElement(
                'ul',
                { className: 'list-none' },
                reply_arr.map(function (reply_obj, reply_ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: reply_obj.id, className: 'padding-bottom-15px' },
                        _react2.default.createElement(_PLCmtItem2.default, {
                            ix_obj: {
                                cmt_ix: cmt_ix,
                                reply_ix: reply_ix
                            },
                            first_letter_user_name: reply_obj.first_letter_user_name,
                            user_name: reply_obj.user_name,
                            is_admin: reply_obj.is_admin,
                            content: reply_obj.content,
                            img: reply_obj.img,
                            commented_time: reply_obj.commented_time,
                            user_liked: reply_obj.user_liked,
                            user_not_liked: reply_obj.user_not_liked
                            //
                            , goToReply: goToReply,
                            handleLike: handleLike,
                            handleNotLike: handleNotLike
                        })
                    );
                })
            )
        )
    );
}

exports.default = PLReplies;

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/search/PLCmtSearch.js":
/*!**************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/search/PLCmtSearch.js ***!
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

var _IconsInput = __webpack_require__(/*! ../../../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

__webpack_require__(/*! ./PLCmtSearch.scss */ "./src/pages/phone_laptop/components/comments/search/PLCmtSearch.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLCmtSearch.propTypes = {};

//

// 
function PLCmtSearch(_ref) {
    var handleSearch = _ref.handleSearch;

    //
    var ref_input = (0, _react.useRef)(null);

    // -----

    //
    function onSearch() {
        handleSearch(ref_input.current.value);
    }

    //
    function handleKeyDown(e) {
        if (e.keyCode == 13) {
            onSearch();
        }
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLCmtSearch brs-3px border-blur overflow-hidden' },
        _react2.default.createElement(
            'div',
            { className: 'PLCmtSearch_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                {
                    className: 'padding-x-5px cursor-pointer',
                    onClick: onSearch
                },
                _react2.default.createElement(_IconsInput2.default, { y: 200, size_icon: '14px' })
            ),
            _react2.default.createElement('input', {
                ref: ref_input,
                className: 'flex-grow-1 padding-y-8px padding-x-5px border-none outline-none',
                type: 'text',
                placeholder: 'T\xECm theo n\u1ED9i dung, ng\u01B0\u1EDDi g\u1EEDi...',
                onKeyDown: handleKeyDown
            })
        )
    );
}

exports.default = PLCmtSearch;

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/sort/_main/PLCmtSort.js":
/*!****************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/sort/_main/PLCmtSort.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RadioCustom = __webpack_require__(/*! ../../../../../../component/input/radio_custom/RadioCustom */ "./src/component/input/radio_custom/RadioCustom.js");

var _RadioCustom2 = _interopRequireDefault(_RadioCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLCmtSort.propTypes = {};

//

//
function PLCmtSort(_ref) {
    var sort_arr = _ref.sort_arr,
        sort_ix = _ref.sort_ix,
        handleSort = _ref.handleSort;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLCmtSort' },
        _react2.default.createElement(
            'div',
            { className: 'PLCmtSort_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                null,
                'S\u1EAFp x\u1EBFp theo'
            ),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1 display-flex align-items-center flex-wrap' },
                sort_arr.map(function (title, ix) {
                    return _react2.default.createElement(
                        'div',
                        {
                            key: ix,
                            className: 'PLCmtSort_item inline-flex align-items-center margin-left-15px cursor-pointer',
                            onClick: function onClick() {
                                sort_ix != ix && handleSort(ix);
                            }
                        },
                        _react2.default.createElement(_RadioCustom2.default, { is_active: sort_ix == ix }),
                        _react2.default.createElement(
                            'span',
                            { className: 'margin-left-5px' },
                            title
                        )
                    );
                })
            )
        )
    );
}

exports.default = PLCmtSort;

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/total/PLCmtTotal.js":
/*!************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/total/PLCmtTotal.js ***!
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

var _CheckBoxCustom = __webpack_require__(/*! ../../../../../component/input/checkbox_custom/CheckBoxCustom */ "./src/component/input/checkbox_custom/CheckBoxCustom.js");

var _CheckBoxCustom2 = _interopRequireDefault(_CheckBoxCustom);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLCmtTotal.propTypes = {};

//

//
function PLCmtTotal(_ref) {
    var count = _ref.count,
        tech_checked = _ref.tech_checked,
        handleCheckedTech = _ref.handleCheckedTech;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLCmtTotal text-cap' },
        _react2.default.createElement(
            'div',
            { className: 'PLCmtTotal_row display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'PLCmtTotal_count margin-right-20px font-700 font-16px' },
                _react2.default.createElement(
                    'div',
                    null,
                    count,
                    ' b\xECnh lu\u1EADn'
                ),
                _Constant.IS_MOBILE ? _react2.default.createElement(
                    'div',
                    { className: 'line-12px' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        {
                            className: 'font-12px',
                            to: '/phone-laptop/comment-guide'
                        },
                        'Quy \u0111\u1ECBnh \u0111\u0103ng b\xECnh lu\u1EADn'
                    )
                ) : null
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLCmtTotal_tech' },
                _react2.default.createElement(_CheckBoxCustom2.default, {
                    title: 'Xem B\xECnh Lu\u1EADn K\u1EF9 Thu\u1EADt',
                    checked: tech_checked,
                    handleChangeChecked: handleCheckedTech
                })
            )
        )
    );
}

exports.default = PLCmtTotal;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/_main/PLRates.js":
/*!******************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/_main/PLRates.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLRatesItem = __webpack_require__(/*! ../item/_main/PLRatesItem */ "./src/pages/phone_laptop/components/rates/item/_main/PLRatesItem.js");

var _PLRatesItem2 = _interopRequireDefault(_PLRatesItem);

__webpack_require__(/*! ./PLRates.scss */ "./src/pages/phone_laptop/components/rates/_main/PLRates.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLRates.propTypes = {};

//

//
function PLRates(_ref) {
    var rate_arr = _ref.rate_arr,
        handleSendDiscuss = _ref.handleSendDiscuss;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRates' },
        _react2.default.createElement(
            'ul',
            { className: 'list-none' },
            rate_arr.map(function (rate_obj, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: rate_obj.id, className: 'PLRates_item' },
                    _react2.default.createElement(_PLRatesItem2.default, {
                        rate_obj: rate_obj,
                        handleSendDiscuss: handleSendDiscuss
                    })
                );
            })
        )
    );
}

exports.default = PLRates;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/_main/PLRatesItem.js":
/*!***************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/_main/PLRatesItem.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLRatesItemHead = __webpack_require__(/*! ../head/PLRatesItemHead */ "./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.js");

var _PLRatesItemHead2 = _interopRequireDefault(_PLRatesItemHead);

var _PLRatesItemBody = __webpack_require__(/*! ../body/PLRatesItemBody */ "./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.js");

var _PLRatesItemBody2 = _interopRequireDefault(_PLRatesItemBody);

var _PLRatesItemFoot = __webpack_require__(/*! ../foot/_main/PLRatesItemFoot */ "./src/pages/phone_laptop/components/rates/item/foot/_main/PLRatesItemFoot.js");

var _PLRatesItemFoot2 = _interopRequireDefault(_PLRatesItemFoot);

var _PLRIDiscuss = __webpack_require__(/*! ../discuss/_main/PLRIDiscuss */ "./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.js");

var _PLRIDiscuss2 = _interopRequireDefault(_PLRIDiscuss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLRatesItem.propTypes = {};

//
function PLRatesItem(_ref) {
    var rate_obj = _ref.rate_obj,
        handleSendDiscuss = _ref.handleSendDiscuss;

    //
    var user_name = rate_obj.user_name,
        buying_where = rate_obj.buying_where,
        num_rate = rate_obj.num_rate,
        will_share = rate_obj.will_share,
        content = rate_obj.content,
        img = rate_obj.img,
        service_replied_time = rate_obj.service_replied_time,
        count_like = rate_obj.count_like,
        user_liked = rate_obj.user_liked,
        buying_time = rate_obj.buying_time,
        rating_time = rate_obj.rating_time,
        used_time_str = rate_obj.used_time_str,
        discuss_arr = rate_obj.discuss_arr,
        count_discuss = rate_obj.count_discuss;

    //

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        show_discuss = _useState2[0],
        setShowDiscuss = _useState2[1];

    var _useState3 = (0, _react.useState)(user_liked),
        _useState4 = _slicedToArray(_useState3, 2),
        new_user_liked = _useState4[0],
        setNewUserLiked = _useState4[1];

    // ----

    //


    function handleLike() {
        !new_user_liked && setNewUserLiked(true);
    }

    //
    function showDiscuss() {
        !show_discuss && setShowDiscuss(true);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRatesItem padding-y-10px' },
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-10px' },
            _react2.default.createElement(_PLRatesItemHead2.default, {
                user_name: user_name,
                buying_where: buying_where,
                num_rate: num_rate,
                will_share: will_share
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-10px' },
            _react2.default.createElement(_PLRatesItemBody2.default, {
                content: content,
                img: img,
                service_replied_time: service_replied_time
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PLRatesItemFoot2.default, {
                count_like: count_like,
                count_discuss: count_discuss,
                buying_time: buying_time,
                rating_time: rating_time,
                used_time_str: used_time_str
                //
                , handleLike: handleLike,
                showDiscuss: showDiscuss
            })
        ),
        show_discuss ? _react2.default.createElement(
            'div',
            { className: 'margin-top-15px' },
            _react2.default.createElement(_PLRIDiscuss2.default, {
                discuss_arr: discuss_arr,
                handleSendDiscuss: handleSendDiscuss
            })
        ) : null
    );
}

exports.default = PLRatesItem;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.js":
/*!******************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.js ***!
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

var _FormatDate = __webpack_require__(/*! ../../../../../../_some_function/FormatDate */ "./src/_some_function/FormatDate.js");

__webpack_require__(/*! ./PLRatesItemBody.scss */ "./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLRatesItemBody.propTypes = {};

//

// 
function PLRatesItemBody(_ref) {
    var content = _ref.content,
        img = _ref.img,
        service_replied_time = _ref.service_replied_time;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRatesItemBody' },
        _react2.default.createElement(
            'div',
            null,
            content
        ),
        img ? _react2.default.createElement(
            'div',
            { className: 'margin-top-10px' },
            _react2.default.createElement('img', {
                className: 'brs-5px object-fit-cover',
                src: img,
                alt: '',
                width: '125',
                height: '125'
            })
        ) : null,
        service_replied_time ? _react2.default.createElement(
            'div',
            { className: 'PLRatesItemBody_service pos-rel margin-top-10px padding-10px bg-fb-active' },
            'Ch\u0103m s\xF3c kh\xE1ch h\xE0ng \u0111\xE3 li\xEAn h\u1EC7 h\u1ED7 tr\u1EE3 ng\xE0y',
            ' ',
            (0, _FormatDate.formatLocalDateString)(service_replied_time)
        ) : null
    );
}

exports.default = PLRatesItemBody;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.js ***!
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

var _PLRIDiscussItem = __webpack_require__(/*! ../item/PLRIDiscussItem */ "./src/pages/phone_laptop/components/rates/item/discuss/item/PLRIDiscussItem.js");

var _PLRIDiscussItem2 = _interopRequireDefault(_PLRIDiscussItem);

var _PLRIDiscussInput = __webpack_require__(/*! ../input/PLRIDiscussInput */ "./src/pages/phone_laptop/components/rates/item/discuss/input/PLRIDiscussInput.js");

var _PLRIDiscussInput2 = _interopRequireDefault(_PLRIDiscussInput);

__webpack_require__(/*! ./PLRIDiscuss.scss */ "./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLRIDiscuss.propTypes = {};

//

//

//
function PLRIDiscuss(_ref) {
    var discuss_arr = _ref.discuss_arr,
        handleSendDiscuss = _ref.handleSendDiscuss;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRIDiscuss' },
        _react2.default.createElement(
            'div',
            { className: 'PLRIDiscuss_input margin-bottom-10px' },
            _react2.default.createElement(_PLRIDiscussInput2.default, { handleSendDiscuss: handleSendDiscuss })
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLRIDiscuss_contain margin-left-20px padding-top-15px padding-left-15px' },
            _react2.default.createElement(
                'ul',
                { className: 'list-none' },
                discuss_arr.map(function (discuss_obj, ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: discuss_obj.id, className: 'margin-bottom-15px' },
                        _react2.default.createElement(_PLRIDiscussItem2.default, { discuss_obj: discuss_obj })
                    );
                })
            )
        )
    );
}

exports.default = PLRIDiscuss;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/discuss/input/PLRIDiscussInput.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/discuss/input/PLRIDiscussInput.js ***!
  \****************************************************************************************/
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
PLRIDiscussInput.propTypes = {};

//
function PLRIDiscussInput(_ref) {
    var handleSendDiscuss = _ref.handleSendDiscuss;

    //
    var ref_input = (0, _react.useRef)(null);

    //
    function onSend() {
        var content = ref_input.current.value;
        content.trim() && handleSendDiscuss(content);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRIDiscussInput' },
        _react2.default.createElement(
            'div',
            { className: 'PLRIDiscussInput_row display-flex align-items-center' },
            _react2.default.createElement('input', {
                ref: ref_input,
                className: 'flex-grow-1 margin-right-10px padding-5px brs-3px border-blur outline-none',
                type: 'text',
                placeholder: 'Nh\u1EADp th\u1EA3o lu\u1EADn c\u1EE7a b\u1EA1n'
            }),
            _react2.default.createElement(
                'button',
                {
                    className: 'btn-active padding-5px border-blue brs-3px text-blue text-upper cursor-pointer',
                    type: 'button',
                    onClick: onSend
                },
                'G\u1EEDi'
            )
        )
    );
}

exports.default = PLRIDiscussInput;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/discuss/item/PLRIDiscussItem.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/discuss/item/PLRIDiscussItem.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _PLUseful = __webpack_require__(/*! ../../../../useful/PLUseful */ "./src/pages/phone_laptop/components/useful/PLUseful.js");

var _PLUseful2 = _interopRequireDefault(_PLUseful);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLRIDiscussItem.propTypes = {};

//

//
function PLRIDiscussItem(_ref) {
    var discuss_obj = _ref.discuss_obj;

    //
    var user_name = discuss_obj.user_name,
        is_admin = discuss_obj.is_admin,
        content = discuss_obj.content,
        count_like = discuss_obj.count_like,
        user_liked = discuss_obj.user_liked;

    //

    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleLike() {
        if (!discuss_obj.user_liked) {
            discuss_obj.user_liked = true;
            forceUpdate();
        }
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRIDiscussItem' },
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-10px' },
            _react2.default.createElement(
                'span',
                { className: 'font-700' },
                user_name
            ),
            is_admin ? _react2.default.createElement(
                'div',
                { className: 'inline-block margin-left-10px padding-y-2px padding-x-4px bg-gold font-11px' },
                'QTV'
            ) : null
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-10px' },
            content
        ),
        _react2.default.createElement(
            'div',
            { className: 'text-blue' },
            _react2.default.createElement(_PLUseful2.default, {
                user_liked: user_liked,
                count_like: count_like,
                handleLike: handleLike
            })
        )
    );
}

exports.default = PLRIDiscussItem;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/foot/_main/PLRatesItemFoot.js":
/*!************************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/foot/_main/PLRatesItemFoot.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLUsedTime = __webpack_require__(/*! ../../../../used_time/PLUsedTime */ "./src/pages/phone_laptop/components/used_time/PLUsedTime.js");

var _PLUsedTime2 = _interopRequireDefault(_PLUsedTime);

var _PLRItemFootLeft = __webpack_require__(/*! ../left/PLRItemFootLeft */ "./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.js");

var _PLRItemFootLeft2 = _interopRequireDefault(_PLRItemFootLeft);

var _Constant = __webpack_require__(/*! ../../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLRatesItemFoot.propTypes = {};

//

//
function PLRatesItemFoot(_ref) {
    var count_like = _ref.count_like,
        count_discuss = _ref.count_discuss,
        buying_time = _ref.buying_time,
        rating_time = _ref.rating_time,
        used_time_str = _ref.used_time_str,
        handleLike = _ref.handleLike,
        showDiscuss = _ref.showDiscuss;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRatesItemFoot' },
        _react2.default.createElement(
            'div',
            { className: 'PLRatesItemFoot_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'PLRatesItemFoot_left' },
                _react2.default.createElement(_PLRItemFootLeft2.default, {
                    count_like: count_like,
                    count_discuss: count_discuss,
                    handleLike: handleLike,
                    showDiscuss: showDiscuss
                })
            ),
            _Constant.IS_MOBILE ? null : _react2.default.createElement(
                'div',
                { className: 'margin-x-20px text-third' },
                '|'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PLUsedTime2.default, {
                    buying_time: buying_time,
                    rating_time: rating_time,
                    used_time_str: used_time_str
                })
            )
        )
    );
}

exports.default = PLRatesItemFoot;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.js":
/*!***********************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.js ***!
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

var _IconsPost = __webpack_require__(/*! ../../../../../../../_icons_svg/icons_post/IconsPost */ "./src/_icons_svg/icons_post/IconsPost.js");

var _IconsPost2 = _interopRequireDefault(_IconsPost);

var _PLUseful = __webpack_require__(/*! ../../../../useful/PLUseful */ "./src/pages/phone_laptop/components/useful/PLUseful.js");

var _PLUseful2 = _interopRequireDefault(_PLUseful);

__webpack_require__(/*! ./PLRItemFootLeft.scss */ "./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLRItemFootLeft.propTypes = {};

//

// 

//
function PLRItemFootLeft(_ref) {
    var count_like = _ref.count_like,
        count_discuss = _ref.count_discuss,
        handleLike = _ref.handleLike,
        showDiscuss = _ref.showDiscuss;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRItemFootLeft' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center text-blue' },
            _react2.default.createElement(_PLUseful2.default, { count_like: count_like, handleLike: handleLike }),
            _react2.default.createElement(
                'div',
                {
                    className: 'margin-left-20px cursor-pointer',
                    onClick: showDiscuss
                },
                _react2.default.createElement(_IconsPost2.default, { x: 200, size_icon: '15px' }),
                _react2.default.createElement(
                    'span',
                    { className: 'margin-left-5px' },
                    count_discuss || '',
                    ' th\u1EA3o lu\u1EADn'
                )
            )
        )
    );
}

exports.default = PLRItemFootLeft;

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.js":
/*!******************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.js ***!
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

var _IconSent = __webpack_require__(/*! ../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent */ "./src/_icons_svg/icons_status_message/icon_sent/IconSent.js");

var _IconSent2 = _interopRequireDefault(_IconSent);

var _IconHeart = __webpack_require__(/*! ../../../../../../_icons_svg/icons_like/icon_heart/IconHeart */ "./src/_icons_svg/icons_like/icon_heart/IconHeart.js");

var _IconHeart2 = _interopRequireDefault(_IconHeart);

var _StarsRate = __webpack_require__(/*! ../../../../../../component/stars_rate/_main/StarsRate */ "./src/component/stars_rate/_main/StarsRate.js");

var _StarsRate2 = _interopRequireDefault(_StarsRate);

__webpack_require__(/*! ./PLRatesItemHead.scss */ "./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PLRatesItemHead.propTypes = {};

//

//
function PLRatesItemHead(_ref) {
    var user_name = _ref.user_name,
        buying_where = _ref.buying_where,
        num_rate = _ref.num_rate,
        will_share = _ref.will_share;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRatesItemHead' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'margin-right-10px font-700' },
                user_name
            ),
            _react2.default.createElement(
                'div',
                { className: 'display-flex align-items-center text-green' },
                _react2.default.createElement(
                    'div',
                    { className: 'PLRatesItemHead_icon_tick display-flex-center brs-50' },
                    _react2.default.createElement(_IconSent2.default, { stroke: 'white' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-left-5px' },
                    buying_where
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLRatesItemHead_rate display-flex align-items-center margin-top-5px' },
            _react2.default.createElement(_StarsRate2.default, {
                rate_avg: num_rate,
                size_icon: '14px',
                color: 'var(--star)'
            }),
            will_share ? _react2.default.createElement(
                'div',
                { className: 'inline-flex align-items-center margin-left-15px font-13px' },
                _react2.default.createElement(_IconHeart2.default, { size_icon: '15px' }),
                _react2.default.createElement(
                    'span',
                    { className: 'margin-left-5px' },
                    'S\u1EBD gi\u1EDBi thi\u1EC7u cho b\u1EA1n b\xE8, ng\u01B0\u1EDDi th\xE2n'
                )
            ) : null
        )
    );
}

exports.default = PLRatesItemHead;

/***/ }),

/***/ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.js":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.js ***!
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

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _useScrollToX2 = __webpack_require__(/*! ../../../../../_hooks/useScrollToX */ "./src/_hooks/useScrollToX.js");

var _NextPrevDiv = __webpack_require__(/*! ../../../../../component/some_div/next_prev_div/NextPrevDiv */ "./src/component/some_div/next_prev_div/NextPrevDiv.js");

var _NextPrevDiv2 = _interopRequireDefault(_NextPrevDiv);

var _PLProduct = __webpack_require__(/*! ../../../../../component/pl_product/_main/PLProduct */ "./src/component/pl_product/_main/PLProduct.js");

var _PLProduct2 = _interopRequireDefault(_PLProduct);

__webpack_require__(/*! ./PLRowProducts.scss */ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLRowProducts.propTypes = {};

//

//

//

//
function PLRowProducts(_ref) {
    var product_arr = _ref.product_arr,
        use_compare = _ref.use_compare,
        use_type = _ref.use_type;

    //
    var ref_scroll_elm = (0, _react.useRef)(null);

    //

    var _useScrollToX = (0, _useScrollToX2.useScrollToX)({
        ref_scroll_elm: ref_scroll_elm,
        getItemElm: function getItemElm() {
            return ref_scroll_elm.current.getElementsByClassName('PLRowProducts_item')[0];
        }
    }),
        is_has_next = _useScrollToX.is_has_next,
        is_has_prev = _useScrollToX.is_has_prev,
        handleNext = _useScrollToX.handleNext,
        handlePrev = _useScrollToX.handlePrev,
        hasNextPrev = _useScrollToX.hasNextPrev;

    //


    (0, _react.useEffect)(function () {
        hasNextPrev();
    }, [product_arr.length]);

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLRowProducts pos-rel' },
        _react2.default.createElement(
            'div',
            {
                ref: ref_scroll_elm,
                className: 'PLRowProducts_contain overflow-x-auto scroll-height-0'
            },
            _react2.default.createElement(
                'div',
                { className: 'PLRowProducts_row display-flex' },
                product_arr.map(function (product_obj, index) {
                    return _react2.default.createElement(
                        'div',
                        {
                            key: product_obj.id,
                            className: 'PLRowProducts_item flex-shrink-0 border-blur'
                        },
                        _react2.default.createElement(_PLProduct2.default, {
                            product_obj: product_obj,
                            use_compare: use_compare,
                            use_type: use_type
                        })
                    );
                })
            )
        ),
        _Constant.IS_MOBILE ? null : _react2.default.createElement(
            'div',
            { className: 'text-white' },
            _react2.default.createElement(_NextPrevDiv2.default, {
                is_btn_circle: false,
                is_has_next: is_has_next,
                is_has_prev: is_has_prev
                // size_icon={size_icon}
                , handleNext: handleNext,
                handlePrev: handlePrev
            })
        )
    );
}

exports.default = PLRowProducts;

/***/ }),

/***/ "./src/pages/phone_laptop/components/used_time/PLUsedTime.js":
/*!*******************************************************************!*\
  !*** ./src/pages/phone_laptop/components/used_time/PLUsedTime.js ***!
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

var _FormatDate = __webpack_require__(/*! ../../../../_some_function/FormatDate */ "./src/_some_function/FormatDate.js");

__webpack_require__(/*! ./PLUsedTime.scss */ "./src/pages/phone_laptop/components/used_time/PLUsedTime.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
PLUsedTime.propTypes = {};

//

// 
function PLUsedTime(_ref) {
    var buying_time = _ref.buying_time,
        rating_time = _ref.rating_time,
        used_time_str = _ref.used_time_str;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLUsedTime pos-rel text-third' },
        _react2.default.createElement(
            'div',
            { className: 'PLUsedTime_title cursor-pointer' },
            '\u0110\xE3 d\xF9ng kho\u1EA3ng ',
            used_time_str
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLUsedTime_contain display-none pos-abs bottom-100per font-12px' },
            _react2.default.createElement(
                'div',
                { className: 'padding-y-20px padding-x-15px bg-ccc brs-4px' },
                _react2.default.createElement(
                    'div',
                    { className: 'flex-between-center margin-bottom-10px' },
                    [{
                        title: 'Mua ngày',
                        time: buying_time
                    }, {
                        title: 'Viết đánh giá',
                        time: rating_time
                    }].map(function (item, ix) {
                        return _react2.default.createElement(
                            'div',
                            { key: ix },
                            _react2.default.createElement(
                                'div',
                                null,
                                item.title
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                (0, _FormatDate.formatLocalDateString)(item.time)
                            )
                        );
                    })
                ),
                _react2.default.createElement('div', null),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-10px text-align-center text-555' },
                    _react2.default.createElement(
                        'span',
                        null,
                        ' \u0110\xE3 d\xF9ng'
                    ),
                    ' ',
                    _react2.default.createElement(
                        'span',
                        { className: 'font-500' },
                        'kho\u1EA3ng ',
                        used_time_str
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'ul',
                        { className: 'padding-left-20px margin-0' },
                        [{
                            info: '\u1EDE th\u1EDDi \u0111i\u1EC3m vi\u1EBFt \u0111\xE1nh gi\xE1, kh\xE1ch \u0111\xE3 mua s\u1EA3n ph\u1EA9m kho\u1EA3ng 1 tu\u1EA7n.'
                        }, {
                            info: 'Th\u1EDDi gian s\u1EED d\u1EE5ng th\u1EF1c t\u1EBF c\xF3 th\u1EC3 b\u1EB1ng ho\u1EB7c \xEDt h\u01A1n kho\u1EA3ng th\u1EDDi gian n\xE0y.'
                        }].map(function (item, ix) {
                            return _react2.default.createElement(
                                'li',
                                { key: ix },
                                item.info
                            );
                        })
                    )
                )
            )
        )
    );
}

exports.default = PLUsedTime;

/***/ }),

/***/ "./src/pages/phone_laptop/components/useful/PLUseful.js":
/*!**************************************************************!*\
  !*** ./src/pages/phone_laptop/components/useful/PLUseful.js ***!
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

var _IconLike = __webpack_require__(/*! ../../../../_icons_svg/icons_like/icon_like/IconLike */ "./src/_icons_svg/icons_like/icon_like/IconLike.js");

var _IconLike2 = _interopRequireDefault(_IconLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLUseful.propTypes = {};

//

//
function PLUseful(_ref) {
    var user_liked = _ref.user_liked,
        count_like = _ref.count_like,
        handleLike = _ref.handleLike;

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'display-flex align-items-center cursor-pointer',
            onClick: handleLike
        },
        _react2.default.createElement(_IconLike2.default, {
            size_icon: '15px',
            stroke: 'currentColor',
            fill: user_liked ? 'currentColor' : 'none'
        }),
        _react2.default.createElement(
            'span',
            { className: 'margin-left-5px' },
            'H\u1EEFu \xEDch',
            count_like ? ' (' + count_like + ')' : ''
        )
    );
}

exports.default = PLUseful;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/area/PLDetailArea.js":
/*!******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/area/PLDetailArea.js ***!
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

var _IconCaret = __webpack_require__(/*! ../../../../../../_icons_svg/_icon_caret/IconCaret */ "./src/_icons_svg/_icon_caret/IconCaret.js");

var _IconCaret2 = _interopRequireDefault(_IconCaret);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailArea.propTypes = {};

//

//
function PLDetailArea(_ref) {
    var openDetailAddress = _ref.openDetailAddress;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailArea' },
        _react2.default.createElement(
            'span',
            null,
            'Gi\xE1 t\u1EA1i:'
        ),
        _react2.default.createElement(
            'button',
            {
                className: 'display-flex-ceenter btn bg-transparent text-blue cursor-pointer',
                type: 'button',
                onClick: openDetailAddress
            },
            _react2.default.createElement(
                'span',
                { className: 'margin-x-5px' },
                localStorage.pl_province || 'Hà Nội'
            ),
            _react2.default.createElement(_IconCaret2.default, { size_icon: '14px', fill: 'currentColor' })
        )
    );
}

exports.default = PLDetailArea;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/btn_buy/_main/PLDetailBtnBuy.js":
/*!*****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/btn_buy/_main/PLDetailBtnBuy.js ***!
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

var _FormatNum = __webpack_require__(/*! ../../../../../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailBtnBuy.propTypes = {};

//

// 
function PLDetailBtnBuy(_ref) {
    var is_price_2 = _ref.is_price_2,
        new_price_2 = _ref.new_price_2,
        handleBuyNow = _ref.handleBuyNow;

    //
    return _react2.default.createElement(
        'button',
        {
            className: 'btn btn-hv btn-active w-100per brs-4px text-white font-15px cursor-pointer ' + (is_price_2 ? 'padding-y-5px bg-fashion-mall' : 'padding-y-15px bg-fashion-border'),
            type: 'button',
            onClick: handleBuyNow
        },
        _react2.default.createElement(
            'div',
            { className: 'text-upper' },
            'Mua ngay',
            is_price_2 ? ' gi\xE1 r\u1EBB ' + (0, _FormatNum.formatNum)(new_price_2) + '\u20AB' : ''
        ),
        is_price_2 ? _react2.default.createElement(
            'div',
            { className: 'font-12px' },
            'Ch\u1EC9 \xE1p d\u1EE5ng giao h\xE0ng t\u1EADn n\u01A1i'
        ) : null
    );
}

exports.default = PLDetailBtnBuy;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/call_order/PLDetailCallOrder.js":
/*!*****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/call_order/PLDetailCallOrder.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailCallOrder.propTypes = {};

//
function PLDetailCallOrder(_ref) {
    var callToOrder = _ref.callToOrder;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailCallOrder text-align-center' },
        _react2.default.createElement(
            'span',
            null,
            'G\u1ECDi \u0111\u1EB7t mua'
        ),
        _react2.default.createElement(
            'span',
            {
                className: 'margin-left-5px text-blue cursor-pointer',
                onClick: callToOrder
            },
            '1800.1060'
        ),
        _react2.default.createElement(
            'span',
            { className: 'margin-left-5px' },
            '(7:30 - 22:00)'
        )
    );
}

exports.default = PLDetailCallOrder;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/carousel/_main/PLDetailCarousel.js":
/*!********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/carousel/_main/PLDetailCarousel.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//

//


//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useMultiDataKey2 = __webpack_require__(/*! ../../../../../../../_hooks/useMultiDataKey */ "./src/_hooks/useMultiDataKey.js");

var _Carousel = __webpack_require__(/*! ../../../../../../../component/carousel/_main/Carousel */ "./src/component/carousel/_main/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _PLDCarouselChoices = __webpack_require__(/*! ../choices/_main/PLDCarouselChoices */ "./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.js");

var _PLDCarouselChoices2 = _interopRequireDefault(_PLDCarouselChoices);

var _getDefaultArr = __webpack_require__(/*! ../../../../../../../_default/_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _default_image = __webpack_require__(/*! ../../../../../../../_default/_common/default_image */ "./src/_default/_common/default_image.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
PLDetailCarousel.propTypes = {};

//
function PLDetailCarousel(_ref) {
    var choice_arr = _ref.choice_arr,
        specific_vid_pics = _ref.specific_vid_pics,
        has_link_more = _ref.has_link_more,
        link_more_to = _ref.link_more_to,
        link_more_name = _ref.link_more_name,
        openDetailCarousel = _ref.openDetailCarousel;

    //
    var _useMultiDataKey = (0, _useMultiDataKey2.useMultiDataKey)({
        initial_key: 'specific',
        initial_data_arr: specific_vid_pics,
        initial_count: specific_vid_pics.length,

        handle_API_L: handle_API_PLDetailVidPic_L,
        other_state: {
            vid_pic_ix_obj: {
                specific: 0
            }
        }
    }),
        state_obj = _useMultiDataKey.state_obj,
        setStateObj = _useMultiDataKey.setStateObj,
        getData_API = _useMultiDataKey.getData_API,
        handleChangeKey = _useMultiDataKey.handleChangeKey;

    var obj = state_obj.obj,
        c_key = state_obj.c_key,
        vid_pic_ix_obj = state_obj.vid_pic_ix_obj,
        is_fetching = state_obj.is_fetching;


    var choice_ix = choice_arr.findIndex(function (item) {
        return item.name == c_key;
    });

    // -----

    //
    function handle_API_PLDetailVidPic_L() {
        var data = (0, _getDefaultArr.getDefaultArr)(_default_image.getRandomImg, 3, 15);
        return {
            data: data,
            count: data.length,
            pages: 1
        };
    }

    // -----

    //
    function handleCarouselMove(carousel_ix) {
        if (carousel_ix == 0 || carousel_ix > obj[c_key].data_arr.length) {
            return;
        }

        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                vid_pic_ix_obj: _extends({}, state_obj.vid_pic_ix_obj, _defineProperty({}, c_key, carousel_ix))
            });
        });
    }

    //
    function handleChoose(ix) {
        var choice_obj = choice_arr[ix];

        if (choice_obj.only_screen) {
            openDetailCarousel(choice_obj);

            return;
        }

        var new_key = choice_obj.name;

        vid_pic_ix_obj[new_key] = vid_pic_ix_obj[new_key] || 1;
        handleChangeKey(new_key);
    }

    //
    function onOpenDetailCarousel() {
        var choice_obj = choice_arr[vid_pic_ix_obj[c_key]];

        openDetailCarousel(choice_obj);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailCarousel' },
        _react2.default.createElement(
            'div',
            { className: 'PLDetailCarousel_carousel pos-rel margin-bottom-15px padding-top-50per text-white' },
            choice_arr.map(function (item, ix) {
                return item.only_screen || !obj[item.name] ? null : _react2.default.createElement(
                    'div',
                    {
                        key: ix,
                        className: 'pos-abs-100 ' + (item.name == c_key ? '' : 'display-none')
                    },
                    _react2.default.createElement(_Carousel2.default, {
                        vid_pics: [obj[item.name].data_arr.slice(-1)[0]].concat(_toConsumableArray(obj[item.name].data_arr), [obj[item.name].data_arr[0]]),
                        has_fetched: obj[item.name].has_fetched,
                        use_auto_next: false,
                        use_dot: false,
                        handleClick: onOpenDetailCarousel,
                        handleCarouselMove: handleCarouselMove
                    })
                );
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'display-flex-center margin-bottom-15px' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    {
                        className: 'text-blue cursor-pointer',
                        onClick: onOpenDetailCarousel
                    },
                    choice_arr[choice_ix].title_see_all
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'margin-left-10px' },
                    '(',
                    vid_pic_ix_obj[c_key],
                    '/',
                    obj[c_key].data_arr.length,
                    ')'
                )
            ),
            has_link_more ? _react2.default.createElement(
                'div',
                { className: 'margin-left-10px' },
                _react2.default.createElement(
                    'span',
                    null,
                    'T\xECm hi\u1EC3u'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: link_more_to },
                    link_more_name
                )
            ) : null
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PLDCarouselChoices2.default, {
                choice_arr: choice_arr,
                choice_ix: choice_ix,
                handleChoose: handleChoose
            })
        )
    );
}

exports.default = PLDetailCarousel;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLDCarouselChoice = __webpack_require__(/*! ../item/PLDCarouselChoice */ "./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.js");

var _PLDCarouselChoice2 = _interopRequireDefault(_PLDCarouselChoice);

__webpack_require__(/*! ./PLDCarouselChoices.scss */ "./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDCarouselChoices.propTypes = {};

//

//
function PLDCarouselChoices(_ref) {
    var choice_arr = _ref.choice_arr,
        choice_ix = _ref.choice_ix,
        handleChoose = _ref.handleChoose;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDCarouselChoices font-12px' },
        _react2.default.createElement(
            'ul',
            { className: 'PLDCarouselChoices_row display-flex margin-auto width-fit-content list-none' },
            choice_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: ix,
                        className: 'PLDCarouselChoices_item text-align-center ' + (ix == 0 ? '' : 'margin-left-10px')
                    },
                    _react2.default.createElement(_PLDCarouselChoice2.default, {
                        ix: ix,
                        img: item.img,
                        title: item.title,
                        is_active: ix == choice_ix,
                        handleChoose: handleChoose
                    })
                );
            })
        )
    );
}

exports.default = PLDCarouselChoices;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.js":
/*!****************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.js ***!
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

__webpack_require__(/*! ./PLDCarouselChoice.scss */ "./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDCarouselChoice.propTypes = {};

//

//
function PLDCarouselChoice(_ref) {
    var ix = _ref.ix,
        img = _ref.img,
        title = _ref.title,
        is_active = _ref.is_active,
        handleChoose = _ref.handleChoose;

    //
    function onChoose() {
        !is_active && handleChoose(ix);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDCarouselChoice cursor-pointer', onClick: onChoose },
        _react2.default.createElement(
            'div',
            {
                className: 'PLDCarouselChoice_img display-flex-center padding-6px border-blur brs-2px ' + (is_active ? 'PLDCarouselChoice_img-active' : '')
            },
            _react2.default.createElement('img', {
                className: 'object-fit-cover',
                src: img,
                alt: '',
                width: '40',
                height: '40'
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-top-5px text-align-center' },
            title
        )
    );
}

exports.default = PLDCarouselChoice;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/groups/_main/PLDetailGroups.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/groups/_main/PLDetailGroups.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLDGroupItem = __webpack_require__(/*! ../item/PLDGroupItem */ "./src/pages/phone_laptop/pages/detail/_components/groups/item/PLDGroupItem.js");

var _PLDGroupItem2 = _interopRequireDefault(_PLDGroupItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailGroups.propTypes = {};

//

//
function PLDetailGroups(_ref) {
    var group_arr = _ref.group_arr,
        handleChooseType = _ref.handleChooseType;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailGroups font-13px font-400' },
        group_arr.map(function (item_arr, group_ix) {
            return _react2.default.createElement(
                'div',
                { key: group_ix, className: 'margin-bottom-15px' },
                _react2.default.createElement(
                    'ul',
                    { className: 'list-none display-flex' },
                    item_arr.map(function (item, item_ix) {
                        return _react2.default.createElement(
                            'li',
                            { key: item_ix, className: 'margin-right-10px' },
                            _react2.default.createElement(_PLDGroupItem2.default, {
                                group_ix: group_ix,
                                item_ix: item_ix,
                                title: item.title,
                                is_active: item.is_active,
                                handleClick: handleChooseType
                            })
                        );
                    })
                )
            );
        })
    );
}

exports.default = PLDetailGroups;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/groups/item/PLDGroupItem.js":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/groups/item/PLDGroupItem.js ***!
  \*************************************************************************************/
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
PLDGroupItem.propTypes = {};

//
function PLDGroupItem(_ref) {
    var group_ix = _ref.group_ix,
        item_ix = _ref.item_ix,
        title = _ref.title,
        is_active = _ref.is_active,
        handleClick = _ref.handleClick;

    //
    function onClick() {
        !is_active && handleClick({
            group_ix: group_ix,
            item_ix: item_ix
        });
    }

    //
    return _react2.default.createElement(
        'button',
        {
            className: 'PLDGroupItem padding-x-20px padding-y-10px brs-3px btn-active border-blur cursor-pointer ' + (is_active ? 'text-blue border-cl-current' : ''),
            type: 'button',
            onClick: onClick
        },
        title
    );
}

exports.default = PLDGroupItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/installment/_main/PLDetailInstallment.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/installment/_main/PLDetailInstallment.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailInstallment.propTypes = {};

//
function PLDetailInstallment(_ref) {
    var installment_arr = _ref.installment_arr;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailInstallment' },
        _react2.default.createElement(
            'div',
            { className: 'PLDetailInstallment_row flex-between-center' },
            installment_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                        key: ix,
                        className: 'PLDetailInstallment_col flex-grow-1 padding-y-5px brs-4px bg-blue text-align-center text-white ' + (ix == 0 ? '' : 'margin-left-10px'),
                        to: item.link_to
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'text-upper font-13px' },
                        item.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'font-12px' },
                        item.info
                    )
                );
            })
        )
    );
}

exports.default = PLDetailInstallment;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/market/_main/PLDetailMarket.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/market/_main/PLDetailMarket.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconsProfile = __webpack_require__(/*! ../../../../../../../_icons_svg/icons_profile/IconsProfile */ "./src/_icons_svg/icons_profile/IconsProfile.js");

var _IconsProfile2 = _interopRequireDefault(_IconsProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailMarket.propTypes = {
    in_stock: _propTypes2.default.bool,
    is_coming: _propTypes2.default.bool,
    use_see_market: _propTypes2.default.bool,
    openDetailMarket: _propTypes2.default.func
};
//


PLDetailMarket.defaultProps = {
    use_see_market: true
};

//
function PLDetailMarket(_ref) {
    var in_stock = _ref.in_stock,
        is_coming = _ref.is_coming,
        use_see_market = _ref.use_see_market,
        openDetailMarket = _ref.openDetailMarket;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailMarket font-14px' },
        _react2.default.createElement(
            'div',
            { className: ' text-upper font-700' },
            is_coming ? _react2.default.createElement(
                'span',
                { className: 'text-gold text-upper' },
                'H\xE0ng s\u1EAFp v\u1EC1'
            ) : in_stock ? _react2.default.createElement(
                'span',
                { className: 'text-green' },
                'C\xF2n h\xE0ng'
            ) : _react2.default.createElement(
                'span',
                { className: 'text-red' },
                'Ng\u1EEBng kinh doanh'
            )
        ),
        in_stock && use_see_market ? _react2.default.createElement(
            'div',
            {
                className: 'margin-top-5px text-blue cursor-pointer',
                onClick: openDetailMarket
            },
            _react2.default.createElement(_IconsProfile2.default, { size_icon: '16px' }),
            _react2.default.createElement(
                'span',
                { className: 'margin-left-10px' },
                'Xem si\xEAu th\u1ECB c\xF3 h\xE0ng'
            )
        ) : null
    );
}

exports.default = PLDetailMarket;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/offer/_main/PLDetailOffer.js":
/*!**************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/offer/_main/PLDetailOffer.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLDOfferHead = __webpack_require__(/*! ../head/PLDOfferHead */ "./src/pages/phone_laptop/pages/detail/_components/offer/head/PLDOfferHead.js");

var _PLDOfferHead2 = _interopRequireDefault(_PLDOfferHead);

var _PLDOfferItem = __webpack_require__(/*! ../item/PLDOfferItem */ "./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.js");

var _PLDOfferItem2 = _interopRequireDefault(_PLDOfferItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDetailOffer.propTypes = {};

//
function PLDetailOffer(_ref) {
    var offer_obj = _ref.offer_obj;

    //
    var data = offer_obj.data,
        end_time = offer_obj.end_time;

    //

    return _react2.default.createElement(
        'div',
        { className: 'PLDetailOffer border-blur brs-4px' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PLDOfferHead2.default, { count_offer: data.length, end_time: end_time })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'ul',
                { className: 'list-none' },
                data.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        { key: item.id },
                        _react2.default.createElement(_PLDOfferItem2.default, { info: item.info })
                    );
                })
            )
        )
    );
}

exports.default = PLDetailOffer;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/offer/head/PLDOfferHead.js":
/*!************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/offer/head/PLDOfferHead.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormatDate = __webpack_require__(/*! ../../../../../../../_some_function/FormatDate */ "./src/_some_function/FormatDate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDOfferHead.propTypes = {};

//

//
function PLDOfferHead(_ref) {
    var count_offer = _ref.count_offer,
        end_time = _ref.end_time;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDOfferHead padding-12px bg-f1' },
        _react2.default.createElement(
            'b',
            null,
            count_offer,
            ' \u01B0u \u0111\xE3i th\xEAm'
        ),
        _react2.default.createElement(
            'span',
            { className: 'margin-left-5px' },
            'D\u1EF1 ki\u1EBFn \xE1p d\u1EE5ng \u0111\u1EBFn ',
            (0, _FormatDate.formatLocalDateTimeString)(end_time)
        )
    );
}

exports.default = PLDOfferHead;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.js":
/*!************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconSent = __webpack_require__(/*! ../../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent */ "./src/_icons_svg/icons_status_message/icon_sent/IconSent.js");

var _IconSent2 = _interopRequireDefault(_IconSent);

__webpack_require__(/*! ./PLDOfferItem.scss */ "./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDOfferItem.propTypes = {};

//

// 
function PLDOfferItem(_ref) {
    var info = _ref.info;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDOfferItem padding-10px' },
        _react2.default.createElement(
            'div',
            { className: 'PLDOfferItem_row display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'margin-right-10px padding-top-3px' },
                _react2.default.createElement(
                    'div',
                    { className: 'PLDOfferItem_icon display-flex-center brs-50 bg-green' },
                    _react2.default.createElement(_IconSent2.default, { size_icon: '12px', stroke: 'white' })
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                info
            )
        )
    );
}

exports.default = PLDOfferItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/old_product/_main/PLDetailOldProduct.js":
/*!*************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/old_product/_main/PLDetailOldProduct.js ***!
  \*************************************************************************************************/
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

var _FormatNum = __webpack_require__(/*! ../../../../../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailOldProduct.propTypes = {};

//

//
function PLDetailOldProduct(_ref) {
    var old_product_obj = _ref.old_product_obj;

    //
    var link_to = old_product_obj.link_to,
        title = old_product_obj.title,
        price = old_product_obj.price,
        saved_price = old_product_obj.saved_price;

    //

    return _react2.default.createElement(
        'div',
        { className: 'PLDetailOldProduct padding-y-10px' },
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: link_to },
            _react2.default.createElement(
                'span',
                { className: 'text-blue' },
                title
            ),
            _react2.default.createElement(
                'span',
                { className: 'margin-left-5px color-fashion' },
                (0, _FormatNum.formatNum)(price),
                '\u20AB'
            ),
            _react2.default.createElement(
                'div',
                { className: 'inline-block margin-left-5px' },
                _react2.default.createElement(
                    'span',
                    null,
                    'Ti\u1EBFt ki\u1EC7m'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'color-fashion' },
                    saved_price
                )
            )
        )
    );
}

exports.default = PLDetailOldProduct;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLDetailPolicyItem = __webpack_require__(/*! ../item/PLDetailPolicyItem */ "./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.js");

var _PLDetailPolicyItem2 = _interopRequireDefault(_PLDetailPolicyItem);

__webpack_require__(/*! ./PLDetailPolicy.scss */ "./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDetailPolicy.propTypes = {};

//

//
function PLDetailPolicy(_ref) {
    var policy_arr = _ref.policy_arr;

    //
    var policy_count = policy_arr.length;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailPolicy font-14px' },
        _react2.default.createElement(
            'ul',
            { className: 'PLDetailPolicy_row display-flex flex-wrap list-none' },
            policy_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: item.id,
                        className: 'PLDetailPolicy_item ' + (policy_count % 2 == 0 ? ix >= policy_count - 2 ? '' : 'border-bottom-blur' : ix == policy_count - 1 ? '' : 'border-bottom-blur')
                    },
                    _react2.default.createElement(_PLDetailPolicyItem2.default, {
                        Icon: item.Icon,
                        info: item.info,
                        link_to: item.link_to,
                        link_target: item.link_target,
                        link_title: item.link_title
                    })
                );
            })
        )
    );
}

exports.default = PLDetailPolicy;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.js":
/*!*******************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.js ***!
  \*******************************************************************************************/
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

__webpack_require__(/*! ./PLDetailPolicyItem.scss */ "./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailPolicyItem.propTypes = {};

//

//
function PLDetailPolicyItem(_ref) {
    var Icon = _ref.Icon,
        info = _ref.info,
        link_to = _ref.link_to,
        link_target = _ref.link_target,
        link_title = _ref.link_title;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailPolicyItem pos-rel' },
        _react2.default.createElement(
            'div',
            { className: 'PLDetailPolicyItem_icon pos-abs left-0 top-0 padding-top-8px' },
            Icon
        ),
        _react2.default.createElement(
            'div',
            null,
            info,
            ' ',
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: link_to, target: link_target },
                link_title
            )
        )
    );
}

exports.default = PLDetailPolicyItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/price/one_price/PLDOnePrice.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/price/one_price/PLDOnePrice.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormatNum = __webpack_require__(/*! ../../../../../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDOnePrice.propTypes = {};

//

//
function PLDOnePrice(_ref) {
    var new_price = _ref.new_price,
        old_price = _ref.old_price,
        discount = _ref.discount,
        installment = _ref.installment;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDOnePrice' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'span',
                { className: 'PLDOnePrice_new margin-right-10px color-fashion-mall font-700 font-20px' },
                (0, _FormatNum.formatNum)(new_price),
                '\u20AB'
            ),
            old_price ? _react2.default.createElement(
                'del',
                { className: 'PLDOnePrice_old margin-right-10px text-del font-16px' },
                (0, _FormatNum.formatNum)(old_price),
                '\u20AB'
            ) : null,
            discount ? _react2.default.createElement(
                'span',
                { className: 'PLDOnePrice_discount color-fashion font-16px' },
                discount
            ) : installment ? _react2.default.createElement(
                'div',
                { className: 'PLDOnePrice_installment inline-block padding-x-10px brs-2px bg-f1 font-13px' },
                'Tr\u1EA3 g\xF3p ',
                installment
            ) : ''
        )
    );
}

exports.default = PLDOnePrice;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormatNum = __webpack_require__(/*! ../../../../../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

__webpack_require__(/*! ./PLDTwoPrice.scss */ "./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDTwoPrice.propTypes = {};

//

//
function PLDTwoPrice(_ref) {
    var new_price = _ref.new_price,
        old_price = _ref.old_price,
        price_ix = _ref.price_ix,
        new_price_2 = _ref.new_price_2,
        title_price_2 = _ref.title_price_2,
        choosePrice = _ref.choosePrice;

    //
    function choosePriceOne() {
        price_ix == 1 && choosePrice(0);
    }

    //
    function choosePriceTwo() {
        price_ix == 0 && choosePrice(1);
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'PLDTwoPrice bg-f1 ' + (price_ix == 0 ? 'PLDTwoPrice-1' : 'PLDTwoPrice-2')
        },
        _react2.default.createElement(
            'div',
            { className: 'PLDTwoPrice_row display-flex' },
            _react2.default.createElement(
                'div',
                {
                    className: 'PLDTwoPrice_one display-flex-center flex-col w-50per padding-y-5px cursor-pointer',
                    onClick: choosePriceOne
                },
                _react2.default.createElement(
                    'div',
                    { className: 'PLDTwoPrice_one_new font-16px font-700 line-20px' },
                    (0, _FormatNum.formatNum)(new_price),
                    '\u20AB'
                ),
                old_price ? _react2.default.createElement(
                    'div',
                    { className: 'text-del font-12px' },
                    _react2.default.createElement(
                        'del',
                        null,
                        (0, _FormatNum.formatNum)(old_price),
                        '\u20AB'
                    )
                ) : null
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'PLDTwoPrice_two display-flex-center flex-col w-50per padding-y-5px cursor-pointer',
                    onClick: choosePriceTwo
                },
                _react2.default.createElement(
                    'div',
                    { className: 'font-12px' },
                    title_price_2
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PLDTwoPrice_two_new font-16px font-700 line-20px' },
                    (0, _FormatNum.formatNum)(new_price_2),
                    '\u20AB'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'text-del font-12px' },
                    _react2.default.createElement(
                        'del',
                        null,
                        (0, _FormatNum.formatNum)(old_price),
                        '\u20AB'
                    )
                )
            )
        )
    );
}

exports.default = PLDTwoPrice;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.js ***!
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

var _PLDPromotionItem = __webpack_require__(/*! ../item/PLDPromotionItem */ "./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.js");

var _PLDPromotionItem2 = _interopRequireDefault(_PLDPromotionItem);

var _PLDPromotionHead = __webpack_require__(/*! ../head/PLDPromotionHead */ "./src/pages/phone_laptop/pages/detail/_components/promotion/head/PLDPromotionHead.js");

var _PLDPromotionHead2 = _interopRequireDefault(_PLDPromotionHead);

var _PLDPromotionGifts = __webpack_require__(/*! ../gifts/_main/PLDPromotionGifts */ "./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.js");

var _PLDPromotionGifts2 = _interopRequireDefault(_PLDPromotionGifts);

var _PLDetailConditions = __webpack_require__(/*! ../conditions/_main/PLDetailConditions */ "./src/pages/phone_laptop/pages/detail/_components/promotion/conditions/_main/PLDetailConditions.js");

var _PLDetailConditions2 = _interopRequireDefault(_PLDetailConditions);

__webpack_require__(/*! ./PLDetailPromotion.scss */ "./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailPromotion.propTypes = {};

//

//

//
function PLDetailPromotion(_ref) {
    var promotion_obj = _ref.promotion_obj,
        openDetailGift = _ref.openDetailGift;

    //
    var cost = promotion_obj.cost,
        end_time = promotion_obj.end_time,
        data = promotion_obj.data,
        note = promotion_obj.note,
        gift_arr = promotion_obj.gift_arr,
        condition_arr = promotion_obj.condition_arr;

    //

    return _react2.default.createElement(
        'div',
        { className: 'PLDetailPromotion' },
        condition_arr.length ? _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLDetailConditions2.default, { condition_arr: condition_arr })
        ) : null,
        _react2.default.createElement(
            'div',
            { className: 'PLDetailPromotion_contain brs-4px border-blur' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PLDPromotionHead2.default, { cost: cost, end_time: end_time })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    { className: 'list-none' },
                    data.map(function (item, ix) {
                        return _react2.default.createElement(
                            'li',
                            { key: item.id },
                            _react2.default.createElement(_PLDPromotionItem2.default, { ix: ix, info: item.info })
                        );
                    })
                )
            ),
            gift_arr.length ? _react2.default.createElement(
                'div',
                { className: 'PLDetailPromotion_gifts' },
                _react2.default.createElement(_PLDPromotionGifts2.default, {
                    gift_arr: gift_arr,
                    openDetailGift: openDetailGift
                })
            ) : null,
            note ? _react2.default.createElement(
                'div',
                { className: 'PLDetailPromotion_note padding-10px' },
                note
            ) : null
        )
    );
}

exports.default = PLDetailPromotion;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/conditions/_main/PLDetailConditions.js":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/conditions/_main/PLDetailConditions.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PLDConditionsItem = __webpack_require__(/*! ../item/PLDConditionsItem */ "./src/pages/phone_laptop/pages/detail/_components/promotion/conditions/item/PLDConditionsItem.js");

var _PLDConditionsItem2 = _interopRequireDefault(_PLDConditionsItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailConditions.propTypes = {};

//

//
function PLDetailConditions(_ref) {
    var condition_arr = _ref.condition_arr;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailConditions padding-10px brs-4px bg-fashion-heart' },
        _react2.default.createElement(
            'div',
            null,
            '\u0110i\u1EC1u ki\u1EC7n \xE1p d\u1EE5ng:'
        ),
        _react2.default.createElement(
            'ul',
            { className: 'padding-left-20px margin-0 text-third' },
            condition_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { key: item.id },
                    _react2.default.createElement(_PLDConditionsItem2.default, { condition: item.condition_str })
                );
            })
        )
    );
}

exports.default = PLDetailConditions;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/conditions/item/PLDConditionsItem.js":
/*!********************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/conditions/item/PLDConditionsItem.js ***!
  \********************************************************************************************************/
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
PLDConditionsItem.propTypes = {};

//
function PLDConditionsItem(_ref) {
    var condition = _ref.condition;

    //
    return _react2.default.createElement(
        'div',
        null,
        condition
    );
}

exports.default = PLDConditionsItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.js":
/*!****************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.js ***!
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

var _PLDPromotionGiftItem = __webpack_require__(/*! ../item/PLDPromotionGiftItem */ "./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/item/PLDPromotionGiftItem.js");

var _PLDPromotionGiftItem2 = _interopRequireDefault(_PLDPromotionGiftItem);

__webpack_require__(/*! ./PLDPromotionGifts.scss */ "./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDPromotionGifts.propTypes = {};

//

//
function PLDPromotionGifts(_ref) {
    var gift_arr = _ref.gift_arr,
        openDetailGift = _ref.openDetailGift;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDPromotionGifts padding-top-10px' },
        _react2.default.createElement(
            'div',
            { className: 'PLDPromotionGifts_title margin-bottom-10px padding-x-10px' },
            'Qu\xE0 khuy\u1EBFn m\xE3i'
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLDPromotionGifts_contain padding-left-10px font-12px' },
            _react2.default.createElement(
                'ul',
                { className: 'display-flex flex-wrap list-none' },
                gift_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: item.id,
                            className: 'PLDPromotionGifts_item margin-right-10px margin-bottom-10px'
                        },
                        _react2.default.createElement(_PLDPromotionGiftItem2.default, {
                            ix: ix,
                            name: item.name,
                            img: item.img,
                            openDetailGift: openDetailGift
                        })
                    );
                })
            )
        )
    );
}

exports.default = PLDPromotionGifts;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/item/PLDPromotionGiftItem.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/item/PLDPromotionGiftItem.js ***!
  \******************************************************************************************************/
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
PLDPromotionGiftItem.propTypes = {};

//
function PLDPromotionGiftItem(_ref) {
    var ix = _ref.ix,
        img = _ref.img,
        name = _ref.name,
        openDetailGift = _ref.openDetailGift;

    //
    function onOpenDetailGift() {
        openDetailGift(ix);
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'PLDPromotionGiftItem border-blur padding-3px cursor-pointer',
            onClick: onOpenDetailGift
        },
        _react2.default.createElement(
            'div',
            { className: 'PLDPromotionGiftItem_row display-flex align-items-center' },
            _react2.default.createElement('img', {
                className: 'object-fit-cover',
                src: img,
                alt: '',
                width: '40',
                height: '40'
            }),
            _react2.default.createElement(
                'div',
                { className: 'wk-box-vertical line-clamp-2 padding-left-5px overflow-hidden' },
                name
            )
        )
    );
}

exports.default = PLDPromotionGiftItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/head/PLDPromotionHead.js":
/*!********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/head/PLDPromotionHead.js ***!
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

var _FormatDate = __webpack_require__(/*! ../../../../../../../_some_function/FormatDate */ "./src/_some_function/FormatDate.js");

var _FormatNum = __webpack_require__(/*! ../../../../../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDPromotionHead.propTypes = {};

//
function PLDPromotionHead(_ref) {
    var cost = _ref.cost,
        end_time = _ref.end_time;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDPromotionHead padding-y-8px padding-x-10px bg-f1' },
        _react2.default.createElement(
            'h2',
            { className: 'font-14px font-700' },
            'Khuy\u1EBFn m\xE3i',
            cost ? ' tr\u1ECB gi\xE1 ' + (0, _FormatNum.formatNum)(cost) + '\u20AB' : ''
        ),
        _react2.default.createElement(
            'div',
            { className: 'font-12px text-third' },
            'Gi\xE1 v\xE0 khuy\u1EBFn m\xE3i d\u1EF1 ki\u1EBFn \xE1p d\u1EE5ng \u0111\u1EBFn',
            ' ',
            (0, _FormatDate.formatLocalDateTimeString)(end_time)
        )
    );
}

exports.default = PLDPromotionHead;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.js":
/*!********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.js ***!
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

__webpack_require__(/*! ./PLDPromotionItem.scss */ "./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDPromotionItem.propTypes = {};

//

// 
function PLDPromotionItem(_ref) {
    var ix = _ref.ix,
        info = _ref.info;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDPromotionItem padding-10px' },
        _react2.default.createElement(
            'div',
            { className: 'PLDPromotionItem_row display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'margin-right-10px padding-top-4px' },
                _react2.default.createElement(
                    'div',
                    { className: 'PLDPromotionItem_number display-flex-center brs-50 bg-blue text-white font-11px' },
                    ix + 1
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'flex-grow-1' },
                info
            )
        )
    );
}

exports.default = PLDPromotionItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.js ***!
  \****************************************************************************************/
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

var _PLRates = __webpack_require__(/*! ../../../../../components/rates/_main/PLRates */ "./src/pages/phone_laptop/components/rates/_main/PLRates.js");

var _PLRates2 = _interopRequireDefault(_PLRates);

var _PLDRatingHead = __webpack_require__(/*! ../head/_main/PLDRatingHead */ "./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.js");

var _PLDRatingHead2 = _interopRequireDefault(_PLDRatingHead);

__webpack_require__(/*! ./PLDetailRating.scss */ "./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailRating.propTypes = {};

//

//

//
function PLDetailRating(_ref) {
    var product_id = _ref.product_id,
        product_name = _ref.product_name,
        rating_arr = _ref.rating_arr,
        rating_avg = _ref.rating_avg,
        rating_count = _ref.rating_count,
        rate_img_arr = _ref.rate_img_arr,
        rate_img_count = _ref.rate_img_count,
        rate_arr = _ref.rate_arr,
        openDetailRateImg = _ref.openDetailRateImg,
        openDetailRate = _ref.openDetailRate,
        handleSendDiscuss = _ref.handleSendDiscuss;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailRating padding-15px brs-8px border-blur' },
        _react2.default.createElement(
            'div',
            { className: 'padding-bottom-15px border-bottom-blur' },
            _react2.default.createElement(_PLDRatingHead2.default, {
                product_id: product_id,
                product_name: product_name,
                rating_arr: rating_arr,
                rating_avg: rating_avg,
                rating_count: rating_count,
                rate_img_arr: rate_img_arr,
                rate_img_count: rate_img_count,
                openDetailRateImg: openDetailRateImg
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLRates2.default, {
                rate_arr: rate_arr,
                handleSendDiscuss: handleSendDiscuss
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'flex-between-center padding-y-15px border-top-blur' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                {
                    className: 'PLDetailRating_see_all padding-y-10px brs-4px bg-blue text-white text-align-center',
                    to: '/phone-laptop/rate?product_id=' + product_id
                },
                'Xem t\u1EA5t c\u1EA3 \u0111\xE1nh gi\xE1'
            ),
            _react2.default.createElement(
                'button',
                {
                    className: 'PLDetailRating_btn_rate padding-y-10px brs-4px border-blue text-blue text-align-center cursor-pointer',
                    type: 'button',
                    onClick: openDetailRate
                },
                'Vi\u1EBFt \u0111\xE1nh gi\xE1'
            )
        )
    );
}

exports.default = PLDetailRating;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.js":
/*!********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.js ***!
  \********************************************************************************************/
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

var _PLBarsRate = __webpack_require__(/*! ../../../../../../components/bars_rate/_main/PLBarsRate */ "./src/pages/phone_laptop/components/bars_rate/_main/PLBarsRate.js");

var _PLBarsRate2 = _interopRequireDefault(_PLBarsRate);

__webpack_require__(/*! ./PLDRatingHead.scss */ "./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDRatingHead.propTypes = _extends({
    device_name: _propTypes2.default.string
}, _PLBarsRate2.default.propTypes, {
    img_arr: _propTypes2.default.arrayOf(_propTypes2.default.string)
});

//
function PLDRatingHead(_ref) {
    var product_id = _ref.product_id,
        product_name = _ref.product_name,
        rating_arr = _ref.rating_arr,
        rating_avg = _ref.rating_avg,
        rating_count = _ref.rating_count,
        rate_img_arr = _ref.rate_img_arr,
        rate_img_count = _ref.rate_img_count,
        openDetailRateImg = _ref.openDetailRateImg;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDRatingHead' },
        _react2.default.createElement(
            'h2',
            { className: 'PLDRatingHead_title margin-bottom-15px font-20px font-700' },
            '\u0110\xE1nh gi\xE1 ',
            product_name
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLDRatingHead_row display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'PLDRatingHead_bars padding-x-10px' },
                _react2.default.createElement(_PLBarsRate2.default, {
                    product_id: product_id,
                    rating_arr: rating_arr,
                    rating_avg: rating_avg,
                    rating_count: rating_count
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLDRatingHead_pics padding-left-10px' },
                _react2.default.createElement(
                    'ul',
                    { className: 'display-flex flex-wrap list-none' },
                    rate_img_arr.slice(0, rate_img_count > 10 ? 9 : undefined).map(function (item, ix) {
                        return _react2.default.createElement(
                            'li',
                            {
                                key: ix,
                                className: 'PLDRatingHead_pics_item',
                                onClick: openDetailRateImg
                            },
                            _react2.default.createElement(
                                'div',
                                { className: 'padding-top-100per pos-rel' },
                                _react2.default.createElement('img', {
                                    className: 'pos-abs-0 wh-100 brs-5px object-fit-cover',
                                    src: item,
                                    alt: ''
                                })
                            )
                        );
                    }),
                    rate_img_count > 10 ? _react2.default.createElement(
                        'li',
                        {
                            className: 'PLDRatingHead_pics_item',
                            onClick: openDetailRateImg
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'padding-top-100per pos-rel' },
                            _react2.default.createElement('img', {
                                className: 'pos-abs-0 wh-100 brs-5px object-fit-cover',
                                src: rate_img_arr[9],
                                alt: ''
                            }),
                            _react2.default.createElement(
                                'div',
                                { className: 'pos-abs-100 display-flex-center brs-5px bg-shadow-5 text-white font-13px font-600 text-align-center' },
                                'Xem ',
                                rate_img_count - 10,
                                ' \u1EA3nh t\u1EEB KH'
                            )
                        )
                    ) : null
                )
            )
        )
    );
}

exports.default = PLDRatingHead;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconCaret = __webpack_require__(/*! ../../../../../../../_icons_svg/_icon_caret/IconCaret */ "./src/_icons_svg/_icon_caret/IconCaret.js");

var _IconCaret2 = _interopRequireDefault(_IconCaret);

var _PLDShortConfigItem = __webpack_require__(/*! ../item/PLDShortConfigItem */ "./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.js");

var _PLDShortConfigItem2 = _interopRequireDefault(_PLDShortConfigItem);

__webpack_require__(/*! ./PLDetailShortConfig.scss */ "./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDetailShortConfig.propTypes = {};

//

//

//
function PLDetailShortConfig(_ref) {
    var name = _ref.name,
        type = _ref.type,
        short_config_arr = _ref.short_config_arr,
        openDetailConfig = _ref.openDetailConfig;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailShortConfig font-14px' },
        _react2.default.createElement(
            'h2',
            { className: 'PLDetailShortConfig_title margin-bottom-15px font-20px font-700' },
            _react2.default.createElement(
                'span',
                null,
                name
            ),
            type ? _react2.default.createElement(
                'span',
                { className: 'margin-left-5px' },
                '(',
                type,
                ')'
            ) : null
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(
                'ul',
                { className: 'list-none' },
                short_config_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: ix,
                            className: 'padding-10px ' + (ix % 2 == 1 ? '' : 'bg-f1')
                        },
                        _react2.default.createElement(_PLDShortConfigItem2.default, {
                            name: item.name,
                            value: item.value
                        })
                    );
                })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'display-flex-center' },
            _react2.default.createElement(
                'button',
                {
                    className: 'PLDetailShortConfig_btn btn-active margin-auto w-100per padding-y-8px border-blue brs-4px text-blue cursor-pointer',
                    type: 'button',
                    onClick: openDetailConfig
                },
                _react2.default.createElement(
                    'span',
                    { className: 'margin-right-10px' },
                    'Xem th\xEAm c\u1EA5u h\xECnh chi ti\u1EBFt'
                ),
                _react2.default.createElement(_IconCaret2.default, {
                    class_icon: 'rotate--90',
                    size_icon: '14px',
                    fill: 'currentColor'
                })
            )
        )
    );
}

exports.default = PLDetailShortConfig;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.js":
/*!*************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./PLDShortConfigItem.scss */ "./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDShortConfigItem.propTypes = {};

//

//
function PLDShortConfigItem(_ref) {
    var name = _ref.name,
        value = _ref.value;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDShortConfigItem' },
        _react2.default.createElement(
            'div',
            { className: 'PLDShortConfigItem_row display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'PLDShortConfigItem_name' },
                name,
                ':'
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLDShortConfigItem_value flex-grow-1 padding-left-20p' },
                value
            )
        )
    );
}

exports.default = PLDShortConfigItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.js ***!
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

var _IconCaret = __webpack_require__(/*! ../../../../../../../_icons_svg/_icon_caret/IconCaret */ "./src/_icons_svg/_icon_caret/IconCaret.js");

var _IconCaret2 = _interopRequireDefault(_IconCaret);

__webpack_require__(/*! ./PLDetailPost.scss */ "./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDetailPost.propTypes = {};

//

//
function PLDetailPost(_ref) {
    var post = _ref.post,
        openDetailPost = _ref.openDetailPost;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailPost pos-rel' },
        _react2.default.createElement(
            'div',
            { className: 'PLDetailPost_contain margin-bottom-15px overflow-hidden font-16px' },
            _react2.default.createElement(
                'h3',
                { className: 'font-20px font-700' },
                'B\xE0i vi\u1EBFt \u0111\xE1nh gi\xE1'
            ),
            post
        ),
        _react2.default.createElement(
            'div',
            { className: 'pos-abs left-0 bottom-0 w-100per' },
            _react2.default.createElement(
                'div',
                { className: 'PLDetailPost_more display-flex justify-content-center align-items-end' },
                _react2.default.createElement(
                    'button',
                    {
                        className: 'PLDetailPost_more_btn margin-auto w-100per padding-y-10px border-blue brs-4px text-blue',
                        type: 'button',
                        onClick: openDetailPost
                    },
                    _react2.default.createElement(
                        'span',
                        { className: 'margin-right-10px' },
                        'Xem th\xEAm'
                    ),
                    _react2.default.createElement(_IconCaret2.default, {
                        class_icon: 'rotate--90',
                        fill: 'currentColor',
                        size_icon: '14px'
                    })
                )
            )
        )
    );
}

exports.default = PLDetailPost;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_main/PLDetail.js":
/*!***************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_main/PLDetail.js ***!
  \***************************************************************/
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

//

//

//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextAPI = __webpack_require__(/*! ../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _Constant = __webpack_require__(/*! ../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _GetIdSlug = __webpack_require__(/*! ../../../../../_some_function/GetIdSlug */ "./src/_some_function/GetIdSlug.js");

var _makeFormData = __webpack_require__(/*! ../../../../../_some_function/makeFormData */ "./src/_some_function/makeFormData.js");

var _makeFormData2 = _interopRequireDefault(_makeFormData);

var _PhoneLaptopAPI = __webpack_require__(/*! ../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI */ "./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js");

var _UseScreenFetching = __webpack_require__(/*! ../../../../../_hooks/UseScreenFetching */ "./src/_hooks/UseScreenFetching.js");

var _ScreenNotice = __webpack_require__(/*! ../../../../../component/_screen_once/notice/ScreenNotice */ "./src/component/_screen_once/notice/ScreenNotice.js");

var _BreadCrumb = __webpack_require__(/*! ../../../../../component/bread_crumb/BreadCrumb */ "./src/component/bread_crumb/BreadCrumb.js");

var _BreadCrumb2 = _interopRequireDefault(_BreadCrumb);

var _PLDetail_handleState = __webpack_require__(/*! ../_state/_PLDetail_handleState */ "./src/pages/phone_laptop/pages/detail/_state/_PLDetail_handleState.js");

var _PLDetail_handleChooseType = __webpack_require__(/*! ../_state/PLDetail_handleChooseType */ "./src/pages/phone_laptop/pages/detail/_state/PLDetail_handleChooseType.js");

var _PLDetail_handleAPICmt = __webpack_require__(/*! ../_state/PLDetail_handleAPICmt */ "./src/pages/phone_laptop/pages/detail/_state/PLDetail_handleAPICmt.js");

var _PLDetailProduct = __webpack_require__(/*! ../product/_main/PLDetailProduct */ "./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.js");

var _PLDetailProduct2 = _interopRequireDefault(_PLDetailProduct);

var _PLDetailRelative = __webpack_require__(/*! ../relative/_main/PLDetailRelative */ "./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.js");

var _PLDetailRelative2 = _interopRequireDefault(_PLDetailRelative);

var _PLDetailSeen = __webpack_require__(/*! ../seen/_main/PLDetailSeen */ "./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.js");

var _PLDetailSeen2 = _interopRequireDefault(_PLDetailSeen);

var _PLComments = __webpack_require__(/*! ../../../components/comments/_main/PLComments */ "./src/pages/phone_laptop/components/comments/_main/PLComments.js");

var _PLComments2 = _interopRequireDefault(_PLComments);

__webpack_require__(/*! ./PLDetail.scss */ "./src/pages/phone_laptop/pages/detail/_main/PLDetail.scss");

__webpack_require__(/*! ../_mobile_css/PhoneDetailHeadMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PhoneDetailHeadMb.scss");

__webpack_require__(/*! ../_mobile_css/PLCommentsMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLCommentsMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailAreaMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailAreaMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailCarouselMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailCarouselMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailGroupsMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailGroupsMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailMarket Mb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailMarket Mb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailPolicyMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPolicyMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailPostMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPostMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailProductMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailProductMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailPromotionMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPromotionMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailRatingMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRatingMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailRelativeMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRelativeMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailShortConfigMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailShortConfigMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDetailSeenMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailSeenMb.scss");

__webpack_require__(/*! ../_mobile_css/PLDOnePriceMb.scss */ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDOnePriceMb.scss");

var _ScreenWithElm = __webpack_require__(/*! ../../../../../component/_screen/type/with_elm/ScreenWithElm */ "./src/component/_screen/type/with_elm/ScreenWithElm.js");

var _PLChooseAddressScreen = __webpack_require__(/*! ../../../components/choose_address/_screen/PLChooseAddressScreen */ "./src/pages/phone_laptop/components/choose_address/_screen/PLChooseAddressScreen.js");

var _PLChooseAddressScreen2 = _interopRequireDefault(_PLChooseAddressScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PLDetail.propTypes = {};

//
function PLDetail() {

    // --------

    //
    var getData_API_Product = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            setStateObj((0, _PLDetail_handleState.PL_detail_initial_state_obj)());

                            _context.next = 4;
                            return (0, _PhoneLaptopAPI.API_PhoneLaptop_R)(product_id);

                        case 4:
                            res = _context.sent;


                            document.title = res.data.name;

                            (0, _PLDetail_handleState.PLDetail_handleState)({
                                data: res.data,
                                setStateObj: setStateObj
                            });
                            _context.next = 12;
                            break;

                        case 9:
                            _context.prev = 9;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 9]]);
        }));

        return function getData_API_Product() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        openScreenFloor = _useContext.openScreenFloor,
        closeScreenFloor = _useContext.closeScreenFloor;

    //


    var product_id = (0, _GetIdSlug.GetIdSlug)();

    //

    var _useState = (0, _react.useState)((0, _PLDetail_handleState.PL_detail_initial_state_obj)()),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var product_obj = state_obj.product_obj,
        price_ix = state_obj.price_ix,
        has_fetched = state_obj.has_fetched;

    //

    (0, _react.useEffect)(function () {
        window.scrollTo(0, 0);

        getData_API_Product();
    }, [product_id]);function handle_API_Comment() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return (0, _PLDetail_handleAPICmt.PLDetail_handleAPICmt)(_extends({ product_id: product_id }, params));
    }

    // --------

    //
    function handleChooseType(params) {
        (0, _PLDetail_handleChooseType.PLDetail_handleChooseType)(_extends({}, params, {
            setStateObj: setStateObj
        }));
    }

    //
    function choosePrice(new_price_ix) {
        setStateObj(_extends({}, state_obj, {
            price_ix: new_price_ix
        }));
    }

    //
    function callToOrder() {
        console.log('Call to order');
    }

    //
    function handleBuyNow() {}

    //
    function handleLike() {
        console.log('Like on fb');
    }

    //
    function handleShare() {
        console.log('Share on fb');
    }

    // ----

    //
    function handleSendDiscuss(content) {
        console.log(content);
    }

    // ----- OPEN

    //
    function openDetailGift() {}

    //
    function openDetailRateImg() {}

    //
    function openDetailRate() {}

    //
    function openDetailCarousel() {}

    //
    function openDetailPost() {}

    //
    function openDetailAddress() {
        (0, _ScreenWithElm.openScreenWithElm)({
            openScreenFloor: openScreenFloor,
            elm: _react2.default.createElement(_PLChooseAddressScreen2.default, { closeScreen: closeScreenFloor })
        });
    }

    //
    function openDetailMarket() {}

    //
    function openDetailConfig() {}

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'PLDetail font-for-phone bg-primary font-14px ' + (_Constant.IS_MOBILE ? 'PLDetail-mobile' : '')
        },
        _react2.default.createElement(
            'div',
            { className: 'PLDetail_contain fashion-width' },
            has_fetched ? _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'PLDetail_breadcrumb padding-y-10px text-blue font-14px' },
                    _react2.default.createElement(_BreadCrumb2.default, { link_arr: product_obj.link_arr })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-20px' },
                    _react2.default.createElement(_PLDetailProduct2.default, {
                        product_obj: product_obj,
                        price_ix: price_ix
                        //
                        , handleChooseType: handleChooseType,
                        choosePrice: choosePrice,
                        openDetailGift: openDetailGift,
                        handleBuyNow: handleBuyNow,
                        callToOrder: callToOrder
                        //
                        , handleLike: handleLike,
                        handleShare: handleShare
                        //
                        , openDetailRateImg: openDetailRateImg,
                        openDetailRate: openDetailRate,
                        handleSendDiscuss: handleSendDiscuss
                        //
                        , openDetailCarousel: openDetailCarousel,
                        openDetailPost: openDetailPost,
                        openDetailAddress: openDetailAddress,
                        openDetailMarket: openDetailMarket,
                        openDetailConfig: openDetailConfig
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PLDetail_relative' },
                    _react2.default.createElement(_PLDetailRelative2.default, { product_id: product_id })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PLDetail_seen' },
                    _react2.default.createElement(_PLDetailSeen2.default, { product_id: product_id })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PLDetail_comment' },
                    _react2.default.createElement(_PLComments2.default, { handle_API_L: handle_API_Comment })
                )
            ) : _react2.default.createElement('div', { className: 'h-100vh' })
        )
    );
}

exports.default = PLDetail;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_state/PLDetail_handleAPICmt.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_state/PLDetail_handleAPICmt.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PLDetail_handleAPICmt = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
var PLDetail_handleAPICmt = exports.PLDetail_handleAPICmt = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var product_id = _ref2.product_id,
            page = _ref2.page;
        var res, new_data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return (0, _comment.API_PLComment_L)({
                            product_model: product_id,
                            page: page,
                            size: 10
                        });

                    case 3:
                        res = _context.sent;
                        new_data = res.data.data.map(function (item) {
                            return _extends({}, item, {
                                open_reply: false,
                                img_preview_arr: [],
                                files: []
                            });
                        });
                        return _context.abrupt('return', _extends({}, res.data, { data: new_data }));

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context['catch'](0);

                        console.log(_context.t0);

                    case 11:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 8]]);
    }));

    return function PLDetail_handleAPICmt(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _comment = __webpack_require__(/*! ../../../../../api/api_django_no_token/phone_laptop/comment */ "./src/api/api_django_no_token/phone_laptop/comment.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_state/PLDetail_handleChooseType.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_state/PLDetail_handleChooseType.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.PLDetail_handleChooseType = PLDetail_handleChooseType;

var _default_id = __webpack_require__(/*! ../../../../../_default/_common/default_id */ "./src/_default/_common/default_id.js");

var _PLDetail_handleState = __webpack_require__(/*! ./_PLDetail_handleState */ "./src/pages/phone_laptop/pages/detail/_state/_PLDetail_handleState.js");

//
function PLDetail_handleChooseType(_ref) {
    var _ref$group_ix = _ref.group_ix,
        group_ix = _ref$group_ix === undefined ? 0 : _ref$group_ix,
        _ref$item_ix = _ref.item_ix,
        item_ix = _ref$item_ix === undefined ? 0 : _ref$item_ix,
        _ref$setStateObj = _ref.setStateObj,
        setStateObj = _ref$setStateObj === undefined ? function () {} : _ref$setStateObj;

    setStateObj(function () {
        var state_obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _PLDetail_handleState.PL_detail_initial_state_obj)();

        var new_product_obj = _extends({}, state_obj.product_obj);
        var new_price = (0, _default_id.getRandomNumber)(20, 50);

        new_product_obj.group_arr[group_ix].find(function (item) {
            return item.is_active;
        }).is_active = false;
        new_product_obj.group_arr[group_ix][item_ix].is_active = true;

        new_product_obj.new_price = new_price * 100000;
        new_product_obj.new_price_2 = (new_price - 1) * 100000;
        new_product_obj.old_price = (0, _default_id.getRandomNumber)(new_price, new_price + 10) * 100000;

        return _extends({}, state_obj, {
            product_obj: new_product_obj
        });
    });
}

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_state/_PLDetail_handleState.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_state/_PLDetail_handleState.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PL_detail_initial_state_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//


//


exports.PLDetail_handleState = PLDetail_handleState;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _IconsProfile = __webpack_require__(/*! ../../../../../_icons_svg/icons_profile/IconsProfile */ "./src/_icons_svg/icons_profile/IconsProfile.js");

var _IconsProfile2 = _interopRequireDefault(_IconsProfile);

var _phone_specific = __webpack_require__(/*! ../../../../../../image/phone_specific.png */ "./image/phone_specific.png");

var _phone_specific2 = _interopRequireDefault(_phone_specific);

var _phone_360deg = __webpack_require__(/*! ../../../../../../image/phone_360deg.png */ "./image/phone_360deg.png");

var _phone_360deg2 = _interopRequireDefault(_phone_360deg);

var _phone_box = __webpack_require__(/*! ../../../../../../image/phone_box.png */ "./image/phone_box.png");

var _phone_box2 = _interopRequireDefault(_phone_box);

var _phone_post = __webpack_require__(/*! ../../../../../../image/phone_post.png */ "./image/phone_post.png");

var _phone_post2 = _interopRequireDefault(_phone_post);

var _phone_config = __webpack_require__(/*! ../../../../../../image/phone_config.png */ "./image/phone_config.png");

var _phone_config2 = _interopRequireDefault(_phone_config);

var _phone_img_main = __webpack_require__(/*! ../../../../../../image/phone_img_main.jpg */ "./image/phone_img_main.jpg");

var _phone_img_main2 = _interopRequireDefault(_phone_img_main);

var _default_id = __webpack_require__(/*! ../../../../../_default/_common/default_id */ "./src/_default/_common/default_id.js");

var _default_image = __webpack_require__(/*! ../../../../../_default/_common/default_image */ "./src/_default/_common/default_image.js");

var _getDefaultArr = __webpack_require__(/*! ../../../../../_default/_common/getDefaultArr */ "./src/_default/_common/getDefaultArr.js");

var _default_bool = __webpack_require__(/*! ../../../../../_default/_common/default_bool */ "./src/_default/_common/default_bool.js");

var _default_name = __webpack_require__(/*! ../../../../../_default/_common/default_name */ "./src/_default/_common/default_name.js");

var _default_content = __webpack_require__(/*! ../../../../../_default/_common/default_content */ "./src/_default/_common/default_content.js");

var _getRandomFromArr = __webpack_require__(/*! ../../../../../_default/_common/getRandomFromArr */ "./src/_default/_common/getRandomFromArr.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var default_post = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h3',
        { className: 'margin-y-20px' },
        'Xiaomi ch\xEDnh th\u1EE9c tr\xECnh l\xE0ng Redmi 10 (4GB/64GB), chi\u1EBFc \u0111i\u1EC7n tho\u1EA1i h\xE0i h\xF2a gi\u1EEFa phong c\xE1ch thi\u1EBFt k\u1EBF sang tr\u1ECDng, hi\u1EC7u n\u0103ng m\u1EA1nh m\u1EBD v\u1EDBi vi x\u1EED l\xFD Helio G88, m\xE0n h\xECnh gi\u1EA3i tr\xED 90 Hz m\u01B0\u1EE3t m\xE0 c\xF9ng h\u1EC7 th\u1ED1ng 4 camera ch\u1EA5t l\u01B0\u1EE3ng. S\u1EA3n ph\u1EA9m \u0111\u01B0\u1EE3c \u0111\xE1nh gi\xE1 l\xE0 chi\u1EBFn binh m\u1EDBi \u0111\u1EA7y ti\u1EC1m n\u0103ng trong ph\xE2n kh\xFAc th\u1ECB tr\u01B0\u1EDDng smartphone.'
    ),
    _react2.default.createElement(
        'h3',
        null,
        'B\u1ED9 4 camera AI 50 MP ch\u1EE5p \u1EA3nh si\xEAu \u1EA5n t\u01B0\u1EE3ng'
    ),
    _react2.default.createElement(
        'p',
        null,
        'Redmi 10 trang b\u1ECB c\u1EE5m camera sau tr\xF4ng kh\xE1 b\u1EAFt m\u1EAFt bao g\u1ED3m 4 camera v\u1EDBi \u0111\u1ED9 ph\xE2n gi\u1EA3i \u201Ckh\u1EE7ng\u201D l\u1EA7n l\u01B0\u1EE3t l\xE0 camera ch\xEDnh 50 MP, camera g\xF3c si\xEAu r\u1ED9ng 8 MP, 2 camera 2 MP h\u1ED7 tr\u1EE3 \u0111o chi\u1EC1u s\xE2u \u1EA3nh v\xE0 ch\u1EE5p \u1EA3nh macro.'
    ),
    _react2.default.createElement('img', { className: 'w-100per', src: (0, _default_image.getRandomImg)(), alt: '' }),
    _react2.default.createElement(
        'p',
        null,
        'C\u1EA3m bi\u1EBFn ch\xEDnh \u0111\u1ED9 ph\xE2n gi\u1EA3i cao 50 MP t\xEDch h\u1EE3p c\xF4ng ngh\u1EC7 AI th\xF4ng minh h\u1ED7 tr\u1EE3 kh\u1EA3 n\u0103ng l\u1EA5y n\xE9t \u1EA5n t\u01B0\u1EE3ng, gi\xFAp \xE1nh s\xE1ng \u0111\u01B0\u1EE3c \u0111\u1EA9y l\xEAn \u1EDF m\u1EE9c t\u1EF1 nhi\xEAn, m\xE0u s\u1EAFc ch\xEDnh x\xE1c, gi\u1EA3m thi\u1EC3u \u0111\u1ED9 nhi\u1EC5u \u0111\u1ED3ng th\u1EDDi kh\xF4ng gi\u1EA3m chi ti\u1EBFt c\u1EE7a \u1EA3nh ch\u1EE5p.'
    ),
    _react2.default.createElement(
        'p',
        null,
        'Redmi 10 trang b\u1ECB c\u1EE5m camera sau tr\xF4ng kh\xE1 b\u1EAFt m\u1EAFt bao g\u1ED3m 4 camera v\u1EDBi \u0111\u1ED9 ph\xE2n gi\u1EA3i \u201Ckh\u1EE7ng\u201D l\u1EA7n l\u01B0\u1EE3t l\xE0 camera ch\xEDnh 50 MP, camera g\xF3c si\xEAu r\u1ED9ng 8 MP, 2 camera 2 MP h\u1ED7 tr\u1EE3 \u0111o chi\u1EC1u s\xE2u \u1EA3nh v\xE0 ch\u1EE5p \u1EA3nh macro.'
    ),
    _react2.default.createElement('img', { className: 'w-100per', src: (0, _default_image.getRandomImg)(), alt: '' }),
    _react2.default.createElement(
        'p',
        null,
        'C\u1EA3m bi\u1EBFn ch\xEDnh \u0111\u1ED9 ph\xE2n gi\u1EA3i cao 50 MP t\xEDch h\u1EE3p c\xF4ng ngh\u1EC7 AI th\xF4ng minh h\u1ED7 tr\u1EE3 kh\u1EA3 n\u0103ng l\u1EA5y n\xE9t \u1EA5n t\u01B0\u1EE3ng, gi\xFAp \xE1nh s\xE1ng \u0111\u01B0\u1EE3c \u0111\u1EA9y l\xEAn \u1EDF m\u1EE9c t\u1EF1 nhi\xEAn, m\xE0u s\u1EAFc ch\xEDnh x\xE1c, gi\u1EA3m thi\u1EC3u \u0111\u1ED9 nhi\u1EC5u \u0111\u1ED3ng th\u1EDDi kh\xF4ng gi\u1EA3m chi ti\u1EBFt c\u1EE7a \u1EA3nh ch\u1EE5p.'
    ),
    _react2.default.createElement(
        'p',
        null,
        'C\u1EA3m bi\u1EBFn ch\xEDnh \u0111\u1ED9 ph\xE2n gi\u1EA3i cao 50 MP t\xEDch h\u1EE3p c\xF4ng ngh\u1EC7 AI th\xF4ng minh h\u1ED7 tr\u1EE3 kh\u1EA3 n\u0103ng l\u1EA5y n\xE9t \u1EA5n t\u01B0\u1EE3ng, gi\xFAp \xE1nh s\xE1ng \u0111\u01B0\u1EE3c \u0111\u1EA9y l\xEAn \u1EDF m\u1EE9c t\u1EF1 nhi\xEAn, m\xE0u s\u1EAFc ch\xEDnh x\xE1c, gi\u1EA3m thi\u1EC3u \u0111\u1ED9 nhi\u1EC5u \u0111\u1ED3ng th\u1EDDi kh\xF4ng gi\u1EA3m chi ti\u1EBFt c\u1EE7a \u1EA3nh ch\u1EE5p.'
    )
);

//
var default_carousel_choice_arr = [{
    name: 'specific',
    title: 'Điểm nổi bật',
    title_see_all: 'Xem tất cả điểm nổi bật',
    only_screen: false,
    img: _phone_specific2.default
}, {
    name: 'black',
    title: 'Đen',
    title_see_all: 'Xem tất cả hình',
    only_screen: false,
    img: (0, _default_image.getRandomImg)()
}, {
    name: 'green',
    title: 'Xanh',
    title_see_all: 'Xem tất cả hình',
    only_screen: false,
    img: (0, _default_image.getRandomImg)()
}, {
    name: 'white',
    title: 'Trắng',
    title_see_all: 'Xem tất cả hình',
    only_screen: false,
    img: (0, _default_image.getRandomImg)()
}, {
    name: 'open',
    title: 'Hình mở hộp',
    title_see_all: '',
    only_screen: true,
    img: _phone_box2.default
}, {
    name: '360',
    title: 'Hình 360 độ',
    title_see_all: '',
    only_screen: true,
    img: _phone_360deg2.default
}, {
    name: 'config',
    title: 'Thông số kĩ thuật',
    title_see_all: '',
    only_screen: true,
    img: _phone_config2.default
}, {
    name: 'post',
    title: 'Bài viết đánh giá',
    title_see_all: '',
    only_screen: true,
    img: _phone_post2.default
}];

//
var PL_detail_initial_state_obj = exports.PL_detail_initial_state_obj = function PL_detail_initial_state_obj() {
    var promotion_obj = {
        cost: 0,
        end_time:  false || 0,
        data: [{
            id: 0,
            info: ''
        }]
    };

    var offer_obj = {
        end_time:  false || 0,
        data: [{
            id: 0,
            info: ''
        }]
    };

    return {
        has_fetched: false,
        price_ix: 0,
        product_obj: {} || {
            link_arr: [{
                name: '',
                link_to: ''
            }],
            id: 0,
            name: '',
            product_type: '',
            img: '',
            img_main: '',

            new_price: 0,
            old_price: 0,
            discount: '',
            installment: '',

            rating_arr: [0, 0, 0, 0, 0],
            rating_avg: 0,
            rating_count: 0,
            rate_arr: [{
                user_name: '',
                buying_where: '',
                num_rate: 0,
                will_share: false,

                content: '',
                img: '',
                service_replied_time: '',

                count_like: 0,
                user_liked: false,

                buying_time: '',
                rating_time: '',
                used_time_str: '',

                discuss_arr: [{
                    user_name: '',
                    is_admin: false,
                    content: '',
                    count_like: 0,
                    user_liked: false
                }],
                count_discuss: 0
            }],
            rate_img_arr: [''],

            count_like: 0,

            is_coming: false,
            in_stock: true,

            has_two_price: false,
            new_price_2: 0,
            title_price_2: '',

            carousel_choice_arr: [{
                name: '',
                title: '',
                img: '',
                only_screen: only_screen
            }],
            specific_vid_pics: [''],
            has_link_more: false,
            link_more_name: '',
            link_more_to: '',

            policy_arr: [{
                id: 0,
                Icon: _react2.default.createElement('div', null),
                info: '',
                link_to: '',
                link_target: '',
                link_title: ''
            }],
            post: default_post,
            group_arr: [[{
                title: '',
                is_active: false
            }]],
            short_config_arr: [{
                name: '',
                value: ''
            }],
            installment_arr: [{
                link_to: '',
                title: '',
                info: ''
            }],

            old_product_obj: {
                link_to: '',
                title: '',
                price: 0,
                saved_price: ''
            },

            promotion_obj: promotion_obj,
            promotion_2_obj: promotion_obj,

            offer_obj: offer_obj,
            offer_2_obj: offer_obj
        }
    };
};

//
function PLDetail_handleState(_ref) {
    var _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        _ref$setStateObj = _ref.setStateObj,
        setStateObj = _ref$setStateObj === undefined ? function () {} : _ref$setStateObj;

    var phone_id = data.id;
    var name = 'Điện thoại Xiaomi Redmi 10';
    var old_price = data.old_price;
    var new_price = data.new_price;

    var rating_arr = [0, 4, 15, 8, 5];
    var rating_count = rating_arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    var rate_avg = Math.floor(10 * rating_arr.reduce(function (a, b, ix) {
        return a + b * (ix + 1);
    }, 0) / rating_count) / 10;

    var rate_img_count = (0, _default_id.getRandomNumber)(0, 30);
    var rate_img_arr = (0, _getDefaultArr.getDefaultArr)(_default_image.getRandomImg, rate_img_count > 10 ? 10 : rate_img_count, rate_img_count > 10 ? 10 : rate_img_count);

    var rate_arr = [{
        id: (0, _default_id.getRandomId)(),
        user_name: (0, _default_name.getRandomName)(),
        buying_where: (0, _default_bool.getRandomBool)() ? 'Đã mua tại TGDD' : 'Đã mua tại DMX',
        num_rate: (0, _default_id.getRandomNumber)(1, 5),
        will_share: (0, _default_bool.getRandomBool)(),

        content: (0, _default_content.getRandomContent)(),
        img: (0, _default_image.getRandomImgOrNull)(),
        service_replied_time: new Date().getTime(),

        count_like: (0, _default_bool.getRandomBool)() ? (0, _default_id.getRandomNumber)(0, 2) : 0,
        user_liked: false,

        buying_time: new Date().getTime() - 40 * 24 * 60 * 60 * 1000,
        rating_time: new Date().getTime(),
        used_time_str: '1 tháng',

        discuss_arr: [{
            id: (0, _default_id.getRandomId)(),
            user_name: (0, _default_name.getRandomName)(),
            is_admin: (0, _default_bool.getRandomBool)(),
            content: (0, _default_content.getRandomContent)(),
            count_like: (0, _default_bool.getRandomBool)() ? (0, _default_id.getRandomNumber)(0, 2) : 0,
            user_liked: false
        }, {
            id: (0, _default_id.getRandomId)(),
            user_name: (0, _default_name.getRandomName)(),
            is_admin: (0, _default_bool.getRandomBool)(),
            content: (0, _default_content.getRandomContent)(),
            count_like: (0, _default_bool.getRandomBool)() ? (0, _default_id.getRandomNumber)(0, 2) : 0,
            user_liked: false
        }, {
            id: (0, _default_id.getRandomId)(),
            user_name: (0, _default_name.getRandomName)(),
            is_admin: (0, _default_bool.getRandomBool)(),
            content: (0, _default_content.getRandomContent)(),
            count_like: (0, _default_bool.getRandomBool)() ? (0, _default_id.getRandomNumber)(0, 2) : 0,
            user_liked: false
        }],
        count_discuss: 20
    }];

    var has_two_price = (0, _default_bool.getRandomBool)();

    setStateObj(function (state_obj) {
        return _extends({}, state_obj, {
            has_fetched: true,
            product_obj: {
                link_arr: [{
                    name: 'Điện thoại',
                    link_to: '/phone-laptop-phones'
                }, {
                    name: name,
                    link_to: '/phone-laptop-phones:' + phone_id
                }],

                id: phone_id,
                name: name,
                img: (0, _default_image.getRandomImg)(),
                product_type: (0, _getRandomFromArr.getRandomFromArr)(['phone', 'laptop']),
                img_main: _phone_img_main2.default,

                new_price: new_price,
                old_price: old_price,
                discount: null,
                installment: '0%',

                is_coming: false,
                in_stock: true,

                rating_arr: rating_arr,
                rating_avg: rate_avg,
                rating_count: rating_count,

                rate_arr: rate_arr,
                rate_img_arr: rate_img_arr,
                rate_img_count: rate_img_count,

                count_like: (0, _default_id.getRandomNumber)(10, 200),

                has_two_price: has_two_price,
                new_price_2: has_two_price ? new_price - 500000 : null,
                title_price_2: has_two_price ? 'Giá rẻ online' : null,

                old_product_obj: {
                    link_to: '',
                    title: 'Xem Điện thoại iPhone 12 64GB cũ giá dưới',
                    price: 18320000,
                    saved_price: '18%'
                },

                carousel_choice_arr: default_carousel_choice_arr,
                specific_vid_pics: (0, _getDefaultArr.getDefaultArr)(_default_image.getRandomImg, 3, 15),
                has_link_more: false,
                link_more_name: '',
                link_more_to: '',

                policy_arr: [{
                    id: (0, _default_id.getRandomId)(),
                    Icon: _react2.default.createElement(_IconsProfile2.default, { size_icon: '30px' }),
                    info: 'Bảo hành chính hãng điện thoại 18 tháng',
                    link_to: '/phone-laptop',
                    link_target: '_blank',
                    link_title: 'Xem chi tiết'
                }, {
                    id: (0, _default_id.getRandomId)(),
                    Icon: _react2.default.createElement(_IconsProfile2.default, { size_icon: '30px' }),
                    info: 'Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Ốp lưng, Cáp Type C, Củ sạc nhanh rời đầu Type',
                    link_to: '',
                    link_target: '',
                    link_title: 'Xem hình'
                }, {
                    id: (0, _default_id.getRandomId)(),
                    Icon: _react2.default.createElement(_IconsProfile2.default, { size_icon: '30px' }),
                    info: '1 đổi 1 trong 30 ngày đối với sản phẩm lỗi',
                    link_to: '',
                    link_target: '',
                    link_title: ''
                }],
                post: default_post,
                group_arr: [[{
                    title: '4G',
                    is_active: true
                }, {
                    title: '8G',
                    is_active: false
                }, {
                    title: '16G',
                    is_active: false
                }], [{
                    title: 'Đen',
                    is_active: true
                }, {
                    title: 'Xanh',
                    is_active: false
                }, {
                    title: 'Trắng',
                    is_active: false
                }]],
                short_config_arr: [{
                    name: 'Màn hình',
                    value: 'IPS LCD6.5"Full HD+'
                }, {
                    name: 'Hệ điều hành',
                    value: 'Android 11'
                }, {
                    name: 'Camera sau',
                    value: 'Chính 50 MP & Phụ 8 MP, 2 MP, 2 MP'
                }, {
                    name: 'Camera trước',
                    value: '8 MP'
                }, {
                    name: 'Chip',
                    value: 'MediaTek Helio G88 8 nhân'
                }, {
                    name: 'RAM',
                    value: '4 GB'
                }, {
                    name: 'Bộ nhớ trong',
                    value: '64 GB'
                }, {
                    name: 'SIM',
                    value: '2 Nano SIMHỗ trợ 4G'
                }, {
                    name: 'Pin, Sạc',
                    value: '5000 mAh18 W'
                }],
                installment_arr: [{
                    link_to: '',
                    title: 'MUA TRẢ GÓP 0%',
                    info: 'Duyệt hồ sơ trong 5 phút'
                }, {
                    link_to: '',
                    title: 'TRẢ GÓP  QUA THẺ',
                    info: 'Visa, Mastercard, JCB'
                }],

                promotion_obj: {
                    cost: 200000,
                    end_time: new Date().getTime(),
                    note: '(*) Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%, 0.5%, 1%)',
                    condition_arr: [],
                    data: [{
                        id: (0, _default_id.getRandomId)(),
                        info: 'Tặng Phiếu mua hàng Gia dụng trị giá 200,000đ (Khuyến mãi chỉ áp dụng cho các tỉnh/ thành sau giãn cách)'
                    }, {
                        id: (0, _default_id.getRandomId)(),
                        info: 'Nhập mã DMX100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng (click xem chi tiết)'
                    }],
                    gift_arr: [{
                        id: (0, _default_id.getRandomId)(),
                        img: (0, _default_image.getRandomImg)(),
                        name: 'Balo laptop HP'
                    }]
                },

                promotion_2_obj: !has_two_price ? null : {
                    cost: 0,
                    end_time: new Date().getTime(),
                    note: '(*) Giá hoặc khuyến mãi không áp dụng trả góp lãi suất đặc biệt (0%, 0.5%, 1%)',
                    condition_arr: [{
                        id: (0, _default_id.getRandomId)(),
                        condition_str: 'Giao hàng nhanh chóng (tuỳ khu vực).'
                    }, {
                        id: (0, _default_id.getRandomId)(),
                        condition_str: 'Chính sách bảo hành, đổi trả áp dụng như mua giá thường.'
                    }, {
                        id: (0, _default_id.getRandomId)(),
                        condition_str: 'Mỗi số điện thoại chỉ mua 1 sản phẩm trong 1 tháng.'
                    }],
                    data: [{
                        id: (0, _default_id.getRandomId)(),
                        info: 'Tặng Phiếu mua hàng Gia dụng trị giá 200,000đ (Khuyến mãi chỉ áp dụng cho các tỉnh/ thành sau giãn cách)'
                    }, {
                        id: (0, _default_id.getRandomId)(),
                        info: 'Nhập mã DMX100 giảm 3% tối đa 100.000đ khi thanh toán quét QRcode qua App của ngân hàng (click xem chi tiết)'
                    }],
                    gift_arr: []
                },

                offer_obj: {
                    end_time: new Date().getTime(),
                    data: [{
                        id: (0, _default_id.getRandomId)(),
                        info: 'Tặng suất mua xe đạp Giảm đến 20% (không kèm KM khác) (click xem chi tiết)'
                    }, {
                        id: (0, _default_id.getRandomId)(),
                        info: 'Mua kèm Pin sạc dự phòng AVA/AVA+ giảm 40%'
                    }, {
                        id: (0, _default_id.getRandomId)(),
                        info: 'Mua Đồng hồ thời trang giảm 40% cho Đồng hồ dưới 3 triệu, giảm 30% cho Đồng hồ từ 3 triệu trở lên'
                    }]
                },
                offer_2_obj: null
            }
        });
    });
}

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.js":
/*!*********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.js ***!
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

var _IconLike = __webpack_require__(/*! ../../../../../_icons_svg/icons_like/icon_like/IconLike */ "./src/_icons_svg/icons_like/icon_like/IconLike.js");

var _IconLike2 = _interopRequireDefault(_IconLike);

var _PLProductCompare = __webpack_require__(/*! ../../../../../component/pl_product/compare/PLProductCompare */ "./src/component/pl_product/compare/PLProductCompare.js");

var _PLProductCompare2 = _interopRequireDefault(_PLProductCompare);

var _StarsRate = __webpack_require__(/*! ../../../../../component/stars_rate/_main/StarsRate */ "./src/component/stars_rate/_main/StarsRate.js");

var _StarsRate2 = _interopRequireDefault(_StarsRate);

__webpack_require__(/*! ./PhoneDetailHead.scss */ "./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PhoneDetailHead.propTypes = {};

//

//

//
function PhoneDetailHead(_ref) {
    var id = _ref.id,
        name = _ref.name,
        img = _ref.img,
        product_type = _ref.product_type,
        type = _ref.type,
        rating_avg = _ref.rating_avg,
        rating_count = _ref.rating_count,
        count_like = _ref.count_like,
        goToRating = _ref.goToRating,
        handleLike = _ref.handleLike,
        handleShare = _ref.handleShare;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PhoneDetailHead padding-y-10px border-bottom-blur font-13px' },
        _react2.default.createElement(
            'div',
            { className: 'PhoneDetailHead_row flex-between-center' },
            _react2.default.createElement(
                'div',
                { className: 'PhoneDetailHead_left display-flex align-items-center' },
                _react2.default.createElement(
                    'h1',
                    { className: 'PhoneDetailHead_name margin-right-10px font-700 font-18px' },
                    _react2.default.createElement(
                        'span',
                        null,
                        name
                    ),
                    type ? _react2.default.createElement(
                        'span',
                        { className: 'margin-left-5px' },
                        '(',
                        type,
                        ')'
                    ) : null
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'PhoneDetailHead_rate_compare display-flex align-items-center' },
                    rating_avg ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_StarsRate2.default, {
                                rate_avg: rating_avg,
                                size_icon: '13px',
                                color: 'var(--border-fashion)'
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                className: 'margin-left-5px text-blue cursor-pointer',
                                onClick: goToRating
                            },
                            rating_count,
                            ' \u0110\xE1nh gi\xE1'
                        )
                    ) : null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PhoneDetailHead_compare margin-left-10px inline-block' },
                        _react2.default.createElement(_PLProductCompare2.default, {
                            id: id,
                            name: name,
                            img: img,
                            product_type: product_type
                        })
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'display-flex align-items-center' },
                _react2.default.createElement(
                    'button',
                    {
                        className: 'PhoneDetailHead_like_share inline-flex align-items-center btn btn-active margin-right-10px padding-x-5px padding-y-2px brs-3px bg-blue text-white font-11px cursor-pointer',
                        type: 'button',
                        onClick: handleLike
                    },
                    _react2.default.createElement(_IconLike2.default, {
                        size_icon: '14px',
                        stroke: 'none',
                        fill: 'var(--white)'
                    }),
                    _react2.default.createElement(
                        'span',
                        { className: 'margin-left-3px' },
                        'Like ',
                        count_like
                    )
                ),
                _react2.default.createElement(
                    'button',
                    {
                        className: 'PhoneDetailHead_like_share inline-flex align-items-center btn btn-active padding-x-5px padding-y-2px brs-3px bg-blue text-white font-11px cursor-pointer',
                        type: 'button',
                        onClick: handleShare
                    },
                    _react2.default.createElement(
                        'span',
                        null,
                        'Share'
                    )
                )
            )
        )
    );
}

exports.default = PhoneDetailHead;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.js":
/*!******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//

//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Constant = __webpack_require__(/*! ../../../../../../_constant/Constant */ "./src/_constant/Constant.js");

var _handleScrollSmooth = __webpack_require__(/*! ../../../../../../_some_function/handleScrollSmooth */ "./src/_some_function/handleScrollSmooth.js");

var _PLDetailProductMb = __webpack_require__(/*! ../mobile/PLDetailProductMb */ "./src/pages/phone_laptop/pages/detail/product/mobile/PLDetailProductMb.js");

var _PLDetailProductMb2 = _interopRequireDefault(_PLDetailProductMb);

var _PLDetailProductPc = __webpack_require__(/*! ../pc/PLDetailProductPc */ "./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.js");

var _PLDetailProductPc2 = _interopRequireDefault(_PLDetailProductPc);

__webpack_require__(/*! ./PLDetailProduct.scss */ "./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDetailProduct.propTypes = {};

//
function PLDetailProduct(props) {
    //
    var _props$product_obj = props.product_obj,
        group_arr = _props$product_obj.group_arr,
        has_two_price = _props$product_obj.has_two_price,
        offer_obj = _props$product_obj.offer_obj,
        offer_2_obj = _props$product_obj.offer_2_obj;

    //

    var type = group_arr[0].find(function (item) {
        return item.is_active;
    }).title;
    var is_price_2 = has_two_price && props.price_ix == 1;

    var c_offer_obj = is_price_2 ? offer_2_obj : offer_obj;

    //
    var ref_rating_elm = (0, _react.useRef)(null);

    // -------

    //
    function goToRating() {
        (0, _handleScrollSmooth.handleScrollSmooth)(function () {
            ref_rating_elm.current.scrollIntoView();
        });
    }

    //
    var more_props = {
        type: type,
        is_price_2: is_price_2,
        c_offer_obj: c_offer_obj,
        ref_rating_elm: ref_rating_elm,
        goToRating: goToRating
    };

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDetailProduct' },
        _Constant.IS_MOBILE ? _react2.default.createElement(_PLDetailProductMb2.default, _extends({}, props, more_props)) : _react2.default.createElement(_PLDetailProductPc2.default, _extends({}, props, more_props))
    );
}

exports.default = PLDetailProduct;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/product/mobile/PLDetailProductMb.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/product/mobile/PLDetailProductMb.js ***!
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

var _PLDetailCarousel = __webpack_require__(/*! ../../_components/carousel/_main/PLDetailCarousel */ "./src/pages/phone_laptop/pages/detail/_components/carousel/_main/PLDetailCarousel.js");

var _PLDetailCarousel2 = _interopRequireDefault(_PLDetailCarousel);

var _PLDetailPolicy = __webpack_require__(/*! ../../_components/policy/_main/PLDetailPolicy */ "./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.js");

var _PLDetailPolicy2 = _interopRequireDefault(_PLDetailPolicy);

var _PLDetailPost = __webpack_require__(/*! ../../_components/short_post/_main/PLDetailPost */ "./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.js");

var _PLDetailPost2 = _interopRequireDefault(_PLDetailPost);

var _PLDetailGroups = __webpack_require__(/*! ../../_components/groups/_main/PLDetailGroups */ "./src/pages/phone_laptop/pages/detail/_components/groups/_main/PLDetailGroups.js");

var _PLDetailGroups2 = _interopRequireDefault(_PLDetailGroups);

var _PLDetailArea = __webpack_require__(/*! ../../_components/area/PLDetailArea */ "./src/pages/phone_laptop/pages/detail/_components/area/PLDetailArea.js");

var _PLDetailArea2 = _interopRequireDefault(_PLDetailArea);

var _PLDOnePrice = __webpack_require__(/*! ../../_components/price/one_price/PLDOnePrice */ "./src/pages/phone_laptop/pages/detail/_components/price/one_price/PLDOnePrice.js");

var _PLDOnePrice2 = _interopRequireDefault(_PLDOnePrice);

var _PLDTwoPrice = __webpack_require__(/*! ../../_components/price/two_price/PLDTwoPrice */ "./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.js");

var _PLDTwoPrice2 = _interopRequireDefault(_PLDTwoPrice);

var _PLDetailPromotion = __webpack_require__(/*! ../../_components/promotion/_main/PLDetailPromotion */ "./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.js");

var _PLDetailPromotion2 = _interopRequireDefault(_PLDetailPromotion);

var _PLDetailMarket = __webpack_require__(/*! ../../_components/market/_main/PLDetailMarket */ "./src/pages/phone_laptop/pages/detail/_components/market/_main/PLDetailMarket.js");

var _PLDetailMarket2 = _interopRequireDefault(_PLDetailMarket);

var _PLDetailOffer = __webpack_require__(/*! ../../_components/offer/_main/PLDetailOffer */ "./src/pages/phone_laptop/pages/detail/_components/offer/_main/PLDetailOffer.js");

var _PLDetailOffer2 = _interopRequireDefault(_PLDetailOffer);

var _PLDetailShortConfig = __webpack_require__(/*! ../../_components/short_config/_main/PLDetailShortConfig */ "./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.js");

var _PLDetailShortConfig2 = _interopRequireDefault(_PLDetailShortConfig);

var _PLDetailBtnBuy = __webpack_require__(/*! ../../_components/btn_buy/_main/PLDetailBtnBuy */ "./src/pages/phone_laptop/pages/detail/_components/btn_buy/_main/PLDetailBtnBuy.js");

var _PLDetailBtnBuy2 = _interopRequireDefault(_PLDetailBtnBuy);

var _PLDetailInstallment = __webpack_require__(/*! ../../_components/installment/_main/PLDetailInstallment */ "./src/pages/phone_laptop/pages/detail/_components/installment/_main/PLDetailInstallment.js");

var _PLDetailInstallment2 = _interopRequireDefault(_PLDetailInstallment);

var _PLDetailCallOrder = __webpack_require__(/*! ../../_components/call_order/PLDetailCallOrder */ "./src/pages/phone_laptop/pages/detail/_components/call_order/PLDetailCallOrder.js");

var _PLDetailCallOrder2 = _interopRequireDefault(_PLDetailCallOrder);

var _PhoneDetailHead = __webpack_require__(/*! ../../head/PhoneDetailHead */ "./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.js");

var _PhoneDetailHead2 = _interopRequireDefault(_PhoneDetailHead);

var _PLDetailOldProduct = __webpack_require__(/*! ../../_components/old_product/_main/PLDetailOldProduct */ "./src/pages/phone_laptop/pages/detail/_components/old_product/_main/PLDetailOldProduct.js");

var _PLDetailOldProduct2 = _interopRequireDefault(_PLDetailOldProduct);

var _PLDetailRating = __webpack_require__(/*! ../../_components/rating/_main/PLDetailRating */ "./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.js");

var _PLDetailRating2 = _interopRequireDefault(_PLDetailRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// import './PLDetailProductMb.scss';

//
PLDetailProductMb.propTypes = {};

//

//
function PLDetailProductMb(_ref) {
    var product_obj = _ref.product_obj,
        price_ix = _ref.price_ix,
        type = _ref.type,
        is_price_2 = _ref.is_price_2,
        c_offer_obj = _ref.c_offer_obj,
        ref_rating_elm = _ref.ref_rating_elm,
        goToRating = _ref.goToRating,
        handleChooseType = _ref.handleChooseType,
        choosePrice = _ref.choosePrice,
        openDetailGift = _ref.openDetailGift,
        callToOrder = _ref.callToOrder,
        handleBuyNow = _ref.handleBuyNow,
        handleLike = _ref.handleLike,
        handleShare = _ref.handleShare,
        openDetailRateImg = _ref.openDetailRateImg,
        openDetailRate = _ref.openDetailRate,
        handleSendDiscuss = _ref.handleSendDiscuss,
        openDetailCarousel = _ref.openDetailCarousel,
        openDetailPost = _ref.openDetailPost,
        openDetailAddress = _ref.openDetailAddress,
        openDetailMarket = _ref.openDetailMarket,
        openDetailConfig = _ref.openDetailConfig;

    //
    var id = product_obj.id,
        name = product_obj.name,
        product_type = product_obj.product_type,
        img = product_obj.img,
        img_main = product_obj.img_main,
        new_price = product_obj.new_price,
        old_price = product_obj.old_price,
        discount = product_obj.discount,
        installment = product_obj.installment,
        is_coming = product_obj.is_coming,
        in_stock = product_obj.in_stock,
        rating_arr = product_obj.rating_arr,
        rating_avg = product_obj.rating_avg,
        rating_count = product_obj.rating_count,
        rate_img_arr = product_obj.rate_img_arr,
        rate_img_count = product_obj.rate_img_count,
        rate_arr = product_obj.rate_arr,
        count_like = product_obj.count_like,
        has_two_price = product_obj.has_two_price,
        new_price_2 = product_obj.new_price_2,
        title_price_2 = product_obj.title_price_2,
        carousel_choice_arr = product_obj.carousel_choice_arr,
        specific_vid_pics = product_obj.specific_vid_pics,
        has_link_more = product_obj.has_link_more,
        link_more_name = product_obj.link_more_name,
        link_more_to = product_obj.link_more_to,
        policy_arr = product_obj.policy_arr,
        post = product_obj.post,
        group_arr = product_obj.group_arr,
        short_config_arr = product_obj.short_config_arr,
        installment_arr = product_obj.installment_arr,
        province = product_obj.province,
        old_product_obj = product_obj.old_product_obj,
        promotion_obj = product_obj.promotion_obj,
        promotion_2_obj = product_obj.promotion_2_obj,
        offer_obj = product_obj.offer_obj,
        offer_2_obj = product_obj.offer_2_obj;

    //

    return _react2.default.createElement(
        'div',
        { className: 'PLDetailProductMb' },
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLDetailCarousel2.default, {
                choice_arr: carousel_choice_arr,
                specific_vid_pics: specific_vid_pics,
                has_link_more: has_link_more,
                link_more_to: link_more_to,
                link_more_name: link_more_name,
                openDetailCarousel: openDetailCarousel
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PhoneDetailHead2.default, {
                id: id,
                name: name,
                product_type: product_type,
                img: img,
                type: type
                //
                , rating_avg: rating_avg,
                rating_count: rating_count,
                count_like: count_like
                //
                , goToRating: goToRating,
                handleLike: handleLike,
                handleShare: handleShare
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLDetailGroups2.default, {
                group_arr: group_arr,
                handleChooseType: handleChooseType
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PLDetailArea2.default, {
                province: province,
                openDetailAddress: openDetailAddress
            })
        ),
        has_two_price ? _react2.default.createElement(_PLDTwoPrice2.default, {
            new_price: new_price,
            old_price: old_price,
            new_price_2: new_price_2,
            title_price_2: title_price_2,
            price_ix: price_ix,
            choosePrice: choosePrice
        }) : _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLDOnePrice2.default, {
                new_price: new_price,
                old_price: old_price,
                discount: discount,
                installment: installment
            })
        ),
        _react2.default.createElement(
            'div',
            {
                className: 'margin-bottom-15px ' + (has_two_price ? 'PLDetailProduct_box_price padding-10px ' + (is_price_2 ? 'PLDetailProduct_box_price-2' : 'PLDetailProduct_box_price-1') : '')
            },
            _react2.default.createElement(
                'div',
                { className: 'margin-bottom-15px' },
                _react2.default.createElement(_PLDetailPromotion2.default, {
                    promotion_obj: is_price_2 ? promotion_2_obj : promotion_obj,
                    openDetailGift: openDetailGift
                })
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'margin-bottom-15px ' + (is_price_2 ? '' : 'padding-bottom-10px border-bottom-blur')
                },
                _react2.default.createElement(_PLDetailMarket2.default, {
                    is_coming: is_coming,
                    in_stock: in_stock,
                    use_see_market: !is_price_2,
                    openDetailMarket: openDetailMarket
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'margin-bottom-10px' },
                _react2.default.createElement(_PLDetailBtnBuy2.default, {
                    is_price_2: is_price_2,
                    new_price_2: new_price_2,
                    handleBuyNow: handleBuyNow
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'margin-bottom-10px' },
                _react2.default.createElement(_PLDetailInstallment2.default, { installment_arr: installment_arr })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PLDetailCallOrder2.default, { callToOrder: callToOrder })
            ),
            c_offer_obj ? _react2.default.createElement(
                'div',
                { className: 'margin-top-20px' },
                _react2.default.createElement(_PLDetailOffer2.default, { offer_obj: c_offer_obj })
            ) : null
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLDetailPolicy2.default, { policy_arr: policy_arr })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLDetailOldProduct2.default, { old_product_obj: old_product_obj })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLDetailShortConfig2.default, {
                name: name,
                type: type,
                short_config_arr: short_config_arr,
                openDetailConfig: openDetailConfig
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement('img', {
                className: 'w-100per object-fit-cover',
                src: img_main,
                alt: ''
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PLDetailPost2.default, { post: post, openDetailPost: openDetailPost })
        ),
        _react2.default.createElement(
            'div',
            { ref: ref_rating_elm },
            _react2.default.createElement(_PLDetailRating2.default, {
                product_id: id,
                product_name: name,
                rating_arr: rating_arr,
                rating_avg: rating_avg,
                rating_count: rating_count
                //
                , rate_img_arr: rate_img_arr,
                rate_img_count: rate_img_count,
                rate_arr: rate_arr
                //
                , openDetailRateImg: openDetailRateImg,
                openDetailRate: openDetailRate,
                handleSendDiscuss: handleSendDiscuss
            })
        )
    );
}

exports.default = PLDetailProductMb;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.js ***!
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

var _PLDetailCarousel = __webpack_require__(/*! ../../_components/carousel/_main/PLDetailCarousel */ "./src/pages/phone_laptop/pages/detail/_components/carousel/_main/PLDetailCarousel.js");

var _PLDetailCarousel2 = _interopRequireDefault(_PLDetailCarousel);

var _PLDetailPolicy = __webpack_require__(/*! ../../_components/policy/_main/PLDetailPolicy */ "./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.js");

var _PLDetailPolicy2 = _interopRequireDefault(_PLDetailPolicy);

var _PLDetailPost = __webpack_require__(/*! ../../_components/short_post/_main/PLDetailPost */ "./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.js");

var _PLDetailPost2 = _interopRequireDefault(_PLDetailPost);

var _PLDetailGroups = __webpack_require__(/*! ../../_components/groups/_main/PLDetailGroups */ "./src/pages/phone_laptop/pages/detail/_components/groups/_main/PLDetailGroups.js");

var _PLDetailGroups2 = _interopRequireDefault(_PLDetailGroups);

var _PLDetailArea = __webpack_require__(/*! ../../_components/area/PLDetailArea */ "./src/pages/phone_laptop/pages/detail/_components/area/PLDetailArea.js");

var _PLDetailArea2 = _interopRequireDefault(_PLDetailArea);

var _PLDOnePrice = __webpack_require__(/*! ../../_components/price/one_price/PLDOnePrice */ "./src/pages/phone_laptop/pages/detail/_components/price/one_price/PLDOnePrice.js");

var _PLDOnePrice2 = _interopRequireDefault(_PLDOnePrice);

var _PLDTwoPrice = __webpack_require__(/*! ../../_components/price/two_price/PLDTwoPrice */ "./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.js");

var _PLDTwoPrice2 = _interopRequireDefault(_PLDTwoPrice);

var _PLDetailPromotion = __webpack_require__(/*! ../../_components/promotion/_main/PLDetailPromotion */ "./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.js");

var _PLDetailPromotion2 = _interopRequireDefault(_PLDetailPromotion);

var _PLDetailMarket = __webpack_require__(/*! ../../_components/market/_main/PLDetailMarket */ "./src/pages/phone_laptop/pages/detail/_components/market/_main/PLDetailMarket.js");

var _PLDetailMarket2 = _interopRequireDefault(_PLDetailMarket);

var _PLDetailOffer = __webpack_require__(/*! ../../_components/offer/_main/PLDetailOffer */ "./src/pages/phone_laptop/pages/detail/_components/offer/_main/PLDetailOffer.js");

var _PLDetailOffer2 = _interopRequireDefault(_PLDetailOffer);

var _PLDetailShortConfig = __webpack_require__(/*! ../../_components/short_config/_main/PLDetailShortConfig */ "./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.js");

var _PLDetailShortConfig2 = _interopRequireDefault(_PLDetailShortConfig);

var _PLDetailBtnBuy = __webpack_require__(/*! ../../_components/btn_buy/_main/PLDetailBtnBuy */ "./src/pages/phone_laptop/pages/detail/_components/btn_buy/_main/PLDetailBtnBuy.js");

var _PLDetailBtnBuy2 = _interopRequireDefault(_PLDetailBtnBuy);

var _PLDetailInstallment = __webpack_require__(/*! ../../_components/installment/_main/PLDetailInstallment */ "./src/pages/phone_laptop/pages/detail/_components/installment/_main/PLDetailInstallment.js");

var _PLDetailInstallment2 = _interopRequireDefault(_PLDetailInstallment);

var _PLDetailCallOrder = __webpack_require__(/*! ../../_components/call_order/PLDetailCallOrder */ "./src/pages/phone_laptop/pages/detail/_components/call_order/PLDetailCallOrder.js");

var _PLDetailCallOrder2 = _interopRequireDefault(_PLDetailCallOrder);

var _PhoneDetailHead = __webpack_require__(/*! ../../head/PhoneDetailHead */ "./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.js");

var _PhoneDetailHead2 = _interopRequireDefault(_PhoneDetailHead);

var _PLDetailOldProduct = __webpack_require__(/*! ../../_components/old_product/_main/PLDetailOldProduct */ "./src/pages/phone_laptop/pages/detail/_components/old_product/_main/PLDetailOldProduct.js");

var _PLDetailOldProduct2 = _interopRequireDefault(_PLDetailOldProduct);

var _PLDetailRating = __webpack_require__(/*! ../../_components/rating/_main/PLDetailRating */ "./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.js");

var _PLDetailRating2 = _interopRequireDefault(_PLDetailRating);

__webpack_require__(/*! ./PLDetailProductPc.scss */ "./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PLDetailProductPc.propTypes = {};

//

//
function PLDetailProductPc(_ref) {
    var product_obj = _ref.product_obj,
        price_ix = _ref.price_ix,
        type = _ref.type,
        is_price_2 = _ref.is_price_2,
        c_offer_obj = _ref.c_offer_obj,
        ref_rating_elm = _ref.ref_rating_elm,
        goToRating = _ref.goToRating,
        handleChooseType = _ref.handleChooseType,
        choosePrice = _ref.choosePrice,
        openDetailGift = _ref.openDetailGift,
        callToOrder = _ref.callToOrder,
        handleBuyNow = _ref.handleBuyNow,
        handleLike = _ref.handleLike,
        handleShare = _ref.handleShare,
        openDetailRateImg = _ref.openDetailRateImg,
        openDetailRate = _ref.openDetailRate,
        handleSendDiscuss = _ref.handleSendDiscuss,
        openDetailCarousel = _ref.openDetailCarousel,
        openDetailPost = _ref.openDetailPost,
        openDetailAddress = _ref.openDetailAddress,
        openDetailMarket = _ref.openDetailMarket,
        openDetailConfig = _ref.openDetailConfig;

    //
    var id = product_obj.id,
        name = product_obj.name,
        product_type = product_obj.product_type,
        img = product_obj.img,
        img_main = product_obj.img_main,
        new_price = product_obj.new_price,
        old_price = product_obj.old_price,
        discount = product_obj.discount,
        installment = product_obj.installment,
        is_coming = product_obj.is_coming,
        in_stock = product_obj.in_stock,
        rating_arr = product_obj.rating_arr,
        rating_avg = product_obj.rating_avg,
        rating_count = product_obj.rating_count,
        rate_img_arr = product_obj.rate_img_arr,
        rate_img_count = product_obj.rate_img_count,
        rate_arr = product_obj.rate_arr,
        count_like = product_obj.count_like,
        has_two_price = product_obj.has_two_price,
        new_price_2 = product_obj.new_price_2,
        title_price_2 = product_obj.title_price_2,
        carousel_choice_arr = product_obj.carousel_choice_arr,
        specific_vid_pics = product_obj.specific_vid_pics,
        has_link_more = product_obj.has_link_more,
        link_more_name = product_obj.link_more_name,
        link_more_to = product_obj.link_more_to,
        policy_arr = product_obj.policy_arr,
        post = product_obj.post,
        group_arr = product_obj.group_arr,
        short_config_arr = product_obj.short_config_arr,
        installment_arr = product_obj.installment_arr,
        old_product_obj = product_obj.old_product_obj,
        promotion_obj = product_obj.promotion_obj,
        promotion_2_obj = product_obj.promotion_2_obj,
        offer_obj = product_obj.offer_obj,
        offer_2_obj = product_obj.offer_2_obj;

    //

    return _react2.default.createElement(
        'div',
        { className: 'PLDetailProductPc' },
        _react2.default.createElement(
            'div',
            { className: 'margin-bottom-15px' },
            _react2.default.createElement(_PhoneDetailHead2.default, {
                id: id,
                name: name,
                product_type: product_type,
                img: img,
                type: type
                //
                , rating_avg: rating_avg,
                rating_count: rating_count,
                count_like: count_like
                //
                , goToRating: goToRating,
                handleLike: handleLike,
                handleShare: handleShare
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'PLDetailProductPc_row display-flex' },
            _react2.default.createElement(
                'div',
                { className: 'PLDetailProductPc_left flex-shrink-0' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_PLDetailCarousel2.default, {
                        choice_arr: carousel_choice_arr,
                        specific_vid_pics: specific_vid_pics,
                        has_link_more: has_link_more,
                        link_more_to: link_more_to,
                        link_more_name: link_more_name,
                        openDetailCarousel: openDetailCarousel
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-20px' },
                    _react2.default.createElement(_PLDetailPolicy2.default, { policy_arr: policy_arr })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-20px' },
                    _react2.default.createElement(_PLDetailOldProduct2.default, { old_product_obj: old_product_obj })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-20px' },
                    _react2.default.createElement('img', {
                        className: 'w-100per object-fit-cover',
                        src: img_main,
                        alt: '',
                        height: '500'
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-20px' },
                    _react2.default.createElement(_PLDetailPost2.default, {
                        post: post,
                        openDetailPost: openDetailPost
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { ref: ref_rating_elm, className: 'margin-bottom-20px' },
                    _react2.default.createElement(_PLDetailRating2.default, {
                        product_id: id,
                        product_name: name,
                        rating_arr: rating_arr,
                        rating_avg: rating_avg,
                        rating_count: rating_count
                        //
                        , rate_img_arr: rate_img_arr,
                        rate_img_count: rate_img_count,
                        rate_arr: rate_arr
                        //
                        , openDetailRateImg: openDetailRateImg,
                        openDetailRate: openDetailRate,
                        handleSendDiscuss: handleSendDiscuss
                    })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'PLDetailProductPc_right flex-grow-1' },
                _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-20px' },
                    _react2.default.createElement(_PLDetailGroups2.default, {
                        group_arr: group_arr,
                        handleChooseType: handleChooseType
                    })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_PLDetailArea2.default, { openDetailAddress: openDetailAddress })
                ),
                has_two_price ? _react2.default.createElement(_PLDTwoPrice2.default, {
                    new_price: new_price,
                    old_price: old_price,
                    new_price_2: new_price_2,
                    title_price_2: title_price_2,
                    price_ix: price_ix,
                    choosePrice: choosePrice
                }) : _react2.default.createElement(
                    'div',
                    { className: 'margin-bottom-20px' },
                    _react2.default.createElement(_PLDOnePrice2.default, {
                        new_price: new_price,
                        old_price: old_price,
                        discount: discount,
                        installment: installment
                    })
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'margin-bottom-20px ' + (has_two_price ? 'PLDetailProduct_box_price padding-10px ' + (is_price_2 ? 'PLDetailProduct_box_price-2' : 'PLDetailProduct_box_price-1') : '')
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'margin-bottom-20px' },
                        _react2.default.createElement(_PLDetailPromotion2.default, {
                            promotion_obj: is_price_2 ? promotion_2_obj : promotion_obj,
                            openDetailGift: openDetailGift
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'margin-bottom-20px ' + (is_price_2 ? '' : 'padding-bottom-10px border-bottom-blur')
                        },
                        _react2.default.createElement(_PLDetailMarket2.default, {
                            is_coming: is_coming,
                            in_stock: in_stock,
                            use_see_market: !is_price_2,
                            openDetailMarket: openDetailMarket
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'margin-bottom-10px' },
                        _react2.default.createElement(_PLDetailBtnBuy2.default, {
                            is_price_2: is_price_2,
                            new_price_2: new_price_2,
                            handleBuyNow: handleBuyNow
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'margin-bottom-10px' },
                        _react2.default.createElement(_PLDetailInstallment2.default, {
                            installment_arr: installment_arr
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_PLDetailCallOrder2.default, { callToOrder: callToOrder })
                    ),
                    c_offer_obj ? _react2.default.createElement(
                        'div',
                        { className: 'margin-top-20px' },
                        _react2.default.createElement(_PLDetailOffer2.default, { offer_obj: c_offer_obj })
                    ) : null
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_PLDetailShortConfig2.default, {
                        name: name,
                        type: type,
                        short_config_arr: short_config_arr,
                        openDetailConfig: openDetailConfig
                    })
                )
            )
        )
    );
}

exports.default = PLDetailProductPc;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.js":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.js ***!
  \********************************************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PhoneLaptopAPI = __webpack_require__(/*! ../../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI */ "./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js");

var _observerToDo = __webpack_require__(/*! ../../../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _PLDRltLinks = __webpack_require__(/*! ../links/_main/PLDRltLinks */ "./src/pages/phone_laptop/pages/detail/relative/links/_main/PLDRltLinks.js");

var _PLDRltLinks2 = _interopRequireDefault(_PLDRltLinks);

var _PLRowProducts = __webpack_require__(/*! ../../../../components/row_products/_main/PLRowProducts */ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.js");

var _PLRowProducts2 = _interopRequireDefault(_PLRowProducts);

__webpack_require__(/*! ./PLDetailRelative.scss */ "./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
var DEFAULT_LINK_ARR = [{ link_to: '', title: 'iPhone 12 (Mini, Pro, Pro Max)' }, { link_to: '', title: 'iPhone (iOS)' }, { link_to: '', title: '4 GB ' }, { link_to: '', title: 'Chơi game / Cấu hình cao' }, { link_to: '', title: '64 GB' }, { link_to: '', title: 'Chụp góc rộng' }, { link_to: '', title: 'Chụp xoá phông' }, { link_to: '', title: 'Chụp zoom xa' }, { link_to: '', title: 'Kháng nước, bụi' }, { link_to: '', title: 'Tràn viền' }, { link_to: '', title: 'Mỏng nhẹ' }, { link_to: '', title: 'Mặt lưng kính' }];

//
PLDetailRelative.propTypes = {
    product_id: _propTypes2.default.number
};

//
function PLDetailRelative(_ref) {

    //
    var getData_API_Relative = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _PhoneLaptopAPI.API_PhoneLaptop_L)({
                                pk: product_id,
                                page: 1,
                                size: 10,
                                type: 'relative'
                            });

                        case 2:
                            res = _context.sent;


                            setStateObj(_extends({}, state_obj, {
                                product_arr: res.data.data,
                                link_arr: DEFAULT_LINK_ARR,
                                has_fetched: true
                            }));

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_Relative() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var product_id = _ref.product_id;

    //
    var _useState = (0, _react.useState)({
        product_arr: [],
        link_arr: [] || 0,
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var product_arr = state_obj.product_arr,
        link_arr = state_obj.link_arr,
        has_fetched = state_obj.has_fetched;

    //

    var ref_relative = (0, _react.useRef)(null);

    //
    (0, _react.useEffect)(function () {
        (0, _observerToDo2.default)({
            elm: ref_relative.current,
            callback: getData_API_Relative
        });
    }, []);return _react2.default.createElement(
        'div',
        { ref: ref_relative, className: 'PLDetailRelative' },
        _react2.default.createElement(
            'h2',
            { className: 'PLDetailRelative_title margin-bottom-15px font-700 font-20px' },
            'Xem th\xEAm \u0111i\u1EC7n tho\u1EA1i kh\xE1c'
        ),
        has_fetched ? _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(
                'div',
                { className: 'margin-bottom-10px' },
                _react2.default.createElement(_PLDRltLinks2.default, { link_arr: link_arr })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PLRowProducts2.default, { product_arr: product_arr })
            )
        ) : _react2.default.createElement('div', { className: 'PLDetailRelative_not_fetched' })
    );
}

exports.default = PLDetailRelative;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/relative/links/_main/PLDRltLinks.js":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/relative/links/_main/PLDRltLinks.js ***!
  \*********************************************************************************/
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

var _PLDRltLinksItem = __webpack_require__(/*! ../item/PLDRltLinksItem */ "./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.js");

var _PLDRltLinksItem2 = _interopRequireDefault(_PLDRltLinksItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDRltLinks.propTypes = {};

//

//
function PLDRltLinks(_ref) {
    var link_arr = _ref.link_arr;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDRltLinks' },
        _react2.default.createElement(
            'ul',
            { className: 'PLDRltLinks_row display-flex flex-wrap list-none' },
            link_arr.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    {
                        key: ix,
                        className: 'PLDRltLinks_item margin-right-10px margin-bottom-10px'
                    },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: item.link_to, className: 'color-inherit' },
                        _react2.default.createElement(_PLDRltLinksItem2.default, { title: item.title })
                    )
                );
            })
        )
    );
}

exports.default = PLDRltLinks;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.js":
/*!************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./PLDRltLinksItem.scss */ "./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PLDRltLinksItem.propTypes = {};

//

//
function PLDRltLinksItem(_ref) {
    var title = _ref.title;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PLDRltLinksItem padding-x-15px padding-y-5px border-blur' },
        title
    );
}

exports.default = PLDRltLinksItem;

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.js":
/*!************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.js ***!
  \************************************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PhoneLaptopAPI = __webpack_require__(/*! ../../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI */ "./src/api/api_django_no_token/phone_laptop/PhoneLaptopAPI.js");

var _observerToDo = __webpack_require__(/*! ../../../../../../_some_function/observerToDo */ "./src/_some_function/observerToDo.js");

var _observerToDo2 = _interopRequireDefault(_observerToDo);

var _PLRowProducts = __webpack_require__(/*! ../../../../components/row_products/_main/PLRowProducts */ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.js");

var _PLRowProducts2 = _interopRequireDefault(_PLRowProducts);

__webpack_require__(/*! ./PLDetailSeen.scss */ "./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PLDetailSeen.propTypes = {
    product_id: _propTypes2.default.number
};

//
function PLDetailSeen(_ref) {

    //
    var getData_API_Relative = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _PhoneLaptopAPI.API_PhoneLaptop_L)({
                                pk: product_id,
                                page: 1,
                                size: 10,
                                type: 'seen'
                            });

                        case 2:
                            res = _context.sent;


                            setStateObj(_extends({}, state_obj, {
                                product_arr: res.data.data,
                                has_fetched: true
                            }));

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_Relative() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var product_id = _ref.product_id;

    //
    var _useState = (0, _react.useState)({
        product_arr: [],
        has_fetched: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var product_arr = state_obj.product_arr,
        link_arr = state_obj.link_arr,
        has_fetched = state_obj.has_fetched;

    //

    var ref_relative = (0, _react.useRef)(null);

    //
    (0, _react.useEffect)(function () {
        (0, _observerToDo2.default)({
            elm: ref_relative.current,
            callback: getData_API_Relative
        });
    }, []);return _react2.default.createElement(
        'div',
        { ref: ref_relative, className: 'PLDetailSeen' },
        _react2.default.createElement(
            'h2',
            { className: 'PLDetailSeen_title margin-bottom-15px font-700 font-20px' },
            '\u0110i\u1EC7n tho\u1EA1i b\u1EA1n \u0111\xE3 xem'
        ),
        has_fetched ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PLRowProducts2.default, { product_arr: product_arr })
        ) : _react2.default.createElement('div', { className: 'PLDetailSeen_not_fetched' })
    );
}

exports.default = PLDetailSeen;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_post/IconsPost.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_post/IconsPost.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* media */\n@media (max-width: var(--sm)) {\n  .IconsPost {\n    width: 1.2rem;\n    height: 1.2rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/_icons_svg/icons_post/IconsPost.scss"],"names":[],"mappings":"AACA,UAAA;AAEA;EACI;IACI,aAAA;IACA,cAAA;EADN;AACF","sourcesContent":["\r\n/* media */\r\n\r\n@media (max-width: var(--sm)){\r\n    .IconsPost{\r\n        width: 1.2rem;\r\n        height: 1.2rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.scss ***!
  \***************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLBarsRateItem_star {\n  width: 25px;\n}\n\n.PLBarsRateItem_bar {\n  height: 4px;\n}\n\n.PLBarsRateItem_percent {\n  width: 35px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;AACJ;;AAEA;EACI,WAAA;AACJ;;AAEA;EACI,WAAA;AACJ","sourcesContent":[".PLBarsRateItem_star {\r\n    width: 25px;\r\n}\r\n\r\n.PLBarsRateItem_bar {\r\n    height: 4px;\r\n}\r\n\r\n.PLBarsRateItem_percent {\r\n    width: 35px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/_main/PLComments.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/_main/PLComments.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLComments .Pagination {\n  margin-left: 0;\n}\n.PLComments .PaginationItem_contain {\n  background: var(--f1);\n}\n.PLComments .PaginationItem_contain-active {\n  border: none;\n  color: inherit;\n  background: var(--ccc);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/comments/_main/PLComments.scss"],"names":[],"mappings":"AACI;EACI,cAAA;AAAR;AAGI;EACI,qBAAA;AADR;AAGI;EACI,YAAA;EACA,cAAA;EACA,sBAAA;AADR","sourcesContent":[".PLComments{\r\n    .Pagination{\r\n        margin-left: 0;\r\n    }\r\n    // .\r\n    .PaginationItem_contain {\r\n        background: var(--f1);\r\n    }\r\n    .PaginationItem_contain-active {\r\n        border: none;\r\n        color: inherit;\r\n        background: var(--ccc);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLCmtItem_name_first {\n  width: 25px;\n  height: 25px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ","sourcesContent":[".PLCmtItem_name_first{\r\n    width: 25px;\r\n    height: 25px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.scss ***!
  \**********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLCommentsInput .InputFile {\n  width: auto;\n  height: auto;\n}\n.PLCommentsInput .IconsInput {\n  fill: currentColor;\n  stroke: none;\n}\n.PLCommentsInput .ImgVidPreview {\n  display: flex;\n  overflow-x: auto;\n}\n.PLCommentsInput .ImgVidPreviewItem {\n  flex-shrink: 0;\n  position: relative;\n  width: 170px;\n  height: 75px;\n  padding: 10px;\n}\n.PLCommentsInput .ImgVidPreviewItem_delete {\n  left: auto;\n  right: 0;\n}\n.PLCommentsInput .ImgVidPreviewItem__icon-arrow {\n  background-color: var(--shadow-8);\n}\n\n.PLCommentsInput_textarea {\n  resize: none;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EACA,YAAA;AAAR;AAEI;EACI,kBAAA;EACA,YAAA;AAAR;AAGI;EACI,aAAA;EAEA,gBAAA;AAFR;AAKI;EACI,cAAA;EAEA,kBAAA;EAEA,YAAA;EACA,YAAA;EACA,aAAA;AALR;AAQI;EACI,UAAA;EACA,QAAA;AANR;AASI;EACI,iCAAA;AAPR;;AAWA;EACI,YAAA;AARJ","sourcesContent":[".PLCommentsInput {\r\n    .InputFile {\r\n        width: auto;\r\n        height: auto;\r\n    }\r\n    .IconsInput{\r\n        fill: currentColor;\r\n        stroke: none;\r\n    }\r\n\r\n    .ImgVidPreview{\r\n        display: flex;\r\n\r\n        overflow-x: auto;\r\n    }\r\n    // .\r\n    .ImgVidPreviewItem{\r\n        flex-shrink: 0;\r\n\r\n        position: relative;\r\n\r\n        width: 170px;\r\n        height: 75px;\r\n        padding: 10px;\r\n    }\r\n    // ..\r\n    .ImgVidPreviewItem_delete{\r\n        left: auto;\r\n        right: 0;\r\n    }\r\n    // ..\r\n    .ImgVidPreviewItem__icon-arrow{\r\n        background-color: var(--shadow-8);\r\n    }\r\n}\r\n\r\n.PLCommentsInput_textarea {\r\n    resize: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLReplies_contain::before {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  bottom: 100%;\n  border-width: 0 8px 10px 8px;\n  border-style: solid;\n  border-color: transparent transparent var(--md-bg-fb) transparent;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EAEA,kBAAA;EACA,UAAA;EACA,YAAA;EAEA,4BAAA;EACA,mBAAA;EACA,iEAAA;AAFR","sourcesContent":[".PLReplies_contain {\r\n    &::before {\r\n        content: '';\r\n\r\n        position: absolute;\r\n        left: 15px;\r\n        bottom: 100%;\r\n\r\n        border-width: 0 8px 10px 8px;\r\n        border-style: solid;\r\n        border-color: transparent transparent var(--md-bg-fb) transparent;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/search/PLCmtSearch.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/search/PLCmtSearch.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLCmtSearch {\n  width: 240px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/comments/search/PLCmtSearch.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".PLCmtSearch {\r\n    width: 240px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/_main/PLRates.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/_main/PLRates.scss ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLRates_item:not(:first) {\n  border-top: 1px solid var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/rates/_main/PLRates.scss"],"names":[],"mappings":"AACI;EACI,uCAAA;AAAR","sourcesContent":[".PLRates_item{\r\n    &:not(:first){\r\n        border-top: 1px solid var(--md-bg-blur);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLRatesItemBody_service::after {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  bottom: 100%;\n  border-width: 0 5px 8px 5px;\n  border-style: solid;\n  border-color: transparent transparent var(--md-bg-fb-active) transparent;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.scss"],"names":[],"mappings":"AACI;EACI,WAAA;EAEA,kBAAA;EACA,UAAA;EACA,YAAA;EAEA,2BAAA;EACA,mBAAA;EACA,wEAAA;AAFR","sourcesContent":[".PLRatesItemBody_service {\r\n    &::after {\r\n        content: '';\r\n\r\n        position: absolute;\r\n        left: 10px;\r\n        bottom: 100%;\r\n\r\n        border-width: 0 5px 8px 5px;\r\n        border-style: solid;\r\n        border-color: transparent transparent var(--md-bg-fb-active) transparent;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLRIDiscuss_contain {\n  border-left: 4px solid var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.scss"],"names":[],"mappings":"AAAA;EACI,wCAAA;AACJ","sourcesContent":[".PLRIDiscuss_contain{\r\n    border-left: 4px solid var(--md-bg-blur);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLRItemFootLeft .IconsPost_cmt {\n  stroke: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.scss"],"names":[],"mappings":"AACI;EACI,mBAAA;AAAR","sourcesContent":[".PLRItemFootLeft{\r\n    .IconsPost_cmt{\r\n        stroke: var(--blue);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLRatesItemHead_icon_tick {\n  width: 14px;\n  height: 14px;\n  background-color: currentColor;\n}\n\n.PLRatesItemHead_rate .IconHeart_face {\n  fill: none;\n}\n.PLRatesItemHead_rate .IconHeart_heart {\n  fill: var(--fashion-mall);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,8BAAA;AACJ;;AAGI;EACI,UAAA;AAAR;AAEI;EACI,yBAAA;AAAR","sourcesContent":[".PLRatesItemHead_icon_tick{\r\n    width: 14px;\r\n    height: 14px;\r\n    background-color: currentColor;\r\n}\r\n\r\n.PLRatesItemHead_rate{\r\n    .IconHeart_face{\r\n        fill: none;\r\n    }\r\n    .IconHeart_heart{\r\n        fill: var(--fashion-mall);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLRowProducts_item {\n  width: 240px;\n  max-width: 48%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,cAAA;AACJ","sourcesContent":[".PLRowProducts_item{\r\n    width: 240px;\r\n    max-width: 48%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/used_time/PLUsedTime.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/used_time/PLUsedTime.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLUsedTime:hover .PLUsedTime_contain {\n  display: block;\n}\n\n.PLUsedTime_contain {\n  width: 300px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/components/used_time/PLUsedTime.scss"],"names":[],"mappings":"AAEQ;EACI,cAAA;AADZ;;AAMA;EACI,YAAA;AAHJ","sourcesContent":[".PLUsedTime {\r\n    &:hover {\r\n        .PLUsedTime_contain {\r\n            display: block;\r\n        }\r\n    }\r\n}\r\n\r\n.PLUsedTime_contain{\r\n    width: 300px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDCarouselChoices_item {\n  width: 55px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;AACJ","sourcesContent":[".PLDCarouselChoices_item{\r\n    width: 55px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.scss ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDCarouselChoice_img-active {\n  border-color: var(--border-fashion);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.scss"],"names":[],"mappings":"AAAA;EACI,mCAAA;AACJ","sourcesContent":[".PLDCarouselChoice_img-active {\r\n    border-color: var(--border-fashion);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.scss ***!
  \***********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDOfferItem_icon {\n  width: 16px;\n  height: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ","sourcesContent":[".PLDOfferItem_icon{\r\n    width: 16px;\r\n    height: 16px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.scss ***!
  \***************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailPolicy_item {\n  width: 50%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;AACJ","sourcesContent":[".PLDetailPolicy_item{\r\n    width: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.scss":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.scss ***!
  \******************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailPolicyItem {\n  padding: 12px 20px 12px 35px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.scss"],"names":[],"mappings":"AAAA;EACI,4BAAA;AACJ","sourcesContent":[".PLDetailPolicyItem{\r\n    padding: 12px 20px 12px 35px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.scss ***!
  \***************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDTwoPrice-1 .PLDTwoPrice_one {\n  border-top: 4px solid var(--blue);\n  border-left: 1px solid var(--blue);\n  border-right: 1px solid var(--blue);\n  background-color: var(--md-bg-primary);\n}\n.PLDTwoPrice-1 .PLDTwoPrice_one_new {\n  color: var(--fashion-mall);\n}\n.PLDTwoPrice-1 .PLDTwoPrice_two {\n  border-bottom: 1px solid var(--blue);\n}\n\n.PLDTwoPrice-2 .PLDTwoPrice_one {\n  border-bottom: 1px solid var(--fashion-mall);\n}\n.PLDTwoPrice-2 .PLDTwoPrice_two {\n  border-top: 4px solid var(--fashion-mall);\n  border-left: 1px solid var(--fashion-mall);\n  border-right: 1px solid var(--fashion-mall);\n  background-color: var(--md-bg-primary);\n}\n.PLDTwoPrice-2 .PLDTwoPrice_two_new {\n  color: var(--fashion-mall);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.scss"],"names":[],"mappings":"AACI;EACI,iCAAA;EACA,kCAAA;EACA,mCAAA;EACA,sCAAA;AAAR;AAGI;EACI,0BAAA;AADR;AAII;EACI,oCAAA;AAFR;;AAMI;EACI,4CAAA;AAHR;AAMI;EACI,yCAAA;EACA,0CAAA;EACA,2CAAA;EACA,sCAAA;AAJR;AAOI;EACI,0BAAA;AALR","sourcesContent":[".PLDTwoPrice-1 {\r\n    .PLDTwoPrice_one {\r\n        border-top: 4px solid var(--blue);\r\n        border-left: 1px solid var(--blue);\r\n        border-right: 1px solid var(--blue);\r\n        background-color: var(--md-bg-primary);\r\n    }\r\n    // .\r\n    .PLDTwoPrice_one_new {\r\n        color: var(--fashion-mall);\r\n    }\r\n\r\n    .PLDTwoPrice_two {\r\n        border-bottom: 1px solid var(--blue);\r\n    }\r\n}\r\n.PLDTwoPrice-2 {\r\n    .PLDTwoPrice_one {\r\n        border-bottom: 1px solid var(--fashion-mall);\r\n    }\r\n\r\n    .PLDTwoPrice_two {\r\n        border-top: 4px solid var(--fashion-mall);\r\n        border-left: 1px solid var(--fashion-mall);\r\n        border-right: 1px solid var(--fashion-mall);\r\n        background-color: var(--md-bg-primary);\r\n    }\r\n    // .\r\n    .PLDTwoPrice_two_new {\r\n        color: var(--fashion-mall);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.scss ***!
  \*********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailPromotion_gifts {\n  border-top: 1px dashed var(--md-bg-blur);\n}\n\n.PLDetailPromotion_note {\n  border-top: 1px dashed var(--md-bg-blur);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.scss"],"names":[],"mappings":"AAAA;EACI,wCAAA;AACJ;;AAEA;EACI,wCAAA;AACJ","sourcesContent":[".PLDetailPromotion_gifts {\r\n    border-top: 1px dashed var(--md-bg-blur);\r\n}\r\n\r\n.PLDetailPromotion_note {\r\n    border-top: 1px dashed var(--md-bg-blur);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.scss ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDPromotionGifts_item {\n  max-width: 140px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":[".PLDPromotionGifts_item {\r\n    max-width: 140px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.scss ***!
  \*******************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDPromotionItem_number {\n  width: 16px;\n  height: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ","sourcesContent":[".PLDPromotionItem_number{\r\n    width: 16px;\r\n    height: 16px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.scss ***!
  \***************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailRating_see_all {\n  width: 48%;\n}\n\n.PLDetailRating_btn_rate {\n  width: 48%;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;AACJ;;AAEA;EACI,UAAA;AACJ","sourcesContent":[".PLDetailRating_see_all{\r\n    width: 48%;\r\n}\r\n\r\n.PLDetailRating_btn_rate{\r\n    width: 48%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.scss ***!
  \*******************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDRatingHead_bars {\n  width: 40%;\n}\n\n.PLDRatingHead_pics {\n  width: 60%;\n  border-left: 1px solid var(--md-bg-blur);\n}\n\n.PLDRatingHead_pics_item {\n  width: 20%;\n  padding-left: 5px;\n  padding-top: 5px;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;AACJ;;AAEA;EACI,UAAA;EACA,wCAAA;AACJ;;AAEA;EACI,UAAA;EACA,iBAAA;EACA,gBAAA;EAEA,eAAA;AAAJ","sourcesContent":[".PLDRatingHead_bars {\r\n    width: 40%;\r\n}\r\n\r\n.PLDRatingHead_pics {\r\n    width: 60%;\r\n    border-left: 1px solid var(--md-bg-blur);\r\n}\r\n// ..\r\n.PLDRatingHead_pics_item {\r\n    width: 20%;\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n\r\n    cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.scss ***!
  \**************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailShortConfig_btn {\n  max-width: 340px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":[".PLDetailShortConfig_btn{\r\n    max-width: 340px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.scss ***!
  \************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDShortConfigItem_name {\n  width: 140px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ","sourcesContent":[".PLDShortConfigItem_name {\r\n    width: 140px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.scss ***!
  \*****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailPost {\n  padding-bottom: 40px;\n}\n\n.PLDetailPost_contain {\n  height: 450px;\n}\n\n.PLDetailPost_more {\n  height: 105px;\n  background-image: linear-gradient(to bottom, transparent, var(--md-bg-primary), var(--md-bg-primary));\n}\n\n.PLDetailPost_more_btn {\n  max-width: 340px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.scss"],"names":[],"mappings":"AAAA;EACI,oBAAA;AACJ;;AAEA;EACI,aAAA;AACJ;;AAEA;EACI,aAAA;EAEA,qGAAA;AAAJ;;AAQA;EACI,gBAAA;AALJ","sourcesContent":[".PLDetailPost{\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.PLDetailPost_contain {\r\n    height: 450px;\r\n}\r\n\r\n.PLDetailPost_more {\r\n    height: 105px;\r\n    \r\n    background-image: linear-gradient(\r\n        to bottom,\r\n        transparent,\r\n        var(--md-bg-primary),\r\n        var(--md-bg-primary)\r\n    );\r\n}\r\n// .\r\n.PLDetailPost_more_btn {\r\n    max-width: 340px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_main/PLDetail.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_main/PLDetail.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail_notice-success {\n  width: 250px;\n  max-width: 95vw;\n  height: 150px;\n}\n\n.PLDetail_relative {\n  margin-bottom: 30px;\n}\n\n.PLDetail_seen {\n  margin-bottom: 30px;\n}\n\n.PLDetail_comment {\n  width: 800px;\n  padding: 10px 24px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_main/PLDetail.scss"],"names":[],"mappings":"AACA;EACI,YAAA;EACA,eAAA;EACA,aAAA;AAAJ;;AAGA;EACI,mBAAA;AAAJ;;AAGA;EACI,mBAAA;AAAJ;;AAGA;EACI,YAAA;EACA,kBAAA;AAAJ","sourcesContent":["//\r\n.PLDetail_notice-success {\r\n    width: 250px;\r\n    max-width: 95vw;\r\n    height: 150px;\r\n}\r\n\r\n.PLDetail_relative{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.PLDetail_seen{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.PLDetail_comment{\r\n    width: 800px;\r\n    padding: 10px 24px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLCommentsMb.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLCommentsMb.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLCmtTotal_row {\n  display: block;\n}\n.PLDetail-mobile .PLComments_total_search {\n  display: block;\n  padding: 0;\n}\n.PLDetail-mobile .PLCmtTotal_count {\n  margin: 0 0 15px 0;\n}\n.PLDetail-mobile .PLCmtSearch {\n  width: 100%;\n  max-width: 400px;\n  margin-top: 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLCommentsMb.scss"],"names":[],"mappings":"AACI;EACI,cAAA;AAAR;AAGI;EACI,cAAA;EACA,UAAA;AADR;AAMI;EACI,kBAAA;AAJR;AAOI;EACI,WAAA;EACA,gBAAA;EACA,gBAAA;AALR","sourcesContent":[".PLDetail-mobile {\r\n    .PLCmtTotal_row {\r\n        display: block;\r\n    }\r\n\r\n    .PLComments_total_search{\r\n        display: block;\r\n        padding: 0;\r\n    }\r\n\r\n    // --------\r\n\r\n    .PLCmtTotal_count {\r\n        margin: 0 0 15px 0;\r\n    }\r\n    \r\n    .PLCmtSearch {\r\n        width: 100%;\r\n        max-width: 400px;\r\n        margin-top: 15px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDOnePriceMb.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDOnePriceMb.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDOnePrice {\n  padding: 0 10px;\n}\n.PLDetail-mobile .PLDOnePrice_new {\n  font-size: 16px;\n}\n.PLDetail-mobile .PLDOnePrice_old {\n  font-size: 14px;\n}\n.PLDetail-mobile .PLDOnePrice_discount {\n  font-size: 14px;\n}\n.PLDetail-mobile .PLDOnePrice_installment {\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDOnePriceMb.scss"],"names":[],"mappings":"AACI;EACI,eAAA;AAAR;AAGI;EACI,eAAA;AADR;AAII;EACI,eAAA;AAFR;AAKI;EACI,eAAA;AAHR;AAMI;EACI,eAAA;AAJR","sourcesContent":[".PLDetail-mobile {\r\n    .PLDOnePrice {\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .PLDOnePrice_new{\r\n        font-size: 16px;\r\n    }\r\n\r\n    .PLDOnePrice_old{\r\n        font-size: 14px;\r\n    }\r\n\r\n    .PLDOnePrice_discount{\r\n        font-size: 14px;\r\n    }\r\n\r\n    .PLDOnePrice_installment{\r\n        font-size: 12px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailAreaMb.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailAreaMb.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailArea {\n  padding: 0 10px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailAreaMb.scss"],"names":[],"mappings":"AACI;EACI,eAAA;AAAR","sourcesContent":[".PLDetail-mobile {\r\n    .PLDetailArea {\r\n        padding: 0 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailCarouselMb.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailCarouselMb.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDCarouselChoices {\n  padding: 0 10px 10px;\n}\n.PLDetail-mobile .PLDCarouselChoices_row {\n  width: 100%;\n  overflow-x: auto;\n}\n.PLDetail-mobile .PLDCarouselChoices_row::-webkit-scrollbar {\n  height: 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailCarouselMb.scss"],"names":[],"mappings":"AAGI;EACI,oBAAA;AAFR;AAKI;EACI,WAAA;EACA,gBAAA;AAHR;AAKQ;EACI,SAAA;AAHZ","sourcesContent":[".PLDetail-mobile {\r\n    // ------\r\n\r\n    .PLDCarouselChoices {\r\n        padding: 0 10px 10px;\r\n    }\r\n\r\n    .PLDCarouselChoices_row {\r\n        width: 100%;\r\n        overflow-x: auto;\r\n\r\n        &::-webkit-scrollbar {\r\n            height: 0;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailGroupsMb.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailGroupsMb.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailGroups {\n  padding: 0 10px;\n}\n.PLDetail-mobile .PLDGroupItem {\n  padding: 5px 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailGroupsMb.scss"],"names":[],"mappings":"AAEI;EACI,eAAA;AADR;AAII;EACI,iBAAA;AAFR","sourcesContent":[".PLDetail-mobile {\r\n\r\n    .PLDetailGroups {\r\n        padding: 0 10px;\r\n    }\r\n\r\n    .PLDGroupItem{\r\n        padding: 5px 15px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailMarket Mb.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailMarket Mb.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailMarket {\n  padding: 0 10px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailMarket%20Mb.scss"],"names":[],"mappings":"AACI;EACI,eAAA;AAAR","sourcesContent":[".PLDetail-mobile {\r\n    .PLDetailMarket  {\r\n        padding: 0 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPolicyMb.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPolicyMb.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailPolicy {\n  border-top: 5px solid var(--md-bg-blur);\n  border-bottom: 5px solid var(--md-bg-blur);\n}\n.PLDetail-mobile .PLDetailPolicy_item {\n  width: 100%;\n}\n.PLDetail-mobile .PLDetailPolicyItem {\n  padding: 10px 10px 10px 30px;\n}\n.PLDetail-mobile .PLDetailPolicyItem_icon {\n  left: 5px;\n}\n.PLDetail-mobile .PLDetailPolicyItem_icon svg {\n  width: 20px;\n  height: 20px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPolicyMb.scss"],"names":[],"mappings":"AACI;EACI,uCAAA;EACA,0CAAA;AAAR;AAGI;EACI,WAAA;AADR;AAMI;EACI,4BAAA;AAJR;AAOI;EACI,SAAA;AALR;AAOQ;EACI,WAAA;EACA,YAAA;AALZ","sourcesContent":[".PLDetail-mobile {\r\n    .PLDetailPolicy{\r\n        border-top: 5px solid var(--md-bg-blur);\r\n        border-bottom: 5px solid var(--md-bg-blur);\r\n    }\r\n\r\n    .PLDetailPolicy_item {\r\n        width: 100%;\r\n    }\r\n\r\n    // ------\r\n\r\n    .PLDetailPolicyItem {\r\n        padding: 10px 10px 10px 30px;\r\n    }\r\n\r\n    .PLDetailPolicyItem_icon {\r\n        left: 5px;\r\n\r\n        svg {\r\n            width: 20px;\r\n            height: 20px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPostMb.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPostMb.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailPost_contain {\n  padding: 10px;\n  font-size: 14px;\n}\n.PLDetail-mobile .PLDetailPost_contain h3 {\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPostMb.scss"],"names":[],"mappings":"AACI;EACI,aAAA;EACA,eAAA;AAAR;AAEQ;EACI,eAAA;AAAZ","sourcesContent":[".PLDetail-mobile{\r\n    .PLDetailPost_contain {\r\n        padding: 10px;\r\n        font-size: 14px;\r\n    \r\n        h3{\r\n            font-size: 16px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailProductMb.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailProductMb.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetail_breadcrumb {\n  padding: 10px;\n  white-space: nowrap;\n}\n.PLDetail-mobile .PLDetail_breadcrumb .BreadCrumb {\n  overflow: auto;\n}\n.PLDetail-mobile .PLDetail_comment {\n  width: 100%;\n  padding: 10px;\n}\n.PLDetail-mobile .PLDetail_seen {\n  margin-bottom: 15px;\n}\n.PLDetail-mobile .PLDetailOldProduct {\n  padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailProductMb.scss"],"names":[],"mappings":"AACI;EACI,aAAA;EACA,mBAAA;AAAR;AAEQ;EACI,cAAA;AAAZ;AAII;EACI,WAAA;EACA,aAAA;AAFR;AAKI;EACI,mBAAA;AAHR;AAQI;EACI,aAAA;AANR","sourcesContent":[".PLDetail-mobile {\r\n    .PLDetail_breadcrumb {\r\n        padding: 10px;\r\n        white-space: nowrap;\r\n\r\n        .BreadCrumb {\r\n            overflow: auto;\r\n        }\r\n    }\r\n\r\n    .PLDetail_comment {\r\n        width: 100%;\r\n        padding: 10px;\r\n    }\r\n\r\n    .PLDetail_seen {\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    // -----\r\n\r\n    .PLDetailOldProduct {\r\n        padding: 10px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPromotionMb.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPromotionMb.scss ***!
  \*******************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRatingMb.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRatingMb.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailRating {\n  padding: 10px;\n  border-radius: 0;\n}\n.PLDetail-mobile .PLDRatingHead_title {\n  margin-bottom: 10px;\n  font-size: 16px;\n}\n.PLDetail-mobile .PLDRatingHead_row {\n  display: block;\n}\n.PLDetail-mobile .PLDRatingHead_bars {\n  margin-bottom: 10px;\n  width: 100%;\n  max-width: 250px;\n  padding: 0;\n}\n.PLDetail-mobile .PLDRatingHead_pics {\n  width: 100%;\n  padding: 0;\n  border: none;\n}\n.PLDetail-mobile .PLRatesItemFoot {\n  font-size: 13px;\n}\n.PLDetail-mobile .PLRatesItemFoot_row {\n  display: block;\n}\n.PLDetail-mobile .PLRatesItemFoot_left {\n  margin-bottom: 5px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRatingMb.scss"],"names":[],"mappings":"AACI;EACI,aAAA;EACA,gBAAA;AAAR;AAKI;EACI,mBAAA;EACA,eAAA;AAHR;AAMI;EACI,cAAA;AAJR;AAQI;EACI,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;AANR;AAUI;EACI,WAAA;EACA,UAAA;EACA,YAAA;AARR;AAaI;EACI,eAAA;AAXR;AAcI;EACI,cAAA;AAZR;AAgBI;EACI,kBAAA;AAdR","sourcesContent":[".PLDetail-mobile {\r\n    .PLDetailRating {\r\n        padding: 10px;\r\n        border-radius: 0;\r\n    }\r\n\r\n    // ------\r\n\r\n    .PLDRatingHead_title{\r\n        margin-bottom: 10px;\r\n        font-size: 16px;\r\n    }\r\n\r\n    .PLDRatingHead_row{\r\n        display: block;\r\n    }\r\n\r\n    // .\r\n    .PLDRatingHead_bars{\r\n        margin-bottom: 10px;\r\n        width: 100%;\r\n        max-width: 250px;\r\n        padding: 0;\r\n    }\r\n\r\n    // .\r\n    .PLDRatingHead_pics {\r\n        width: 100%;\r\n        padding: 0;\r\n        border: none;\r\n    }\r\n\r\n    // ------\r\n\r\n    .PLRatesItemFoot{\r\n        font-size: 13px;\r\n    }\r\n\r\n    .PLRatesItemFoot_row{\r\n        display: block;\r\n    }\r\n    \r\n    // .\r\n    .PLRatesItemFoot_left{\r\n        margin-bottom: 5px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRelativeMb.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRelativeMb.scss ***!
  \******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailRelative_title {\n  margin-bottom: 10px;\n  padding: 0 10px;\n  font-size: 16px;\n}\n.PLDetail-mobile .PLDRltLinks {\n  white-space: nowrap;\n}\n.PLDetail-mobile .PLDRltLinks_row {\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n.PLDetail-mobile .PLDRltLinks_row::-webkit-scrollbar {\n  height: 0;\n}\n.PLDetail-mobile .PLDRltLinks_item {\n  margin: 0 5px 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRelativeMb.scss"],"names":[],"mappings":"AAEI;EACI,mBAAA;EACA,eAAA;EAEA,eAAA;AAFR;AAOI;EACI,mBAAA;AALR;AAQI;EACI,iBAAA;EACA,gBAAA;AANR;AAQQ;EACI,SAAA;AANZ;AAWI;EACI,eAAA;AATR","sourcesContent":[".PLDetail-mobile {\r\n\r\n    .PLDetailRelative_title{\r\n        margin-bottom: 10px;\r\n        padding: 0 10px;\r\n        \r\n        font-size: 16px;\r\n    }\r\n\r\n    // ------\r\n\r\n    .PLDRltLinks{\r\n        white-space: nowrap;\r\n    }\r\n\r\n    .PLDRltLinks_row {\r\n        flex-wrap: nowrap;\r\n        overflow-x: auto;\r\n\r\n        &::-webkit-scrollbar{\r\n            height: 0;\r\n        }\r\n    }\r\n\r\n    // .\r\n    .PLDRltLinks_item{\r\n        margin: 0 5px 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailSeenMb.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailSeenMb.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailSeen_title {\n  margin-bottom: 10px;\n  padding: 0 10px;\n  font-size: 16px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailSeenMb.scss"],"names":[],"mappings":"AAEI;EACI,mBAAA;EACA,eAAA;EACA,eAAA;AADR","sourcesContent":[".PLDetail-mobile {\r\n\r\n    .PLDetailSeen_title{\r\n        margin-bottom: 10px;\r\n        padding: 0 10px;\r\n        font-size: 16px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailShortConfigMb.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailShortConfigMb.scss ***!
  \*********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PLDetailShortConfig_title {\n  margin-bottom: 10px;\n  padding: 0 10px;\n  font-size: 16px;\n}\n.PLDetail-mobile .PLDShortConfigItem_name {\n  flex-shrink: 0;\n  width: 120px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailShortConfigMb.scss"],"names":[],"mappings":"AACI;EACI,mBAAA;EACA,eAAA;EAEA,eAAA;AADR;AAII;EACI,cAAA;EACA,YAAA;AAFR","sourcesContent":[".PLDetail-mobile {\r\n    .PLDetailShortConfig_title {\r\n        margin-bottom: 10px;\r\n        padding: 0 10px;\r\n\r\n        font-size: 16px;\r\n    }\r\n\r\n    .PLDShortConfigItem_name{\r\n        flex-shrink: 0;\r\n        width: 120px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PhoneDetailHeadMb.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PhoneDetailHeadMb.scss ***!
  \*****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetail-mobile .PhoneDetailHead {\n  padding: 10px;\n}\n.PLDetail-mobile .PhoneDetailHead_row {\n  display: block;\n}\n.PLDetail-mobile .PhoneDetailHead_left {\n  display: block;\n}\n.PLDetail-mobile .PhoneDetailHead_name {\n  margin-right: 0;\n}\n.PLDetail-mobile .PhoneDetailHead_rate_compare {\n  margin: 5px 0;\n}\n.PLDetail-mobile .PhoneDetailHead_compare {\n  margin-left: auto;\n}\n.PLDetail-mobile .PhoneDetailHead_like_share {\n  font-size: 12px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/_mobile_css/PhoneDetailHeadMb.scss"],"names":[],"mappings":"AACI;EACI,aAAA;AAAR;AAGI;EACI,cAAA;AADR;AAII;EACI,cAAA;AAFR;AAKI;EACI,eAAA;AAHR;AAMI;EACI,aAAA;AAJR;AAOI;EACI,iBAAA;AALR;AASI;EACI,eAAA;AAPR","sourcesContent":[".PLDetail-mobile{\r\n    .PhoneDetailHead{\r\n        padding: 10px;\r\n    }\r\n\r\n    .PhoneDetailHead_row{\r\n        display: block;\r\n    }\r\n\r\n    .PhoneDetailHead_left{\r\n        display: block;\r\n    }\r\n    // .\r\n    .PhoneDetailHead_name{\r\n        margin-right: 0;\r\n    }\r\n    // .\r\n    .PhoneDetailHead_rate_compare{\r\n        margin: 5px 0;\r\n    }\r\n    // ..\r\n    .PhoneDetailHead_compare{\r\n        margin-left: auto;\r\n    }\r\n    \r\n    // ..\r\n    .PhoneDetailHead_like_share{\r\n        font-size: 12px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.scss ***!
  \********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PhoneDetailHead_compare_icon {\n  width: 14px;\n  height: 14px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ","sourcesContent":[".PhoneDetailHead_compare_icon{\r\n    width: 14px;\r\n    height: 14px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailProduct_box_price {\n  border-width: 0px 1px 1px;\n  border-style: solid;\n}\n\n.PLDetailProduct_box_price-1 {\n  border-color: var(--blue);\n}\n\n.PLDetailProduct_box_price-2 {\n  border-color: var(--fashion-mall);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.scss"],"names":[],"mappings":"AACA;EACI,yBAAA;EACA,mBAAA;AAAJ;;AAEA;EACI,yBAAA;AACJ;;AACA;EACI,iCAAA;AAEJ","sourcesContent":["// ..\r\n.PLDetailProduct_box_price {\r\n    border-width: 0px 1px 1px;\r\n    border-style: solid;\r\n}\r\n.PLDetailProduct_box_price-1 {\r\n    border-color: var(--blue);\r\n}\r\n.PLDetailProduct_box_price-2 {\r\n    border-color: var(--fashion-mall);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.scss ***!
  \****************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailProductPc_left {\n  width: 710px;\n}\n\n.PLDetailProductPc_right {\n  margin-left: 30px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ;;AAEA;EACI,iBAAA;AACJ","sourcesContent":[".PLDetailProductPc_left {\r\n    width: 710px;\r\n}\r\n\r\n.PLDetailProductPc_right {\r\n    margin-left: 30px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.scss ***!
  \*******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailRelative_not_fetched {\n  height: 500px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".PLDetailRelative_not_fetched{\r\n    height: 500px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.scss ***!
  \***********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDRltLinksItem {\n  border-radius: 20px;\n}\n.PLDRltLinksItem:hover {\n  border-color: var(--blue);\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.scss"],"names":[],"mappings":"AAAA;EACI,mBAAA;AACJ;AACI;EACI,yBAAA;AACR","sourcesContent":[".PLDRltLinksItem{\r\n    border-radius: 20px;\r\n\r\n    &:hover{\r\n        border-color: var(--blue);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".PLDetailSeen_not_fetched {\n  height: 500px;\n}", "",{"version":3,"sources":["webpack://./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;AACJ","sourcesContent":[".PLDetailSeen_not_fetched{\r\n    height: 500px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./image/phone_360deg.png":
/*!********************************!*\
  !*** ./image/phone_360deg.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/0ca9b7a64d232a7045e419b471614395.png");

/***/ }),

/***/ "./image/phone_box.png":
/*!*****************************!*\
  !*** ./image/phone_box.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/9399f5145d6703679064bdb3dc21c9ad.png");

/***/ }),

/***/ "./image/phone_config.png":
/*!********************************!*\
  !*** ./image/phone_config.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/5891c2bc2c3b84407a8ab6aacd6e7f23.png");

/***/ }),

/***/ "./image/phone_img_main.jpg":
/*!**********************************!*\
  !*** ./image/phone_img_main.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/96bca100711a94baf9cc154a93f338d2.jpg");

/***/ }),

/***/ "./image/phone_post.png":
/*!******************************!*\
  !*** ./image/phone_post.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/774278ac9277f0e4108bb4a92455d1cf.png");

/***/ }),

/***/ "./image/phone_specific.png":
/*!**********************************!*\
  !*** ./image/phone_specific.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/db1b8d8147934f5fe39a92b168547b26.png");

/***/ }),

/***/ "./image/symbol_tgdd.png":
/*!*******************************!*\
  !*** ./image/symbol_tgdd.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/70faa3f5fa54eababfc6379ddca8a620.png");

/***/ }),

/***/ "./src/_icons_svg/icons_post/IconsPost.scss":
/*!**************************************************!*\
  !*** ./src/_icons_svg/icons_post/IconsPost.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsPost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./IconsPost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_post/IconsPost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsPost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsPost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.scss":
/*!******************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLBarsRateItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLBarsRateItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/bars_rate/item/PLBarsRateItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLBarsRateItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLBarsRateItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/_main/PLComments.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/_main/PLComments.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLComments_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLComments.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/_main/PLComments.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLComments_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLComments_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCmtItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLCmtItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/cmt/_main/PLCmtItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCmtItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCmtItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCommentsInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLCommentsInput.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/input/_main/PLCommentsInput.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCommentsInput_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCommentsInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLReplies_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLReplies.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/replies/_main/PLReplies.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLReplies_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLReplies_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/comments/search/PLCmtSearch.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/comments/search/PLCmtSearch.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCmtSearch_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLCmtSearch.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/comments/search/PLCmtSearch.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCmtSearch_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCmtSearch_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/_main/PLRates.scss":
/*!********************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/_main/PLRates.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRates_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLRates.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/_main/PLRates.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRates_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRates_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRatesItemBody_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLRatesItemBody.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/body/PLRatesItemBody.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRatesItemBody_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRatesItemBody_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRIDiscuss_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLRIDiscuss.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/discuss/_main/PLRIDiscuss.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRIDiscuss_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRIDiscuss_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRItemFootLeft_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLRItemFootLeft.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/foot/left/PLRItemFootLeft.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRItemFootLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRItemFootLeft_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRatesItemHead_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLRatesItemHead.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/rates/item/head/PLRatesItemHead.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRatesItemHead_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRatesItemHead_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRowProducts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLRowProducts.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/row_products/_main/PLRowProducts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRowProducts_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLRowProducts_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/components/used_time/PLUsedTime.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/phone_laptop/components/used_time/PLUsedTime.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLUsedTime_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./PLUsedTime.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/components/used_time/PLUsedTime.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLUsedTime_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLUsedTime_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.scss":
/*!********************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDCarouselChoices_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDCarouselChoices.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/carousel/choices/_main/PLDCarouselChoices.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDCarouselChoices_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDCarouselChoices_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.scss":
/*!******************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDCarouselChoice_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDCarouselChoice.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/carousel/choices/item/PLDCarouselChoice.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDCarouselChoice_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDCarouselChoice_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.scss":
/*!**************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDOfferItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDOfferItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/offer/item/PLDOfferItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDOfferItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDOfferItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailPolicy.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/policy/_main/PLDetailPolicy.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicy_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicy_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.scss":
/*!*********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicyItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailPolicyItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/policy/item/PLDetailPolicyItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicyItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicyItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDTwoPrice_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDTwoPrice.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/price/two_price/PLDTwoPrice.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDTwoPrice_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDTwoPrice_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.scss":
/*!************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPromotion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailPromotion.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/_main/PLDetailPromotion.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPromotion_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPromotion_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.scss":
/*!******************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDPromotionGifts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDPromotionGifts.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/gifts/_main/PLDPromotionGifts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDPromotionGifts_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDPromotionGifts_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.scss":
/*!**********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDPromotionItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDPromotionItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/promotion/item/PLDPromotionItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDPromotionItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDPromotionItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRating_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailRating.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/rating/_main/PLDetailRating.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRating_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRating_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.scss":
/*!**********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDRatingHead_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDRatingHead.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/rating/head/_main/PLDRatingHead.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDRatingHead_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDRatingHead_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailShortConfig_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailShortConfig.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_config/_main/PLDetailShortConfig.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailShortConfig_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailShortConfig_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.scss":
/*!***************************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDShortConfigItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDShortConfigItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_config/item/PLDShortConfigItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDShortConfigItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDShortConfigItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.scss":
/*!********************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailPost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_components/short_post/_main/PLDetailPost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_main/PLDetail.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_main/PLDetail.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetail.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_main/PLDetail.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetail_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetail_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLCommentsMb.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLCommentsMb.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCommentsMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLCommentsMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLCommentsMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCommentsMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLCommentsMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDOnePriceMb.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDOnePriceMb.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDOnePriceMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDOnePriceMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDOnePriceMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDOnePriceMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDOnePriceMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailAreaMb.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailAreaMb.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailAreaMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailAreaMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailAreaMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailAreaMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailAreaMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailCarouselMb.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailCarouselMb.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailCarouselMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailCarouselMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailCarouselMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailCarouselMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailCarouselMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailGroupsMb.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailGroupsMb.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailGroupsMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailGroupsMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailGroupsMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailGroupsMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailGroupsMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailMarket Mb.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailMarket Mb.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailMarket_Mb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailMarket Mb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailMarket Mb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailMarket_Mb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailMarket_Mb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPolicyMb.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPolicyMb.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicyMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailPolicyMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPolicyMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicyMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPolicyMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPostMb.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPostMb.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPostMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailPostMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPostMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPostMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPostMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailProductMb.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailProductMb.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProductMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailProductMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailProductMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProductMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProductMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPromotionMb.scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPromotionMb.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPromotionMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailPromotionMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailPromotionMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPromotionMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailPromotionMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRatingMb.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRatingMb.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRatingMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailRatingMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRatingMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRatingMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRatingMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRelativeMb.scss":
/*!*********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRelativeMb.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRelativeMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailRelativeMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailRelativeMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRelativeMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRelativeMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailSeenMb.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailSeenMb.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailSeenMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailSeenMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailSeenMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailSeenMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailSeenMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailShortConfigMb.scss":
/*!************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailShortConfigMb.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailShortConfigMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailShortConfigMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PLDetailShortConfigMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailShortConfigMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailShortConfigMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/_mobile_css/PhoneDetailHeadMb.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/_mobile_css/PhoneDetailHeadMb.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneDetailHeadMb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PhoneDetailHeadMb.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/_mobile_css/PhoneDetailHeadMb.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneDetailHeadMb_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneDetailHeadMb_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneDetailHead_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PhoneDetailHead.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/head/PhoneDetailHead.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneDetailHead_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PhoneDetailHead_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.scss":
/*!********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProduct_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailProduct.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/product/_main/PLDetailProduct.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProduct_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProduct_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProductPc_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailProductPc.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/product/pc/PLDetailProductPc.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProductPc_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailProductPc_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRelative_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailRelative.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/relative/_main/PLDetailRelative.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRelative_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailRelative_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.scss":
/*!**************************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDRltLinksItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDRltLinksItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/relative/links/item/PLDRltLinksItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDRltLinksItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDRltLinksItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailSeen_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./PLDetailSeen.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/phone_laptop/pages/detail/seen/_main/PLDetailSeen.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailSeen_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PLDetailSeen_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_phone_laptop_pages_detail__main_PLDetail_js.js.map