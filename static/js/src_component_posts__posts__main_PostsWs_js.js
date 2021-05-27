(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_posts__posts__main_PostsWs_js"],{

/***/ "./src/_custom_hooks/UseScreenFetching.js":
/*!************************************************!*\
  !*** ./src/_custom_hooks/UseScreenFetching.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useScreenFetching = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _ContextAPI = __webpack_require__(/*! ../_context/ContextAPI */ "./src/_context/ContextAPI.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
var useScreenFetching = exports.useScreenFetching = function useScreenFetching() {

    //
    var handleScreenFetching = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var callback_handle_API = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
                return new Promise();
            };
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            openScreenFetching();
                            _context.next = 3;
                            return callback_handle_API();

                        case 3:
                            data = _context.sent;

                            closeScreenFetching();

                            return _context.abrupt('return', data);

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function handleScreenFetching() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        openScreenFetching = _useContext.openScreenFetching,
        closeScreenFetching = _useContext.closeScreenFetching;

    return handleScreenFetching;
};

/***/ }),

/***/ "./src/_icons_svg/icons_edit/IconsEdit.js":
/*!************************************************!*\
  !*** ./src/_icons_svg/icons_edit/IconsEdit.js ***!
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

__webpack_require__(/*! ./IconsEdit.scss */ "./src/_icons_svg/icons_edit/IconsEdit.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
IconsEdit.propTypes = {
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    size_icon: _propTypes2.default.string,
    color: _propTypes2.default.string,
    is_editing: _propTypes2.default.bool
};

IconsEdit.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    color: 'var(--blue)',
    is_editing: false
};

/**
 * icons edit: pen_edit + dot edit
 */
function IconsEdit(props) {
    var size_icon = props.size_icon,
        x = props.x,
        y = props.y,
        color = props.color,
        is_editing = props.is_editing;


    return _react2.default.createElement(
        'svg',
        {
            className: 'IconsEdit size-icon',
            width: size_icon,
            height: size_icon,
            viewBox: x + ' ' + y + ' 200 200'
        },
        _react2.default.createElement('path', { d: 'M0,200 L15,160 L175,0 L200,25 L40,185 Z', fill: color }),
        _react2.default.createElement(
            'g',
            { stroke: 'whiteSmoke', strokeWidth: '15' },
            _react2.default.createElement('line', { x1: '150', y1: '25', x2: '175', y2: '50' }),
            _react2.default.createElement('line', { x1: '20', y1: '155', x2: '45', y2: '180' })
        ),
        _react2.default.createElement(
            'g',
            {
                className: is_editing ? 'EditIcons_active' : 'display-none',
                fill: 'var(--md-color)'
            },
            _react2.default.createElement('circle', { cx: '80', cy: '190', r: '10' }),
            _react2.default.createElement('circle', { cx: '130', cy: '190', r: '10' }),
            _react2.default.createElement('circle', { cx: '180', cy: '190', r: '10' })
        )
    );
}

exports.default = IconsEdit;

/***/ }),

/***/ "./src/component/actions/common_actions/permission/ActionPermission.js":
/*!*****************************************************************************!*\
  !*** ./src/component/actions/common_actions/permission/ActionPermission.js ***!
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

var _GroupIconPermission = __webpack_require__(/*! ../../../../_groups_icon/permission/GroupIconPermission */ "./src/_groups_icon/permission/GroupIconPermission.js");

var _FlexDiv = __webpack_require__(/*! ../../../some_div/flex_div/FlexDiv */ "./src/component/some_div/flex_div/FlexDiv.js");

var _FlexDiv2 = _interopRequireDefault(_FlexDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
ActionPermission.propTypes = {
    current_permission: _propTypes2.default.number,
    title: _propTypes2.default.string,
    handleOpenPermission: _propTypes2.default.func
};
// 


ActionPermission.defaultProps = {
    current_permission: 0,
    title: 'Permission'
};

//
function ActionPermission(props) {
    var current_permission = props.current_permission,
        handleOpenPermission = props.handleOpenPermission,
        title = props.title;

    //

    return _react2.default.createElement(
        'div',
        {
            className: 'action-item',
            onClick: handleOpenPermission,
            title: 'Permission'
        },
        _react2.default.createElement(_FlexDiv2.default, {
            ComponentLeft: _GroupIconPermission.IconsPermission[current_permission].Icon,
            ComponentRight: _react2.default.createElement(
                'div',
                null,
                title
            )
        })
    );
}

exports.default = ActionPermission;

/***/ }),

/***/ "./src/component/posts/__handle_create/PostHandleCreate.js":
/*!*****************************************************************!*\
  !*** ./src/component/posts/__handle_create/PostHandleCreate.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleCreateNewPost = handleCreateNewPost;

var _DefaultLogin = __webpack_require__(/*! ../../../pages/login_form/_default/DefaultLogin */ "./src/pages/login_form/_default/DefaultLogin.js");

//
function handleCreateNewPost(content_post, vid_pics) {
    var picture = _DefaultLogin.default_login.picture,
        first_name = _DefaultLogin.default_login.first_name,
        last_name = _DefaultLogin.default_login.last_name;


    var new_vid_pics = vid_pics.map(function (item) {
        return {
            id: 6,
            content_obj: {
                has_more_content: false,
                content: item.content
            },
            likes: [],
            arr_unique_like: [],
            count_like: 0,
            vid_pic: item.vid_pic,
            folder_picture: 'my folder picture',
            post_model: 11,
            comments: [],
            count_comment: 0,
            histories: [],
            created_time: new Date().toString(),
            updated_time: new Date().toString()
        };
    });

    return {
        id: 11,
        user: {
            id: 1,
            picture: picture,
            first_name: first_name,
            last_name: last_name,
            is_online: true
        },
        content_obj: {
            has_more_content: false,
            content: content_post
        },
        vid_pics: new_vid_pics,
        count_vid_pic: 1,
        likes: [],
        count_like: 0,
        user_type_like: -1,
        shares: [],
        count_share: 0,
        count_unique_share: 0,
        count_user_shared: 0,
        comments: [],
        count_comment: 0,
        histories: [],
        count_history: 0,
        created_time: new Date().toString(),
        permission_post: 0,
        updated_time: new Date().toString(),
        profile_user: 1
    };
}

/***/ }),

/***/ "./src/component/posts/_post/_main_post/PostWs.js":
/*!********************************************************!*\
  !*** ./src/component/posts/_post/_main_post/PostWs.js ***!
  \********************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextAPI = __webpack_require__(/*! ../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _UseForceUpdate = __webpack_require__(/*! ../../../../_custom_hooks/UseForceUpdate */ "./src/_custom_hooks/UseForceUpdate.js");

var _UseScreenFetching = __webpack_require__(/*! ../../../../_custom_hooks/UseScreenFetching */ "./src/_custom_hooks/UseScreenFetching.js");

var _PictureName = __webpack_require__(/*! ../../../picture_name/pic_name/PictureName */ "./src/component/picture_name/pic_name/PictureName.js");

var _PictureName2 = _interopRequireDefault(_PictureName);

var _Content_more = __webpack_require__(/*! ../../../content_more/Content_more */ "./src/component/content_more/Content_more.js");

var _Content_more2 = _interopRequireDefault(_Content_more);

var _ContextPost = __webpack_require__(/*! ../../__context_post/ContextPost */ "./src/component/posts/__context_post/ContextPost.js");

var _PostHandleAPI = __webpack_require__(/*! ../../__handle_api/PostHandleAPI */ "./src/component/posts/__handle_api/PostHandleAPI.js");

var _CreateUpdatePost = __webpack_require__(/*! ../../common/create_update_post/_main/CreateUpdatePost */ "./src/component/posts/common/create_update_post/_main/CreateUpdatePost.js");

var _CreateUpdatePost2 = _interopRequireDefault(_CreateUpdatePost);

var _VidPicsPost = __webpack_require__(/*! ../vid_pics/_main/VidPicsPost */ "./src/component/posts/_post/vid_pics/_main/VidPicsPost.js");

var _VidPicsPost2 = _interopRequireDefault(_VidPicsPost);

var _PermissionPost = __webpack_require__(/*! ../../common/permission/_main/PermissionPost */ "./src/component/posts/common/permission/_main/PermissionPost.js");

var _PermissionPost2 = _interopRequireDefault(_PermissionPost);

var _InfoWs = __webpack_require__(/*! ../../common/info/_main/InfoWs */ "./src/component/posts/common/info/_main/InfoWs.js");

var _InfoWs2 = _interopRequireDefault(_InfoWs);

var _ActionsPost = __webpack_require__(/*! ../actions_post/ActionsPost */ "./src/component/posts/_post/actions_post/ActionsPost.js");

var _ActionsPost2 = _interopRequireDefault(_ActionsPost);

var _CommentsWs = __webpack_require__(/*! ../../common/ws_comments/_main/CommentsWs */ "./src/component/posts/common/ws_comments/_main/CommentsWs.js");

var _CommentsWs2 = _interopRequireDefault(_CommentsWs);

var _LikeShareCmtWs = __webpack_require__(/*! ../../common/like_share_cmt/_main/LikeShareCmtWs */ "./src/component/posts/common/like_share_cmt/_main/LikeShareCmtWs.js");

var _LikeShareCmtWs2 = _interopRequireDefault(_LikeShareCmtWs);

var _PostHistory = __webpack_require__(/*! ../history/_main/PostHistory */ "./src/component/posts/_post/history/_main/PostHistory.js");

var _PostHistory2 = _interopRequireDefault(_PostHistory);

