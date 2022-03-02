(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_carousel__main_Carousel_js"],{

/***/ "./src/_hooks/UseInterval.js":
/*!***********************************!*\
  !*** ./src/_hooks/UseInterval.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useInterval = useInterval;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
function useInterval(_ref) {
    var time = _ref.time,
        _ref$callback = _ref.callback,
        callback = _ref$callback === undefined ? function () {} : _ref$callback;

    //
    var skip_interval = (0, _react.useRef)(true);
    var mounted = (0, _react.useRef)(true);
    var stop_interval = (0, _react.useRef)(true);

    //
    (0, _react.useEffect)(function () {
        StartInterval();

        return function () {
            mounted.current = false;
        };
    }, []);

    //
    function StartInterval() {
        var interval = setInterval(function () {
            if (stop_interval.current) {
                return;
            }

            if (!mounted.current) {
                clearInterval(interval);
            } else if (!skip_interval.current) {
                callback();
            } else {
                skip_interval.current = false;
            }
        }, time);
    }

    // 
    function stopInterval(is_stop) {
        stop_interval.current = is_stop;
    }

    //
    function doSkipInterval() {
        skip_interval.current = true;
    }

    //
    return { doSkipInterval: doSkipInterval, stopInterval: stopInterval };
}

/***/ }),

/***/ "./src/_hooks/useVideoBtnPlayCenter.js":
/*!*********************************************!*\
  !*** ./src/_hooks/useVideoBtnPlayCenter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//


exports.useVideoBtnPlayCenter = useVideoBtnPlayCenter;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _useWaitingLastAction2 = __webpack_require__(/*! ./useWaitingLastAction */ "./src/_hooks/useWaitingLastAction.js");

//
function useVideoBtnPlayCenter(_ref) {
    var _ref$other_state = _ref.other_state,
        other_state = _ref$other_state === undefined ? {} : _ref$other_state;

    //
    var _useState = (0, _react.useState)(_extends({
        is_play: false,
        show_btn_play: false
    }, other_state)),
        _useState2 = _slicedToArray(_useState, 2),
        state_obj = _useState2[0],
        setStateObj = _useState2[1];

    var is_play = state_obj.is_play,
        show_btn_play = state_obj.show_btn_play;

    //

    var ref_video_elm = (0, _react.useRef)(null);

    //

    var _useWaitingLastAction = (0, _useWaitingLastAction2.useWaitingLastAction)({
        time_waiting: 2000,
        callback: hideBtnPlay
    }),
        handleWaitingLastAction = _useWaitingLastAction.handleWaitingLastAction;

    //


    (0, _react.useEffect)(function () {
        handleWaitingLastAction();
    }, [is_play, show_btn_play]);

    (0, _react.useEffect)(function () {
        if (ref_video_elm.current.readyState == 4) {
            if (!is_play) {
                ref_video_elm.current.pause();
            } else {
                ref_video_elm.current.play();
            }
        }
    }, [is_play]);

    /* ------------ */

    //
    function togglePlayPause() {
        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                is_play: !state_obj.is_play
            });
        });
    }

    //
    function doPause() {
        if (is_play) {
            ref_video_elm.current.pause();

            setStateObj(function (state_obj) {
                return _extends({}, state_obj, {
                    is_play: false
                });
            });
        }
    }

    //
    function toggleBtnPlay() {
        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                show_btn_play: !state_obj.show_btn_play
            });
        });
    }

    //
    function hideBtnPlay() {
        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                show_btn_play: false
            });
        });
    }

    //
    function handleEnded() {
        setStateObj(function (state_obj) {
            return _extends({}, state_obj, {
                is_play: false,
                show_btn_play: true
            });
        });
    }

    //
    return {
        ref_video_elm: ref_video_elm,

        state_obj: state_obj,
        setStateObj: setStateObj,

        toggleBtnPlay: toggleBtnPlay,
        togglePlayPause: togglePlayPause,

        doPause: doPause,
        hideBtnPlay: hideBtnPlay,
        handleEnded: handleEnded
    };
}

/***/ }),

