(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src__some_function_GetIdSlug_js-src_api_api_django_user_user_post_UserPost_js"],{

/***/ "./src/_some_function/GetIdSlug.js":
/*!*****************************************!*\
  !*** ./src/_some_function/GetIdSlug.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.GetIdSlug = GetIdSlug;

// 
function GetIdSlug() {
    var is_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (is_id) {
        return parseInt(location.pathname.split('/').slice(-1)[0]);
    }

    return location.pathname.split('/').slice(-1)[0];
}

/***/ }),

/***/ "./src/api/api_django/user/user_post/UserPost.js":
/*!*******************************************************!*\
  !*** ./src/api/api_django/user/user_post/UserPost.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.API_PostHisSub_R = exports.API_PostSubHistory_L = exports.API_PostSubLike_U = exports.API_PostSubLike_C = exports.API_PostSubLike_L = exports.API_PostSub_UD = exports.API_PostSub_R = exports.API_PostSub_LC = exports.API_PostHisCmt_R = exports.API_PostCmtHistory_L = exports.API_PostCmtLike_U = exports.API_PostCmtLike_C = exports.API_PostCmtLike_L = exports.API_PostCmt_UD = exports.API_PostCmt_R = exports.API_PostCmt_LC = exports.API_PostHistory_R = exports.API_PostHistory_L = exports.API_PostShare_C = exports.API_PostShare_L = exports.API_PostLike_U = exports.API_PostLike_C = exports.API_PostLike_L = exports.API_PostPicHistory_L = exports.API_PostPicLike_L = exports.API_PostPic_RUD = exports.API_PostPic_C = exports.API_PostPic_L = exports.API_Post_U = exports.API_Post_RD = exports.API_Post_C = exports.API_Post_L = undefined;

var _AxiosDjango = __webpack_require__(/*! ../../_axios/AxiosDjango */ "./src/api/api_django/_axios/AxiosDjango.js");

var _AxiosDjango2 = _interopRequireDefault(_AxiosDjango);

var _ConstAPI = __webpack_require__(/*! ../../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _DefaultPosts = __webpack_require__(/*! ../../../../component/posts/__default_post/DefaultPosts */ "./src/component/posts/__default_post/DefaultPosts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --------------------------- POST ----------------------------- */

// Get
var API_Post_L = exports.API_Post_L = function API_Post_L(params) {
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/l-post/',
            method: 'GET',
            params: params
        });
    }, params);
};

// Create

//
var API_Post_C = exports.API_Post_C = function API_Post_C(data) {
    return (0, _ConstAPI.API_FakeReal)({}, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/c-post/',
            method: 'POST',
            data: data
        });
    });
};

// Retrieve Delete
var API_Post_RD = exports.API_Post_RD = function API_Post_RD(pk) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_post_arr[0], function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/rd-post/' + pk + '/',
            method: method,
            params: params
        });
    });
};

// Update
var API_Post_U = exports.API_Post_U = function API_Post_U(pk) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _ConstAPI.API_FakeReal)({}, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/u-post/' + pk + '/',
            method: 'PATCH',
            data: data
        });
    });
};

/* --------------------------- PICTURE POST ----------------------------- */

// Get
var API_PostPic_L = exports.API_PostPic_L = function API_PostPic_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(Array(6).fill(_DefaultPosts.default_post_arr[0].vid_pics), function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/l-vid-pic-post/',
            method: 'GET',
            params: params
        });
    }, params);
};

// Create
var API_PostPic_C = exports.API_PostPic_C = function API_PostPic_C() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _AxiosDjango2.default)({
        url: '/user/c-vid-pic-post/',
        method: 'POST',
        data: data
    });
};

//
var API_PostPic_RUD = exports.API_PostPic_RUD = function API_PostPic_RUD() {
    var pk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var method = arguments[1];
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_post_arr[0].vid_pics[0], function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/rud-vid-pic-post/' + pk + '/',
            method: method,
            params: params,
            data: data
        });
    });
};

//
var API_PostPicLike_L = exports.API_PostPicLike_L = function API_PostPicLike_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_post_arr[0].vid_pics[0].likes, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/l-like-vid-pic-post/',
            method: 'GET',
            params: params
        });
    }, params);
};

//
var API_PostPicHistory_L = exports.API_PostPicHistory_L = function API_PostPicHistory_L() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_post_arr[0].vid_pics[0].histories, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/l-history-vid-pic-post/',
            method: 'GET',
            params: params
        });
    }, params);
};

/* --------------------------- LIKE POST ------------------------------ */

