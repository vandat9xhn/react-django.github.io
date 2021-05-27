(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__some_function_UnitTime_js-src_component_input_img_vid_preview_comment_input_CommentInput_js"],{

/***/ "./src/_some_function/UnitTime.js":
/*!****************************************!*\
  !*** ./src/_some_function/UnitTime.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
// time change: millisecond
var UnitTime = function UnitTime(time_change) {
    if (time_change >= 31536000000) {
        return Math.floor(time_change / 31536000000) + ' y';
    }
    if (time_change >= 2592000000) {
        return Math.floor(time_change / 2592000000) + ' mon';
    }
    if (time_change >= 86400000) {
        return Math.floor(time_change / 86400000) + ' d';
    }
    if (time_change >= 3600000) {
        return Math.floor(time_change / 3600000) + ' h';
    }
    if (time_change >= 60000) {
        return Math.floor(time_change / 60000) + ' m';
    }

    return 'Just now';
};

exports.default = UnitTime;

/***/ }),

/***/ "./src/_some_function/loadFile.js":
/*!****************************************!*\
  !*** ./src/_some_function/loadFile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.loadFile = loadFile;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
function loadFile(files) {
    var vid_pic_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'vid_pic';

    return new Promise(function (res) {
        var vid_pics = [];
        var i = 1;

        var _loop = function _loop(file) {
            var reader = new FileReader();
            reader.onload = function () {
                var _vid_pics$push;

                vid_pics.push((_vid_pics$push = {}, _defineProperty(_vid_pics$push, vid_pic_key, reader.result), _defineProperty(_vid_pics$push, 'type', file.type), _vid_pics$push));
            };
            reader.readAsDataURL(file);
            //
            if (i == files.length) {
                setTimeout(function () {
                    res({ files: files, vid_pics: vid_pics });
                }, i <= 5 ? 500 : i * 100);
            } else {
                i += 1;
            }
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var file = _step.value;

                _loop(file);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
}

/***/ }),

/***/ "./src/component/input_img_vid_preview/comment_input/CommentInput.js":
/*!***************************************************************************!*\
  !*** ./src/component/input_img_vid_preview/comment_input/CommentInput.js ***!
  \***************************************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _loadFile = __webpack_require__(/*! ../../../_some_function/loadFile */ "./src/_some_function/loadFile.js");

var _InputFile = __webpack_require__(/*! ../../input/input_file/InputFile */ "./src/component/input/input_file/InputFile.js");

var _InputFile2 = _interopRequireDefault(_InputFile);

var _IconsInput = __webpack_require__(/*! ../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

var _ImgVidPreview = __webpack_require__(/*! ../img_vid_preview/ImgVidPreview */ "./src/component/input_img_vid_preview/img_vid_preview/ImgVidPreview.js");

var _ImgVidPreview2 = _interopRequireDefault(_ImgVidPreview);

var _IconsAction = __webpack_require__(/*! ../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _FetchingDiv = __webpack_require__(/*! ../../some_div/fetching/FetchingDiv */ "./src/component/some_div/fetching/FetchingDiv.js");

var _FetchingDiv2 = _interopRequireDefault(_FetchingDiv);

var _Textarea = __webpack_require__(/*! ../../input/textarea/Textarea */ "./src/component/input/textarea/Textarea.js");

var _Textarea2 = _interopRequireDefault(_Textarea);