/***/ "./src/_icons_svg/icon_play_pause/IconsPlayPause.js":
/*!**********************************************************!*\
  !*** ./src/_icons_svg/icon_play_pause/IconsPlayPause.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
// import './IconsPlayPause.scss';

//
IconsPlayPause.propTypes = {
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    size_icon: _propTypes2.default.string,
    color: _propTypes2.default.string
};

IconsPlayPause.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    color: 'var(--white)'
};

//
function IconsPlayPause(_ref) {
    var size_icon = _ref.size_icon,
        x = _ref.x,
        y = _ref.y,
        color = _ref.color;

    //
    return _react2.default.createElement(
        'svg',
        {
            className: 'IconsPlayPause',
            viewBox: x + ' ' + y + ' 200 200',
            width: size_icon,
            height: size_icon
        },
        _react2.default.createElement(
            'g',
            { className: 'IconsPlayPause_play', fill: color },
            _react2.default.createElement('path', { d: 'M45,25 155,100 45,175 Z' })
        ),
        _react2.default.createElement(
            'g',
            { className: 'IconsPlayPause_pause', stroke: color, strokeWidth: '25' },
            _react2.default.createElement('line', { x1: '270', y1: '25', x2: '270', y2: '175' }),
            _react2.default.createElement('line', { x1: '330', y1: '25', x2: '330', y2: '175' })
        )
    );
}

exports.default = IconsPlayPause;

/***/ }),

/***/ "./src/_some_function/observerDisplay.js":
/*!***********************************************!*\
  !*** ./src/_some_function/observerDisplay.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.observerDisplay = undefined;

var _reactObserverTs = __webpack_require__(/*! react-observer-ts */ "./node_modules/react-observer-ts/dist/index.modern.js");

exports.observerDisplay = _reactObserverTs.observerDisplay;

/***/ }),

/***/ "./src/component/carousel/_main/Carousel.js":
/*!**************************************************!*\
  !*** ./src/component/carousel/_main/Carousel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

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

var _Constant = __webpack_require__(/*! ../../../_constant/Constant */ "./src/_constant/Constant.js");

var _observerDisplay = __webpack_require__(/*! ../../../_some_function/observerDisplay */ "./src/_some_function/observerDisplay.js");

var _AppTouchNoneTemp = __webpack_require__(/*! ../../../_some_function/AppTouchNoneTemp */ "./src/_some_function/AppTouchNoneTemp.js");

var _UseInterval = __webpack_require__(/*! ../../../_hooks/UseInterval */ "./src/_hooks/UseInterval.js");

var _useMouseMoveX2 = __webpack_require__(/*! ../../../_hooks/useMouseMoveX */ "./src/_hooks/useMouseMoveX.js");

var _UseForceUpdate = __webpack_require__(/*! ../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _NextPrevDiv = __webpack_require__(/*! ../../some_div/next_prev_div/NextPrevDiv */ "./src/component/some_div/next_prev_div/NextPrevDiv.js");

var _NextPrevDiv2 = _interopRequireDefault(_NextPrevDiv);

var _CarouselItem = __webpack_require__(/*! ../item/_main/CarouselItem */ "./src/component/carousel/item/_main/CarouselItem.js");

var _CarouselItem2 = _interopRequireDefault(_CarouselItem);

var _CarouselPosition = __webpack_require__(/*! ../position/_main/CarouselPosition */ "./src/component/carousel/position/_main/CarouselPosition.js");

var _CarouselPosition2 = _interopRequireDefault(_CarouselPosition);