__webpack_require__(/*! ./Post.scss */ "./src/component/posts/_post/_main_post/Post.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
Post.propTypes = {
    post: _propTypes2.default.object
};

//
function Post(props) {
    //
    var openUpdatePost = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var data, vid_pics_update;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return handleScreenFetching(function () {
                                return (0, _PostHandleAPI.handle_API_PostUpdate_R)(id);
                            });

                        case 2:
                            data = _context.sent;
                            vid_pics_update = data.vid_pics.map(function (item) {
                                return {
                                    id: item.id,
                                    content: item.content,
                                    vid_pic: item.vid_pic,
                                    type: item.vid_pic.endsWith('./mp4') ? 'video' : 'image'
                                };
                            });


                            openScreenUpdate('Update', _CreateUpdatePost2.default, {
                                main_content: data.content,
                                vid_pics: vid_pics_update,

                                title_action: 'Update',
                                handleCreateUpdatePost: handleUpdate
                            });

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function openUpdatePost() {
            return _ref.apply(this, arguments);
        };
    }();
    //


    //
    var handleUpdate = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data_update) {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return handleScreenFetching(function () {
                                return (0, _PostHandleAPI.handle_API_Post_U)(id, data_update);
                            });

                        case 2:
                            data = _context2.sent;

                            closeScreenUpdate();
                            console.log(data, data_update);
                            // Do something and force_update
                            content_obj.content = data_update.main_content;
                            content_obj.has_more_content = false;
                            forceUpdate();

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        return function handleUpdate(_x) {
            return _ref2.apply(this, arguments);
        };
    }();
    //


    var handleDelete = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return handleScreenFetching(function () {
                                return (0, _PostHandleAPI.handle_API_Post_D)(id);
                            });

                        case 2:
                            post.is_del = true;
                            forceUpdate();

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        return function handleDelete() {
            return _ref3.apply(this, arguments);
        };
    }();
    //


    //
    var handleChoosePermission = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ix) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return handleScreenFetching(function () {
                                return (0, _PostHandleAPI.handle_API_Permission_U)(id, ix);
                            });

                        case 2:
                            post.permission_post = ix;
                            forceUpdate();

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        return function handleChoosePermission(_x2) {
            return _ref4.apply(this, arguments);
        };
    }();

    /* ------------------------------ */

    // More content


    //
    var handleClickBtnCmt = function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _ref6, _ref7, new_comments;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            if (!(!comments.length && count_comment)) {
                                _context5.next = 12;
                                break;
                            }

                            setFetchingCmt(true);
                            _context5.next = 4;
                            return handle_API_Cmt_L(id);

                        case 4:
                            _ref6 = _context5.sent;
                            _ref7 = _slicedToArray(_ref6, 1);
                            new_comments = _ref7[0];

                            comments.push.apply(comments, _toConsumableArray(new_comments));
                            setFetchingCmt(false);
                            focusInput();
                            _context5.next = 13;
                            break;

                        case 12:
                            focusInput();

                        case 13:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        return function handleClickBtnCmt() {
            return _ref5.apply(this, arguments);
        };
    }();

    //


    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        c_user = _useContext.user,
        openScreenConfirm = _useContext.openScreenConfirm,
        openScreenHistory = _useContext.openScreenHistory,
        openScreenUpdate = _useContext.openScreenUpdate,
        openScreenPermission = _useContext.openScreenPermission,
        closeScreenUpdate = _useContext.closeScreenUpdate;

    var _useContext2 = (0, _react.useContext)(_ContextPost.context_post),
        handle_API_Cmt_L = _useContext2.handle_API_Cmt_L;

    //


    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();
    var handleScreenFetching = (0, _UseScreenFetching.useScreenFetching)();

    //
    var post = props.post,
        post_ix = props.post_ix,
        enabled_share = props.enabled_share;
    var is_del = post.is_del,
        id = post.id,
        user = post.user,
        vid_pics = post.vid_pics,
        content_obj = post.content_obj,
        permission_post = post.permission_post,
        updated_time = post.updated_time,
        likes = post.likes,
        count_like = post.count_like,
        user_type_like = post.user_type_like,
        shares = post.shares,
        count_share = post.count_share,
        count_unique_share = post.count_unique_share,
        count_user_shared = post.count_user_shared,
        comments = post.comments,
        count_comment = post.count_comment;

    // state

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        open_input = _useState2[0],
        setOpenInput = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        fetching_cmt = _useState4[0],
        setFetchingCmt = _useState4[1];

    //


    var ref_comments = (0, _react.useRef)(null);

    /* -------------------- OPEN ACTIONS ----------------- */

    //
    function openHistoryPost() {
        openScreenHistory('History', on_API_History_L, _PostHistory2.default, {
            handle_API_MoreContent: _PostHandleAPI.handle_API_ContentMoreHistory_R
        });
    }function openDeletePost() {
        openScreenConfirm('Delete', 'Do you really want to delete this post?', handleDelete);
    }
    //
    function openReportPost() {
        openScreenConfirm('Report', 'Do you want to report this post?', handleReport);
    }
    //
    function openPermissionPost() {
        openScreenPermission(permission_post, handleChoosePermission);
    }

    /* --------------- ON HANDLE ACTIONS ---------------- */

    //
    function on_API_History_L(c_count) {
        return (0, _PostHandleAPI.handle_API_History_L)(id, c_count);
    }function handleReport() {
        //  Do something
        console.log('Report: ' + id);
    }function on_API_MoreContent_R() {
        return (0, _PostHandleAPI.handle_API_MoreContent_R)(id);
    }function focusInput() {
        if (c_user.id) {
            !open_input && setOpenInput(true);
            setTimeout(function () {
                ref_comments.current.querySelector('.Comments_input-contain textarea.CommentInput_textarea').focus();
            }, 1);
        }
    }

    //
    return !is_del && _react2.default.createElement(
        'div',
        { className: 'Post box-shadow-1 brs-5px' },
        _react2.default.createElement(
            'div',
            { className: 'Post_head position-rel' },
            _react2.default.createElement(
                'div',
                { className: 'Post__user' },
                _react2.default.createElement(_PictureName2.default, {
                    user: user,
                    content: _react2.default.createElement(_PermissionPost2.default, {
                        permission_post: +permission_post,
                        updated_time: updated_time
                    })
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'Post__actions' },
                _react2.default.createElement(_ActionsPost2.default, {
                    openHistoryPost: openHistoryPost,
                    openUpdatePost: openUpdatePost,
                    openDeletePost: openDeletePost,
                    openReportPost: openReportPost,
                    openPermissionPost: openPermissionPost
                })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Post_content' },
            _react2.default.createElement(
                'div',
                { className: 'Post__text' },
                _react2.default.createElement(_Content_more2.default, {
                    content_obj: content_obj,
                    seeMoreContent: on_API_MoreContent_R
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'Post__pic' },
                _react2.default.createElement(_VidPicsPost2.default, { post_ix: post_ix, vid_pics: vid_pics })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'Post_Info' },
            _react2.default.createElement(_InfoWs2.default, {
                parent_id: id,
                count_comment: count_comment
                //
                , likes: likes,
                count_like: count_like,
                user_type_like: user_type_like
                //
                , enabled_share: enabled_share,
                shares: shares,
                count_share: count_share,
                count_unique_share: count_unique_share,
                handleClickBtnCmt: handleClickBtnCmt
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'Post_btn' },
            _react2.default.createElement(_LikeShareCmtWs2.default, {
                parent_id: id
                //
                , enabled_like: true,
                user_type_like: user_type_like
                //
                , enabled_cmt: true,
                count_comment: count_comment
                //
                , enabled_share: true,
                count_share: count_share,
                count_user_shared: count_user_shared
                //
                , handleClickBtnCmt: handleClickBtnCmt
            })
        ),
        _react2.default.createElement(
            'div',
            { ref: ref_comments, className: 'Post_comment' },
            _react2.default.createElement(_CommentsWs2.default, {
                parent_id: id,
                comments: comments,
                count_comment: count_comment,
                open_input: open_input,
                fetching_first_cmt: fetching_cmt
            })
        )
    );
}

exports.default = Post;

/***/ }),

/***/ "./src/component/posts/_post/actions_post/ActionsPost.js":
/*!***************************************************************!*\
  !*** ./src/component/posts/_post/actions_post/ActionsPost.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Actions = __webpack_require__(/*! ../../../actions/_main/Actions */ "./src/component/actions/_main/Actions.js");

var _Actions2 = _interopRequireDefault(_Actions);

var _ActionHistory = __webpack_require__(/*! ../../../actions/common_actions/history/ActionHistory */ "./src/component/actions/common_actions/history/ActionHistory.js");

var _ActionHistory2 = _interopRequireDefault(_ActionHistory);

var _ActionUpdate = __webpack_require__(/*! ../../../actions/common_actions/update/ActionUpdate */ "./src/component/actions/common_actions/update/ActionUpdate.js");

var _ActionUpdate2 = _interopRequireDefault(_ActionUpdate);

var _ActionDelete = __webpack_require__(/*! ../../../actions/common_actions/delete/ActionDelete */ "./src/component/actions/common_actions/delete/ActionDelete.js");

var _ActionDelete2 = _interopRequireDefault(_ActionDelete);

var _ActionReport = __webpack_require__(/*! ../../../actions/common_actions/report/ActionReport */ "./src/component/actions/common_actions/report/ActionReport.js");

var _ActionReport2 = _interopRequireDefault(_ActionReport);

var _ActionPermission = __webpack_require__(/*! ../../../actions/common_actions/permission/ActionPermission */ "./src/component/actions/common_actions/permission/ActionPermission.js");

var _ActionPermission2 = _interopRequireDefault(_ActionPermission);

__webpack_require__(/*! ./ActionsPost.scss */ "./src/component/posts/_post/actions_post/ActionsPost.scss");

var _ActionBack = __webpack_require__(/*! ../../../actions/common_actions/back/ActionBack */ "./src/component/actions/common_actions/back/ActionBack.js");

var _ActionBack2 = _interopRequireDefault(_ActionBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
ActionsPost.propTypes = {};

//
function ActionsPost(props) {
    var openHistoryPost = props.openHistoryPost,
        openUpdatePost = props.openUpdatePost,
        openDeletePost = props.openDeletePost,
        openReportPost = props.openReportPost,
        openPermissionPost = props.openPermissionPost;

    //

    return _react2.default.createElement(
        'div',
        { className: 'ActionsPost' },
        _react2.default.createElement(
            _Actions2.default,
            null,
            _react2.default.createElement(
                'ul',
                { className: 'ActionsPost__list' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_ActionHistory2.default, { handleOpenHistory: openHistoryPost })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_ActionUpdate2.default, { handleUpdate: openUpdatePost })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_ActionDelete2.default, { handleDelete: openDeletePost })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_ActionReport2.default, { handleOpenReport: openReportPost })
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(_ActionPermission2.default, { handleOpenPermission: openPermissionPost })
                )
            )
        )
    );
}

exports.default = ActionsPost;

/***/ }),

/***/ "./src/component/posts/_post/history/_main/PostHistory.js":
/*!****************************************************************!*\
  !*** ./src/component/posts/_post/history/_main/PostHistory.js ***!
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

var _PostHistoryItem = __webpack_require__(/*! ../item/PostHistoryItem */ "./src/component/posts/_post/history/item/PostHistoryItem.js");

var _PostHistoryItem2 = _interopRequireDefault(_PostHistoryItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
// import './PostHistory.scss';

//
PostHistory.propTypes = {};

//

//
function PostHistory(props) {
    var histories = props.histories,
        handle_API_MoreContent = props.handle_API_MoreContent;

    // 

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'ul',
            { className: 'PostHistory_list ScreenBlur_list' },
            histories.map(function (item, ix) {
                return _react2.default.createElement(
                    'li',
                    { className: 'PostHistory_item ScreenBlur_item', key: 'PostHistory_item_' + ix },
                    _react2.default.createElement(_PostHistoryItem2.default, {
                        his_item: item,
                        handle_API_MoreContent: handle_API_MoreContent
                    })
                );
            })
        )
    );
}

exports.default = PostHistory;

/***/ }),

/***/ "./src/component/posts/_post/history/item/PostHistoryItem.js":
/*!*******************************************************************!*\
  !*** ./src/component/posts/_post/history/item/PostHistoryItem.js ***!
  \*******************************************************************/
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

var _Content_more = __webpack_require__(/*! ../../../../content_more/Content_more */ "./src/component/content_more/Content_more.js");

var _Content_more2 = _interopRequireDefault(_Content_more);

__webpack_require__(/*! ./PostHistoryItem.scss */ "./src/component/posts/_post/history/item/PostHistoryItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PostHistoryItem.propTypes = {};

//
function PostHistoryItem(props) {

    //
    var seeMoreContent = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var more_content;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setIsFetching(true);
                            _context.next = 3;
                            return handle_API_MoreContent(id);

                        case 3:
                            more_content = _context.sent;

                            content_obj.content += more_content;
                            content_obj.has_more_content = false;
                            setIsFetching(false);

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function seeMoreContent() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    var his_item = props.his_item,
        handle_API_MoreContent = props.handle_API_MoreContent;
    var id = his_item.id,
        created_time = his_item.created_time,
        content_obj = his_item.content_obj,
        vid_pics_create = his_item.vid_pics_create,
        vid_pics_del = his_item.vid_pics_del,
        count_vid_pic_create = his_item.count_vid_pic_create,
        count_vid_pic_del = his_item.count_vid_pic_del;
    var content = content_obj.content,
        has_more_content = content_obj.has_more_content;

    // 

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        is_fetching = _useState2[0],
        setIsFetching = _useState2[1];

    return _react2.default.createElement(
        'div',
        { className: 'PostHistoryItem ScreenBlurItem' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'PostHistoryItem_time ScreenBlurItem_time' },
                'Updated at ',
                new Date(created_time).toLocaleString()
            ),
            _react2.default.createElement(
                'div',
                { className: content ? '' : 'display-none' },
                _react2.default.createElement(_Content_more2.default, {
                    content: content,
                    has_more_content: has_more_content,
                    is_fetching: is_fetching,
                    seeMoreContent: seeMoreContent
                })
            ),
            _react2.default.createElement(
                'div',
                { className: count_vid_pic_create ? '' : 'display-none' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PostHistoryItem__title-pic font-italic' },
                        'Created ',
                        count_vid_pic_create,
                        ' videos / pictures:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'PostHistoryItem__pic' },
                        _react2.default.createElement(
                            'div',
                            { className: 'display-flex' },
                            vid_pics_create.map(function (item, ix) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: 'PostHistoryItem_pic_create_' + ix },
                                    _react2.default.createElement('img', { src: item.vid_pic, alt: '', width: 100, height: 100 })
                                );
                            })
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: count_vid_pic_del ? '' : 'display-none' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PostHistoryItem__title-pic font-italic' },
                        'Deleted ',
                        count_vid_pic_del,
                        ' videos / pictures:'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'PostHistoryItem__pic' },
                        _react2.default.createElement(
                            'div',
                            { className: 'display-flex' },
                            vid_pics_del.map(function (item, ix) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: 'PostHistoryItem_pic_del_' + ix },
                                    _react2.default.createElement('img', { src: item.vid_pic, alt: '', width: 100, height: 100 })
                                );
                            })
                        )
                    )
                )
            )
        )
    );
}

exports.default = PostHistoryItem;

/***/ }),

/***/ "./src/component/posts/_post/skeleton/PostSkeleton.js":
/*!************************************************************!*\
  !*** ./src/component/posts/_post/skeleton/PostSkeleton.js ***!
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

var _SkeletonDiv = __webpack_require__(/*! ../../../skeleton/skeleton_div/SkeletonDiv */ "./src/component/skeleton/skeleton_div/SkeletonDiv.js");