__webpack_require__(/*! ./CommentInput.scss */ "./src/component/input_img_vid_preview/comment_input/CommentInput.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
CommentInput.propTypes = {
    file_multiple: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    handleSend: _propTypes2.default.func
};

CommentInput.defaultProps = {
    file_multiple: false,
    placeholder: 'Comment...'
};

//
function CommentInput(props) {

    //
    var onChooseFile = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var new_files, _ref2, load_files, vid_pics;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            new_files = event.target.files;

                            if (!new_files.length) {
                                _context.next = 9;
                                break;
                            }

                            setCmtObj(function (cmt_obj) {
                                return _extends({}, cmt_obj, {
                                    file_reading: true
                                });
                            });

                            _context.next = 5;
                            return (0, _loadFile.loadFile)(new_files, 'url');

                        case 5:
                            _ref2 = _context.sent;
                            load_files = _ref2.files;
                            vid_pics = _ref2.vid_pics;


                            setCmtObj(function (cmt_obj) {
                                return _extends({}, cmt_obj, {
                                    urls: file_multiple ? [].concat(_toConsumableArray(urls), _toConsumableArray(vid_pics)) : vid_pics,
                                    files: file_multiple ? [].concat(_toConsumableArray(files), _toConsumableArray(load_files)) : new_files,
                                    file_reading: false
                                });
                            });

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function onChooseFile(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    //


    var file_multiple = props.file_multiple,
        placeholder = props.placeholder,
        handleSend = props.handleSend;

    //

    var _useState = (0, _react.useState)({
        text: '',
        urls: [],
        files: [],
        file_reading: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        cmt_obj = _useState2[0],
        setCmtObj = _useState2[1];

    var text = cmt_obj.text,
        urls = cmt_obj.urls,
        files = cmt_obj.files,
        file_reading = cmt_obj.file_reading;

    //

    var ref_comment_input = (0, _react.useRef)(null);

    /* -------------------------------- INPUT -------------------------------------- */

    //
    function onChangeCmt(value) {
        setCmtObj(function (cmt_obj) {
            return _extends({}, cmt_obj, {
                text: value
            });
        });
    }function deleteAnItemPreview(index) {
        var new_files = [].concat(_toConsumableArray(files));
        var new_urls = [].concat(_toConsumableArray(urls));

        new_files.splice(index, 1);
        new_urls.splice(index, 1);

        setCmtObj(function (cmt_obj) {
            return _extends({}, cmt_obj, {
                files: new_files,
                urls: new_urls
            });
        });
    }

    //
    function onSendCmt() {
        if (text.trim() || files.length) {
            handleSend(text, files, urls);
            setCmtObj({
                text: '',
                files: [],
                urls: []
            });
            ref_comment_input.current.querySelector('textarea.CommentInput_textarea').style.height = 'auto';
        }
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'CommentInput position-rel' },
        _react2.default.createElement(
            'div',
            { className: 'CommentInput_contain position-rel' },
            _react2.default.createElement(
                'div',
                { className: 'display-flex align-items-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'CommentInput_input', ref: ref_comment_input },
                    _react2.default.createElement(_Textarea2.default, {
                        text: text,
                        placeholder: placeholder,
                        textarea_class: 'CommentInput_textarea scroll-thin',
                        onChange: onChangeCmt,
                        handleSend: onSendCmt
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'CommentInput_files' },
                    _react2.default.createElement(
                        'div',
                        { className: 'CommentInput_files-row display-flex justify-content-center align-items-center' },
                        _react2.default.createElement(
                            'div',
                            { className: 'CommentInput_files-col' },
                            _react2.default.createElement(
                                _InputFile2.default,
                                {
                                    onChange: onChooseFile,
                                    file_multiple: file_multiple,
                                    accept: 'image/*,video/*',
                                    title: 'Choose images/videos'
                                },
                                _react2.default.createElement(_IconsInput2.default, { size_icon: '1rem' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'CommentInput_files-col CommentInput__send' },
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'display-flex ' + (text.trim() || urls.length ? 'nav-active' : ''),
                                    onClick: onSendCmt
                                },
                                _react2.default.createElement(_IconsAction2.default, { x: 200, y: 200 })
                            )
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'CommentInput_preview' },
            _react2.default.createElement(_ImgVidPreview2.default, {
                urls: urls || [],
                show_all: true,
                deleteAnItem: deleteAnItemPreview,
                delete_in_pic: true,
                video_controls: false
            }),
            _react2.default.createElement(_FetchingDiv2.default, { open_fetching: file_reading })
        )
    );
}

exports.default = CommentInput;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input_img_vid_preview/comment_input/CommentInput.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input_img_vid_preview/comment_input/CommentInput.scss ***!
  \**************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".CommentInput_contain {\n  background-color: var(--md-bg-fb);\n  border-radius: 15px;\n}\n\n.CommentInput_input {\n  flex-basis: 1rem;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  overflow: hidden;\n}\n\n.CommentInput_textarea {\n  padding: 0;\n}\n\n.CommentInput_files {\n  align-self: flex-end;\n  padding-right: 0.25rem;\n}\n\n.CommentInput__send {\n  display: none;\n}\n\n.CommentInput_preview {\n  max-width: 100%;\n  overflow-x: auto;\n}\n.CommentInput_preview .ImgVidPreview {\n  display: flex;\n}\n.CommentInput_preview .ImgVidPreview .ImgVidPreview__elm {\n  position: relative;\n  margin: 0.25rem;\n}\n\n@media (max-width: 600px) {\n  .CommentInput_files-row .IconsInput {\n    width: 0.8rem;\n    height: 0.8rem;\n  }\n\n  .CommentInput__send {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/input_img_vid_preview/comment_input/CommentInput.scss"],"names":[],"mappings":"AAEA;EACI,iCAAA;EACA,mBAAA;AADJ;;AAIA;EACI,gBAAA;EACA,YAAA;EAEA,oBAAA;EACA,gBAAA;AAFJ;;AAKA;EACI,UAAA;AAFJ;;AAMA;EACI,oBAAA;EACA,sBAAA;AAHJ;;AAiBA;EACI,aAAA;AAdJ;;AAmBA;EACI,eAAA;EACA,gBAAA;AAhBJ;AAiBI;EACI,aAAA;AAfR;AAgBQ;EACI,kBAAA;EACA,eAAA;AAdZ;;AAoBA;EAGQ;IACI,aAAA;IACA,cAAA;EAnBV;;EAuBE;IACI,cAAA;EApBN;AACF","sourcesContent":["\r\n//\r\n.CommentInput_contain {\r\n    background-color: var(--md-bg-fb);\r\n    border-radius: 15px;\r\n}\r\n// ..\r\n.CommentInput_input {\r\n    flex-basis: 1rem;\r\n    flex-grow: 1;\r\n\r\n    padding-left: 0.5rem;\r\n    overflow: hidden;\r\n}\r\n// ...\r\n.CommentInput_textarea{\r\n    padding: 0;\r\n}\r\n\r\n// ..\r\n.CommentInput_files {\r\n    align-self: flex-end;\r\n    padding-right: 0.25rem;\r\n}\r\n// ...\r\n// .CommentInput_files-row{\r\n//     .InputFile {\r\n//         width: 1.25rem;\r\n//         height: 1.25rem;\r\n//     }\r\n// }\r\n// ....\r\n// .CommentInput_files-col {\r\n//     padding: 0.2rem;\r\n// }\r\n// ....\r\n.CommentInput__send {\r\n    display: none;\r\n}\r\n\r\n\r\n// preview\r\n.CommentInput_preview {\r\n    max-width: 100%;\r\n    overflow-x: auto;\r\n    .ImgVidPreview {\r\n        display: flex;\r\n        .ImgVidPreview__elm {\r\n            position: relative;\r\n            margin: 0.25rem;\r\n        }\r\n    }\r\n}\r\n\r\n//\r\n@media (max-width: 600px) {\r\n    // ...\r\n    .CommentInput_files-row {\r\n        .IconsInput {\r\n            width: 0.8rem;\r\n            height: 0.8rem;\r\n        }\r\n    }\r\n    // ....\r\n    .CommentInput__send {\r\n        display: block;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/input_img_vid_preview/comment_input/CommentInput.scss":
/*!*****************************************************************************!*\
  !*** ./src/component/input_img_vid_preview/comment_input/CommentInput.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CommentInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./CommentInput.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input_img_vid_preview/comment_input/CommentInput.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CommentInput_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CommentInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src__some_function_UnitTime_js-src_component_input_img_vid_preview_comment_input_CommentInput_js.js.map