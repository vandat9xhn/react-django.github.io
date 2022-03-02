(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_about_right_relationships__main_PfAboutRelation_js"],{

/***/ "./src/_data/profile/relative.js":
/*!***************************************!*\
  !*** ./src/_data/profile/relative.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
//
var data_about_relation_arr = exports.data_about_relation_arr = ['Father', 'Mother', 'Child', 'Brother', 'Sister', 'Girl friend', 'Boy friend'];

/***/ }),

/***/ "./src/_hooks/useInputSelectLoading.js":
/*!*********************************************!*\
  !*** ./src/_hooks/useInputSelectLoading.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.useInputSelectLoading = useInputSelectLoading;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _useWaitingLastAction2 = __webpack_require__(/*! ./useWaitingLastAction */ "./src/_hooks/useWaitingLastAction.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
function useInputSelectLoading(_ref) {

    /* ------------------ GET API ---------------- */

    //
    var getData_API = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
            var _ref3$is_has_fetched = _ref3.is_has_fetched,
                is_has_fetched = _ref3$is_has_fetched === undefined ? false : _ref3$is_has_fetched,
                _ref3$start_obj_state = _ref3.start_obj_state,
                start_obj_state = _ref3$start_obj_state === undefined ? {} : _ref3$start_obj_state;

            var _ref4, data, new_option_count;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            setInputSelectState(function (input_select_state) {
                                return _extends({}, input_select_state, {
                                    has_fetched: is_has_fetched,
                                    is_fetching: true
                                }, start_obj_state);
                            });

                            _context.next = 3;
                            return handle_API_L({
                                c_option_count: is_has_fetched ? option_arr.length : 0
                            });

                        case 3:
                            _ref4 = _context.sent;
                            data = _ref4.data;
                            new_option_count = _ref4.count;


                            setInputSelectState(function (input_select_state) {
                                return _extends({}, input_select_state, {
                                    option_arr: is_has_fetched ? [].concat(_toConsumableArray(input_select_state.option_arr), _toConsumableArray(data)) : data,
                                    option_count: is_has_fetched ? option_count : new_option_count,

                                    has_fetched: true,
                                    is_fetching: false
                                });
                            });

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API(_x) {
            return _ref2.apply(this, arguments);
        };
    }();

    //


    var _ref$initial_selected = _ref.initial_selected_arr,
        initial_selected_arr = _ref$initial_selected === undefined ? [] : _ref$initial_selected,
        _ref$handle_API_L = _ref.handle_API_L,
        handle_API_L = _ref$handle_API_L === undefined ? function () {
        return new Promise();
    } : _ref$handle_API_L,
        _ref$multiple = _ref.multiple,
        multiple = _ref$multiple === undefined ? true : _ref$multiple;

    //
    var _useState = (0, _react.useState)({
        value_input: '',
        selected_arr: initial_selected_arr,
        option_arr: [],
        option_count: 0,

        open_option: false,
        has_fetched: false,
        is_fetching: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        input_select_state = _useState2[0],
        setInputSelectState = _useState2[1];

    var value_input = input_select_state.value_input,
        option_arr = input_select_state.option_arr,
        selected_arr = input_select_state.selected_arr,
        option_count = input_select_state.option_count,
        open_option = input_select_state.open_option,
        has_fetched = input_select_state.has_fetched,
        is_fetching = input_select_state.is_fetching;

    //

    var _useWaitingLastAction = (0, _useWaitingLastAction2.useWaitingLastAction)({
        time_waiting: 500,
        callback: handleGetDataAfterChange
    }),
        handleWaitingLastAction = _useWaitingLastAction.handleWaitingLastAction;

    function handleShowMore() {
        if (option_count <= option_arr.length) {
            return;
        }

        getData_API({
            is_has_fetched: true
        });
    }

    /* ------------------ INPUT ---------------- */

    //
    function handleChangeInput(e) {
        handleWaitingLastAction();

        setInputSelectState(_extends({}, input_select_state, {
            value_input: e.target.value
        }));
    }

    //
    function handleGetDataAfterChange() {
        getData_API({
            has_fetched: false,
            start_obj_state: {
                // value_input: e.target.value,
                option_arr: [],
                option_count: 0
            }
        });
    }

    /* ------------------ OPTION ---------------- */

    //
    function handleShowOption() {
        if (has_fetched) {
            setInputSelectState(_extends({}, input_select_state, {
                open_option: true
            }));
        } else {
            getData_API({ start_obj_state: { open_option: true } });
        }
    }

    //
    function handleHideOption() {
        setInputSelectState(_extends({}, input_select_state, {
            open_option: false
        }));
    }

    //
    function handleSelectOption(select_ix) {
        if (!multiple) {
            setInputSelectState(_extends({}, input_select_state, {
                value_input: '',
                selected_arr: [option_arr[select_ix]],
                option_arr: [],
                option_count: 0
            }));
        }
        //
        else {
                setInputSelectState(_extends({}, input_select_state, {
                    value_input: '',
                    selected_arr: [].concat(_toConsumableArray(selected_arr), [option_arr[select_ix]]),
                    option_arr: option_arr.filter(function (_, ix) {
                        return ix != select_ix;
                    }),
                    option_count: option_count - 1
                }));
            }
    }

    /* ------------------ SELECTED ---------------- */

    //
    function handleRemoveSelectedItem(remove_ix) {
        if (!multiple) {
            setTimeout(function () {
                getData_API({
                    // has_fetched: false,
                    start_obj_state: {
                        open_option: true,
                        selected_arr: []
                    }
                });
            }, 0);
        }
        //
        else {
                setInputSelectState(_extends({}, input_select_state, {
                    selected_arr: selected_arr.filter(function (_, ix) {
                        return ix != remove_ix;
                    }),
                    option_arr: [].concat(_toConsumableArray(option_arr), [selected_arr[remove_ix]]),
                    option_count: option_count + 1
                }));
            }
    }

    //
    return {
        value_input: value_input,
        option_arr: option_arr,
        selected_arr: selected_arr,
        option_count: option_count,

        has_fetched: has_fetched,
        is_fetching: is_fetching,
        open_option: open_option,

        handleShowOption: handleShowOption,
        handleHideOption: handleHideOption,
        handleSelectOption: handleSelectOption,

        handleChangeInput: handleChangeInput,
        handleShowMore: handleShowMore,
        handleRemoveSelectedItem: handleRemoveSelectedItem,

        setInputSelectState: setInputSelectState
    };
}

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/_main/PfAboutRelation.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/_main/PfAboutRelation.js ***!
  \**********************************************************************************************/
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

var _GetIdSlug = __webpack_require__(/*! ../../../../../../../_some_function/GetIdSlug */ "./src/_some_function/GetIdSlug.js");

var _about = __webpack_require__(/*! ../../../../../../../_initial/profile/about */ "./src/_initial/profile/about.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutRelationship = __webpack_require__(/*! ../relationship/_main/PfAboutRelationship */ "./src/pages/user_profile/user_pages/about/right/relationships/relationship/_main/PfAboutRelationship.js");

var _PfAboutRelationship2 = _interopRequireDefault(_PfAboutRelationship);

var _PfAboutFamily = __webpack_require__(/*! ../family/_main/PfAboutFamily */ "./src/pages/user_profile/user_pages/about/right/relationships/family/_main/PfAboutFamily.js");

var _PfAboutFamily2 = _interopRequireDefault(_PfAboutFamily);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PfAboutRelations.propTypes = {};

//
function PfAboutRelations(props) {

    //
    var getData_API_About = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                                relationship_obj: about_obj.relationship_obj,
                                family_arr: about_obj.family_arr,

                                has_fetched: true
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getData_API_About() {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var user_id = (0, _GetIdSlug.GetIdSlug)();

    //

    var _useState = (0, _react.useState)(_about.initial_relation_state),
        _useState2 = _slicedToArray(_useState, 2),
        about_state = _useState2[0],
        setAboutState = _useState2[1];

    var relationship_obj = about_state.relationship_obj,
        family_arr = about_state.family_arr,
        has_fetched = about_state.has_fetched;

    //

    (0, _react.useEffect)(function () {
        getData_API_About();
    }, []);return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutRelationship2.default, {
                relationship_obj: relationship_obj,
                has_fetched: has_fetched
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutFamily2.default, {
                family_arr: family_arr,
                has_fetched: has_fetched
            })
        )
    );
}

exports.default = PfAboutRelations;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/family/_main/PfAboutFamily.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/family/_main/PfAboutFamily.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutFamilyEdit = __webpack_require__(/*! ../edit/PfAboutFamilyEdit */ "./src/pages/user_profile/user_pages/about/right/relationships/family/edit/PfAboutFamilyEdit.js");

var _PfAboutFamilyEdit2 = _interopRequireDefault(_PfAboutFamilyEdit);

var _PfAboutFamilyItem = __webpack_require__(/*! ../item/PfAboutFamilyItem */ "./src/pages/user_profile/user_pages/about/right/relationships/family/item/PfAboutFamilyItem.js");

var _PfAboutFamilyItem2 = _interopRequireDefault(_PfAboutFamilyItem);

var _PictureName = __webpack_require__(/*! ../../../../../../../../component/picture_name/pic_name/PictureName */ "./src/component/picture_name/pic_name/PictureName.js");

var _PictureName2 = _interopRequireDefault(_PictureName);

var _AboutNoItem = __webpack_require__(/*! ../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutFamily.propTypes = {
    family_arr: _propTypes2.default.array
};

//

//
function PfAboutFamily(_ref) {
    var family_arr = _ref.family_arr,
        has_fetched = _ref.has_fetched;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var relation = data.relation,
            member = data.member,
            permission = data.permission;


        family_arr.push({
            id: 101 + family_arr.length,
            title: _react2.default.createElement(_PictureName2.default, {
                user: member.friend,
                content: _react2.default.createElement(
                    'div',
                    { className: 'font-12px' },
                    relation
                ),
                align_center: false
            }),
            member: member,
            relation: relation,
            permission: permission
        });
        forceUpdate();
    }

    //
    var no_item = !family_arr.length;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Family'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No relationship'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_add' },
                        _react2.default.createElement(_PfAboutAdd2.default, {
                            title_add: 'Add a family member',
                            item_obj: {
                                member: {},
                                relation: '',
                                permission: 0
                            },
                            ComponentEdit: _PfAboutFamilyEdit2.default,
                            handleCreate: handleCreate,
                            handle_API_C: _ProfileHandleAPI.handle_API_Family_C
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        family_arr.map(function (family_obj) {
                            return _react2.default.createElement(
                                'div',
                                { key: 'PfAboutFamily_' + family_obj.id },
                                _react2.default.createElement(_PfAboutFamilyItem2.default, {
                                    family_obj: family_obj
                                })
                            );
                        })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutFamily;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/family/edit/PfAboutFamilyEdit.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/family/edit/PfAboutFamilyEdit.js ***!
  \******************************************************************************************************/
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


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _relative = __webpack_require__(/*! ../../../../../../../../_data/profile/relative */ "./src/_data/profile/relative.js");

var _useInputSelectLoading = __webpack_require__(/*! ../../../../../../../../_hooks/useInputSelectLoading */ "./src/_hooks/useInputSelectLoading.js");

var _InputSelect = __webpack_require__(/*! ../../../../../../../../component/input/input_select/_main/InputSelect */ "./src/component/input/input_select/_main/InputSelect.js");

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _Select = __webpack_require__(/*! ../../../../../../../../component/input/select/Select */ "./src/component/input/select/Select.js");

var _Select2 = _interopRequireDefault(_Select);

var _PfAboutConfirm = __webpack_require__(/*! ../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

var _PfRelationOptionList = __webpack_require__(/*! ../option_list/_main/PfRelationOptionList */ "./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.js");

var _PfRelationOptionList2 = _interopRequireDefault(_PfRelationOptionList);

var _PfRelationSelectedList = __webpack_require__(/*! ../selected_list/_main/PfRelationSelectedList */ "./src/pages/user_profile/user_pages/about/right/relationships/family/selected_list/_main/PfRelationSelectedList.js");

var _PfRelationSelectedList2 = _interopRequireDefault(_PfRelationSelectedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
var multiple = false;

//
PfAboutFamilyEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutFamilyEdit(_ref) {
    var item_obj = _ref.item_obj,
        handleSave = _ref.handleSave,
        handleCancel = _ref.handleCancel;

    //
    var permission = item_obj.permission,
        member = item_obj.member,
        relation = item_obj.relation;

    //

    var _useState = (0, _react.useState)({
        cur_relation: relation || _relative.data_about_relation_arr[0],
        is_error: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        family_state = _useState2[0],
        setFamilyState = _useState2[1];

    var cur_relation = family_state.cur_relation,
        is_error = family_state.is_error;

    //

    var _useInputSelectLoadin = (0, _useInputSelectLoading.useInputSelectLoading)({
        initial_selected_arr: JSON.stringify(member) == '{}' ? [] : [member],
        handle_API_L: function handle_API_L(c_count) {
            return (0, _ProfileHandleAPI.handle_API_Family_L)(c_count);
        },
        multiple: multiple
    }),
        value_input = _useInputSelectLoadin.value_input,
        option_arr = _useInputSelectLoadin.option_arr,
        selected_arr = _useInputSelectLoadin.selected_arr,
        option_count = _useInputSelectLoadin.option_count,
        has_fetched = _useInputSelectLoadin.has_fetched,
        is_fetching = _useInputSelectLoadin.is_fetching,
        open_option = _useInputSelectLoadin.open_option,
        handleShowOption = _useInputSelectLoadin.handleShowOption,
        handleHideOption = _useInputSelectLoadin.handleHideOption,
        handleSelectOption = _useInputSelectLoadin.handleSelectOption,
        handleChangeInput = _useInputSelectLoadin.handleChangeInput,
        handleShowMore = _useInputSelectLoadin.handleShowMore,
        handleRemoveSelectedItem = _useInputSelectLoadin.handleRemoveSelectedItem,
        setInputSelectState = _useInputSelectLoadin.setInputSelectState;

    //


    function handleChange(key, value) {
        setFamilyState(_extends({}, family_state, _defineProperty({
            is_error: false
        }, key, value)));
    }

    //
    function handleChangeRelation(e) {
        handleChange('cur_relation', e.target.value);
    }

    function onSave(new_permission) {
        if (selected_arr.length || JSON.stringify(member) != '{}' && selected_arr.length == 0) {
            handleSave({
                permission: new_permission,
                member: selected_arr[0],
                relation: cur_relation
            });

            console.log(selected_arr);
        } else {
            handleChange('is_error', true);
        }
    }

    // console.log(open_option);
    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: is_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'Choose member'
            ),
            _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { className: 'PfAbout_input' },
                _react2.default.createElement(_InputSelect2.default, {
                    selected_item_arr: selected_arr,
                    option_item_arr: option_arr,
                    value: value_input,
                    multiple: multiple,
                    placeholder: 'Family member'
                    //
                    , ComponentOptionList: _PfRelationOptionList2.default,
                    ComponentSelectedList: _PfRelationSelectedList2.default
                    //
                    , selected_props: {},
                    option_props: {
                        has_fetched: has_fetched && selected_arr.length == 0,
                        open_option: open_option,
                        is_fetching: is_fetching,
                        count: option_count,
                        handleShowMore: handleShowMore
                    }
                    //
                    , handleFocusInput: handleShowOption,
                    handleBlurInput: handleHideOption
                    //
                    , handleChangeInput: handleChangeInput,
                    handleSelectOption: handleSelectOption,
                    handleRemoveSelectedItem: handleRemoveSelectedItem
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'PfAbout_input' },
                _react2.default.createElement(_Select2.default, {
                    options: _relative.data_about_relation_arr,
                    current_option: cur_relation,
                    onSelectOption: handleChangeRelation
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

exports.default = PfAboutFamilyEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/family/item/PfAboutFamilyItem.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/family/item/PfAboutFamilyItem.js ***!
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

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _PictureName = __webpack_require__(/*! ../../../../../../../../component/picture_name/pic_name/PictureName */ "./src/component/picture_name/pic_name/PictureName.js");

var _PictureName2 = _interopRequireDefault(_PictureName);

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutFamilyEdit = __webpack_require__(/*! ../edit/PfAboutFamilyEdit */ "./src/pages/user_profile/user_pages/about/right/relationships/family/edit/PfAboutFamilyEdit.js");

var _PfAboutFamilyEdit2 = _interopRequireDefault(_PfAboutFamilyEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
PfAboutFamilyItem.propTypes = {
    family_obj: _propTypes2.default.object
};

//

//

//
function PfAboutFamilyItem(props) {
    //
    var family_obj = props.family_obj;

    //

    function handleUpdateItemObj(data) {
        var member = data.member,
            relation = data.relation,
            permission = data.permission;


        family_obj.title = member ? _react2.default.createElement(_PictureName2.default, {
            user: member.friend,
            content: _react2.default.createElement(
                'div',
                { className: 'font-12px' },
                relation
            ),
            align_center: false
        }) : '';
        family_obj.member = member;
        family_obj.relation = relation;
        family_obj.permission = permission;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: family_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.family,
            ComponentEdit: _PfAboutFamilyEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_Family_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutFamilyItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.js":
/*!**********************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ScreenBlurShowMore = __webpack_require__(/*! ../../../../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore */ "./src/component/_screen/components/part/foot/ScreenBlurShowMore.js");

var _ScreenBlurShowMore2 = _interopRequireDefault(_ScreenBlurShowMore);

var _NoItemHasFetched = __webpack_require__(/*! ../../../../../../../../../component/some_div/no_item/NoItemHasFetched */ "./src/component/some_div/no_item/NoItemHasFetched.js");

var _NoItemHasFetched2 = _interopRequireDefault(_NoItemHasFetched);

var _PfRelationOptionItem = __webpack_require__(/*! ../item/PfRelationOptionItem */ "./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/item/PfRelationOptionItem.js");

var _PfRelationOptionItem2 = _interopRequireDefault(_PfRelationOptionItem);

__webpack_require__(/*! ./PfRelationOptionList.scss */ "./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PfRelationOptionList.propTypes = {};

//

//
function PfRelationOptionList(_ref) {
    var option_item_arr = _ref.option_item_arr,
        value = _ref.value,
        handleSelectOption = _ref.handleSelectOption,
        count = _ref.count,
        has_fetched = _ref.has_fetched,
        open_option = _ref.open_option,
        is_fetching = _ref.is_fetching,
        handleShowMore = _ref.handleShowMore;


    //
    return _react2.default.createElement(
        'div',
        {
            className: 'PfRelationOptionList scroll-thin box-shadow-1 bg-primary ' + (value || open_option ? '' : 'display-none')
        },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                option_item_arr.map(function (item, ix) {
                    return _react2.default.createElement(
                        'div',
                        { key: 'PfRelationOptionList_item_' + ix },
                        _react2.default.createElement(_PfRelationOptionItem2.default, {
                            item: item.friend,
                            ix: ix,
                            handleSelectOption: handleSelectOption
                        })
                    );
                })
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_NoItemHasFetched2.default, {
                has_fetched: has_fetched,
                no_item: option_item_arr.length == 0
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_ScreenBlurShowMore2.default, {
                is_show_more: count > option_item_arr.length,
                is_fetching: is_fetching,
                handleShowMore: handleShowMore
            })
        )
    );
}

exports.default = PfRelationOptionList;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/item/PfRelationOptionItem.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/item/PfRelationOptionItem.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CommonPropTypes = __webpack_require__(/*! ../../../../../../../../../_prop-types/_CommonPropTypes */ "./src/_prop-types/_CommonPropTypes.js");

var _PicNameContent = __webpack_require__(/*! ../../../../../../../../../component/picture_name/pic_name_content/PicNameContent */ "./src/component/picture_name/pic_name_content/PicNameContent.js");

var _PicNameContent2 = _interopRequireDefault(_PicNameContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfRelationOptionItem.propTypes = {
    item: _propTypes2.default.object,
    ix: _propTypes2.default.number,
    handleSelectOption: _propTypes2.default.func
};

//

//
function PfRelationOptionItem(_ref) {
    var item = _ref.item,
        ix = _ref.ix,
        handleSelectOption = _ref.handleSelectOption;

    //
    function onSelectOption() {
        handleSelectOption(ix);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'padding-8px hv-bg-blur' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PicNameContent2.default, { user: item, handleClick: onSelectOption })
        )
    );
}

exports.default = PfRelationOptionItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/family/selected_list/_main/PfRelationSelectedList.js":
/*!**************************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/family/selected_list/_main/PfRelationSelectedList.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PfRelationSelectedItem = __webpack_require__(/*! ../item/PfRelationSelectedItem */ "./src/pages/user_profile/user_pages/about/right/relationships/family/selected_list/item/PfRelationSelectedItem.js");

var _PfRelationSelectedItem2 = _interopRequireDefault(_PfRelationSelectedItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PfRelationSelectedList.propTypes = {};

//

//
function PfRelationSelectedList(_ref) {
    var selected_item_arr = _ref.selected_item_arr,
        handleRemoveSelectedItem = _ref.handleRemoveSelectedItem;

    return _react2.default.createElement(
        'div',
        { className: 'PfRelationSelectedList' },
        selected_item_arr.map(function (item, ix) {
            return _react2.default.createElement(
                'div',
                { key: 'PfRelationSelectedList_item_' + (item.id || ix) },
                _react2.default.createElement(_PfRelationSelectedItem2.default, {
                    item: item.friend,
                    ix: ix,
                    handleRemoveSelectedItem: handleRemoveSelectedItem
                })
            );
        })
    );
}

exports.default = PfRelationSelectedList;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/family/selected_list/item/PfRelationSelectedItem.js":
/*!*************************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/family/selected_list/item/PfRelationSelectedItem.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PicNameContent = __webpack_require__(/*! ../../../../../../../../../component/picture_name/pic_name_content/PicNameContent */ "./src/component/picture_name/pic_name_content/PicNameContent.js");

var _PicNameContent2 = _interopRequireDefault(_PicNameContent);

var _IconsArrow = __webpack_require__(/*! ../../../../../../../../../_icons_svg/icons_arrow/IconsArrow */ "./src/_icons_svg/icons_arrow/IconsArrow.js");

var _IconsArrow2 = _interopRequireDefault(_IconsArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfRelationSelectedItem.propTypes = {
    item: _propTypes2.default.object,
    ix: _propTypes2.default.number,
    handleRemoveSelectedItem: _propTypes2.default.func
};

//
function PfRelationSelectedItem(_ref) {
    var item = _ref.item,
        ix = _ref.ix,
        handleRemoveSelectedItem = _ref.handleRemoveSelectedItem;

    //
    function onRemoveSelectedItem() {
        handleRemoveSelectedItem(ix);
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'padding-8px hv-bg-blur' },
        _react2.default.createElement(
            'div',
            { className: 'flex-between-center' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PicNameContent2.default, { user: item })
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    {
                        className: 'close-icon-small brs-50 cursor-pointer hv-opacity',
                        onClick: onRemoveSelectedItem
                    },
                    _react2.default.createElement(_IconsArrow2.default, { y: 400, size_icon: '1rem' })
                )
            )
        )
    );
}

exports.default = PfRelationSelectedItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/relationship/_main/PfAboutRelationship.js":
/*!***************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/relationship/_main/PfAboutRelationship.js ***!
  \***************************************************************************************************************/
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

var _PfAboutRelationshipEdit = __webpack_require__(/*! ../edit/PfAboutRelationshipEdit */ "./src/pages/user_profile/user_pages/about/right/relationships/relationship/edit/PfAboutRelationshipEdit.js");

var _PfAboutRelationshipEdit2 = _interopRequireDefault(_PfAboutRelationshipEdit);

var _PfAboutRelationshipItem = __webpack_require__(/*! ../item/PfAboutRelationshipItem */ "./src/pages/user_profile/user_pages/about/right/relationships/relationship/item/PfAboutRelationshipItem.js");

var _PfAboutRelationshipItem2 = _interopRequireDefault(_PfAboutRelationshipItem);

var _AboutNoItem = __webpack_require__(/*! ../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutRelationship.propTypes = {
    relationship_obj: _propTypes2.default.object
};

//

//
function PfAboutRelationship(_ref) {
    var relationship_obj = _ref.relationship_obj,
        has_fetched = _ref.has_fetched;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var relationship = data.relationship,
            permission = data.permission;


        relationship_obj.title = relationship;
        relationship_obj.relationship = relationship;
        relationship_obj.permission = permission;
        forceUpdate();
    }

    //
    function handleUpdateItemObj(data) {
        var relationship = data.relationship,
            permission = data.permission;


        relationship_obj.title = relationship;
        relationship_obj.permission = permission;
        relationship_obj.relationship = relationship;

        forceUpdate();
    }

    //
    var no_item = !relationship_obj.title;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Relationship'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No relationship'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'PfAbout_add ' + (no_item ? '' : 'display-none')
                        },
                        _react2.default.createElement(_PfAboutAdd2.default, {
                            title_add: 'Add a relationship',
                            item_obj: {
                                relationship: '',
                                permission: 0
                            },
                            ComponentEdit: _PfAboutRelationshipEdit2.default,
                            handleCreate: handleCreate,
                            handle_API_C: _ProfileHandleAPI.handle_API_Relationship_U
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_PfAboutRelationshipItem2.default, {
                            relationship_obj: relationship_obj,
                            handleUpdateItemObj: handleUpdateItemObj
                        })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutRelationship;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/relationship/edit/PfAboutRelationshipEdit.js":
/*!******************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/relationship/edit/PfAboutRelationshipEdit.js ***!
  \******************************************************************************************************************/
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

var _Select = __webpack_require__(/*! ../../../../../../../../component/input/select/Select */ "./src/component/input/select/Select.js");

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 
var relationship_arr = ['', 'Single', 'Dating', 'Complex', 'Married'];

//
PfAboutRelationshipEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutRelationshipEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        relationship = item_obj.relationship;

    //

    var _useState = (0, _react.useState)(relationship),
        _useState2 = _slicedToArray(_useState, 2),
        cur_relationship = _useState2[0],
        setCurRelationship = _useState2[1];

    //


    function handleChangeRelationship(e) {
        setCurRelationship(e.target.value);
    }

    // 
    function onSave(new_permission) {
        handleSave({
            permission: new_permission,
            relationship: cur_relationship
        });
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
                _react2.default.createElement(_Select2.default, {
                    options: relationship_arr,
                    current_option: cur_relationship,
                    onSelectOption: handleChangeRelationship
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

exports.default = PfAboutRelationshipEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/relationship/item/PfAboutRelationshipItem.js":
/*!******************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/relationship/item/PfAboutRelationshipItem.js ***!
  \******************************************************************************************************************/
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

var _PfAboutRelationshipEdit = __webpack_require__(/*! ../edit/PfAboutRelationshipEdit */ "./src/pages/user_profile/user_pages/about/right/relationships/relationship/edit/PfAboutRelationshipEdit.js");

var _PfAboutRelationshipEdit2 = _interopRequireDefault(_PfAboutRelationshipEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutRelationshipItem.propTypes = {
    relationship_obj: _propTypes2.default.object
};

//

//
function PfAboutRelationshipItem(_ref) {
    var relationship_obj = _ref.relationship_obj,
        handleUpdateItemObj = _ref.handleUpdateItemObj;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AboutRowItemEdit2.default, {
                item_obj: relationship_obj,
                Icon: _GroupIconProfileAbout.IconsProfileAbout.relationship
                // label="Relationship"
                , ComponentEdit: _PfAboutRelationshipEdit2.default,
                handle_API_U: _ProfileHandleAPI.handle_API_Relationship_U,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutRelationshipItem;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.scss":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.scss ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".PfRelationOptionList {\n  max-height: calc(100vh - 15rem);\n  overflow-y: auto;\n}", "",{"version":3,"sources":["webpack://./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.scss"],"names":[],"mappings":"AAAA;EACI,+BAAA;EACA,gBAAA;AACJ","sourcesContent":[".PfRelationOptionList {\r\n    max-height: calc(100vh - 15rem);\r\n    overflow-y: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.scss ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfRelationOptionList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PfRelationOptionList.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/relationships/family/option_list/_main/PfRelationOptionList.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfRelationOptionList_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfRelationOptionList_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_user_profile_user_pages_about_right_relationships__main_PfAboutRelation_js.js.map