__webpack_require__(/*! ./Carousel.scss */ "./src/component/carousel/_main/Carousel.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
Carousel.propTypes = {
    vid_pics: _propTypes2.default.array,
    link_to_arr: _propTypes2.default.array,
    has_fetched: _propTypes2.default.bool,
    time_interval: _propTypes2.default.number,
    time_trans: _propTypes2.default.number,

    disabled_btn_when_trans: _propTypes2.default.bool,
    time_disabled_btn: _propTypes2.default.number,
    is_btn_circle: _propTypes2.default.bool,

    use_dot: _propTypes2.default.bool,
    use_underscore: _propTypes2.default.bool,
    use_next_prev: _propTypes2.default.bool,
    use_auto_next: _propTypes2.default.bool,

    handleCarouselMove: _propTypes2.default.func,
    handleClick: _propTypes2.default.func
};

Carousel.defaultProps = {
    link_to_arr: [],
    has_fetched: false,
    time_interval: 6000,
    time_trans: 300,

    disabled_btn_when_trans: true,
    time_disabled_btn: 100,

    use_dot: !_Constant.IS_MOBILE,
    use_underscore: _Constant.IS_MOBILE,
    use_next_prev: true,
    use_auto_next: true
};

//
function Carousel(_ref) {
    var vid_pics = _ref.vid_pics,
        link_to_arr = _ref.link_to_arr,
        has_fetched = _ref.has_fetched,
        time_interval = _ref.time_interval,
        time_trans = _ref.time_trans,
        disabled_btn_when_trans = _ref.disabled_btn_when_trans,
        time_disabled_btn = _ref.time_disabled_btn,
        is_btn_circle = _ref.is_btn_circle,
        use_dot = _ref.use_dot,
        use_underscore = _ref.use_underscore,
        use_next_prev = _ref.use_next_prev,
        use_auto_next = _ref.use_auto_next,
        handleClick = _ref.handleClick,
        handleCarouselMove = _ref.handleCarouselMove;

    //
    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        extra_trans_x = _useState2[0],
        setExtraTransX = _useState2[1];

    //


    var ref_carousel_elm = (0, _react.useRef)(null);

    var mounted = (0, _react.useRef)(true);
    var btn_disable = (0, _react.useRef)(false);
    var transition_none = (0, _react.useRef)(true);

    var ref_vid_pic_ix = (0, _react.useRef)(1);
    var ref_count = (0, _react.useRef)(vid_pics.length);

    //

    var _useInterval = (0, _UseInterval.useInterval)({
        time: time_interval,
        callback: handleAutoNext
    }),
        doSkipInterval = _useInterval.doSkipInterval,
        stopInterval = _useInterval.stopInterval;

    var _useMouseMoveX = (0, _useMouseMoveX2.useMouseMoveX)({
        handleMouseDown: handleTouchStart,
        handleMouseMove: handleTouchMove,
        handleMouseEnd: handleTouchEnd
    }),
        is_run = _useMouseMoveX.is_run,
        first_orientation = _useMouseMoveX.first_orientation,
        handleStart = _useMouseMoveX.handleStart,
        handleMove = _useMouseMoveX.handleMove,
        handleEnd = _useMouseMoveX.handleEnd;

    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    (0, _react.useEffect)(function () {
        (0, _observerDisplay.observerDisplay)({
            elm: ref_carousel_elm.current,
            callbackDisplay: function callbackDisplay() {
                return stopInterval(false);
            },
            callbackNoDisplay: function callbackNoDisplay() {
                return stopInterval(true);
            }
        });

        return function () {
            mounted.current = false;
        };
    }, []);

    (0, _react.useEffect)(function () {
        if (has_fetched) {
            ref_count.current = vid_pics.length;
            transition_none.current = false;
            stopInterval(false);

            setTimeout(function () {
                forceUpdate();
            }, 0);
        } else {
            stopInterval(true);
        }
    }, [has_fetched]);

    (0, _react.useEffect)(function () {
        handleCarouselMove && handleCarouselMove(ref_vid_pic_ix.current);
    }, [ref_vid_pic_ix.current]);

    // ------- COMMON

    //
    function handleWhenNextPrev() {
        var is_last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        btn_disable.current = true;
        transition_none.current = false;

        setTimeout(function () {
            if (mounted.current) {
                btn_disable.current = false;
            }
        }, disabled_btn_when_trans || is_last ? time_trans : time_disabled_btn);
    }

    //
    function changeImgIxNext() {
        handleWhenNextPrev(true);

        ref_vid_pic_ix.current += 1;
        forceUpdate();

        if (ref_vid_pic_ix.current == ref_count.current - 1) {
            setTimeout(function () {
                if (mounted.current) {
                    ref_vid_pic_ix.current = 1;
                    transition_none.current = true;
                    forceUpdate();
                }
            }, time_trans);
        }
    }

    //
    function changeImgIxPrev() {
        handleWhenNextPrev(true);

        ref_vid_pic_ix.current -= 1;
        forceUpdate();

        if (ref_vid_pic_ix.current == 0) {
            setTimeout(function () {
                if (mounted.current) {
                    ref_vid_pic_ix.current = ref_count.current - 2;
                    transition_none.current = true;
                    forceUpdate();
                }
            }, time_trans);
        }
    }

    // ---------

    //
    function handleNext() {
        if (btn_disable.current) {
            return;
        }

        doSkipInterval();
        changeImgIxNext();
    }

    //
    function handlePrev() {
        if (btn_disable.current) {
            return;
        }

        doSkipInterval();
        changeImgIxPrev();
    }

    //
    function handleAutoNext() {
        if (!use_auto_next) {
            return;
        }

        if (btn_disable.current) {
            return;
        }

        changeImgIxNext();
    }

    // -------- TOUCH

    //
    function handleTouchStart() {
        stopInterval(true);
        transition_none.current = true;
        doSkipInterval();
    }

    //
    function handleTouchMove(client_change) {
        if (first_orientation.current == 'x') {
            (0, _AppTouchNoneTemp.toggleAppTouchNone)({ touch_none: true });

            setExtraTransX(function (extra_trans_x) {
                return extra_trans_x + client_change;
            });
        } else {
            is_run.current = false;
        }
    }

    //
    function handleTouchEnd() {
        (0, _AppTouchNoneTemp.toggleAppTouchNone)({ touch_none: false });

        if (first_orientation.current == 'x') {
            var ratio_trans_x = -extra_trans_x / ref_carousel_elm.current.clientWidth;

            if (ratio_trans_x >= 0.25) {
                handleNext();
            } else if (ratio_trans_x <= -0.25) {
                handlePrev();
            }

            transition_none.current = false;
            setExtraTransX(0);
            stopInterval(false);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        {
            ref: ref_carousel_elm,
            className: 'Carousel pos-rel wh-100 overflow-hidden'
        },
        _react2.default.createElement(
            'div',
            {
                className: 'Carousel_row pos-rel display-flex h-100per',
                style: {
                    width: 100 * vid_pics.length + '%',
                    transform: 'translateX(-' + ref_vid_pic_ix.current * 100 / vid_pics.length + '%) translateX(' + extra_trans_x + 'px)',
                    transition: transition_none.current ? undefined : 'all ' + time_trans + 'ms'
                },
                onClick: handleClick,
                onTouchStart: handleStart,
                onTouchMove: handleMove,
                onTouchEnd: handleEnd
            },
            vid_pics.map(function (vid_pic, ix) {
                return _react2.default.createElement(_CarouselItem2.default, {
                    key: '' + ix,
                    vid_pic_ix: ref_vid_pic_ix.current,
                    vid_pic: vid_pic,
                    width_vid_pic: 100 / vid_pics.length + '%',
                    link_to: link_to_arr.length && link_to_arr[ix] || '',
                    stopInterval: stopInterval
                });
            })
        ),
        _react2.default.createElement(_CarouselPosition2.default, {
            use_dot: use_dot,
            use_underscore: use_underscore,
            has_fetched: has_fetched,
            count: ref_count.current - 2,
            active_ix: ref_vid_pic_ix.current - 1 == ref_count.current - 1 ? 0 : ref_vid_pic_ix.current - 1
        }),
        !use_next_prev || _Constant.IS_MOBILE || !has_fetched ? null : _react2.default.createElement(
            'div',
            { className: 'text-white' },
            _react2.default.createElement(_NextPrevDiv2.default, {
                is_btn_circle: is_btn_circle,
                size_icon: '14px',
                handleNext: handleNext,
                handlePrev: handlePrev
            })
        )
    );
}

exports.default = Carousel;

/***/ }),