// Get
var API_PostLike_L = exports.API_PostLike_L = function API_PostLike_L(params) {
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_like_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/lc-like-post/',
            method: 'GET',
            params: params
        });
    }, params);
};

// Create
var API_PostLike_C = exports.API_PostLike_C = function API_PostLike_C(data) {
    return (0, _AxiosDjango2.default)({
        url: '/user/lc-like-post/',
        method: 'POST',
        data: data
    });
};

// Update
var API_PostLike_U = exports.API_PostLike_U = function API_PostLike_U(data) {
    return (0, _AxiosDjango2.default)({
        url: '/user/u-like-post/',
        method: 'PATCH',
        data: data
    });
};

/* --------------------------------- SHARE POST -------------------------------- */

// Get
var API_PostShare_L = exports.API_PostShare_L = function API_PostShare_L(params) {
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_share_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/lc-share-post/',
            method: 'GET',
            params: params
        });
    }, params);
};

// Create
var API_PostShare_C = exports.API_PostShare_C = function API_PostShare_C(data) {
    return (0, _AxiosDjango2.default)({
        url: '/user/lc-share-post/',
        method: 'POST',
        data: data
    });
};

/* --------------------------------- HISTORY POST -------------------------------- */

// Get
var API_PostHistory_L = exports.API_PostHistory_L = function API_PostHistory_L(params) {
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_history_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/lc-history-post/',
            method: 'GET',
            params: params
        });
    }, params);
};

// Get
var API_PostHistory_R = exports.API_PostHistory_R = function API_PostHistory_R(params) {
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_history_post_arr[0], function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/r-history-post/',
            method: 'GET',
            params: params
        });
    }, params);
};

/* ------------------------- COMMENT ---------------------------- */

// Get Create comment
var API_PostCmt_LC = exports.API_PostCmt_LC = function API_PostCmt_LC(method, params, data) {
    var is_vid_pic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return (0, _ConstAPI.API_FakeReal)(method == 'GET' ? is_vid_pic ? [] : _DefaultPosts.default_cmt_post_arr : data, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/lc-comment' + (is_vid_pic ? '-vid-pic' : '') + '/',
            method: method,
            params: params,
            data: data
        });
    }, params);
};

// Retrieve comment
var API_PostCmt_R = exports.API_PostCmt_R = function API_PostCmt_R(pk, params) {
    var is_vid_pic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return (0, _ConstAPI.API_FakeReal)(is_vid_pic ? [] : _DefaultPosts.default_cmt_post_arr[0], function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/ud-comment' + (is_vid_pic ? '-vid-pic' : '') + '/' + pk + '/',
            method: 'GET',
            params: params
        });
    });
};

// Update Delete comment
var API_PostCmt_UD = exports.API_PostCmt_UD = function API_PostCmt_UD(pk, method, data) {
    var is_vid_pic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return (0, _ConstAPI.API_FakeReal)(data, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/ud-comment' + (is_vid_pic ? '-vid-pic' : '') + '/' + pk + '/',
            method: method,
            data: data
        });
    });
};

// Get
var API_PostCmtLike_L = exports.API_PostCmtLike_L = function API_PostCmtLike_L(params) {
    var is_vid_pic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0, _ConstAPI.API_FakeReal)(is_vid_pic ? [] : _DefaultPosts.default_like_cmt_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/l-like-comment' + (is_vid_pic ? '-vid-pic' : '') + '/',
            method: 'GET',
            params: params
        });
    }, params);
};

// Create
var API_PostCmtLike_C = exports.API_PostCmtLike_C = function API_PostCmtLike_C(data) {
    var is_vid_pic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0, _AxiosDjango2.default)({
        url: '/user/c-like-comment' + (is_vid_pic ? '-vid-pic' : '') + '/',
        method: 'POST',
        data: data
    });
};

// Update
var API_PostCmtLike_U = exports.API_PostCmtLike_U = function API_PostCmtLike_U(pk, data) {
    var is_vid_pic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return (0, _AxiosDjango2.default)({
        url: '/user/u-like-comment' + (is_vid_pic ? '-vid-pic' : '') + '/' + pk + '/',
        method: 'PATCH',
        data: data
    });
};

// HISTORY

//
var API_PostCmtHistory_L = exports.API_PostCmtHistory_L = function API_PostCmtHistory_L(params) {
    var is_vid_pic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0, _ConstAPI.API_FakeReal)(is_vid_pic ? [] : _DefaultPosts.default_history_cmt_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/lc-history-cmt' + (is_vid_pic ? '-vid-pic' : '') + '/',
            method: 'GET',
            params: params
        });
    }, params);
};