var _SkeletonDiv2 = _interopRequireDefault(_SkeletonDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
PostSkeleton.propTypes = {};

// 

// 
function PostSkeleton(props) {
    return _react2.default.createElement(
        'div',
        { className: 'Post' },
        _react2.default.createElement(
            'div',
            { className: 'padding-8px' },
            _react2.default.createElement(
                'div',
                { className: 'display-flex' },
                _react2.default.createElement('div', { className: 'PictureNameCommon__pic brs-50' }),
                _react2.default.createElement(
                    'div',
                    { className: 'PostSkeleton_name' },
                    _react2.default.createElement(_SkeletonDiv2.default, null)
                )
            )
        ),
        _react2.default.createElement('div', { className: 'VidPics_count' })
    );
}

exports.default = PostSkeleton;

/***/ }),

/***/ "./src/component/posts/_post/vid_pics/_main/VidPicsPost.js":
/*!*****************************************************************!*\
  !*** ./src/component/posts/_post/vid_pics/_main/VidPicsPost.js ***!
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

var _image_loading = __webpack_require__(/*! ../../../../../../image/image_loading.svg */ "./image/image_loading.svg");

var _image_loading2 = _interopRequireDefault(_image_loading);

var _VidPicPostItem = __webpack_require__(/*! ../item/VidPicPostItem */ "./src/component/posts/_post/vid_pics/item/VidPicPostItem.js");

var _VidPicPostItem2 = _interopRequireDefault(_VidPicPostItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
// import './VidPicsPost.scss';

//

//
function VidPicsPost(props) {
    var post_ix = props.post_ix,
        vid_pics = props.vid_pics;

    // 

    return _react2.default.createElement(
        'div',
        { className: 'VidPicsPost' },
        vid_pics ? _react2.default.createElement(
            'div',
            { className: vid_pics.length > 0 ? 'VidPics_count' : '' },
            vid_pics.map(function (item, index) {
                return _react2.default.createElement(_VidPicPostItem2.default, {
                    key: 'VidPicsPost_' + index,
                    index: index,
                    post_ix: post_ix,
                    count_vid_pic: vid_pics.length,
                    vid_pic: item.vid_pic
                });
            })
        ) : _react2.default.createElement('img', { src: _image_loading2.default, alt: '' })
    );
}
// 


VidPicsPost.propTypes = {
    vid_pics: _propTypes2.default.array
};

VidPicsPost.defaultProps = {
    vid_pics: [1]
};

exports.default = VidPicsPost;

/***/ }),

/***/ "./src/component/posts/_post/vid_pics/item/VidPicPostItem.js":
/*!*******************************************************************!*\
  !*** ./src/component/posts/_post/vid_pics/item/VidPicPostItem.js ***!
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

var _VideoOrImage = __webpack_require__(/*! ../../../../../_some_function/VideoOrImage */ "./src/_some_function/VideoOrImage.js");

var _ContextPost = __webpack_require__(/*! ../../../__context_post/ContextPost */ "./src/component/posts/__context_post/ContextPost.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 

// 
VidPicPostItem.propTypes = {};

// 

//
function VidPicPostItem(props) {
    var count_vid_pic = props.count_vid_pic,
        index = props.index,
        post_ix = props.post_ix,
        vid_pic = props.vid_pic;
    //

    var _useContext = (0, _react.useContext)(_ContextPost.context_post),
        zoomVidPicPost = _useContext.zoomVidPicPost;
    // 


    function onZoomVidPicPost() {
        zoomVidPicPost(index, post_ix);
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'VidPics_count_' + (count_vid_pic > 4 ? 5 : count_vid_pic),
            onClick: onZoomVidPicPost,
            'data-length': index == 3 && count_vid_pic > 4 ? count_vid_pic - 4 : undefined
        },
        (0, _VideoOrImage.VideoOrImage)(vid_pic)
    );
}

exports.default = VidPicPostItem;

/***/ }),

/***/ "./src/component/posts/_posts/_main/PostsWs.js":
/*!*****************************************************!*\
  !*** ./src/component/posts/_posts/_main/PostsWs.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextAPI = __webpack_require__(/*! ../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _ConstAPI = __webpack_require__(/*! ../../../../api/_ConstAPI */ "./src/api/_ConstAPI.js");

var _useMounted = __webpack_require__(/*! ../../../../_custom_hooks/useMounted */ "./src/_custom_hooks/useMounted.js");

var _UseForceUpdate = __webpack_require__(/*! ../../../../_custom_hooks/UseForceUpdate */ "./src/_custom_hooks/UseForceUpdate.js");

var _ContextPost = __webpack_require__(/*! ../../__context_post/ContextPost */ "./src/component/posts/__context_post/ContextPost.js");

var _ContextPost2 = _interopRequireDefault(_ContextPost);

var _PostHandleAPI = __webpack_require__(/*! ../../__handle_api/PostHandleAPI */ "./src/component/posts/__handle_api/PostHandleAPI.js");

var _PostHandleCreate = __webpack_require__(/*! ../../__handle_create/PostHandleCreate */ "./src/component/posts/__handle_create/PostHandleCreate.js");

var _PostWs = __webpack_require__(/*! ../../_post/_main_post/PostWs */ "./src/component/posts/_post/_main_post/PostWs.js");

var _PostWs2 = _interopRequireDefault(_PostWs);

var _AddNewPost = __webpack_require__(/*! ../../common/add_new_post/AddNewPost */ "./src/component/posts/common/add_new_post/AddNewPost.js");

var _AddNewPost2 = _interopRequireDefault(_AddNewPost);

var _ZoomVidPicItem = __webpack_require__(/*! ../../_zoom_post/zoom_vid_pic/_main/ZoomVidPicItem */ "./src/component/posts/_zoom_post/zoom_vid_pic/_main/ZoomVidPicItem.js");

var _ZoomVidPicItem2 = _interopRequireDefault(_ZoomVidPicItem);

__webpack_require__(/*! ./Posts.scss */ "./src/component/posts/_posts/_main/Posts.scss");

var _ComponentSkeleton = __webpack_require__(/*! ../../../skeleton/component_skeleton/ComponentSkeleton */ "./src/component/skeleton/component_skeleton/ComponentSkeleton.js");

var _ComponentSkeleton2 = _interopRequireDefault(_ComponentSkeleton);

var _PostSkeleton = __webpack_require__(/*! ../../_post/skeleton/PostSkeleton */ "./src/component/posts/_post/skeleton/PostSkeleton.js");

var _PostSkeleton2 = _interopRequireDefault(_PostSkeleton);

var _FetchingDiv = __webpack_require__(/*! ../../../some_div/fetching/FetchingDiv */ "./src/component/some_div/fetching/FetchingDiv.js");

var _FetchingDiv2 = _interopRequireDefault(_FetchingDiv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
Posts.propTypes = {
    posts: _propTypes2.default.array,
    has_add_new: _propTypes2.default.bool,
    title_add_new: _propTypes2.default.string,
    has_fetched: _propTypes2.default.bool,
    is_fetching: _propTypes2.default.bool
};
Posts.defaultProps = {
    has_add_new: true,
    has_fetched: false,
    is_fetching: false
};

//
function Posts(props) {

    /* -------------------------------- CREATE --------------------------------- */

    var handleCreatePost = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
            var new_data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            openScreenFetching();

                            // const new_data = await handle_API_Post_C({
                            //     content: data.main_content,
                            //     'vid_pics[]': files,
                            //     'contents[]': data.vid_pics.map(item => item.content),
                            //      'is_friend_wall': location.pathname.search('/profile') >= 0 && user.id =! id,
                            // });
                            _context.next = 3;
                            return (0, _PostHandleAPI.handle_API_Post_C)(data);

                        case 3:
                            new_data = (0, _PostHandleCreate.handleCreateNewPost)(data.main_content, data.vid_pics);


                            posts.unshift(new_data);
                            closeScreenUpdate();
                            closeScreenFetching();
                            forceUpdate();

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function handleCreatePost(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        openScreenFetching = _useContext.openScreenFetching,
        closeScreenFetching = _useContext.closeScreenFetching,
        closeScreenUpdate = _useContext.closeScreenUpdate;

    //


    var posts = props.posts,
        has_fetched = props.has_fetched,
        is_fetching = props.is_fetching,
        has_add_new = props.has_add_new,
        title_add_new = props.title_add_new;

    //

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        show_zoom_vid_pic = _useState2[0],
        setShowZoomVidPic = _useState2[1];

    //


    var ws = (0, _react.useRef)(null);

    //
    var mounted = (0, _useMounted.useMounted)();
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    (0, _react.useEffect)(function () {
        window.addEventListener('popstate', handlePopstate);

        ws.current = localStorage.is_login && !_ConstAPI.is_api_fake ? new WebSocket('') : null;

        return function () {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);

    //
    function handlePopstate() {
        mounted && setShowZoomVidPic(false);
    }

    //
    function handle_fake_ws_send(data) {
        console.log(data);
    }

    /* -------------------------------- VID_PIC --------------------------------- */

    //
    function zoomVidPicPost(index, post_ix) {
        var photo_id = posts[post_ix].vid_pics[index].id;


        history.pushState('', '', '/post/photos/' + photo_id);
        setShowZoomVidPic(true);
    }

    //
    function closeScreenTitle() {
        setShowZoomVidPic(false);
        history.back();
    }return _react2.default.createElement(
        'div',
        { className: 'Posts' },
        _react2.default.createElement(
            'div',
            {
                className: 'Posts_contain ' + (show_zoom_vid_pic ? 'display-none' : '')
            },
            has_add_new && _react2.default.createElement(
                'div',
                { className: 'Posts_new' },
                _react2.default.createElement(_AddNewPost2.default, {
                    title: title_add_new,
                    handleCreatePost: handleCreatePost
                })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _ContextPost2.default,
                    {
                        ws_send: ws.current ? ws.current.send : handle_fake_ws_send,
                        ws_type_post: 'post',
                        ws_type_cmt: 'cmt',
                        ws_type_sub: 'sub',
                        zoomVidPicPost: zoomVidPicPost,
                        handle_API_Like_L: _PostHandleAPI.handle_API_Like_L,
                        handle_API_Share_L: _PostHandleAPI.handle_API_Share_L
                        //
                        , handle_API_MoreContentCmt_R: _PostHandleAPI.handle_API_MoreContentCmt_R,
                        handle_API_Cmt_L: _PostHandleAPI.handle_API_Cmt_L,
                        handle_API_Cmt_C: _PostHandleAPI.handle_API_Cmt_C,
                        handle_API_Cmt_U: _PostHandleAPI.handle_API_Cmt_U,
                        handle_API_LikeCmt_L: _PostHandleAPI.handle_API_LikeCmt_L,
                        handle_API_HistoryCmt_L: _PostHandleAPI.handle_API_HistoryCmt_L,
                        handle_API_MoreContentHisCmt_R: _PostHandleAPI.handle_API_MoreContentHisCmt_R
                        //
                        , handle_API_MoreContentSub_R: _PostHandleAPI.handle_API_MoreContentSub_R,
                        handle_API_Sub_L: _PostHandleAPI.handle_API_Sub_L,
                        handle_API_Sub_C: _PostHandleAPI.handle_API_Sub_C,
                        handle_API_Sub_U: _PostHandleAPI.handle_API_Sub_U,
                        handle_API_LikeSub_L: _PostHandleAPI.handle_API_LikeSub_L,
                        handle_API_HistorySub_L: _PostHandleAPI.handle_API_HistorySub_L,
                        handle_API_MoreContentHisSub_R: _PostHandleAPI.handle_API_MoreContentHisSub_R
                    },
                    posts.map(function (post, index) {
                        return _react2.default.createElement(_PostWs2.default, {
                            key: 'Posts_' + post.id,
                            post: post,
                            post_ix: index
                        });
                    }),
                    _react2.default.createElement(_ComponentSkeleton2.default, {
                        has_fetched: has_fetched,
                        component: _react2.default.createElement(_PostSkeleton2.default, null)
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'width-fit-content margin-auto' },
                        _react2.default.createElement(_FetchingDiv2.default, {
                            open_fetching: is_fetching && has_fetched
                        })
                    )
                )
            )
        ),
        location.pathname.search('/post/photos/') >= 0 && _react2.default.createElement(_ZoomVidPicItem2.default, {
            show_screen_title: true,
            closeScreenTitle: closeScreenTitle
        })
    );
}

exports.default = Posts;

/***/ }),

/***/ "./src/component/posts/common/add_new_post/AddNewPost.js":
/*!***************************************************************!*\
  !*** ./src/component/posts/common/add_new_post/AddNewPost.js ***!
  \***************************************************************/
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

var _ContextAPI = __webpack_require__(/*! ../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _IconsInput = __webpack_require__(/*! ../../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

var _CreateUpdatePost = __webpack_require__(/*! ../create_update_post/_main/CreateUpdatePost */ "./src/component/posts/common/create_update_post/_main/CreateUpdatePost.js");

var _CreateUpdatePost2 = _interopRequireDefault(_CreateUpdatePost);

__webpack_require__(/*! ./AddNewPost.scss */ "./src/component/posts/common/add_new_post/AddNewPost.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
AddNewPost.propTypes = {
    title: _propTypes2.default.string,
    handleCreatePost: _propTypes2.default.func
};
//

//

AddNewPost.defaultProps = {
    title: 'How do you feel?'
};

//
function AddNewPost(props) {
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        user = _useContext.user,
        openScreenUpdate = _useContext.openScreenUpdate;

    //


    var handleCreatePost = props.handleCreatePost,
        title = props.title;

    //

    function onOpenScreenUpdate() {
        openScreenUpdate('Create', _CreateUpdatePost2.default, {
            handleCreateUpdatePost: handleCreatePost,
            main_content: '',
            vid_pics: [],
            title_action: 'Post'
        });
    }

    function handleLinkToProfile(e) {
        e.stopPropagation();
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'AddNewPost box-shadow-1 brs-5px',
            onClick: onOpenScreenUpdate
        },
        _react2.default.createElement(
            'div',
            { className: 'AddNewPost_row' },
            _react2.default.createElement(
                'div',
                { className: 'AddNewPost_head' },
                _react2.default.createElement(
                    'div',
                    { className: 'display-flex align-items-center' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            {
                                to: '/profile/' + user.id,
                                onClick: handleLinkToProfile
                            },
                            _react2.default.createElement('img', {
                                className: 'brs-50',
                                src: user.picture,
                                alt: '',
                                width: '40',
                                height: '40'
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'AddNewPost_head-right bg-fb flex-grow-1' },
                        _react2.default.createElement(
                            'div',
                            { className: 'AddNewPost_head-right_title opacity-5' },
                            title
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'AddNewPost_foot' },
                _react2.default.createElement(
                    'div',
                    { className: 'AddNewPost_foot-row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'AddNewPost_foot-item' },
                        _react2.default.createElement(_IconsInput2.default, { size_icon: '1rem' })
                    )
                )
            )
        )
    );
}

exports.default = AddNewPost;

/***/ }),

/***/ "./src/component/posts/common/create_update_post/_main/CreateUpdatePost.js":
/*!*********************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/_main/CreateUpdatePost.js ***!
  \*********************************************************************************/
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

var _loadFile = __webpack_require__(/*! ../../../../../_some_function/loadFile */ "./src/_some_function/loadFile.js");

var _CreateUpdatePostHome = __webpack_require__(/*! ../home/_main/CreateUpdatePostHome */ "./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.js");

var _CreateUpdatePostHome2 = _interopRequireDefault(_CreateUpdatePostHome);

var _FixAll = __webpack_require__(/*! ../fix_all/_main/FixAll */ "./src/component/posts/common/create_update_post/fix_all/_main/FixAll.js");

var _FixAll2 = _interopRequireDefault(_FixAll);

__webpack_require__(/*! ./CreateUpdatePost.scss */ "./src/component/posts/common/create_update_post/_main/CreateUpdatePost.scss");

__webpack_require__(/*! ./CreateUpdatePostRes.scss */ "./src/component/posts/common/create_update_post/_main/CreateUpdatePostRes.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
CreateUpdatePost.propTypes = {
    main_content: _propTypes2.default.string,
    vid_pics: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        id: _propTypes2.default.number,
        vid_pic: _propTypes2.default.string,
        content: _propTypes2.default.string,
        type: _propTypes2.default.string
    })),

    title_action: _propTypes2.default.string,
    handleCreateUpdatePost: _propTypes2.default.func
};