/***/ "./src/component/carousel/item/_main/CarouselItem.js":
/*!***********************************************************!*\
  !*** ./src/component/carousel/item/_main/CarouselItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _VideoOrImage = __webpack_require__(/*! ../../../../_some_function/VideoOrImage */ "./src/_some_function/VideoOrImage.js");

var _CarouselImg = __webpack_require__(/*! ../img/CarouselImg */ "./src/component/carousel/item/img/CarouselImg.js");

var _CarouselImg2 = _interopRequireDefault(_CarouselImg);

var _CarouselVideo = __webpack_require__(/*! ../video/CarouselVideo */ "./src/component/carousel/item/video/CarouselVideo.js");

var _CarouselVideo2 = _interopRequireDefault(_CarouselVideo);

__webpack_require__(/*! ./CarouselItem.scss */ "./src/component/carousel/item/_main/CarouselItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
CarouselItem.propTypes = {
    vid_pic: _propTypes2.default.string,
    width_vid_pic: _propTypes2.default.string,
    stopInterval: _propTypes2.default.func
};
//

//


CarouselItem.defaultProps = {};

//
function CarouselItem(_ref) {
    var vid_pic_ix = _ref.vid_pic_ix,
        vid_pic = _ref.vid_pic,
        width_vid_pic = _ref.width_vid_pic,
        link_to = _ref.link_to,
        stopInterval = _ref.stopInterval;

    //
    return _react2.default.createElement(
        'div',
        { className: 'CarouselItem h-100per', style: { width: width_vid_pic } },
        (0, _VideoOrImage.getTypeVidOrPic)(vid_pic) == 'img' ? _react2.default.createElement(_CarouselImg2.default, { vid_pic: vid_pic, link_to: link_to }) : _react2.default.createElement(_CarouselVideo2.default, {
            vid_pic: vid_pic,
            vid_pic_ix: vid_pic_ix,
            stopInterval: stopInterval
        })
    );
}

exports.default = CarouselItem;

/***/ }),

