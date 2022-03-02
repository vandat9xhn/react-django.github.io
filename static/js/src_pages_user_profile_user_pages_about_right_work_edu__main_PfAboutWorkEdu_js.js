(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_about_right_work_edu__main_PfAboutWorkEdu_js"],{

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/_main/PfAboutWorkEdu.js":
/*!****************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/_main/PfAboutWorkEdu.js ***!
  \****************************************************************************************/
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

var _PfAboutWork = __webpack_require__(/*! ../work/_main/PfAboutWork */ "./src/pages/user_profile/user_pages/about/right/work_edu/work/_main/PfAboutWork.js");

var _PfAboutWork2 = _interopRequireDefault(_PfAboutWork);

var _PfAboutUniversity = __webpack_require__(/*! ../university/_main/PfAboutUniversity */ "./src/pages/user_profile/user_pages/about/right/work_edu/university/_main/PfAboutUniversity.js");

var _PfAboutUniversity2 = _interopRequireDefault(_PfAboutUniversity);

var _PfAboutSchool = __webpack_require__(/*! ../high_school/_main/PfAboutSchool */ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/_main/PfAboutSchool.js");

var _PfAboutSchool2 = _interopRequireDefault(_PfAboutSchool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PfAboutWorkEdu.propTypes = {};

//
function PfAboutWorkEdu(props) {

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
                                work_arr: about_obj.work_arr,
                                school_arr: about_obj.school_arr,
                                university_arr: about_obj.university_arr,

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

    var _useState = (0, _react.useState)((0, _about.initial_work_edu_state)()),
        _useState2 = _slicedToArray(_useState, 2),
        about_state = _useState2[0],
        setAboutState = _useState2[1];

    var school_arr = about_state.school_arr,
        university_arr = about_state.university_arr,
        work_arr = about_state.work_arr,
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
            _react2.default.createElement(_PfAboutWork2.default, { work_arr: work_arr, has_fetched: has_fetched })
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutUniversity2.default, {
                university_arr: university_arr,
                has_fetched: has_fetched
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutSchool2.default, {
                school_arr: school_arr,
                has_fetched: has_fetched
            })
        )
    );
}

exports.default = PfAboutWorkEdu;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/_main/PfAboutSchool.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/high_school/_main/PfAboutSchool.js ***!
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

var _PfAboutSchoolEdit = __webpack_require__(/*! ../edit/PfAboutSchoolEdit */ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/edit/PfAboutSchoolEdit.js");

var _PfAboutSchoolEdit2 = _interopRequireDefault(_PfAboutSchoolEdit);

var _PfAboutSchoolItem = __webpack_require__(/*! ../item/PfAboutSchoolItem */ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/item/PfAboutSchoolItem.js");

var _PfAboutSchoolItem2 = _interopRequireDefault(_PfAboutSchoolItem);

var _AboutNoItem = __webpack_require__(/*! ../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutSchool.propTypes = {
    school_arr: _propTypes2.default.array
};

//

//
function PfAboutSchool(_ref) {
    var school_arr = _ref.school_arr,
        has_fetched = _ref.has_fetched;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var school = data.school,
            permission = data.permission;


        school_arr.push({
            id: 101 + school_arr.length,
            title: school,
            school: school,
            permission: permission
        });
        forceUpdate();
    }

    // 
    var no_item = !school_arr.length;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'High School'
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
                            title_add: 'Add a high school',
                            item_obj: {
                                school: '',
                                permission: 0
                            },
                            ComponentEdit: _PfAboutSchoolEdit2.default,
                            handleCreate: handleCreate,
                            handle_API_C: _ProfileHandleAPI.handle_API_School_C
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        school_arr.map(function (school_obj) {
                            return _react2.default.createElement(
                                'div',
                                { key: 'PfAboutSchool_' + school_obj.id },
                                _react2.default.createElement(_PfAboutSchoolItem2.default, {
                                    school_obj: school_obj
                                })
                            );
                        })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutSchool;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/edit/PfAboutSchoolEdit.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/high_school/edit/PfAboutSchoolEdit.js ***!
  \******************************************************************************************************/
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
PfAboutSchoolEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutSchoolEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        school = item_obj.school;

    //

    var _useState = (0, _react.useState)(school),
        _useState2 = _slicedToArray(_useState, 2),
        cur_school = _useState2[0],
        setCurSchool = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        school_error = _useState4[0],
        setSchoolError = _useState4[1];

    //


    function handleChangeSchool(e) {
        setCurSchool(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_school) || school != '' && cur_school == '') {
            handleSave({
                permission: new_permission,
                school: cur_school.trim()
            });
        } else {
            setSchoolError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: school_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'School must have at least 2 letters!'
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
                    name: 'school',
                    value: cur_school,
                    type: 'text',
                    placeholder: 'School',
                    handleChange: handleChangeSchool
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

exports.default = PfAboutSchoolEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/item/PfAboutSchoolItem.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/high_school/item/PfAboutSchoolItem.js ***!
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

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutSchoolEdit = __webpack_require__(/*! ../edit/PfAboutSchoolEdit */ "./src/pages/user_profile/user_pages/about/right/work_edu/high_school/edit/PfAboutSchoolEdit.js");

var _PfAboutSchoolEdit2 = _interopRequireDefault(_PfAboutSchoolEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutSchoolItem.propTypes = {
    school_obj: _propTypes2.default.object
};

//

//
function PfAboutSchoolItem(props) {
    //
    var school_obj = props.school_obj;

    //

    function handleUpdateItemObj(data) {
        var school = data.school,
            permission = data.permission;


        school_obj.title = school;
        school_obj.permission = permission;
        school_obj.school = school;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: school_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.school,
            ComponentEdit: _PfAboutSchoolEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_School_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutSchoolItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/university/_main/PfAboutUniversity.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/university/_main/PfAboutUniversity.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutUniversityEdit = __webpack_require__(/*! ../edit/PfAboutUniversityEdit */ "./src/pages/user_profile/user_pages/about/right/work_edu/university/edit/PfAboutUniversityEdit.js");

var _PfAboutUniversityEdit2 = _interopRequireDefault(_PfAboutUniversityEdit);

var _PfAboutUniversityItem = __webpack_require__(/*! ../item/PfAboutUniversityItem */ "./src/pages/user_profile/user_pages/about/right/work_edu/university/item/PfAboutUniversityItem.js");

var _PfAboutUniversityItem2 = _interopRequireDefault(_PfAboutUniversityItem);

var _AboutNoItem = __webpack_require__(/*! ../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutUniversity.propTypes = {
    university_arr: _propTypes2.default.array
};

//

//
function PfAboutUniversity(_ref) {
    var university_arr = _ref.university_arr,
        has_fetched = _ref.has_fetched;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var university = data.university,
            permission = data.permission;


        university_arr.push({
            id: 101 + university_arr.length,
            title: university,
            university: university,
            permission: permission
        });
        forceUpdate();
    }

    // 
    var no_item = !university_arr.length;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'University'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No university to show'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_add' },
                        _react2.default.createElement(_PfAboutAdd2.default, {
                            title_add: 'Add a University',
                            item_obj: {
                                university: '',
                                permission: 0
                            },
                            ComponentEdit: _PfAboutUniversityEdit2.default,
                            handleCreate: handleCreate,
                            handle_API_C: _ProfileHandleAPI.handle_API_University_C
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        university_arr.map(function (university_obj) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: 'PfAboutUniversity_' + university_obj.id
                                },
                                _react2.default.createElement(_PfAboutUniversityItem2.default, {
                                    university_obj: university_obj
                                })
                            );
                        })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutUniversity;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/university/edit/PfAboutUniversityEdit.js":
/*!*********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/university/edit/PfAboutUniversityEdit.js ***!
  \*********************************************************************************************************/
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
PfAboutUniversityEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutUniversityEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        university = item_obj.university;

    //

    var _useState = (0, _react.useState)(university),
        _useState2 = _slicedToArray(_useState, 2),
        cur_university = _useState2[0],
        setCurUniversity = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        university_error = _useState4[0],
        setUniversityError = _useState4[1];

    //


    function handleChangeUniversity(e) {
        setCurUniversity(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_university) || university != '' && cur_university == '') {
            handleSave({
                permission: new_permission,
                university: cur_university.trim()
            });
        } else {
            setUniversityError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: university_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'University must have at least 2 letters!'
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
                    name: 'university',
                    value: cur_university,
                    type: 'text',
                    placeholder: 'University',
                    handleChange: handleChangeUniversity
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

exports.default = PfAboutUniversityEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/university/item/PfAboutUniversityItem.js":
/*!*********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/university/item/PfAboutUniversityItem.js ***!
  \*********************************************************************************************************/
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

var _PfAboutUniversityEdit = __webpack_require__(/*! ../edit/PfAboutUniversityEdit */ "./src/pages/user_profile/user_pages/about/right/work_edu/university/edit/PfAboutUniversityEdit.js");

var _PfAboutUniversityEdit2 = _interopRequireDefault(_PfAboutUniversityEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutUniversityItem.propTypes = {
    university_obj: _propTypes2.default.object
};

//

//
function PfAboutUniversityItem(props) {
    //
    var university_obj = props.university_obj;

    //

    function handleUpdateItemObj(data) {
        var university = data.university,
            permission = data.permission;


        university_obj.title = university;
        university_obj.permission = permission;
        university_obj.university = university;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: university_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.university,
            ComponentEdit: _PfAboutUniversityEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_University_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutUniversityItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/work/_main/PfAboutWork.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/work/_main/PfAboutWork.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutWorkEdit = __webpack_require__(/*! ../edit/PfAboutWorkEdit */ "./src/pages/user_profile/user_pages/about/right/work_edu/work/edit/PfAboutWorkEdit.js");

var _PfAboutWorkEdit2 = _interopRequireDefault(_PfAboutWorkEdit);

var _PfAboutWorkItem = __webpack_require__(/*! ../item/PfAboutWorkItem */ "./src/pages/user_profile/user_pages/about/right/work_edu/work/item/PfAboutWorkItem.js");

var _PfAboutWorkItem2 = _interopRequireDefault(_PfAboutWorkItem);

var _AboutNoItem = __webpack_require__(/*! ../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutWork.propTypes = {
    work_arr: _propTypes2.default.array
};

//

//
function PfAboutWork(_ref) {
    var work_arr = _ref.work_arr,
        has_fetched = _ref.has_fetched;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var work = data.work,
            permission = data.permission;


        work_arr.push({
            id: 101 + work_arr.length,
            title: work,
            work: work,
            permission: permission
        });
        forceUpdate();
    }

    //
    var no_item = !work_arr.length;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Work'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No work to show'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_add' },
                        _react2.default.createElement(_PfAboutAdd2.default, {
                            title_add: 'Add a Work',
                            item_obj: {
                                work: '',
                                permission: 0
                            },
                            ComponentEdit: _PfAboutWorkEdit2.default,
                            handleCreate: handleCreate,
                            handle_API_C: _ProfileHandleAPI.handle_API_Work_C
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        work_arr.map(function (work_obj) {
                            return _react2.default.createElement(
                                'div',
                                { key: 'PfAboutWork_' + work_obj.id },
                                _react2.default.createElement(_PfAboutWorkItem2.default, { work_obj: work_obj })
                            );
                        })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutWork;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/work/edit/PfAboutWorkEdit.js":
/*!*********************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/work/edit/PfAboutWorkEdit.js ***!
  \*********************************************************************************************/
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
PfAboutWorkEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutWorkEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        work = item_obj.work;

    //

    var _useState = (0, _react.useState)(work),
        _useState2 = _slicedToArray(_useState, 2),
        cur_work = _useState2[0],
        setCurWork = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        work_error = _useState4[0],
        setWorkError = _useState4[1];

    //


    function handleChangeWork(e) {
        setCurWork(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_work) || work != '' && cur_work == '') {
            handleSave({
                permission: new_permission,
                work: cur_work.trim()
            });
        } else {
            setWorkError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: work_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'Work must have at least 2 letters!'
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
                    name: 'work',
                    value: cur_work,
                    type: 'text',
                    placeholder: 'Work',
                    handleChange: handleChangeWork
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

exports.default = PfAboutWorkEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/work_edu/work/item/PfAboutWorkItem.js":
/*!*********************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/work_edu/work/item/PfAboutWorkItem.js ***!
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

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutWorkEdit = __webpack_require__(/*! ../edit/PfAboutWorkEdit */ "./src/pages/user_profile/user_pages/about/right/work_edu/work/edit/PfAboutWorkEdit.js");

var _PfAboutWorkEdit2 = _interopRequireDefault(_PfAboutWorkEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutWorkItem.propTypes = {
    work_obj: _propTypes2.default.object
};

//

//
function PfAboutWorkItem(props) {
    //
    var work_obj = props.work_obj;

    //

    function handleUpdateItemObj(data) {
        var work = data.work,
            permission = data.permission;


        work_obj.title = work;
        work_obj.permission = permission;
        work_obj.work = work;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: work_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.work,
            ComponentEdit: _PfAboutWorkEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_Work_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutWorkItem;

/***/ })

}]);
//# sourceMappingURL=src_pages_user_profile_user_pages_about_right_work_edu__main_PfAboutWorkEdu_js.js.map