CreateUpdatePost.defaultProps = {
    main_content: '',
    vid_pics: [{
        id: 0,
        vid_pic: '',
        content: '',
        type: ''
    }],

    title_action: 'Post'
};

//
function CreateUpdatePost(props) {

    /* ---------------------------- VID_PIC ---------------------------------- */

    // choose
    var handleChooseFiles = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
            var new_files, _ref2, load_files, load_vid_pics, new_vid_pics;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            new_files = event.target.files;

                            if (!new_files.length) {
                                _context.next = 10;
                                break;
                            }

                            setUpdateCreateObj(_extends({}, update_create_obj, {
                                is_loading: true
                            }));

                            _context.next = 5;
                            return (0, _loadFile.loadFile)(new_files);

                        case 5:
                            _ref2 = _context.sent;
                            load_files = _ref2.files;
                            load_vid_pics = _ref2.vid_pics;
                            new_vid_pics = load_vid_pics.map(function (item) {
                                item.content = '';
                                item.id = 0;

                                return item;
                            });


                            setUpdateCreateObj(_extends({}, update_create_obj, {
                                files: [].concat(_toConsumableArray(files), _toConsumableArray(load_files)),
                                vid_pics: [].concat(_toConsumableArray(vid_pics), _toConsumableArray(new_vid_pics)),
                                is_loading: false,
                                has_file: true,
                                has_text: !!main_content.trim()
                            }));

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function handleChooseFiles(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    // delete


    //
    var old_main_content = props.main_content,
        old_vid_pics = props.vid_pics,
        title_action = props.title_action,
        handleCreateUpdatePost = props.handleCreateUpdatePost;

    //

    var _useState = (0, _react.useState)({
        main_content: old_main_content || '',
        vid_pics: [].concat(_toConsumableArray(old_vid_pics)) || [],
        files: old_vid_pics ? Array(old_vid_pics.length).fill({}) : [],

        deleted_ids: [],
        updated_ids: [],
        updated_contents: [],

        has_text: false,
        has_file: false,
        is_loading: false,
        open_fix_all: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        update_create_obj = _useState2[0],
        setUpdateCreateObj = _useState2[1];

    var main_content = update_create_obj.main_content,
        vid_pics = update_create_obj.vid_pics,
        files = update_create_obj.files,
        deleted_ids = update_create_obj.deleted_ids,
        updated_ids = update_create_obj.updated_ids,
        updated_contents = update_create_obj.updated_contents,
        has_text = update_create_obj.has_text,
        has_file = update_create_obj.has_file,
        is_loading = update_create_obj.is_loading,
        open_fix_all = update_create_obj.open_fix_all;

    /* ---------------------------- MAIN CONTENT ---------------------------------- */

    // on change

    function handleChangeMainContent(event) {
        var new_main_content = event.target.value;

        setUpdateCreateObj(_extends({}, update_create_obj, {
            main_content: new_main_content,
            has_file: vid_pics.length > 0,
            has_text: !!new_main_content.trim()
        }));
    }function deleteAnItem(index) {
        var deleted_item = vid_pics[index];

        deleted_item.id && deleted_ids.push(deleted_item.id);
        files.splice(index, 1);
        vid_pics.splice(index, 1);
        //
        if (vid_pics.length) {
            setUpdateCreateObj(function (update_create_obj) {
                return _extends({}, update_create_obj, {
                    has_file: true
                });
            });
        } else {
            setUpdateCreateObj(function (update_create_obj) {
                return _extends({}, update_create_obj, {
                    open_fix_all: false,
                    has_file: false,
                    has_text: !!main_content.trim()
                });
            });
        }
    }

    /* ---------------------------- FIX DETAIL ---------------------------------- */

    //
    function showFixAll() {
        setUpdateCreateObj(_extends({}, update_create_obj, {
            open_fix_all: true
        }));
    }

    //
    function closeFixAll() {
        setUpdateCreateObj(_extends({}, update_create_obj, {
            open_fix_all: false
        }));
    }

    //
    function handleChangeContentVidPic(content, index) {
        vid_pics[index].content = content;
        // update contents to updated
        var updated_id = vid_pics[index].id;
        if (updated_id) {
            updated_ids.push(updated_id);
            updated_contents.push(content);
        }

        setUpdateCreateObj(_extends({}, update_create_obj, {
            has_text: !!main_content.trim(),
            has_file: true
        }));
    }

    //
    function onCreateUpdatePost() {
        handleCreateUpdatePost(update_create_obj);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'CreateUpdatePost' },
        _react2.default.createElement(
            'div',
            { className: open_fix_all ? 'display-none' : '' },
            _react2.default.createElement(_CreateUpdatePostHome2.default, {
                main_content: main_content,
                vid_pics: vid_pics,
                title_action: title_action
                //
                , has_file: has_file,
                has_text: has_text,
                is_loading: is_loading
                //
                , showFixAll: showFixAll,
                handleChangeMainContent: handleChangeMainContent,
                deleteAnItem: deleteAnItem,
                handleChooseFiles: handleChooseFiles,
                handleCreateUpdatePost: onCreateUpdatePost
            })
        ),
        _react2.default.createElement(
            'div',
            { className: open_fix_all ? '' : 'display-none' },
            _react2.default.createElement(_FixAll2.default, {
                open_fix_all: open_fix_all,
                vid_pics: vid_pics
                //
                , closeFixAll: closeFixAll,
                deleteAnItem: deleteAnItem,
                handleChangeContentVidPic: handleChangeContentVidPic
            })
        )
    );
}

exports.default = CreateUpdatePost;

/***/ }),

/***/ "./src/component/posts/common/create_update_post/fix_all/_main/FixAll.js":
/*!*******************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/fix_all/_main/FixAll.js ***!
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

var _FixItem = __webpack_require__(/*! ../fix_item/FixItem */ "./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.js");

var _FixItem2 = _interopRequireDefault(_FixItem);

var _IconsArrow = __webpack_require__(/*! ../../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

__webpack_require__(/*! ./FixAll.scss */ "./src/component/posts/common/create_update_post/fix_all/_main/FixAll.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FixAll.propTypes = {};

//

//

//
function FixAll(props) {
    var open_fix_all = props.open_fix_all,
        vid_pics = props.vid_pics,
        closeFixAll = props.closeFixAll,
        deleteAnItem = props.deleteAnItem,
        handleChangeContentVidPic = props.handleChangeContentVidPic;

    //

    return _react2.default.createElement(
        'div',
        {
            className: open_fix_all ? 'UpdateCreatePostCmt_fix' : 'display-none'
        },
        _react2.default.createElement(
            'div',
            { className: 'UpdateCreatePostFix_close' },
            _react2.default.createElement(
                'div',
                {
                    className: 'UpdateCreatePostFix_arrowLeft hv-opacity brs-5px',
                    title: 'Back',
                    onClick: closeFixAll
                },
                _react2.default.createElement(_IconsArrow2.default, { x: 200, y: 200 })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'UpdateCreatePostFix_content scroll-thin' },
            vid_pics.map(function (item, index) {
                return item.vid_pic && _react2.default.createElement(_FixItem2.default, {
                    key: 'UpdateCreatePostCmt_fix_' + index,
                    ix: index,
                    vid_pic: item.vid_pic,
                    content: item.content,
                    deleteAnItem: deleteAnItem,
                    handleChangeContentVidPic: handleChangeContentVidPic
                });
            })
        )
    );
}

exports.default = FixAll;

/***/ }),

/***/ "./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.js":
/*!***********************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextAPI = __webpack_require__(/*! ../../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _VideoOrImage = __webpack_require__(/*! ../../../../../../_some_function/VideoOrImage */ "./src/_some_function/VideoOrImage.js");

var _IconsPost = __webpack_require__(/*! ../../../../../../_icons_svg/icons_post/IconsPost */ "./src/_icons_svg/icons_post/IconsPost.js");

var _IconsPost2 = _interopRequireDefault(_IconsPost);

var _IconsEdit = __webpack_require__(/*! ../../../../../../_icons_svg/icons_edit/IconsEdit */ "./src/_icons_svg/icons_edit/IconsEdit.js");

var _IconsEdit2 = _interopRequireDefault(_IconsEdit);

var _IconsArrow = __webpack_require__(/*! ../../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

var _Textarea = __webpack_require__(/*! ../../../../../input/textarea/Textarea */ "./src/component/input/textarea/Textarea.js");

var _Textarea2 = _interopRequireDefault(_Textarea);