/***/ "./src/component/carousel/item/img/CarouselImg.js":
/*!********************************************************!*\
  !*** ./src/component/carousel/item/img/CarouselImg.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _VidPicObserve = __webpack_require__(/*! ../../../vid_pic/observe/VidPicObserve */ "./src/component/vid_pic/observe/VidPicObserve.js");

var _VidPicObserve2 = _interopRequireDefault(_VidPicObserve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
CarouselImg.propTypes = {};

//

//
function CarouselImg(_ref) {
    var vid_pic = _ref.vid_pic,
        link_to = _ref.link_to;

    //
    return link_to ? _react2.default.createElement(
        _reactRouterDom.Link,
        { to: link_to },
        _react2.default.createElement(_VidPicObserve2.default, {
            vid_pic: vid_pic,
            type: 'img',
            img_props: { className: 'wh-100 object-fit-cover' }
        })
    ) : _react2.default.createElement(_VidPicObserve2.default, {
        vid_pic: vid_pic,
        type: 'img',
        img_props: { className: 'wh-100 object-fit-cover' }
    });
}

exports.default = CarouselImg;

/***/ }),

/***/ "./src/component/carousel/item/video/CarouselVideo.js":
/*!************************************************************!*\
  !*** ./src/component/carousel/item/video/CarouselVideo.js ***!
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

var _useVideoBtnPlayCenter = __webpack_require__(/*! ../../../../_hooks/useVideoBtnPlayCenter */ "./src/_hooks/useVideoBtnPlayCenter.js");

var _VideoBtnPlayCenter = __webpack_require__(/*! ../../../vid_pic/video_btn_play_center/VideoBtnPlayCenter */ "./src/component/vid_pic/video_btn_play_center/VideoBtnPlayCenter.js");

var _VideoBtnPlayCenter2 = _interopRequireDefault(_VideoBtnPlayCenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
CarouselVideo.propTypes = {};

//

//
function CarouselVideo(_ref) {
    var vid_pic = _ref.vid_pic,
        vid_pic_ix = _ref.vid_pic_ix,
        stopInterval = _ref.stopInterval;

    //
    var _useVideoBtnPlayCente = (0, _useVideoBtnPlayCenter.useVideoBtnPlayCenter)({
        other_state: {}
    }),
        ref_video_elm = _useVideoBtnPlayCente.ref_video_elm,
        state_obj = _useVideoBtnPlayCente.state_obj,
        toggleBtnPlay = _useVideoBtnPlayCente.toggleBtnPlay,
        togglePlayPause = _useVideoBtnPlayCente.togglePlayPause,
        doPause = _useVideoBtnPlayCente.doPause,
        handleEnded = _useVideoBtnPlayCente.handleEnded;

    var is_play = state_obj.is_play,
        show_btn_play = state_obj.show_btn_play;

    //

    (0, _react.useEffect)(function () {
        doPause();
    }, [vid_pic_ix]);

    /* ---------- */

    //
    function handlePlay() {
        stopInterval(true);
    }

    //
    function handlePause() {
        stopInterval(false);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'wh-100 pos-rel' },
        _react2.default.createElement('video', {
            ref: ref_video_elm,
            className: 'wh-100 object-fit-content',
            src: vid_pic,
            onPlay: handlePlay,
            onPause: handlePause,
            onEnded: handleEnded
        }),
        _react2.default.createElement(_VideoBtnPlayCenter2.default, {
            size_icon: '2.5rem'
            // color={color}
            , is_play: is_play,
            show_btn_play: show_btn_play,
            toggleBtnPlay: toggleBtnPlay,
            togglePlayPause: togglePlayPause
        })
    );
}

