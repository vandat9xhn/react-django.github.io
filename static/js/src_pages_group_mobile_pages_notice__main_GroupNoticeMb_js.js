(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_group_mobile_pages_notice__main_GroupNoticeMb_js"],{

/***/ "./src/_hooks/useCountUp.js":
/*!**********************************!*\
  !*** ./src/_hooks/useCountUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.useCountUp = useCountUp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
function useCountUp() {
    var initial_count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    //
    var _useState = (0, _react.useState)(initial_count),
        _useState2 = _slicedToArray(_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

    // ----

    //


    function countUp() {
        setCount(function (count) {
            return count + 1;
        });
    }

    //
    return { count: count, countUp: countUp };
}

/***/ }),

/***/ "./src/pages/group/mobile/pages/notice/_main/GroupNoticeMb.js":
/*!********************************************************************!*\
  !*** ./src/pages/group/mobile/pages/notice/_main/GroupNoticeMb.js ***!
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

var _GroupNoticeRight = __webpack_require__(/*! ../../../../pc/pages/notice/right/_main/GroupNoticeRight */ "./src/pages/group/pc/pages/notice/right/_main/GroupNoticeRight.js");

var _GroupNoticeRight2 = _interopRequireDefault(_GroupNoticeRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
GroupNoticeMb.propTypes = {};

//

//
function GroupNoticeMb(props) {
    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupNoticeMb' },
        _react2.default.createElement(_GroupNoticeRight2.default, null)
    );
}

exports.default = GroupNoticeMb;

/***/ }),

/***/ "./src/pages/group/pc/pages/notice/earlier/_main/GroupNoticeEarlier.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/group/pc/pages/notice/earlier/_main/GroupNoticeEarlier.js ***!
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

var _notifications = __webpack_require__(/*! ../../../../../../../_handle_api/fb_group/notifications */ "./src/_handle_api/fb_group/notifications.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _GroupNoticeList = __webpack_require__(/*! ../../../../_components/notice_list/GroupNoticeList */ "./src/pages/group/pc/_components/notice_list/GroupNoticeList.js");

var _GroupNoticeList2 = _interopRequireDefault(_GroupNoticeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }
//

//

//


//
GroupNoticeEarlier.propTypes = {};

//
function GroupNoticeEarlier(_ref) {
    _objectDestructuringEmpty(_ref);

    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        handle_API_L: function handle_API_L(c_count) {
            return (0, _notifications.handle_API_GroupNotice_L)({
                c_count: c_count,
                params: { time: 'earlier' }
            });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        getData_API = _useObserverShowMore.getData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    (0, _react.useEffect)(function () {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px 0px 250px 0px',
            way_scroll: 'to_bottom',
            margin: 250
        });
    }, []);

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupNoticeEarlier' },
        _react2.default.createElement(_GroupNoticeList2.default, { title: 'Earlier', notice_arr: data_state.data_arr }),
        _react2.default.createElement('div', { ref: ref_fake_elm, className: 'padding-1px' })
    );
}

exports.default = GroupNoticeEarlier;

/***/ }),

/***/ "./src/pages/group/pc/pages/notice/new/_main/GroupNoticeNew.js":
/*!*********************************************************************!*\
  !*** ./src/pages/group/pc/pages/notice/new/_main/GroupNoticeNew.js ***!
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

var _notifications = __webpack_require__(/*! ../../../../../../../_handle_api/fb_group/notifications */ "./src/_handle_api/fb_group/notifications.js");

var _useObserverShowMore2 = __webpack_require__(/*! ../../../../../../../_hooks/useObserverShowMore */ "./src/_hooks/useObserverShowMore.js");

var _GroupNoticeList = __webpack_require__(/*! ../../../../_components/notice_list/GroupNoticeList */ "./src/pages/group/pc/_components/notice_list/GroupNoticeList.js");

var _GroupNoticeList2 = _interopRequireDefault(_GroupNoticeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
GroupNoticeNew.propTypes = {};

//

//

//
function GroupNoticeNew(_ref) {
    var handleGetNewDone = _ref.handleGetNewDone;

    //
    var ref_fake_elm = (0, _react.useRef)(null);

    //

    var _useObserverShowMore = (0, _useObserverShowMore2.useObserverShowMore)({
        handle_API_L: function handle_API_L(c_count) {
            return (0, _notifications.handle_API_GroupNotice_L)({
                c_count: c_count,
                params: { time: 'new' }
            });
        }
    }),
        data_state = _useObserverShowMore.data_state,
        is_max = _useObserverShowMore.is_max,
        getData_API = _useObserverShowMore.getData_API,
        observerShowMore = _useObserverShowMore.observerShowMore;

    (0, _react.useEffect)(function () {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px 0px 250px 0px',
            way_scroll: 'to_bottom',
            margin: 250
        });
    }, []);

    //
    (0, _react.useEffect)(function () {
        if (is_max.current) {
            handleGetNewDone();
        }
    }, [is_max.current]);

    //
    return _react2.default.createElement(
        'div',
        { className: 'GroupNoticeNew' },
        _react2.default.createElement(_GroupNoticeList2.default, { title: 'New', notice_arr: data_state.data_arr }),
        _react2.default.createElement('div', { ref: ref_fake_elm, className: 'padding-1px' })
    );
}

exports.default = GroupNoticeNew;

/***/ }),

/***/ "./src/pages/group/pc/pages/notice/right/_main/GroupNoticeRight.js":
/*!*************************************************************************!*\
  !*** ./src/pages/group/pc/pages/notice/right/_main/GroupNoticeRight.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useCountUp2 = __webpack_require__(/*! ../../../../../../../_hooks/useCountUp */ "./src/_hooks/useCountUp.js");

var _GroupNoticeNew = __webpack_require__(/*! ../../new/_main/GroupNoticeNew */ "./src/pages/group/pc/pages/notice/new/_main/GroupNoticeNew.js");

var _GroupNoticeNew2 = _interopRequireDefault(_GroupNoticeNew);

var _GroupNoticeEarlier = __webpack_require__(/*! ../../earlier/_main/GroupNoticeEarlier */ "./src/pages/group/pc/pages/notice/earlier/_main/GroupNoticeEarlier.js");

var _GroupNoticeEarlier2 = _interopRequireDefault(_GroupNoticeEarlier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 

//
GroupNoticeRight.propTypes = {};

// 

//
function GroupNoticeRight(props) {
    //
    var _useCountUp = (0, _useCountUp2.useCountUp)(),
        count = _useCountUp.count,
        countUp = _useCountUp.countUp;

    //


    return _react2.default.createElement(
        'div',
        { className: 'GroupNoticeRight' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_GroupNoticeNew2.default, { handleGetNewDone: countUp })
        ),
        count >= 1 ? _react2.default.createElement(
            'div',
            { className: 'margin-top-20px' },
            _react2.default.createElement(_GroupNoticeEarlier2.default, null)
        ) : null
    );
}

exports.default = GroupNoticeRight;

/***/ })

}]);
//# sourceMappingURL=src_pages_group_mobile_pages_notice__main_GroupNoticeMb_js.js.map