__webpack_require__(/*! ./FixItem.scss */ "./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
FixItem.propTypes = {
    ix: _propTypes2.default.number,
    vid_pic: _propTypes2.default.string,
    content: _propTypes2.default.string,

    handleChangeContentVidPic: _propTypes2.default.func,
    deleteAnItem: _propTypes2.default.func
};

//
function FixItem(props) {
    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        openScreenConfirm = _useContext.openScreenConfirm;
    //


    var ix = props.ix,
        content = props.content,
        vid_pic = props.vid_pic,
        deleteAnItem = props.deleteAnItem,
        handleChangeContentVidPic = props.handleChangeContentVidPic;
    //

    var _useState = (0, _react.useState)(!!content),
        _useState2 = _slicedToArray(_useState, 2),
        open_content = _useState2[0],
        setOpenContent = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        is_editing = _useState4[0],
        setIsEditing = _useState4[1];

    /* ---------------------------- ITEM ---------------------------------- */

    //


    function toggleOpenContent() {
        setOpenContent(!open_content);
    }

    // on blur
    function onBlur() {
        setIsEditing(false);
    }

    // on focus
    function handleFocus() {
        setIsEditing(true);
    }

    function onChangeContentVidPic(new_content) {
        handleChangeContentVidPic(new_content, ix);
    }

    /* ---------------------------- DEL ---------------------------------- */

    //
    function openConfirm() {
        openScreenConfirm('Delete', 'Do you really want to delete this?', handleDeleteItem);
    }

    //
    function handleDeleteItem() {
        deleteAnItem(ix);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'FixItem' },
        _react2.default.createElement(
            'div',
            { className: 'FixItem_contain' },
            _react2.default.createElement(
                'div',
                { className: 'FixItem_pic margin-auto' },
                (0, _VideoOrImage.VideoOrImage)(vid_pic)
            ),
            _react2.default.createElement(
                'div',
                { className: 'FixItem_choice' },
                _react2.default.createElement(
                    'div',
                    { className: 'FixItem__tag', title: 'Tag your friends' },
                    _react2.default.createElement(_IconsPost2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'FixItem__add-content',
                        onClick: toggleOpenContent,
                        title: 'Add content'
                    },
                    _react2.default.createElement(_IconsEdit2.default, { is_editing: is_editing })
                )
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'FixItem_content ' + (open_content ? '' : 'display-none')
                },
                _react2.default.createElement(_Textarea2.default, {
                    text: content,
                    placeholder: 'Write something...',
                    textarea_class: 'FixItem_content-textarea scroll-thin'
                    //
                    , onChange: onChangeContentVidPic,
                    handleFocus: handleFocus,
                    handleBlur: onBlur
                })
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'FixItem_deleteItem hv-opacity cursor-pointer brs-50',
                    onClick: openConfirm,
                    title: 'Delete'
                },
                _react2.default.createElement(_IconsArrow2.default, { y: 400, size_icon: '1rem' })
            )
        )
    );
}

exports.default = FixItem;

/***/ }),

/***/ "./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.js":
/*!******************************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.js ***!
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

var _ContextAPI = __webpack_require__(/*! ../../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _PictureName = __webpack_require__(/*! ../../../../../picture_name/pic_name/PictureName */ "./src/component/picture_name/pic_name/PictureName.js");

var _PictureName2 = _interopRequireDefault(_PictureName);

var _CreateUpdatePostHomeContent = __webpack_require__(/*! ../content/CreateUpdatePostHomeContent */ "./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.js");

var _CreateUpdatePostHomeContent2 = _interopRequireDefault(_CreateUpdatePostHomeContent);

var _CreateUpdatePostHomeMoreInput = __webpack_require__(/*! ../more_input/CreateUpdatePostHomeMoreInput */ "./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.js");

var _CreateUpdatePostHomeMoreInput2 = _interopRequireDefault(_CreateUpdatePostHomeMoreInput);

__webpack_require__(/*! ./CreateUpdatePostHome.scss */ "./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
CreateUpdatePostHome.propTypes = {};

//

//

//
function CreateUpdatePostHome(props) {
    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        user = _useContext.user;
    //


    var main_content = props.main_content,
        vid_pics = props.vid_pics,
        title_action = props.title_action,
        has_file = props.has_file,
        has_text = props.has_text,
        is_loading = props.is_loading,
        showFixAll = props.showFixAll,
        handleChangeMainContent = props.handleChangeMainContent,
        deleteAnItem = props.deleteAnItem,
        handleChooseFiles = props.handleChooseFiles,
        handleCreateUpdatePost = props.handleCreateUpdatePost;

    //

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'CreateUpdatePostHome_user' },
            _react2.default.createElement(_PictureName2.default, { user: user })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_CreateUpdatePostHomeContent2.default, {
                main_content: main_content,
                urls_preview: vid_pics,
                is_loading: is_loading
                //
                , showFixAll: showFixAll,
                handleChangeMainContent: handleChangeMainContent,
                deleteAnItem: deleteAnItem
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'CreateUpdatePostHome_footer' },
            _react2.default.createElement(
                'div',
                { className: 'CreateUpdatePostHome_files-tag' },
                _react2.default.createElement(_CreateUpdatePostHomeMoreInput2.default, {
                    handleChooseFiles: handleChooseFiles
                })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    {
                        className: 'CreateUpdatePostHome_post brs-5px ' + (!has_text && !has_file ? 'CreateUpdatePostHome_post-disable' : 'CreateUpdatePostHome_post-active'),
                        disabled: !has_text && !has_file,
                        title: title_action,
                        onClick: handleCreateUpdatePost
                    },
                    title_action
                )
            )
        )
    );
}

exports.default = CreateUpdatePostHome;

/***/ }),

/***/ "./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.js":
/*!***************************************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.js ***!
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

var _ImgVidPreview = __webpack_require__(/*! ../../../../../input_img_vid_preview/img_vid_preview/ImgVidPreview */ "./src/component/input_img_vid_preview/img_vid_preview/ImgVidPreview.js");

var _ImgVidPreview2 = _interopRequireDefault(_ImgVidPreview);

var _FetchingDiv = __webpack_require__(/*! ../../../../../some_div/fetching/FetchingDiv */ "./src/component/some_div/fetching/FetchingDiv.js");

var _FetchingDiv2 = _interopRequireDefault(_FetchingDiv);

__webpack_require__(/*! ./CreateUpdatePostHomeContent.scss */ "./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
CreateUpdatePostHomeContent.propTypes = {};

//

//

//
function CreateUpdatePostHomeContent(props) {
    var main_content = props.main_content,
        urls_preview = props.urls_preview,
        is_loading = props.is_loading,
        showFixAll = props.showFixAll,
        handleChangeMainContent = props.handleChangeMainContent,
        deleteAnItem = props.deleteAnItem;

    //

    return _react2.default.createElement(
        'div',
        { className: 'CreateUpdatePostHomeContent scroll-thin' },
        _react2.default.createElement(
            'div',
            { className: 'CreateUpdatePostHomeContent_input' },
            _react2.default.createElement(
                'div',
                { className: 'CreateUpdatePostHomeContent_input-contain brs-5px' },
                _react2.default.createElement('textarea', {
                    className: 'CreateUpdatePostHomeContent__textarea scroll-thin',
                    rows: '4',
                    value: main_content,
                    placeholder: '',
                    onChange: handleChangeMainContent
                })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'CreateUpdatePostHomeContent_preview' },
            _react2.default.createElement(
                'div',
                { className: 'CreateUpdatePostHomeContent_preview-contain brs-5px' },
                _react2.default.createElement(_ImgVidPreview2.default, {
                    urls: urls_preview,
                    vid_pic_count: true,
                    deleteAnItem: deleteAnItem
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'CreateUpdatePostHomeContent_loading' },
                _react2.default.createElement(_FetchingDiv2.default, { open_fetching: is_loading })
            ),
            _react2.default.createElement(
                'div',
                {
                    className: urls_preview.length ? 'CreateUpdatePostHomeContent__fixAll brs-5px hv-opacity' : 'display-none',
                    onClick: showFixAll
                },
                'Fix All'
            ),
            _react2.default.createElement(
                'div',
                {
                    className: urls_preview.length == 0 ? 'CreateUpdatePostHomeContent__no-pic' : 'display-none'
                },
                'No picture, video'
            )
        )
    );
}

exports.default = CreateUpdatePostHomeContent;

/***/ }),

/***/ "./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.js":
/*!********************************************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.js ***!
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

var _IconsInput = __webpack_require__(/*! ../../../../../../_icons_svg/Icons_input/IconsInput */ "./src/_icons_svg/Icons_input/IconsInput.js");

var _IconsInput2 = _interopRequireDefault(_IconsInput);

var _InputFile = __webpack_require__(/*! ../../../../../input/input_file/InputFile */ "./src/component/input/input_file/InputFile.js");

var _InputFile2 = _interopRequireDefault(_InputFile);

var _IconsPost = __webpack_require__(/*! ../../../../../../_icons_svg/icons_post/IconsPost */ "./src/_icons_svg/icons_post/IconsPost.js");

var _IconsPost2 = _interopRequireDefault(_IconsPost);

__webpack_require__(/*! ./CreateUpdatePostHomeMoreInput.scss */ "./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 

// 
CreateUpdatePostHomeMoreInput.propTypes = {};

// 

// 
function CreateUpdatePostHomeMoreInput(props) {
    var handleChooseFiles = props.handleChooseFiles;

    // 

    return _react2.default.createElement(
        'div',
        { className: 'CreateUpdatePostHomeMoreInput' },
        _react2.default.createElement(
            'div',
            { className: 'CreateUpdatePostHomeMoreInput_row display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'CreateUpdatePostHomeContent__files' },
                _react2.default.createElement(
                    _InputFile2.default,
                    {
                        onChange: handleChooseFiles,
                        accept: 'image/*, video/*',
                        file_multiple: true,
                        title: 'Choose images/videos'
                    },
                    _react2.default.createElement(_IconsInput2.default, { size_icon: '1.5rem' })
                )
            ),
            _react2.default.createElement(
                'div',
                {
                    className: 'CreateUpdatePostHomeContent__tag',
                    title: 'Tag your friends'
                },
                _react2.default.createElement(_IconsPost2.default, null)
            )
        )
    );
}

exports.default = CreateUpdatePostHomeMoreInput;

/***/ }),

/***/ "./src/component/posts/common/info/_main/InfoWs.js":
/*!*********************************************************!*\
  !*** ./src/component/posts/common/info/_main/InfoWs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextAPI = __webpack_require__(/*! ../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _ContextPost = __webpack_require__(/*! ../../../__context_post/ContextPost */ "./src/component/posts/__context_post/ContextPost.js");

var _UnitNumber = __webpack_require__(/*! ../../../../../_some_function/UnitNumber */ "./src/_some_function/UnitNumber.js");

var _InfoCmt = __webpack_require__(/*! ../cmt/InfoCmt */ "./src/component/posts/common/info/cmt/InfoCmt.js");

var _InfoCmt2 = _interopRequireDefault(_InfoCmt);

var _MouseEnterLeaveInfo = __webpack_require__(/*! ../../mouse_enter_leave_info/_main/MouseEnterLeaveInfo */ "./src/component/posts/common/mouse_enter_leave_info/_main/MouseEnterLeaveInfo.js");

var _MouseEnterLeaveInfo2 = _interopRequireDefault(_MouseEnterLeaveInfo);

var _CircleLoading = __webpack_require__(/*! ../../../../waiting/circle_loading/CircleLoading */ "./src/component/waiting/circle_loading/CircleLoading.js");

var _CircleLoading2 = _interopRequireDefault(_CircleLoading);

var _ListUniqueLike = __webpack_require__(/*! ../../../../like/List_unique_like/_main/ListUniqueLike */ "./src/component/like/List_unique_like/_main/ListUniqueLike.js");

var _ListUniqueLike2 = _interopRequireDefault(_ListUniqueLike);