exports.default = CarouselVideo;

/***/ }),

/***/ "./src/component/carousel/position/_main/CarouselPosition.js":
/*!*******************************************************************!*\
  !*** ./src/component/carousel/position/_main/CarouselPosition.js ***!
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

var _CarouselDot = __webpack_require__(/*! ../dot/CarouselDot */ "./src/component/carousel/position/dot/CarouselDot.js");

var _CarouselDot2 = _interopRequireDefault(_CarouselDot);

var _CarouselUnderscore = __webpack_require__(/*! ../underscore/CarouselUnderscore */ "./src/component/carousel/position/underscore/CarouselUnderscore.js");

var _CarouselUnderscore2 = _interopRequireDefault(_CarouselUnderscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
//


//
CarouselPosition.propTypes = {};

//
function CarouselPosition(_ref) {
    var has_fetched = _ref.has_fetched,
        use_dot = _ref.use_dot,
        use_underscore = _ref.use_underscore,
        rest_props = _objectWithoutProperties(_ref, ['has_fetched', 'use_dot', 'use_underscore']);

    //
    if (!use_dot && !use_underscore) {
        return null;
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'pos-abs bottom-0 x-center padding-8px pointer-events-none ' + (has_fetched ? '' : 'display-none')
        },
        use_dot ? _react2.default.createElement(_CarouselDot2.default, rest_props) : use_underscore ? _react2.default.createElement(_CarouselUnderscore2.default, rest_props) : null
    );
}

exports.default = CarouselPosition;

/***/ }),

/***/ "./src/component/carousel/position/dot/CarouselDot.js":
/*!************************************************************!*\
  !*** ./src/component/carousel/position/dot/CarouselDot.js ***!
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

__webpack_require__(/*! ./CarouselDot.scss */ "./src/component/carousel/position/dot/CarouselDot.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
CarouselDot.propTypes = {};

//

//
function CarouselDot(_ref) {
    var count = _ref.count,
        active_ix = _ref.active_ix;

    //
    return _react2.default.createElement(
        'div',
        { className: 'CarouselDot' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex-center' },
            Array(count).fill(1).map(function (_, ix) {
                return _react2.default.createElement(
                    'div',
                    {
                        key: ix,
                        className: 'CarouselDot_item padding-4px'
                    },
                    _react2.default.createElement('div', {
                        className: 'CarouselDot_item_contain brs-50 ' + (active_ix == ix ? 'bg-fashion-carousel-active' : 'bg-ccc')
                    })
                );
            })
        )
    );
}

exports.default = CarouselDot;

/***/ }),

/***/ "./src/component/carousel/position/underscore/CarouselUnderscore.js":
/*!**************************************************************************!*\
  !*** ./src/component/carousel/position/underscore/CarouselUnderscore.js ***!
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

__webpack_require__(/*! ./CarouselUnderscore.scss */ "./src/component/carousel/position/underscore/CarouselUnderscore.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
CarouselUnderscore.propTypes = {};

//

//
function CarouselUnderscore(_ref) {
    var count = _ref.count,
        active_ix = _ref.active_ix;

    //
    return _react2.default.createElement(
        'div',
        { className: 'CarouselUnderscore' },
        _react2.default.createElement(
            'div',
            { className: 'display-flex-center' },
            Array(count).fill(1).map(function (_, ix) {
                return _react2.default.createElement(
                    'div',
                    {
                        key: ix,
                        className: 'CarouselUnderscore_item padding-4px'
                    },
                    _react2.default.createElement('div', {
                        className: 'CarouselUnderscore_item_contain ' + (active_ix == ix ? 'bg-fashion-carousel-active' : 'bg-ccc')
                    })
                );
            })
        )
    );
}

exports.default = CarouselUnderscore;

/***/ }),

/***/ "./src/component/vid_pic/video_btn_play_center/VideoBtnPlayCenter.js":
/*!***************************************************************************!*\
  !*** ./src/component/vid_pic/video_btn_play_center/VideoBtnPlayCenter.js ***!
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

var _IconsPlayPause = __webpack_require__(/*! ../../../_icons_svg/icon_play_pause/IconsPlayPause */ "./src/_icons_svg/icon_play_pause/IconsPlayPause.js");