//
var API_PostHisCmt_R = exports.API_PostHisCmt_R = function API_PostHisCmt_R(pk, params) {
    var is_vid_pic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return (0, _ConstAPI.API_FakeReal)(is_vid_pic ? [] : _DefaultPosts.default_history_cmt_post_arr[0], function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/r-history-cmt' + (is_vid_pic ? '-vid-pic' : '') + '/' + pk + '/',
            method: 'GET',
            params: params
        });
    });
};

/* ---------------------------- SUB ----------------------------------------- */

// Get Create sub
var API_PostSub_LC = exports.API_PostSub_LC = function API_PostSub_LC(method, params, data) {
    var is_vid_pic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return (0, _ConstAPI.API_FakeReal)(is_vid_pic ? [] : _DefaultPosts.default_sub_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/l-sub-comment' + (is_vid_pic ? '-vid-pic' : '') + '/',
            method: method,
            params: params,
            data: data
        });
    }, params);
};

// Retrieve
var API_PostSub_R = exports.API_PostSub_R = function API_PostSub_R(pk, params) {
    var is_vid_pic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return (0, _ConstAPI.API_FakeReal)(is_vid_pic ? [] : _DefaultPosts.default_sub_post_arr[0], function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/ud-sub-comment' + (is_vid_pic ? '-vid-pic' : '') + '/' + pk + '/',
            method: 'GET',
            params: params
        });
    });
};

// Update Delete sub
var API_PostSub_UD = exports.API_PostSub_UD = function API_PostSub_UD(pk, method, data) {
    var is_vid_pic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return (0, _ConstAPI.API_FakeReal)(data, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/ud-sub-comment' + (is_vid_pic ? '-vid-pic' : '') + '/' + pk + '/',
            method: method,
            data: data
        });
    });
};

// Get
var API_PostSubLike_L = exports.API_PostSubLike_L = function API_PostSubLike_L(params) {
    var is_vid_pic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0, _ConstAPI.API_FakeReal)(_DefaultPosts.default_like_sub_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/l-like-sub' + (is_vid_pic ? '-vid-pic' : '') + '/',
            method: 'GET',
            params: params
        });
    }, params);
};

// Create
var API_PostSubLike_C = exports.API_PostSubLike_C = function API_PostSubLike_C(data) {
    var is_vid_pic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0, _AxiosDjango2.default)({
        url: '/user/c-like-sub' + (is_vid_pic ? '-vid-pic' : '') + '/',
        method: 'POST',
        data: data
    });
};

// Update
var API_PostSubLike_U = exports.API_PostSubLike_U = function API_PostSubLike_U(pk, data) {
    var is_vid_pic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return (0, _AxiosDjango2.default)({
        url: '/user/u-like-sub' + (is_vid_pic ? '-vid-pic' : '') + '/' + pk + '/',
        method: 'PATCH',
        data: data
    });
};

//  HISTORY

//
var API_PostSubHistory_L = exports.API_PostSubHistory_L = function API_PostSubHistory_L(params) {
    var is_vid_pic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0, _ConstAPI.API_FakeReal)(is_vid_pic ? [] : _DefaultPosts.default_history_sub_post_arr, function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/lc-history-sub' + (is_vid_pic ? '-vid-pic' : '') + '/',
            method: 'GET',
            params: params
        });
    }, params);
};

//
var API_PostHisSub_R = exports.API_PostHisSub_R = function API_PostHisSub_R(pk, params) {
    var is_vid_pic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return (0, _ConstAPI.API_FakeReal)(is_vid_pic ? [] : _DefaultPosts.default_history_sub_post_arr[0], function () {
        return (0, _AxiosDjango2.default)({
            url: '/user/r-history-sub' + (is_vid_pic ? '-vid-pic' : '') + '/' + pk + '/',
            method: 'GET',
            params: params
        });
    });
};

/***/ }),

/***/ "./src/component/posts/__default_post/DefaultPosts.js":
/*!************************************************************!*\
  !*** ./src/component/posts/__default_post/DefaultPosts.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.more_content_post = exports.default_post_arr = exports.default_album_vid_pic_arr = exports.default_history_sub_post_arr = exports.default_like_sub_post_arr = exports.default_sub_post_arr = exports.default_history_cmt_post_arr = exports.default_like_cmt_post_arr = exports.default_cmt_post_arr = exports.default_history_post_arr = exports.default_share_post_arr = exports.default_like_post_arr = undefined;

var _white_person = __webpack_require__(/*! ../../../../image/white_person.svg */ "./image/white_person.svg");