__webpack_require__(/*! ./Info.scss */ "./src/component/posts/common/info/_main/Info.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
Info.propTypes = {
    enabled_share: _propTypes2.default.bool
};
//

//

Info.defaultProps = {
    enabled_share: true
};

//
function Info(props) {
    var parent_id = props.parent_id,
        count_comment = props.count_comment,
        likes = props.likes,
        count_like = props.count_like,
        user_type_like = props.user_type_like,
        enabled_share = props.enabled_share,
        shares = props.shares,
        count_share = props.count_share,
        count_unique_share = props.count_unique_share,
        handleClickBtnCmt = props.handleClickBtnCmt;

    // context

    var _useContext = (0, _react.useContext)(_ContextPost.context_post),
        handle_API_Like_L = _useContext.handle_API_Like_L,
        handle_API_Share_L = _useContext.handle_API_Share_L;

    var _useContext2 = (0, _react.useContext)(_ContextAPI.context_api),
        openScreenShare = _useContext2.openScreenShare,
        openScreenLike = _useContext2.openScreenLike;

    /* ------------- OPEN SCREEN ------------ */

    //


    function onOpenDetailShare() {
        openScreenShare('Share', on_API_Share_L);
    }

    //
    function onOpenDetailLike(ix) {
        openScreenLike(on_API_Like_L, ix);
    }

    //
    function on_API_Share_L() {
        return handle_API_Share_L(parent_id, 0);
    }

    //
    function on_API_Like_L(type_like) {
        return handle_API_Like_L(parent_id, 0, type_like);
    }

    // title
    var title_like = count_like > 1 ? user_type_like >= 0 ? 'You and ' + (0, _UnitNumber.UnitNumber)(count_like - 1) + ' others' : '' + (0, _UnitNumber.UnitNumber)(count_like) : user_type_like >= 0 ? 'You' : '' + (0, _UnitNumber.UnitNumber)(count_like);

    var title_share = (0, _UnitNumber.UnitNumber)(count_share) + (count_share > 1 ? ' shares' : ' share');

    //
    var arr_unique_like = [0, 1, 3];

    //
    return _react2.default.createElement(
        'div',
        { className: 'Info_contain' },
        _react2.default.createElement(
            'div',
            { className: 'Info_row' },
            _react2.default.createElement(
                'div',
                { className: 'Info_like' },
                _react2.default.createElement(_ListUniqueLike2.default, {
                    title: title_like,
                    count_like: count_like,
                    arr_unique_like: arr_unique_like,

                    on_API_Like_L: on_API_Like_L,
                    onOpenDetailLike: onOpenDetailLike
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'Info_cmt-share' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_InfoCmt2.default, {
                        count_comment: count_comment,
                        handleClickBtnCmt: handleClickBtnCmt
                    })
                ),
                enabled_share && _react2.default.createElement(
                    'div',
                    { className: 'Info_share' },
                    _react2.default.createElement(_MouseEnterLeaveInfo2.default, {
                        count: count_share,
                        title: title_share,
                        total_people: count_unique_share
                        //
                        , handle_API_L: on_API_Share_L,
                        handleOpenScreen: onOpenDetailShare,
                        LoadingComponent: _CircleLoading2.default
                    })
                )
            )
        )
    );
}

exports.default = Info;

/***/ }),

/***/ "./src/component/posts/common/info/cmt/InfoCmt.js":
/*!********************************************************!*\
  !*** ./src/component/posts/common/info/cmt/InfoCmt.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
InfoCmt.propTypes = {};

// 
function InfoCmt(props) {
    var count_comment = props.count_comment,
        handleClickBtnCmt = props.handleClickBtnCmt;

    // 

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            {
                className: 'Info_cmt cursor-pointer ' + (count_comment ? '' : 'display-none'),
                onClick: handleClickBtnCmt
            },
            count_comment,
            ' comments'
        )
    );
}

exports.default = InfoCmt;

/***/ }),

/***/ "./src/component/posts/common/permission/_main/PermissionPost.js":
/*!***********************************************************************!*\
  !*** ./src/component/posts/common/permission/_main/PermissionPost.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UnitTime = __webpack_require__(/*! ../../../../../_some_function/UnitTime */ "./src/_some_function/UnitTime.js");

var _UnitTime2 = _interopRequireDefault(_UnitTime);

var _PermissionDiv = __webpack_require__(/*! ../../../../some_div/permission_div/PermissionDiv */ "./src/component/some_div/permission_div/PermissionDiv.js");

var _PermissionDiv2 = _interopRequireDefault(_PermissionDiv);

__webpack_require__(/*! ./PermissionPost.scss */ "./src/component/posts/common/permission/_main/PermissionPost.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PermissionPost.propTypes = {
    permission_post: _propTypes2.default.number,
    updated_time: _propTypes2.default.string
};
//

//


PermissionPost.defaultProps = {
    permission_post: 0

    //
};function PermissionPost(props) {
    var permission_post = props.permission_post,
        updated_time = props.updated_time;
    //

    return _react2.default.createElement(
        'div',
        { className: 'PermissionPost font-italic' },
        _react2.default.createElement(
            'span',
            {
                className: 'PermissionPost_time',
                title: new Date(updated_time).toLocaleString()
            },
            (0, _UnitTime2.default)(new Date().getTime() - new Date(updated_time).getTime())
        ),
        _react2.default.createElement(
            'span',
            { className: 'PermissionPost_delimiter' },
            '*'
        ),
        _react2.default.createElement(
            'span',
            { className: 'PermissionPost_permission' },
            _react2.default.createElement(_PermissionDiv2.default, { permission: permission_post })
        )
    );
}

exports.default = PermissionPost;

/***/ }),

/***/ "./src/component/skeleton/component_skeleton/ComponentSkeleton.js":
/*!************************************************************************!*\
  !*** ./src/component/skeleton/component_skeleton/ComponentSkeleton.js ***!
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ComponentSkeleton.propTypes = {
    component: _propTypes2.default.element,
    has_fetched: _propTypes2.default.bool
};

//
function ComponentSkeleton(_ref) {
    var component = _ref.component,
        has_fetched = _ref.has_fetched;

    return _react2.default.createElement(
        'div',
        null,
        !has_fetched && component
    );
}

exports.default = ComponentSkeleton;

/***/ }),

/***/ "./src/component/some_div/permission_div/PermissionDiv.js":
/*!****************************************************************!*\
  !*** ./src/component/some_div/permission_div/PermissionDiv.js ***!
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

var _GroupIconPermission = __webpack_require__(/*! ../../../_groups_icon/permission/GroupIconPermission */ "./src/_groups_icon/permission/GroupIconPermission.js");

__webpack_require__(/*! ./PermissionDiv.scss */ "./src/component/some_div/permission_div/PermissionDiv.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PermissionDiv.propTypes = {
    permission: _propTypes2.default.number,
    show_title: _propTypes2.default.bool
};
//


PermissionDiv.defaultProps = {
    permission: 0,
    show_title: false
};

//
function PermissionDiv(_ref) {
    var permission = _ref.permission,
        show_title = _ref.show_title;

    //
    return _react2.default.createElement(
        'div',
        { className: 'PermissionDiv padding-8px cursor-pointer hv-bg-blur ' + (show_title ? 'brs-5px' : 'brs-50') },
        _react2.default.createElement(
            'div',
            { className: 'display-flex align-items-center' },
            _react2.default.createElement(
                'div',
                { className: 'PermissionDiv_left display-flex-center' },
                _GroupIconPermission.IconsPermission[permission].Icon
            ),
            _react2.default.createElement(
                'div',
                { className: show_title ? 'PermissionDiv_right' : 'display-none' },
                _GroupIconPermission.IconsPermission[permission].title
            )
        )
    );
}

