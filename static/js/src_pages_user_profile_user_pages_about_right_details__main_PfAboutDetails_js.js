(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_about_right_details__main_PfAboutDetails_js"],{

/***/ "./src/pages/user_profile/user_pages/about/right/details/_main/PfAboutDetails.js":
/*!***************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/_main/PfAboutDetails.js ***!
  \***************************************************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextAPI = __webpack_require__(/*! ../../../../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _GetIdSlug = __webpack_require__(/*! ../../../../../../../_some_function/GetIdSlug */ "./src/_some_function/GetIdSlug.js");

var _about = __webpack_require__(/*! ../../../../../../../_initial/profile/about */ "./src/_initial/profile/about.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutYou = __webpack_require__(/*! ../about_you/_main/PfAboutYou */ "./src/pages/user_profile/user_pages/about/right/details/about_you/_main/PfAboutYou.js");

var _PfAboutYou2 = _interopRequireDefault(_PfAboutYou);

var _PfAboutOtherName = __webpack_require__(/*! ../other_name/_main/PfAboutOtherName */ "./src/pages/user_profile/user_pages/about/right/details/other_name/_main/PfAboutOtherName.js");

var _PfAboutOtherName2 = _interopRequireDefault(_PfAboutOtherName);

var _PfAboutFavour = __webpack_require__(/*! ../favourite/_main/PfAboutFavour */ "./src/pages/user_profile/user_pages/about/right/details/favourite/_main/PfAboutFavour.js");

var _PfAboutFavour2 = _interopRequireDefault(_PfAboutFavour);

var _AboutNoItem = __webpack_require__(/*! ../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PfAboutDetails.propTypes = {};

//
function PfAboutDetails(_ref) {

    //
    var getData_API_About = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var about_obj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return (0, _ProfileHandleAPI.handle_API_UserOverview_r)({ user_id: user_id });

                        case 2:
                            about_obj = _context.sent;


                            setAboutState({
                                you_obj: about_obj.you_obj,
                                other_name_arr: about_obj.other_name_arr,
                                favour_obj: about_obj.favour_obj,

                                has_fetched: true,
                                no_item: !(about_obj.you_obj.title || about_obj.other_name_arr.length || about_obj.favour_obj.title)
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_About() {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var name = _ref.name;

    //
    var id = (0, _react.useContext)(_ContextAPI.context_api).user.id;

    //

    var user_id = (0, _GetIdSlug.GetIdSlug)();

    //

    var _useState = (0, _react.useState)((0, _about.initial_detail_state)()),
        _useState2 = _slicedToArray(_useState, 2),
        about_state = _useState2[0],
        setAboutState = _useState2[1];

    var you_obj = about_state.you_obj,
        other_name_arr = about_state.other_name_arr,
        favour_obj = about_state.favour_obj,
        has_fetched = about_state.has_fetched,
        no_item = about_state.no_item;

    //

    (0, _react.useEffect)(function () {
        getData_API_About();
    }, []);return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Details about ',
            id == user_id ? 'you' : name
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No detail to show'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_part' },
                        _react2.default.createElement(_PfAboutYou2.default, { you_obj: you_obj })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_part' },
                        _react2.default.createElement(_PfAboutOtherName2.default, { other_name_arr: other_name_arr })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_part' },
                        _react2.default.createElement(_PfAboutFavour2.default, { favour_obj: favour_obj })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutDetails;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/about_you/_main/PfAboutYou.js":
/*!*********************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/about_you/_main/PfAboutYou.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutYouEdit = __webpack_require__(/*! ../edit/PfAboutYouEdit */ "./src/pages/user_profile/user_pages/about/right/details/about_you/edit/PfAboutYouEdit.js");

var _PfAboutYouEdit2 = _interopRequireDefault(_PfAboutYouEdit);

var _PfAboutYouItem = __webpack_require__(/*! ../item/PfAboutYouItem */ "./src/pages/user_profile/user_pages/about/right/details/about_you/item/PfAboutYouItem.js");

var _PfAboutYouItem2 = _interopRequireDefault(_PfAboutYouItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutYou.propTypes = {
    you_obj: _propTypes2.default.object
};

//

//
function PfAboutYou(_ref) {
    var you_obj = _ref.you_obj;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var you = data.you,
            permission = data.permission;


        you_obj.title = you;
        you_obj.you = you;
        you_obj.permission = permission;

        forceUpdate();
    }

    //
    function handleUpdateItemObj(data) {
        var you = data.you,
            permission = data.permission;


        you_obj.title = you;
        you_obj.permission = permission;
        you_obj.you = you;

        forceUpdate();
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            {
                className: 'PfAbout_add ' + (you_obj.you == '' ? '' : 'display-none')
            },
            _react2.default.createElement(_PfAboutAdd2.default, {
                title_add: 'Add about you',
                item_obj: {
                    you: '',
                    permission: 0
                },
                ComponentEdit: _PfAboutYouEdit2.default,
                handleCreate: handleCreate,
                handle_API_C: _ProfileHandleAPI.handle_API_You_U
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PfAboutYouItem2.default, {
                you_obj: you_obj,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutYou;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/about_you/edit/PfAboutYouEdit.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/about_you/edit/PfAboutYouEdit.js ***!
  \************************************************************************************************/
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

var _InputNotValid = __webpack_require__(/*! ../../../../../../../../component/input/input_not_valid/InputNotValid */ "./src/component/input/input_not_valid/InputNotValid.js");

var _InputNotValid2 = _interopRequireDefault(_InputNotValid);

var _PfAboutConfirm = __webpack_require__(/*! ../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PfAboutYouEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutYouEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        you = item_obj.you;

    //

    var _useState = (0, _react.useState)(you),
        _useState2 = _slicedToArray(_useState, 2),
        cur_you = _useState2[0],
        setCurYou = _useState2[1];

    //


    function handleChangeYou(e) {
        setCurYou(e.target.value);
    }

    function onSave(new_permission) {
        handleSave({ permission: new_permission, you: cur_you });
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'PfAbout_input' },
                _react2.default.createElement(_InputNotValid2.default, {
                    name: 'you',
                    value: cur_you,
                    placeholder: 'About you',
                    max_length: 1000,
                    handleChange: handleChangeYou
                })
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PfAboutConfirm2.default, {
                permission: permission,
                handleCancel: handleCancel,
                handleSave: onSave
            })
        )
    );
}

exports.default = PfAboutYouEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/about_you/item/PfAboutYouItem.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/about_you/item/PfAboutYouItem.js ***!
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

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutYouEdit = __webpack_require__(/*! ../edit/PfAboutYouEdit */ "./src/pages/user_profile/user_pages/about/right/details/about_you/edit/PfAboutYouEdit.js");

var _PfAboutYouEdit2 = _interopRequireDefault(_PfAboutYouEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutYouItem.propTypes = {
    you_obj: _propTypes2.default.object,
    handleUpdateItemObj: _propTypes2.default.func
};

//

//
function PfAboutYouItem(_ref) {
    var you_obj = _ref.you_obj,
        handleUpdateItemObj = _ref.handleUpdateItemObj;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AboutRowItemEdit2.default, {
                item_obj: you_obj,
                Icon: _GroupIconProfileAbout.IconsProfileAbout.you,
                label: 'About you'
                //
                , ComponentEdit: _PfAboutYouEdit2.default,
                handle_API_U: _ProfileHandleAPI.handle_API_You_U,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutYouItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/favourite/_main/PfAboutFavour.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/favourite/_main/PfAboutFavour.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutFavourEdit = __webpack_require__(/*! ../edit/PfAboutFavourEdit */ "./src/pages/user_profile/user_pages/about/right/details/favourite/edit/PfAboutFavourEdit.js");

var _PfAboutFavourEdit2 = _interopRequireDefault(_PfAboutFavourEdit);

var _PfAboutFavourItem = __webpack_require__(/*! ../item/PfAboutFavourItem */ "./src/pages/user_profile/user_pages/about/right/details/favourite/item/PfAboutFavourItem.js");

var _PfAboutFavourItem2 = _interopRequireDefault(_PfAboutFavourItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutFavour.propTypes = {
    favour_obj: _propTypes2.default.object
};

//

//
function PfAboutFavour(props) {
    //
    var favour_obj = props.favour_obj;

    //

    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var favour = data.favour,
            permission = data.permission;


        favour_obj.title = favour;
        favour_obj.favour = favour;
        favour_obj.permission = permission;

        forceUpdate();
    }

    //
    function handleUpdateItemObj(data) {
        var favour = data.favour,
            permission = data.permission;


        favour_obj.title = favour;
        favour_obj.permission = permission;
        favour_obj.favour = favour;

        forceUpdate();
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            {
                className: 'PfAbout_add ' + (favour_obj.title == '' ? '' : 'display-none')
            },
            _react2.default.createElement(_PfAboutAdd2.default, {
                title_add: 'Add a favour',
                item_obj: {
                    favour: '',
                    permission: 0
                },
                ComponentEdit: _PfAboutFavourEdit2.default,
                handleCreate: handleCreate,
                handle_API_C: _ProfileHandleAPI.handle_API_Favour_U
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PfAboutFavourItem2.default, {
                favour_obj: favour_obj,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutFavour;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/favourite/edit/PfAboutFavourEdit.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/favourite/edit/PfAboutFavourEdit.js ***!
  \***************************************************************************************************/
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

var _InputNotValid = __webpack_require__(/*! ../../../../../../../../component/input/input_not_valid/InputNotValid */ "./src/component/input/input_not_valid/InputNotValid.js");

var _InputNotValid2 = _interopRequireDefault(_InputNotValid);

var _PfAboutConfirm = __webpack_require__(/*! ../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PfAboutFavourEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutFavourEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        favour = item_obj.favour;

    //

    var _useState = (0, _react.useState)(favour),
        _useState2 = _slicedToArray(_useState, 2),
        cur_favour = _useState2[0],
        setCurFavour = _useState2[1];

    //


    function handleChangeFavour(e) {
        setCurFavour(e.target.value);
    }

    function onSave(new_permission) {
        handleSave({ permission: new_permission, favour: cur_favour });
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'PfAbout_input' },
                _react2.default.createElement(_InputNotValid2.default, {
                    name: 'favour',
                    value: cur_favour,
                    placeholder: 'About favour',
                    max_length: 1000,
                    handleChange: handleChangeFavour
                })
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PfAboutConfirm2.default, {
                permission: permission,
                handleCancel: handleCancel,
                handleSave: onSave
            })
        )
    );
}

exports.default = PfAboutFavourEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/favourite/item/PfAboutFavourItem.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/favourite/item/PfAboutFavourItem.js ***!
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

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutFavourEdit = __webpack_require__(/*! ../edit/PfAboutFavourEdit */ "./src/pages/user_profile/user_pages/about/right/details/favourite/edit/PfAboutFavourEdit.js");

var _PfAboutFavourEdit2 = _interopRequireDefault(_PfAboutFavourEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutFavourItem.propTypes = {
    favour_obj: _propTypes2.default.object,
    handleUpdateItemObj: _propTypes2.default.func
};

//

//
function PfAboutFavourItem(_ref) {
    var favour_obj = _ref.favour_obj,
        handleUpdateItemObj = _ref.handleUpdateItemObj;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AboutRowItemEdit2.default, {
                item_obj: favour_obj,
                Icon: _GroupIconProfileAbout.IconsProfileAbout.favour,
                label: 'Favour'
                // 
                , ComponentEdit: _PfAboutFavourEdit2.default,
                handle_API_U: _ProfileHandleAPI.handle_API_Favour_U,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutFavourItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/other_name/_main/PfAboutOtherName.js":
/*!****************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/other_name/_main/PfAboutOtherName.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutOtherNameEdit = __webpack_require__(/*! ../edit/PfAboutOtherNameEdit */ "./src/pages/user_profile/user_pages/about/right/details/other_name/edit/PfAboutOtherNameEdit.js");

var _PfAboutOtherNameEdit2 = _interopRequireDefault(_PfAboutOtherNameEdit);

var _PfAboutOtherNameItem = __webpack_require__(/*! ../item/PfAboutOtherNameItem */ "./src/pages/user_profile/user_pages/about/right/details/other_name/item/PfAboutOtherNameItem.js");

var _PfAboutOtherNameItem2 = _interopRequireDefault(_PfAboutOtherNameItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutOtherName.propTypes = {
    other_name_arr: _propTypes2.default.array
};

//

//
function PfAboutOtherName(props) {
    //
    var other_name_arr = props.other_name_arr;

    //

    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var other_name = data.other_name,
            permission = data.permission;


        other_name_arr.push({
            id: 101 + other_name_arr.length,
            title: other_name,
            other_name: other_name,
            permission: permission
        });

        forceUpdate();
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_add' },
            _react2.default.createElement(_PfAboutAdd2.default, {
                title_add: 'Add a other name',
                item_obj: {
                    other_name: '',
                    permission: 0
                },
                ComponentEdit: _PfAboutOtherNameEdit2.default,
                handleCreate: handleCreate,
                handle_API_C: _ProfileHandleAPI.handle_API_OtherName_C
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            other_name_arr.map(function (other_name_obj) {
                return _react2.default.createElement(
                    'div',
                    { key: 'PfAboutOtherName_' + other_name_obj.id },
                    _react2.default.createElement(_PfAboutOtherNameItem2.default, { other_name_obj: other_name_obj })
                );
            })
        )
    );
}

exports.default = PfAboutOtherName;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/other_name/edit/PfAboutOtherNameEdit.js":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/other_name/edit/PfAboutOtherNameEdit.js ***!
  \*******************************************************************************************************/
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

var _PfAboutConfirm = __webpack_require__(/*! ../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

var _InputNotValid = __webpack_require__(/*! ../../../../../../../../component/input/input_not_valid/InputNotValid */ "./src/component/input/input_not_valid/InputNotValid.js");

var _InputNotValid2 = _interopRequireDefault(_InputNotValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PfAboutOtherNameEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutOtherNameEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        other_name = item_obj.other_name;

    //

    var _useState = (0, _react.useState)(other_name),
        _useState2 = _slicedToArray(_useState, 2),
        cur_other_name = _useState2[0],
        setCurOtherName = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        other_name_error = _useState4[0],
        setOtherNameError = _useState4[1];

    //


    function handleChangeOtherName(e) {
        setCurOtherName(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_other_name) || other_name != '' && cur_other_name == '') {
            handleSave({
                permission: new_permission,
                other_name: cur_other_name.trim()
            });
        } else {
            setOtherNameError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: other_name_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'OtherName must have at least 2 letters!'
            ),
            _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'PfAbout_input' },
                _react2.default.createElement(_InputNotValid2.default, {
                    name: 'other_name',
                    value: cur_other_name,
                    type: 'text',
                    placeholder: 'Other name',
                    handleChange: handleChangeOtherName
                })
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PfAboutConfirm2.default, {
                permission: permission,
                handleCancel: handleCancel,
                handleSave: onSave
            })
        )
    );
}

exports.default = PfAboutOtherNameEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/details/other_name/item/PfAboutOtherNameItem.js":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/details/other_name/item/PfAboutOtherNameItem.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutOtherNameEdit = __webpack_require__(/*! ../edit/PfAboutOtherNameEdit */ "./src/pages/user_profile/user_pages/about/right/details/other_name/edit/PfAboutOtherNameEdit.js");

var _PfAboutOtherNameEdit2 = _interopRequireDefault(_PfAboutOtherNameEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutOtherNameItem.propTypes = {
    other_name_obj: _propTypes2.default.object
};

//

//
function PfAboutOtherNameItem(props) {
    //
    var other_name_obj = props.other_name_obj;

    //

    function handleUpdateItemObj(data) {
        var other_name = data.other_name,
            permission = data.permission;


        other_name_obj.title = other_name;
        other_name_obj.permission = permission;
        other_name_obj.other_name = other_name;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: other_name_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.other_name,
            ComponentEdit: _PfAboutOtherNameEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_OtherName_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutOtherNameItem;

/***/ })

}]);
//# sourceMappingURL=src_pages_user_profile_user_pages_about_right_details__main_PfAboutDetails_js.js.map