var _IconsPlayPause2 = _interopRequireDefault(_IconsPlayPause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
VideoBtnPlayCenter.propTypes = {};

//

//
function VideoBtnPlayCenter(_ref) {
    var size_icon = _ref.size_icon,
        color = _ref.color,
        is_play = _ref.is_play,
        show_btn_play = _ref.show_btn_play,
        toggleBtnPlay = _ref.toggleBtnPlay,
        togglePlayPause = _ref.togglePlayPause;

    //
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement('div', {
            className: 'pos-abs-100 bg-shadow-2 ' + (show_btn_play ? '' : 'display-none')
        }),
        _react2.default.createElement('div', { className: 'pos-abs-100', onClick: toggleBtnPlay }),
        _react2.default.createElement(
            'div',
            {
                className: 'pos-abs-center ' + (show_btn_play ? '' : 'display-none')
            },
            _react2.default.createElement(
                'div',
                { className: 'cursor-pointer', onClick: togglePlayPause },
                _react2.default.createElement(_IconsPlayPause2.default, {
                    x: is_play ? 200 : 0,
                    size_icon: size_icon,
                    color: color
                })
            )
        )
    );
}

exports.default = VideoBtnPlayCenter;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/_main/Carousel.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/_main/Carousel.scss ***!
  \*************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/item/_main/CarouselItem.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/item/_main/CarouselItem.scss ***!
  \**********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".CarouselItem .IconsInput_video {\n  stroke: var(--white);\n}", "",{"version":3,"sources":["webpack://./src/component/carousel/item/_main/CarouselItem.scss"],"names":[],"mappings":"AACI;EACI,oBAAA;AAAR","sourcesContent":[".CarouselItem{\r\n    .IconsInput_video{\r\n        stroke: var(--white);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/position/dot/CarouselDot.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/position/dot/CarouselDot.scss ***!
  \***********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".CarouselDot_item_contain {\n  width: 10px;\n  height: 10px;\n}\n\n@media (max-width: 350px) {\n  .CarouselDot_item {\n    padding: 3px;\n  }\n\n  .CarouselDot_item_contain {\n    width: 8px;\n    height: 8px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/carousel/position/dot/CarouselDot.scss"],"names":[],"mappings":"AACA;EACI,WAAA;EACA,YAAA;AAAJ;;AAIA;EACI;IACI,YAAA;EADN;;EAGE;IACI,UAAA;IACA,WAAA;EAAN;AACF","sourcesContent":["\r\n.CarouselDot_item_contain{\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n\r\n// \r\n@media (max-width: 350px) {\r\n    .CarouselDot_item{\r\n        padding: 3px;\r\n    }\r\n    .CarouselDot_item_contain{\r\n        width: 8px;\r\n        height: 8px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/position/underscore/CarouselUnderscore.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/position/underscore/CarouselUnderscore.scss ***!
  \*************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".CarouselUnderscore_item_contain {\n  width: 10px;\n  height: 2px;\n}", "",{"version":3,"sources":["webpack://./src/component/carousel/position/underscore/CarouselUnderscore.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,WAAA;AACJ","sourcesContent":[".CarouselUnderscore_item_contain {\r\n    width: 10px;\r\n    height: 2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/carousel/_main/Carousel.scss":
/*!****************************************************!*\
  !*** ./src/component/carousel/_main/Carousel.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Carousel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Carousel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/_main/Carousel.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Carousel_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Carousel_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/carousel/item/_main/CarouselItem.scss":
/*!*************************************************************!*\
  !*** ./src/component/carousel/item/_main/CarouselItem.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CarouselItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/item/_main/CarouselItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/carousel/position/dot/CarouselDot.scss":
/*!**************************************************************!*\
  !*** ./src/component/carousel/position/dot/CarouselDot.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselDot_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CarouselDot.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/position/dot/CarouselDot.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselDot_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselDot_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/carousel/position/underscore/CarouselUnderscore.scss":
/*!****************************************************************************!*\
  !*** ./src/component/carousel/position/underscore/CarouselUnderscore.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselUnderscore_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./CarouselUnderscore.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/carousel/position/underscore/CarouselUnderscore.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselUnderscore_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CarouselUnderscore_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_carousel__main_Carousel_js.js.map