var _white_person2 = _interopRequireDefault(_white_person);

var _naruto_x_hinata = __webpack_require__(/*! ../../../../image/naruto_x_hinata.jpg */ "./image/naruto_x_hinata.jpg");

var _naruto_x_hinata2 = _interopRequireDefault(_naruto_x_hinata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
var default_like_post_arr = exports.default_like_post_arr = [{
    "id": 1,
    "user": {
        "id": 3,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "Clark",
        "last_name": "Porter",
        "nick_name": "super man",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "tuesday@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "type_like": 4,
    "vid_pic_model": 6,
    "profile_user": 3
}];

var default_share_post_arr = exports.default_share_post_arr = [{
    "id": 1,
    "user": {
        "id": 1,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "My",
        "last_name": "My",
        "nick_name": "nkox my",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "abcxyz@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "post_model": 11,
    "profile_user": 1
}, {
    "id": 2,
    "user": {
        "id": 1,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "My",
        "last_name": "My",
        "nick_name": "nkox my",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "abcxyz@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "post_model": 11,
    "profile_user": 1
}, {
    "id": 3,
    "user": {
        "id": 2,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "My",
        "last_name": "My",
        "nick_name": "nkox my",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "abcxyz@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "post_model": 11,
    "profile_user": 2
}];

var default_history_post_arr = exports.default_history_post_arr = [{
    "id": 1,
    "vid_pics_create": [],
    "count_vid_pic_create": 0,
    "vid_pics_del": [{
        "id": 1,
        "vid_pic": _white_person2.default,
        "content": "c c c",
        "his_post": 1
    }],
    "count_vid_pic_del": 1,
    "content_obj": {
        "has_more_content": false,
        "content": "aa"
    },
    "content": "aa",
    "created_time": "2021-05-10T03:27:29.438225Z",
    "version": 1,
    "post_model": 11
}, {
    "id": 2,
    "vid_pics_create": [{
        "id": 2,
        "vid_pic": _white_person2.default,
        "note": "c c c",
        "his_post": 2
    }],
    "count_vid_pic_create": 1,
    "vid_pics_del": [],
    "count_vid_pic_del": 0,
    "content_obj": {
        "has_more_content": true,
        "content": "as ad asd asd asd asd ads a"
    },
    "content": "as ad asd asd asd asd ads a",
    "created_time": "2021-05-10T03:27:29.438225Z",
    "version": 1,
    "post_model": 11
}, {
    "id": 3,
    "vid_pics_create": [{
        "id": 4,
        "vid_pic": _white_person2.default,
        "note": "c c c",
        "his_post": 3
    }],
    "count_vid_pic_create": 1,
    "vid_pics_del": [{
        "id": 4,
        "vid_pic": _white_person2.default,
        "note": "c c c",
        "his_post": 3
    }, {
        "id": 4,
        "vid_pic": _white_person2.default,
        "note": "d d d",
        "his_post": 3
    }, {
        "id": 6,
        "vid_pic": _white_person2.default,
        "note": "z",
        "his_post": 3
    }],
    "count_vid_pic_del": 1,
    "content_obj": {
        "has_more_content": true,
        "content": "as ad asd asd asd asd ads a"
    },
    "content": "as ad asd asd asd asd ads a",
    "created_time": "2021-05-10T03:27:29.438225Z",
    "version": 1,
    "post_model": 11
}];

// 
var default_cmt_post_arr = exports.default_cmt_post_arr = [{
    "id": 1,
    "user": {
        "id": 2,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "My",
        "last_name": "My",
        "nick_name": "nkox my",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "abcxyz@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "content_obj": {
        "has_more_content": false,
        "content": "Comment"
    },
    "likes": [{
        "id": 1,
        "user": {
            "id": 3,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "Clark",
            "last_name": "Porter",
            "nick_name": "super man",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "tuesday@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "type_like": 2,
        "comment_model": 1,
        "profile_user": 3
    }],
    "count_like": 1,
    "user_type_like": -2,
    "subs": [{
        "id": 1,
        "user": {
            "id": 3,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "Clark",
            "last_name": "Porter",
            "nick_name": "super man",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "tuesday@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "content_obj": {
            "has_more_content": false,
            "content": "Sub comment"
        },
        "likes": [{
            "id": 1,
            "user": {
                "id": 2,
                "picture": _white_person2.default,
                "cover_picture": _white_person2.default,
                "first_name": "My",
                "last_name": "My",
                "nick_name": "nkox my",
                "birth": "2021-03-28",
                "permission_birth": 0,
                "permission_friends": 0,
                "hobby": "s",
                "story": "s",
                "email": "abcxyz@gmail.com",
                "permission_email": 0,
                "phone": "0123456789",
                "permission_phone": 0,
                "address": "Ha Noi",
                "permission_address": 0,
                "work": "Dev",
                "university": "HUBT",
                "high_school": "Hoa Lu",
                "is_online": false
            },
            "type_like": 3,
            "sub_model": 1,
            "profile_user": 2
        }],
        "count_like": 1,
        "user_type_like": -1,
        "histories": [],
        "count_history": 0,
        "created_time": "2021-04-02T06:44:46.495730Z",
        "updated_time": "2021-04-02T06:44:46.495730Z",
        "vid_pic": _white_person2.default,
        "comment_model": 1,
        "profile_user": 3
    }],
    "count_sub": 1,
    "histories": [],
    "count_history": 0,
    "created_time": "2021-04-02T06:42:36.443763Z",
    "updated_time": "2021-04-02T06:42:36.443763Z",
    "vid_pic": _white_person2.default,
    "post_model": 11,
    "profile_user": 2
}];

var default_like_cmt_post_arr = exports.default_like_cmt_post_arr = [{
    "id": 1,
    "user": {
        "id": 3,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "Clark",
        "last_name": "Porter",
        "nick_name": "super man",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "tuesday@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "type_like": 2,
    "comment_model": 1,
    "profile_user": 3
}];

var default_history_cmt_post_arr = exports.default_history_cmt_post_arr = [{
    "id": 1,
    "content_obj": {
        "has_more_content": false,
        "content": "This is history comment 1"
    },
    "content": "This is history comment 1",
    "created_time": "2021-05-08T02:57:45.006797Z",
    "vid_pic": '',
    "version": 1,
    "comment_model": 1
}, {
    "id": 2,
    "content_obj": {
        "has_more_content": true,
        "content": "This is history comment 2. "
    },
    "content": "This is history comment 2",
    "created_time": "2021-05-08T02:58:02.639178Z",
    "vid_pic": _white_person2.default,
    "version": 2,
    "comment_model": 1
}];

// 
var default_sub_post_arr = exports.default_sub_post_arr = [{
    "id": 1,
    "user": {
        "id": 3,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "Clark",
        "last_name": "Porter",
        "nick_name": "super man",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "tuesday@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "content_obj": {
        "has_more_content": true,
        "content": "Sub comment"
    },
    "likes": [{
        "id": 1,
        "user": {
            "id": 2,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "type_like": 3,
        "sub_model": 1,
        "profile_user": 2
    }],
    "count_like": 1,
    "user_type_like": -1,
    "histories": [],
    "count_history": 0,
    "created_time": "2021-04-02T06:44:46.495730Z",
    "updated_time": "2021-04-02T06:44:46.495730Z",
    "vid_pic": _white_person2.default,
    "comment_model": 1,
    "profile_user": 3
}];

var default_like_sub_post_arr = exports.default_like_sub_post_arr = [{
    "id": 1,
    "user": {
        "id": 2,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "My",
        "last_name": "My",
        "nick_name": "nkox my",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "abcxyz@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "type_like": 3,
    "sub_model": 1,
    "profile_user": 2
}];

var default_history_sub_post_arr = exports.default_history_sub_post_arr = [{
    "id": 1,
    "content_obj": {
        "has_more_content": true,
        "content": "This is history sub 1. "
    },
    "content": "This is history sub 1",
    "created_time": "2021-05-08T02:57:45.006797Z",
    "vid_pic": _white_person2.default,
    "version": 1,
    "sub_model": 1
}, {
    "id": 2,
    "content_obj": {
        "has_more_content": false,
        "content": ""
    },
    "content": "",
    "created_time": "2021-05-08T02:58:02.639178Z",
    "vid_pic": _white_person2.default,
    "version": 2,
    "sub_model": 1
}];

var default_album_vid_pic_arr = exports.default_album_vid_pic_arr = [{
    id: 1,
    name: 'My My',
    vid_pics: [{
        id: 1,
        vid_pic: _naruto_x_hinata2.default
    }]
}];

// 
var default_post_arr = exports.default_post_arr = [{
    "id": 11,
    "user": {
        "id": 1,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "My",
        "last_name": "My",
        "nick_name": "nkox my",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "abcxyz@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "content_obj": {
        "has_more_content": true,
        "content": "ad asd sd sd dsa d"
    },
    "vid_pics": [{
        "id": 6,
        "content_obj": {
            "has_more_content": false,
            "content": "note 1"
        },
        "likes": [{
            "id": 1,
            "user": {
                "id": 3,
                "picture": _white_person2.default,
                "cover_picture": _white_person2.default,
                "first_name": "Clark",
                "last_name": "Porter",
                "nick_name": "super man",
                "birth": "2021-03-28",
                "permission_birth": 0,
                "permission_friends": 0,
                "hobby": "s",
                "story": "s",
                "email": "tuesday@gmail.com",
                "permission_email": 0,
                "phone": "0123456789",
                "permission_phone": 0,
                "address": "Ha Noi",
                "permission_address": 0,
                "work": "Dev",
                "university": "HUBT",
                "high_school": "Hoa Lu",
                "is_online": false
            },
            "type_like": 4,
            "vid_pic_model": 6,
            "profile_user": 3
        }],
        "arr_unique_like": [0, 2, 3],
        "count_like": 1,
        "vid_pic": _naruto_x_hinata2.default,
        "content": "note 1",
        "folder_picture": "my folder picture",
        "post_model": 11,
        "user": {
            "id": 1,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "comments": [{
            "id": 8,
            "user": {
                "id": 2,
                "picture": _white_person2.default,
                "cover_picture": _white_person2.default,
                "first_name": "My",
                "last_name": "My",
                "nick_name": "nkox my",
                "birth": "2021-03-28",
                "permission_birth": 0,
                "permission_friends": 0,
                "hobby": "s",
                "story": "s",
                "email": "abcxyz@gmail.com",
                "permission_email": 0,
                "phone": "0123456789",
                "permission_phone": 0,
                "address": "Ha Noi",
                "permission_address": 0,
                "work": "Dev",
                "university": "HUBT",
                "high_school": "Hoa Lu",
                "is_online": false
            },
            "content_obj": {
                "has_more_content": false,
                "content": "Comment"
            },
            "likes": [{
                "id": 1,
                "user": {
                    "id": 3,
                    "picture": _white_person2.default,
                    "cover_picture": _white_person2.default,
                    "first_name": "Clark",
                    "last_name": "Porter",
                    "nick_name": "super man",
                    "birth": "2021-03-28",
                    "permission_birth": 0,
                    "permission_friends": 0,
                    "hobby": "s",
                    "story": "s",
                    "email": "tuesday@gmail.com",
                    "permission_email": 0,
                    "phone": "0123456789",
                    "permission_phone": 0,
                    "address": "Ha Noi",
                    "permission_address": 0,
                    "work": "Dev",
                    "university": "HUBT",
                    "high_school": "Hoa Lu",
                    "is_online": false
                },
                "type_like": 2,
                "comment_model": 1,
                "profile_user": 3
            }],
            "count_like": 1,
            "user_type_like": -2,
            "subs": [{
                "id": 1,
                "user": {
                    "id": 3,
                    "picture": _white_person2.default,
                    "cover_picture": _white_person2.default,
                    "first_name": "Clark",
                    "last_name": "Porter",
                    "nick_name": "super man",
                    "birth": "2021-03-28",
                    "permission_birth": 0,
                    "permission_friends": 0,
                    "hobby": "s",
                    "story": "s",
                    "email": "tuesday@gmail.com",
                    "permission_email": 0,
                    "phone": "0123456789",
                    "permission_phone": 0,
                    "address": "Ha Noi",
                    "permission_address": 0,
                    "work": "Dev",
                    "university": "HUBT",
                    "high_school": "Hoa Lu",
                    "is_online": false
                },
                "content_obj": {
                    "has_more_content": false,
                    "content": "Sub comment"
                },
                "likes": [{
                    "id": 1,
                    "user": {
                        "id": 2,
                        "picture": _white_person2.default,
                        "cover_picture": _white_person2.default,
                        "first_name": "My",
                        "last_name": "My",
                        "nick_name": "nkox my",
                        "birth": "2021-03-28",
                        "permission_birth": 0,
                        "permission_friends": 0,
                        "hobby": "s",
                        "story": "s",
                        "email": "abcxyz@gmail.com",
                        "permission_email": 0,
                        "phone": "0123456789",
                        "permission_phone": 0,
                        "address": "Ha Noi",
                        "permission_address": 0,
                        "work": "Dev",
                        "university": "HUBT",
                        "high_school": "Hoa Lu",
                        "is_online": false
                    },
                    "type_like": 3,
                    "sub_model": 1,
                    "profile_user": 2
                }],
                "count_like": 1,
                "user_type_like": 1,
                "histories": [],
                "count_history": 0,
                "created_time": "2021-04-02T06:44:46.495730Z",
                "updated_time": "2021-04-02T06:44:46.495730Z",
                "vid_pic": _white_person2.default,
                "comment_model": 8,
                "profile_user": 3
            }],
            "count_sub": 1,
            "histories": [],
            "count_history": 0,
            "created_time": "2021-04-02T06:42:36.443763Z",
            "updated_time": "2021-04-02T06:42:36.443763Z",
            "vid_pic": _white_person2.default,
            "vid_pic_model": 6,
            "profile_user": 2
        }],
        "count_comment": 1,
        "histories": [],
        "created_time": "2021-04-01T07:48:48.176630Z",
        "updated_time": "2021-04-01T15:18:30.339347Z"
    }],
    "count_vid_pic": 1,
    "likes": [{
        "id": 2,
        "user": {
            "id": 2,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "type_like": 1,
        "post_model": 11,
        "profile_user": 2
    }, {
        "id": 3,
        "user": {
            "id": 3,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "Clark",
            "last_name": "Porter",
            "nick_name": "super man",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "tuesday@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "type_like": 2,
        "post_model": 11,
        "profile_user": 3
    }],
    "count_like": 2,
    "user_type_like": -2,
    "shares": [{
        "id": 1,
        "user": {
            "id": 1,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "post_model": 11,
        "profile_user": 1
    }, {
        "id": 2,
        "user": {
            "id": 1,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "post_model": 11,
        "profile_user": 1
    }, {
        "id": 3,
        "user": {
            "id": 2,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "post_model": 11,
        "profile_user": 2
    }],
    "count_share": 3,
    "count_unique_share": 3,
    "count_user_shared": 2,
    "comments": [{
        "id": 1,
        "user": {
            "id": 2,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "content_obj": {
            "has_more_content": false,
            "content": "Comment"
        },
        "likes": [{
            "id": 1,
            "user": {
                "id": 3,
                "picture": _white_person2.default,
                "cover_picture": _white_person2.default,
                "first_name": "Clark",
                "last_name": "Porter",
                "nick_name": "super man",
                "birth": "2021-03-28",
                "permission_birth": 0,
                "permission_friends": 0,
                "hobby": "s",
                "story": "s",
                "email": "tuesday@gmail.com",
                "permission_email": 0,
                "phone": "0123456789",
                "permission_phone": 0,
                "address": "Ha Noi",
                "permission_address": 0,
                "work": "Dev",
                "university": "HUBT",
                "high_school": "Hoa Lu",
                "is_online": false
            },
            "type_like": 2,
            "comment_model": 1,
            "profile_user": 3
        }],
        "count_like": 1,
        "user_type_like": -2,
        "subs": [{
            "id": 1,
            "user": {
                "id": 3,
                "picture": _white_person2.default,
                "cover_picture": _white_person2.default,
                "first_name": "Clark",
                "last_name": "Porter",
                "nick_name": "super man",
                "birth": "2021-03-28",
                "permission_birth": 0,
                "permission_friends": 0,
                "hobby": "s",
                "story": "s",
                "email": "tuesday@gmail.com",
                "permission_email": 0,
                "phone": "0123456789",
                "permission_phone": 0,
                "address": "Ha Noi",
                "permission_address": 0,
                "work": "Dev",
                "university": "HUBT",
                "high_school": "Hoa Lu",
                "is_online": false
            },
            "content_obj": {
                "has_more_content": false,
                "content": "Sub comment"
            },
            "likes": [{
                "id": 1,
                "user": {
                    "id": 2,
                    "picture": _white_person2.default,
                    "cover_picture": _white_person2.default,
                    "first_name": "My",
                    "last_name": "My",
                    "nick_name": "nkox my",
                    "birth": "2021-03-28",
                    "permission_birth": 0,
                    "permission_friends": 0,
                    "hobby": "s",
                    "story": "s",
                    "email": "abcxyz@gmail.com",
                    "permission_email": 0,
                    "phone": "0123456789",
                    "permission_phone": 0,
                    "address": "Ha Noi",
                    "permission_address": 0,
                    "work": "Dev",
                    "university": "HUBT",
                    "high_school": "Hoa Lu",
                    "is_online": false
                },
                "type_like": 3,
                "sub_model": 1,
                "profile_user": 2
            }],
            "count_like": 1,
            "user_type_like": -1,
            "histories": [],
            "count_history": 0,
            "created_time": "2021-04-02T06:44:46.495730Z",
            "updated_time": "2021-04-02T06:44:46.495730Z",
            "vid_pic": _white_person2.default,
            "comment_model": 1,
            "profile_user": 3
        }],
        "count_sub": 6,
        "histories": [],
        "count_history": 0,
        "created_time": "2021-04-02T06:42:36.443763Z",
        "updated_time": "2021-04-02T06:42:36.443763Z",
        "vid_pic": _white_person2.default,
        "post_model": 11,
        "profile_user": 2
    }],
    "count_comment": 11,
    "histories": [],
    "count_history": 0,
    "created_time": "2021-04-01T07:48:48.176630Z",
    "permission_post": 0,
    "updated_time": "2021-04-01T15:18:30.339347Z",
    "profile_user": 1
}, {
    "id": 11,
    "user": {
        "id": 1,
        "picture": _white_person2.default,
        "cover_picture": _white_person2.default,
        "first_name": "My",
        "last_name": "My",
        "nick_name": "nkox my",
        "birth": "2021-03-28",
        "permission_birth": 0,
        "permission_friends": 0,
        "hobby": "s",
        "story": "s",
        "email": "abcxyz@gmail.com",
        "permission_email": 0,
        "phone": "0123456789",
        "permission_phone": 0,
        "address": "Ha Noi",
        "permission_address": 0,
        "work": "Dev",
        "university": "HUBT",
        "high_school": "Hoa Lu",
        "is_online": false
    },
    "content_obj": {
        "has_more_content": false,
        "content": "ad asd sd sd dsa d"
    },
    "vid_pics": [{
        "id": 6,
        "content": {
            "has_more_content": false,
            "note": "note 1"
        },
        "likes": [{
            "id": 1,
            "user": {
                "id": 3,
                "picture": _white_person2.default,
                "cover_picture": _white_person2.default,
                "first_name": "Clark",
                "last_name": "Porter",
                "nick_name": "super man",
                "birth": "2021-03-28",
                "permission_birth": 0,
                "permission_friends": 0,
                "hobby": "s",
                "story": "s",
                "email": "tuesday@gmail.com",
                "permission_email": 0,
                "phone": "0123456789",
                "permission_phone": 0,
                "address": "Ha Noi",
                "permission_address": 0,
                "work": "Dev",
                "university": "HUBT",
                "high_school": "Hoa Lu",
                "is_online": false
            },
            "type_like": 4,
            "vid_pic_model": 6,
            "profile_user": 3
        }],
        "count_like": 1,
        "vid_pic": _white_person2.default,
        "note": "note 1",
        "folder_picture": "my folder picture",
        "post_model": 11
    }],
    "count_vid_pic": 1,
    "likes": [{
        "id": 2,
        "user": {
            "id": 2,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "type_like": 1,
        "post_model": 11,
        "profile_user": 2
    }, {
        "id": 3,
        "user": {
            "id": 3,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "Clark",
            "last_name": "Porter",
            "nick_name": "super man",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "tuesday@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "type_like": 2,
        "post_model": 11,
        "profile_user": 3
    }],
    "count_like": 2,
    "user_type_like": -2,
    "shares": [{
        "id": 1,
        "user": {
            "id": 1,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "post_model": 11,
        "profile_user": 1
    }, {
        "id": 2,
        "user": {
            "id": 1,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "post_model": 11,
        "profile_user": 1
    }, {
        "id": 3,
        "user": {
            "id": 2,
            "picture": _white_person2.default,
            "cover_picture": _white_person2.default,
            "first_name": "My",
            "last_name": "My",
            "nick_name": "nkox my",
            "birth": "2021-03-28",
            "permission_birth": 0,
            "permission_friends": 0,
            "hobby": "s",
            "story": "s",
            "email": "abcxyz@gmail.com",
            "permission_email": 0,
            "phone": "0123456789",
            "permission_phone": 0,
            "address": "Ha Noi",
            "permission_address": 0,
            "work": "Dev",
            "university": "HUBT",
            "high_school": "Hoa Lu",
            "is_online": false
        },
        "post_model": 11,
        "profile_user": 2
    }],
    "count_share": 3,
    "count_unique_share": 3,
    "count_user_shared": 2,
    "comments": [],
    "count_comment": 1,
    "histories": [],
    "count_history": 0,
    "created_time": "2021-04-01T07:48:48.176630Z",
    "permission_post": 0,
    "updated_time": "2021-04-01T15:18:30.339347Z",
    "profile_user": 1
}];

var more_content_post = exports.more_content_post = " more content post more\ncontent post more content post more content post";

/***/ })

}]);
//# sourceMappingURL=src__some_function_GetIdSlug_js-src_api_api_django_user_user_post_UserPost_js.js.map