exports.default = PermissionDiv;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_edit/IconsEdit.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_edit/IconsEdit.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".EditIcons_active circle {\n  animation: waiting_pen 2s infinite;\n}\n.EditIcons_active circle:nth-child(2) {\n  animation-delay: 0.5s;\n}\n.EditIcons_active circle:nth-child(3) {\n  animation-delay: 1s;\n}\n\n@keyframes waiting_pen {\n  0% {\n    opacity: 0;\n    visibility: visible;\n  }\n  100% {\n    opacity: 1;\n    visibility: hidden;\n  }\n}", "",{"version":3,"sources":["webpack://./src/_icons_svg/icons_edit/IconsEdit.scss"],"names":[],"mappings":"AAEI;EACI,kCAAA;AADR;AAEQ;EACI,qBAAA;AAAZ;AAEQ;EACI,mBAAA;AAAZ;;AAOA;EACI;IAAG,UAAA;IAAY,mBAAA;EAFjB;EAGE;IAAK,UAAA;IAAY,kBAAA;EACnB;AACF","sourcesContent":["\r\n.EditIcons_active{\r\n    circle{\r\n        animation: waiting_pen 2s infinite;\r\n        &:nth-child(2){\r\n            animation-delay: 0.5s;\r\n        }\r\n        &:nth-child(3){\r\n            animation-delay: 1s;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n@keyframes waiting_pen{\r\n    0%{opacity: 0; visibility: visible;}\r\n    100%{opacity: 1; visibility: hidden;}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/_main_post/Post.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/_main_post/Post.scss ***!
  \*****************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Post {\n  margin: 0 auto 1rem;\n  width: 500px;\n  max-width: 100%;\n  padding: 0.5rem;\n  background-color: var(--md-bg-primary);\n}\n\n.Post__user {\n  display: flex;\n  align-items: center;\n  margin-right: 2.5rem;\n}\n\n.Post__actions {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.Post_content {\n  padding: 0.5rem;\n}\n\n.Post_comment {\n  margin-top: 0.5rem;\n}\n\n@media (max-width: 400px) {\n  .Post {\n    padding: 0.25rem;\n    border-radius: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/_main_post/Post.scss"],"names":[],"mappings":"AACA;EACI,mBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,sCAAA;AAAJ;;AAIA;EACI,aAAA;EACA,mBAAA;EACA,oBAAA;AADJ;;AAIA;EACI,kBAAA;EACA,QAAA;EACA,MAAA;AADJ;;AAKA;EACI,eAAA;AAFJ;;AAMA;EACI,kBAAA;AAHJ;;AAOA;EACI;IACI,gBAAA;IACA,gBAAA;EAJN;AACF","sourcesContent":["// post\r\n.Post {\r\n    margin: 0 auto 1rem;\r\n    width: 500px;\r\n    max-width: 100%;\r\n    padding: 0.5rem;\r\n    background-color: var(--md-bg-primary);\r\n}\r\n\r\n// ..\r\n.Post__user {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 2.5rem;\r\n}\r\n// ..\r\n.Post__actions {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n// .\r\n.Post_content {\r\n    padding: 0.5rem;\r\n}\r\n\r\n// .\r\n.Post_comment {\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n//\r\n@media (max-width: 400px) {\r\n    .Post {\r\n        padding: 0.25rem;\r\n        border-radius: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/actions_post/ActionsPost.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/actions_post/ActionsPost.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ActionsPost__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\n.ActionsPost__item {\n  padding: 0.5rem;\n  cursor: pointer;\n}\n.ActionsPost__item:hover {\n  background-color: var(--md-bg-hover);\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/actions_post/ActionsPost.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,SAAA;EACA,qBAAA;AACJ;;AAEA;EACI,eAAA;EACA,eAAA;AACJ;AACI;EACI,oCAAA;AACR","sourcesContent":[".ActionsPost__list{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.ActionsPost__item{\r\n    padding: 0.5rem;\r\n    cursor: pointer;\r\n\r\n    &:hover{\r\n        background-color: var(--md-bg-hover);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/history/item/PostHistoryItem.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/history/item/PostHistoryItem.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.PostHistoryItem__title-pic {\n  font-size: 12px;\n  color: var(--blue);\n  opacity: 0.5;\n}\n.PostHistoryItem__title-pic::before {\n  content: \"•\";\n  margin-right: 0.25rem;\n}\n\n.PostHistoryItem__pic {\n  overflow-x: auto;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_post/history/item/PostHistoryItem.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACI,eAAA;EACA,kBAAA;EACA,YAAA;AACJ;AAAI;EACI,YAAA;EACA,qBAAA;AAER;;AACA;EACI,gBAAA;AAEJ","sourcesContent":["\r\n.PostHistoryItem__title-pic{\r\n    font-size: 12px;\r\n    color: var(--blue);\r\n    opacity: 0.5;\r\n    &::before{\r\n        content: '•';\r\n        margin-right: 0.25rem;\r\n    }\r\n}\r\n.PostHistoryItem__pic{\r\n    overflow-x: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_posts/_main/Posts.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_posts/_main/Posts.scss ***!
  \**************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Posts_new {\n  margin: 0 auto 1rem;\n  max-width: 500px;\n}\n\n@media (max-width: 330px) {\n  .Posts_new {\n    margin-bottom: 0.75rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/posts/_posts/_main/Posts.scss"],"names":[],"mappings":"AACA;EACI,mBAAA;EACA,gBAAA;AAAJ;;AAIA;EACI;IACI,sBAAA;EADN;AACF","sourcesContent":["\r\n.Posts_new{\r\n    margin: 0 auto 1rem ;\r\n    max-width: 500px;\r\n}\r\n\r\n\r\n@media (max-width: 330px) {\r\n    .Posts_new{\r\n        margin-bottom: 0.75rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/add_new_post/AddNewPost.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/add_new_post/AddNewPost.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".AddNewPost {\n  padding: 0.5rem;\n  background-color: var(--md-bg-primary);\n  border: 1px solid var(--md-bg-ccc);\n  cursor: default;\n}\n\n.AddNewPost_head {\n  padding-bottom: 0.5rem;\n}\n\n.AddNewPost_head-right {\n  margin-left: 0.25rem;\n  max-width: calc(100% - 3rem);\n  padding: 0.5rem;\n  border-radius: 15px;\n  border: 1px solid var(--md-bg-ccc);\n}\n\n.AddNewPost_head-right_title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.AddNewPost_foot-row {\n  display: flex;\n}\n\n.AddNewPost_foot-item {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  background-color: var(--bg-fetching);\n  border-radius: 5px;\n}\n.AddNewPost_foot-item .IconsInput {\n  fill: var(--md-bg-ccc);\n}\n\n@media (max-width: 300px) {\n  .AddNewPost {\n    padding: 0.25rem;\n    border-radius: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/add_new_post/AddNewPost.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;EACA,sCAAA;EACA,kCAAA;EACA,eAAA;AACJ;;AAEA;EACI,sBAAA;AACJ;;AAEA;EACI,oBAAA;EACA,4BAAA;EACA,eAAA;EAEA,mBAAA;EACA,kCAAA;AAAJ;;AAGA;EACI,mBAAA;EACA,gBAAA;EACA,uBAAA;AAAJ;;AAGA;EACI,aAAA;AAAJ;;AAGA;EACI,YAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,eAAA;EACA,oCAAA;EACA,kBAAA;AAFJ;AAGI;EACI,sBAAA;AADR;;AAMA;EACI;IACI,gBAAA;IACA,gBAAA;EAHN;AACF","sourcesContent":[".AddNewPost {\r\n    padding: 0.5rem;\r\n    background-color: var(--md-bg-primary);\r\n    border: 1px solid var(--md-bg-ccc);\r\n    cursor: default;\r\n}\r\n\r\n.AddNewPost_head {\r\n    padding-bottom: 0.5rem;\r\n}\r\n// .\r\n.AddNewPost_head-right {\r\n    margin-left: 0.25rem;\r\n    max-width: calc(100% - 3rem);\r\n    padding: 0.5rem;\r\n\r\n    border-radius: 15px;\r\n    border: 1px solid var(--md-bg-ccc);\r\n}\r\n// ..\r\n.AddNewPost_head-right_title {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.AddNewPost_foot-row {\r\n    display: flex;\r\n}\r\n// .\r\n.AddNewPost_foot-item {\r\n    flex-grow: 1;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    padding: 0.5rem;\r\n    background-color: var(--bg-fetching);\r\n    border-radius: 5px;\r\n    .IconsInput {\r\n        fill: var(--md-bg-ccc);\r\n    }\r\n}\r\n\r\n//\r\n@media (max-width: 300px) {\r\n    .AddNewPost {\r\n        padding: 0.25rem;\r\n        border-radius: 0;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/_main/CreateUpdatePost.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/_main/CreateUpdatePost.scss ***!
  \********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*------------- NEW POST ---------------*/\n.CreateUpdatePost {\n  background-color: var(--md-bg-primary);\n  padding: 0.2rem;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/create_update_post/_main/CreateUpdatePost.scss"],"names":[],"mappings":"AAAA,yCAAA;AACA;EACI,sCAAA;EACA,eAAA;AACJ","sourcesContent":["/*------------- NEW POST ---------------*/\r\n.CreateUpdatePost {\r\n    background-color: var(--md-bg-primary);\r\n    padding: 0.2rem;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/_main/CreateUpdatePostRes.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/_main/CreateUpdatePostRes.scss ***!
  \***********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 300px) {\n  .CreateUpdatePostHome_footer {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/create_update_post/_main/CreateUpdatePostRes.scss"],"names":[],"mappings":"AAEA;EACI;IACI,eAAA;IACA,SAAA;IAEA,WAAA;EAFN;AACF","sourcesContent":["\r\n// \r\n@media (max-width: 300px) {\r\n    .CreateUpdatePostHome_footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n\r\n        width: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/fix_all/_main/FixAll.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/fix_all/_main/FixAll.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "/* -------------- FIX ------------------ */\n.UpdateCreatePostFix_content {\n  max-height: calc(100vh - 6rem);\n  overflow-y: auto;\n}\n\n.UpdateCreatePostFix_close {\n  display: flex;\n  border-bottom: 1px solid var(--bg-blur);\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.UpdateCreatePostFix_arrowLeft {\n  padding: 0.3rem 0.8rem;\n  background-color: var(--danger);\n  cursor: pointer;\n}\n\n@media (max-width: 300px) {\n  .UpdateCreatePostFix_arrowLeft {\n    padding: 0.15rem 0.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/create_update_post/fix_all/_main/FixAll.scss"],"names":[],"mappings":"AAAA,0CAAA;AACA;EACI,8BAAA;EACA,gBAAA;AACJ;;AAGA;EACI,aAAA;EAEA,uCAAA;EACA,6BAAA;EACA,4BAAA;AADJ;;AAKA;EACI,sBAAA;EACA,+BAAA;EACA,eAAA;AAFJ;;AAOA;EACI;IACI,uBAAA;EAJN;AACF","sourcesContent":["/* -------------- FIX ------------------ */\r\n.UpdateCreatePostFix_content{\r\n    max-height: calc(100vh - 6rem);\r\n    overflow-y: auto;\r\n}\r\n\r\n// close\r\n.UpdateCreatePostFix_close{\r\n    display: flex;\r\n\r\n    border-bottom: 1px solid var(--bg-blur);\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n\r\n}\r\n// .\r\n.UpdateCreatePostFix_arrowLeft{\r\n    padding: 0.3rem 0.8rem;\r\n    background-color: var(--danger);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n// \r\n@media (max-width: 300px) {\r\n    .UpdateCreatePostFix_arrowLeft {\r\n        padding: 0.15rem 0.5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".FixItem {\n  position: relative;\n  padding: 0.5rem 0 0 0;\n}\n\n.FixItem_pic {\n  max-width: 15rem;\n  height: 10rem;\n  border: 1px solid var(--bg-blur);\n}\n.FixItem_pic img, .FixItem_pic video {\n  width: 100%;\n  height: 100%;\n}\n\n.FixItem_choice {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--bg-blur);\n}\n.FixItem_choice > div {\n  flex-grow: 1;\n  padding: 0.5rem;\n  text-align: center;\n  cursor: default;\n}\n.FixItem_choice > div:hover {\n  background-color: var(--md-bg-hover);\n}\n\n.FixItem_content {\n  border: 1px solid var(--bg-blur);\n  padding: 0.25rem;\n}\n\n.FixItem_content-textarea {\n  max-height: 5rem;\n}\n\n.FixItem_deleteItem {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 5rem;\n  left: 10%;\n  width: 2rem;\n  height: 2rem;\n  padding: 0.5rem;\n  background-color: gray;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,qBAAA;AACJ;;AAEA;EACI,gBAAA;EACA,aAAA;EAEA,gCAAA;AAAJ;AACI;EACI,WAAA;EACA,YAAA;AACR;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,gCAAA;AAAJ;AACI;EACI,YAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;AACR;AAAQ;EACI,oCAAA;AAEZ;;AAUA;EACI,gCAAA;EACA,gBAAA;AAPJ;;AAUA;EACI,gBAAA;AAPJ;;AAUA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,kBAAA;EACA,SAAA;EACA,SAAA;EAEA,WAAA;EACA,YAAA;EACA,eAAA;EACA,sBAAA;AATJ","sourcesContent":[".FixItem{\r\n    position: relative;\r\n    padding: 0.5rem 0 0 0;\r\n}\r\n\r\n.FixItem_pic{\r\n    max-width: 15rem;\r\n    height: 10rem;\r\n\r\n    border: 1px solid var(--bg-blur);\r\n    img, video{\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}\r\n\r\n.FixItem_choice{\r\n    display: flex;\r\n    align-items: center;\r\n    border: 1px solid var(--bg-blur);\r\n    & > div{\r\n        flex-grow: 1;\r\n        padding: 0.5rem;\r\n        text-align: center;\r\n        cursor: default;\r\n        &:hover{\r\n            background-color: var(--md-bg-hover);\r\n        }\r\n    }\r\n    // .FixItem__tag{\r\n\r\n    // }\r\n\r\n    // .FixItem__add-content{\r\n\r\n    // }\r\n}\r\n\r\n.FixItem_content{\r\n    border: 1px solid var(--bg-blur);\r\n    padding: 0.25rem;\r\n}\r\n// .\r\n.FixItem_content-textarea{\r\n    max-height: 5rem;\r\n}\r\n\r\n.FixItem_deleteItem{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    position: absolute;\r\n    top: 5rem;\r\n    left: 10%;\r\n\r\n    width: 2rem;\r\n    height: 2rem;\r\n    padding: 0.5rem;\r\n    background-color: gray;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.scss":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.scss ***!
  \*****************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".CreateUpdatePostHome_user {\n  width: fit-content;\n  max-width: 15rem;\n}\n\n.CreateUpdatePostHome_files-tag {\n  margin: 0.25rem 0;\n}\n\n.CreateUpdatePostHome_post {\n  width: 100%;\n  padding: 0.25rem;\n  text-align: center;\n  color: var(--white);\n  font-weight: 500;\n}\n\n.CreateUpdatePostHome_post-disable {\n  background-color: var(--md-bg-ccc);\n  opacity: 0.5;\n}\n\n.CreateUpdatePostHome_post-active {\n  background-color: var(--blue);\n}\n.CreateUpdatePostHome_post-active:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,gBAAA;AADJ;;AAKA;EACI,iBAAA;AAFJ;;AAMA;EACI,WAAA;EACA,gBAAA;EAEA,kBAAA;EACA,mBAAA;EACA,gBAAA;AAJJ;;AAMA;EACI,kCAAA;EACA,YAAA;AAHJ;;AAKA;EACI,6BAAA;AAFJ;AAGI;EACI,eAAA;AADR","sourcesContent":["\r\n// user\r\n.CreateUpdatePostHome_user{\r\n    width: fit-content;\r\n    max-width: 15rem;\r\n}\r\n\r\n// .\r\n.CreateUpdatePostHome_files-tag{\r\n    margin: 0.25rem 0;\r\n}\r\n\r\n// .\r\n.CreateUpdatePostHome_post{\r\n    width: 100%;\r\n    padding: 0.25rem;\r\n\r\n    text-align: center;\r\n    color: var(--white);\r\n    font-weight: 500;\r\n}\r\n.CreateUpdatePostHome_post-disable{\r\n    background-color: var(--md-bg-ccc);\r\n    opacity: 0.5;\r\n}\r\n.CreateUpdatePostHome_post-active{\r\n    background-color: var(--blue);\r\n    &:hover{\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.scss ***!
  \**************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* -------------- CONTENT ------------------ */\n.CreateUpdatePostHomeContent {\n  max-height: calc(100vh - 12rem);\n  padding: 0.5rem;\n  overflow: auto;\n}\n\n/* -------------- TEXTAREA ------------------ */\n.CreateUpdatePostHomeContent_input {\n  margin-bottom: 0.5rem;\n  border: 1px solid var(--bg-blur);\n}\n\n.CreateUpdatePostHomeContent_input-contain {\n  padding: 0.5rem;\n}\n.CreateUpdatePostHomeContent_input-contain textarea {\n  width: 100%;\n  border: none;\n  resize: none;\n}\n.CreateUpdatePostHomeContent_input-contain textarea:focus {\n  outline: none;\n}\n\n/* -------------- PREVIEW ------------------ */\n.CreateUpdatePostHomeContent_preview {\n  position: relative;\n}\n.CreateUpdatePostHomeContent_preview:hover > .CreateUpdatePostHomeContent__fixAll {\n  display: block;\n}\n\n.CreateUpdatePostHomeContent_preview-contain .ImgVidPreviewItem {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.CreateUpdatePostHomeContent_preview-contain .ImgVidPreviewItem_delete {\n  right: 0;\n  left: auto;\n}\n\n/* -------------- FIX ------------------ */\n.CreateUpdatePostHomeContent__fixAll {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0.2rem 0.5rem;\n  background-color: var(--bg-loader);\n  color: var(--white);\n  cursor: pointer;\n}\n\n/* -------------------------------- */\n.CreateUpdatePostHomeContent__no-pic {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  font-weight: 800;\n  font-size: 20px;\n  color: var(--md-bg-ccc);\n}\n\n.CreateUpdatePostHomeContent_loading {\n  position: absolute;\n  top: 2%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media (max-width: 600px) {\n  .CreateUpdatePostHomeContent__fixAll {\n    display: block;\n  }\n\n  .CreateUpdatePostHomeContent_preview-contain .ImgVidPreview {\n    min-height: 15rem;\n  }\n\n  .CreateUpdatePostHomeContent__no-pic {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 300px) {\n  .CreateUpdatePostHomeContent {\n    max-height: calc(100vh - 10.5rem);\n  }\n\n  .CreateUpdatePostHome_files-tag svg {\n    width: 1rem;\n    height: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.scss"],"names":[],"mappings":"AAAA,8CAAA;AACA;EACI,+BAAA;EACA,eAAA;EACA,cAAA;AACJ;;AAEA,+CAAA;AACA;EACI,qBAAA;EACA,gCAAA;AACJ;;AAEA;EACI,eAAA;AACJ;AAAI;EACI,WAAA;EACA,YAAA;EACA,YAAA;AAER;AADQ;EACI,aAAA;AAGZ;;AAEA,8CAAA;AACA;EACI,kBAAA;AACJ;AAAI;EACI,cAAA;AAER;;AAGI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;AAAR;AAGI;EACI,QAAA;EACA,UAAA;AADR;;AAKA,0CAAA;AACA;EACI,aAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EAEA,sBAAA;EACA,kCAAA;EACA,mBAAA;EACA,eAAA;AAHJ;;AAMA,qCAAA;AACA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,gCAAA;EAEA,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,uBAAA;AAJJ;;AAMA;EACI,kBAAA;EACA,OAAA;EACA,SAAA;EACA,2BAAA;AAHJ;;AAOA;EACI;IACI,cAAA;EAJN;;EAQM;IACI,iBAAA;EALV;;EAUE;IACI,eAAA;EAPN;AACF;AAWA;EACI;IACI,iCAAA;EATN;;EAaM;IACI,WAAA;IACA,YAAA;EAVV;AACF","sourcesContent":["/* -------------- CONTENT ------------------ */\r\n.CreateUpdatePostHomeContent {\r\n    max-height: calc(100vh - 12rem);\r\n    padding: 0.5rem;\r\n    overflow: auto;\r\n}\r\n\r\n/* -------------- TEXTAREA ------------------ */\r\n.CreateUpdatePostHomeContent_input {\r\n    margin-bottom: 0.5rem;\r\n    border: 1px solid var(--bg-blur);\r\n}\r\n// .\r\n.CreateUpdatePostHomeContent_input-contain {\r\n    padding: 0.5rem;\r\n    textarea {\r\n        width: 100%;\r\n        border: none;\r\n        resize: none;\r\n        &:focus {\r\n            outline: none;\r\n        }\r\n    }\r\n}\r\n\r\n/* -------------- PREVIEW ------------------ */\r\n.CreateUpdatePostHomeContent_preview {\r\n    position: relative;\r\n    &:hover > .CreateUpdatePostHomeContent__fixAll {\r\n        display: block;\r\n    }\r\n}\r\n// .\r\n.CreateUpdatePostHomeContent_preview-contain {\r\n    .ImgVidPreviewItem {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .ImgVidPreviewItem_delete {\r\n        right: 0;\r\n        left: auto;\r\n    }\r\n}\r\n\r\n/* -------------- FIX ------------------ */\r\n.CreateUpdatePostHomeContent__fixAll {\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    padding: 0.2rem 0.5rem;\r\n    background-color: var(--bg-loader);\r\n    color: var(--white);\r\n    cursor: pointer;\r\n}\r\n\r\n/* -------------------------------- */\r\n.CreateUpdatePostHomeContent__no-pic {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 100%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    text-align: center;\r\n    font-weight: 800;\r\n    font-size: 20px;\r\n    color: var(--md-bg-ccc);\r\n}\r\n.CreateUpdatePostHomeContent_loading {\r\n    position: absolute;\r\n    top: 2%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n//\r\n@media (max-width: 600px) {\r\n    .CreateUpdatePostHomeContent__fixAll {\r\n        display: block;\r\n    }\r\n\r\n    .CreateUpdatePostHomeContent_preview-contain {\r\n        .ImgVidPreview {\r\n            min-height: 15rem;\r\n        }\r\n    }\r\n\r\n    // when no vid pic\r\n    .CreateUpdatePostHomeContent__no-pic {\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n//\r\n@media (max-width: 300px) {\r\n    .CreateUpdatePostHomeContent {\r\n        max-height: calc(100vh - 10.5rem);\r\n    }\r\n\r\n    .CreateUpdatePostHome_files-tag {\r\n        svg {\r\n            width: 1rem;\r\n            height: 1rem;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".CreateUpdatePostHomeMoreInput {\n  padding: 0.25rem;\n  border: 1px solid var(--md-bg-ccc);\n  background: white;\n  border-radius: 5px;\n}\n\n.CreateUpdatePostHomeMoreInput_row {\n  justify-content: flex-end;\n}\n\n.CreateUpdatePostHomeContent__files {\n  margin: 0 0.5rem;\n}\n\n.CreateUpdatePostHomeContent__tag {\n  margin: 0 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,kCAAA;EACA,iBAAA;EACA,kBAAA;AACJ;;AAEA;EACI,yBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ;;AAEA;EACI,gBAAA;AACJ","sourcesContent":[".CreateUpdatePostHomeMoreInput{\r\n    padding: 0.25rem;\r\n    border: 1px solid var(--md-bg-ccc);\r\n    background: white;\r\n    border-radius: 5px;\r\n}\r\n\r\n.CreateUpdatePostHomeMoreInput_row{\r\n    justify-content: flex-end;\r\n}\r\n// .\r\n.CreateUpdatePostHomeContent__files{\r\n    margin: 0 0.5rem;\r\n}\r\n// .\r\n.CreateUpdatePostHomeContent__tag{\r\n    margin: 0 0.5rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/info/_main/Info.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/info/_main/Info.scss ***!
  \******************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Info_row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.Info_like {\n  position: relative;\n}\n\n.Info_cmt-share {\n  display: flex;\n  padding: 0.25rem;\n}\n.Info_cmt-share .Info_share {\n  position: relative;\n  margin-left: 1rem;\n}\n\n@media (max-width: 500px) {\n  .Info_row {\n    font-size: 14px;\n  }\n\n  .Info_cmt-share {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/info/_main/Info.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AACJ;;AAGA;EACI,kBAAA;AAAJ;;AAIA;EACI,aAAA;EACA,gBAAA;AADJ;AAGI;EACI,kBAAA;EACA,iBAAA;AADR;;AAOA;EACI;IACI,eAAA;EAJN;;EAME;IACI,aAAA;EAHN;AACF","sourcesContent":[".Info_row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n// .\r\n.Info_like {\r\n    position: relative;\r\n}\r\n\r\n// .\r\n.Info_cmt-share {\r\n    display: flex;\r\n    padding: 0.25rem;\r\n\r\n    .Info_share {\r\n        position: relative;\r\n        margin-left: 1rem;\r\n    }\r\n}\r\n\r\n\r\n//\r\n@media (max-width: 500px) {\r\n    .Info_row {\r\n        font-size: 14px;\r\n    }\r\n    .Info_cmt-share {\r\n        display: none;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/permission/_main/PermissionPost.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/permission/_main/PermissionPost.scss ***!
  \**********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PermissionPost {\n  font-size: 12px;\n}\n.PermissionPost .IconsAction_add-friend_plus {\n  stroke: none;\n}\n\n.PermissionPost_delimiter {\n  margin: 0 0.25rem;\n}", "",{"version":3,"sources":["webpack://./src/component/posts/common/permission/_main/PermissionPost.scss"],"names":[],"mappings":"AACA;EACI,eAAA;AAAJ;AACI;EACI,YAAA;AACR;;AAGA;EACI,iBAAA;AAAJ","sourcesContent":["\r\n.PermissionPost{\r\n    font-size: 12px;\r\n    .IconsAction_add-friend_plus{\r\n        stroke: none;\r\n    }\r\n}\r\n// .\r\n.PermissionPost_delimiter{\r\n    margin: 0 0.25rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/permission_div/PermissionDiv.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/permission_div/PermissionDiv.scss ***!
  \***************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PermissionDiv_right {\n  margin-left: 0.25rem;\n}", "",{"version":3,"sources":["webpack://./src/component/some_div/permission_div/PermissionDiv.scss"],"names":[],"mappings":"AAEA;EACI,oBAAA;AADJ","sourcesContent":["\r\n\r\n.PermissionDiv_right{\r\n    margin-left: 0.25rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./image/image_loading.svg":
/*!*********************************!*\
  !*** ./image/image_loading.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/31deee479af934727e709c9aa5680351.svg");

/***/ }),

/***/ "./src/_icons_svg/icons_edit/IconsEdit.scss":
/*!**************************************************!*\
  !*** ./src/_icons_svg/icons_edit/IconsEdit.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsEdit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js!./IconsEdit.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/_icons_svg/icons_edit/IconsEdit.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsEdit_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_IconsEdit_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/_main_post/Post.scss":
/*!********************************************************!*\
  !*** ./src/component/posts/_post/_main_post/Post.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Post_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Post.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/_main_post/Post.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Post_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Post_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/actions_post/ActionsPost.scss":
/*!*****************************************************************!*\
  !*** ./src/component/posts/_post/actions_post/ActionsPost.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ActionsPost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./ActionsPost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/actions_post/ActionsPost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ActionsPost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ActionsPost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_post/history/item/PostHistoryItem.scss":
/*!*********************************************************************!*\
  !*** ./src/component/posts/_post/history/item/PostHistoryItem.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHistoryItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PostHistoryItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_post/history/item/PostHistoryItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHistoryItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PostHistoryItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/_posts/_main/Posts.scss":
/*!*****************************************************!*\
  !*** ./src/component/posts/_posts/_main/Posts.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Posts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./Posts.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/_posts/_main/Posts.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Posts_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Posts_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/add_new_post/AddNewPost.scss":
/*!*****************************************************************!*\
  !*** ./src/component/posts/common/add_new_post/AddNewPost.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewPost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./AddNewPost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/add_new_post/AddNewPost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewPost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_AddNewPost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/create_update_post/_main/CreateUpdatePost.scss":
/*!***********************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/_main/CreateUpdatePost.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./CreateUpdatePost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/_main/CreateUpdatePost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/create_update_post/_main/CreateUpdatePostRes.scss":
/*!**************************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/_main/CreateUpdatePostRes.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostRes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./CreateUpdatePostRes.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/_main/CreateUpdatePostRes.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostRes_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostRes_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/create_update_post/fix_all/_main/FixAll.scss":
/*!*********************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/fix_all/_main/FixAll.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FixAll_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FixAll.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/fix_all/_main/FixAll.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FixAll_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FixAll_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.scss":
/*!*************************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FixItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./FixItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/fix_all/fix_item/FixItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FixItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_FixItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.scss":
/*!********************************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHome_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./CreateUpdatePostHome.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/_main/CreateUpdatePostHome.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHome_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHome_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHomeContent_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./CreateUpdatePostHomeContent.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/content/CreateUpdatePostHomeContent.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHomeContent_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHomeContent_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.scss ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHomeMoreInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js!./CreateUpdatePostHomeMoreInput.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/create_update_post/home/more_input/CreateUpdatePostHomeMoreInput.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHomeMoreInput_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_CreateUpdatePostHomeMoreInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/info/_main/Info.scss":
/*!*********************************************************!*\
  !*** ./src/component/posts/common/info/_main/Info.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Info_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./Info.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/info/_main/Info.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Info_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Info_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/posts/common/permission/_main/PermissionPost.scss":
/*!*************************************************************************!*\
  !*** ./src/component/posts/common/permission/_main/PermissionPost.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PermissionPost_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../node_modules/sass-loader/dist/cjs.js!./PermissionPost.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/posts/common/permission/_main/PermissionPost.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PermissionPost_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PermissionPost_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/component/some_div/permission_div/PermissionDiv.scss":
/*!******************************************************************!*\
  !*** ./src/component/some_div/permission_div/PermissionDiv.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PermissionDiv_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./PermissionDiv.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/some_div/permission_div/PermissionDiv.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PermissionDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PermissionDiv_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_posts__posts__main_PostsWs_js.js.map