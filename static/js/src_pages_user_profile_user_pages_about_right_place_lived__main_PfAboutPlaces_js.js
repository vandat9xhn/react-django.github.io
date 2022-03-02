(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_about_right_place_lived__main_PfAboutPlaces_js"],{

/***/ "./src/pages/user_profile/user_pages/about/right/place_lived/_main/PfAboutPlaces.js":
/*!******************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/place_lived/_main/PfAboutPlaces.js ***!
  \******************************************************************************************/
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

var _PfAboutPlace = __webpack_require__(/*! ../place/_main/PfAboutPlace */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/_main/PfAboutPlace.js");

var _PfAboutPlace2 = _interopRequireDefault(_PfAboutPlace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PfAboutPlaces.propTypes = {};

//
function PfAboutPlaces(props) {

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
                                town_arr: about_obj.town_arr,
                                city_arr: about_obj.city_arr,

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

    var _useState = (0, _react.useState)((0, _about.initial_place_state)()),
        _useState2 = _slicedToArray(_useState, 2),
        about_state = _useState2[0],
        setAboutState = _useState2[1];

    var town_arr = about_state.town_arr,
        city_arr = about_state.city_arr,
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
            _react2.default.createElement(_PfAboutPlace2.default, {
                town_arr: town_arr,
                city_arr: city_arr,
                has_fetched: has_fetched
            })
        )
    );
}

exports.default = PfAboutPlaces;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/place_lived/place/_main/PfAboutPlace.js":
/*!***********************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/place_lived/place/_main/PfAboutPlace.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PfAboutTown = __webpack_require__(/*! ../town/_main/PfAboutTown */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/town/_main/PfAboutTown.js");

var _PfAboutTown2 = _interopRequireDefault(_PfAboutTown);

var _PfAboutCity = __webpack_require__(/*! ../city/_main/PfAboutCity */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/city/_main/PfAboutCity.js");

var _PfAboutCity2 = _interopRequireDefault(_PfAboutCity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutPlace.propTypes = {};

//
function PfAboutPlace(_ref) {
    var town_arr = _ref.town_arr,
        city_arr = _ref.city_arr,
        has_fetched = _ref.has_fetched;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutTown2.default, { town_arr: town_arr, has_fetched: has_fetched })
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutCity2.default, { city_arr: city_arr, has_fetched: has_fetched })
        )
    );
}

exports.default = PfAboutPlace;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/place_lived/place/city/_main/PfAboutCity.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/place_lived/place/city/_main/PfAboutCity.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutCityEdit = __webpack_require__(/*! ../edit/PfAboutCityEdit */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/city/edit/PfAboutCityEdit.js");

var _PfAboutCityEdit2 = _interopRequireDefault(_PfAboutCityEdit);

var _PfAboutCityItem = __webpack_require__(/*! ../item/PfAboutCityItem */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/city/item/PfAboutCityItem.js");

var _PfAboutCityItem2 = _interopRequireDefault(_PfAboutCityItem);

var _AboutNoItem = __webpack_require__(/*! ../../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutCity.propTypes = {
    city_arr: _propTypes2.default.array
};

//

//
function PfAboutCity(_ref) {
    var city_arr = _ref.city_arr,
        has_fetched = _ref.has_fetched;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var city = data.city,
            permission = data.permission;


        city_arr.push({
            id: 101 + city_arr.length,
            title: city,
            city: city,
            permission: permission
        });
        forceUpdate();
    }

    //
    var no_item = !city_arr.length;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'City'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No city to show'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_add' },
                        _react2.default.createElement(_PfAboutAdd2.default, {
                            title_add: 'Add a City',
                            item_obj: {
                                city: '',
                                permission: 0
                            },
                            ComponentEdit: _PfAboutCityEdit2.default,
                            handleCreate: handleCreate,
                            handle_API_C: _ProfileHandleAPI.handle_API_UserCity_C
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        city_arr.map(function (city_obj) {
                            return _react2.default.createElement(
                                'div',
                                { key: 'PfAboutCity_' + city_obj.id },
                                _react2.default.createElement(_PfAboutCityItem2.default, { city_obj: city_obj })
                            );
                        })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutCity;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/place_lived/place/city/edit/PfAboutCityEdit.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/place_lived/place/city/edit/PfAboutCityEdit.js ***!
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

var _PfAboutConfirm = __webpack_require__(/*! ../../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

var _InputNotValid = __webpack_require__(/*! ../../../../../../../../../component/input/input_not_valid/InputNotValid */ "./src/component/input/input_not_valid/InputNotValid.js");

var _InputNotValid2 = _interopRequireDefault(_InputNotValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PfAboutCityEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutCityEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        city = item_obj.city;

    //

    var _useState = (0, _react.useState)(city),
        _useState2 = _slicedToArray(_useState, 2),
        cur_city = _useState2[0],
        setCurCity = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        city_error = _useState4[0],
        setCityError = _useState4[1];

    //


    function handleChangeCity(e) {
        setCurCity(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_city) || city != '' && cur_city == '') {
            handleSave({
                permission: new_permission,
                city: cur_city.trim()
            });
        } else {
            setCityError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: city_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'City must have at least 2 letters!'
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
                    name: 'city',
                    value: cur_city,
                    type: 'text',
                    placeholder: 'City',
                    handleChange: handleChangeCity
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

exports.default = PfAboutCityEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/place_lived/place/city/item/PfAboutCityItem.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/place_lived/place/city/item/PfAboutCityItem.js ***!
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

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutCityEdit = __webpack_require__(/*! ../edit/PfAboutCityEdit */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/city/edit/PfAboutCityEdit.js");

var _PfAboutCityEdit2 = _interopRequireDefault(_PfAboutCityEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutCityItem.propTypes = {
    city_obj: _propTypes2.default.object
};

//

//
function PfAboutCityItem(props) {
    //
    var city_obj = props.city_obj;

    //

    function handleUpdateItemObj(data) {
        var city = data.city,
            permission = data.permission;


        city_obj.title = city;
        city_obj.permission = permission;
        city_obj.city = city;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: city_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.city,
            ComponentEdit: _PfAboutCityEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_UserCity_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutCityItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/place_lived/place/town/_main/PfAboutTown.js":
/*!***************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/place_lived/place/town/_main/PfAboutTown.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutTownEdit = __webpack_require__(/*! ../edit/PfAboutTownEdit */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/town/edit/PfAboutTownEdit.js");

var _PfAboutTownEdit2 = _interopRequireDefault(_PfAboutTownEdit);

var _PfAboutTownItem = __webpack_require__(/*! ../item/PfAboutTownItem */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/town/item/PfAboutTownItem.js");

var _PfAboutTownItem2 = _interopRequireDefault(_PfAboutTownItem);

var _AboutNoItem = __webpack_require__(/*! ../../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutTown.propTypes = {
    town_arr: _propTypes2.default.array
};

//

//
function PfAboutTown(_ref) {
    var town_arr = _ref.town_arr,
        has_fetched = _ref.has_fetched;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var town = data.town,
            permission = data.permission;


        town_arr.push({
            id: 101 + town_arr.length,
            title: town,
            town: town,
            permission: permission
        });
        forceUpdate();
    }

    //
    var no_item = !town_arr.length;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Town'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No town to show'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_add' },
                        _react2.default.createElement(_PfAboutAdd2.default, {
                            title_add: 'Add a Town',
                            item_obj: {
                                town: '',
                                permission: 0
                            },
                            ComponentEdit: _PfAboutTownEdit2.default,
                            handleCreate: handleCreate,
                            handle_API_C: _ProfileHandleAPI.handle_API_Town_C
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        town_arr.map(function (town_obj) {
                            return _react2.default.createElement(
                                'div',
                                { key: 'PfAboutTown_' + town_obj.id },
                                _react2.default.createElement(_PfAboutTownItem2.default, { town_obj: town_obj })
                            );
                        })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutTown;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/place_lived/place/town/edit/PfAboutTownEdit.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/place_lived/place/town/edit/PfAboutTownEdit.js ***!
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

var _PfAboutConfirm = __webpack_require__(/*! ../../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

var _InputNotValid = __webpack_require__(/*! ../../../../../../../../../component/input/input_not_valid/InputNotValid */ "./src/component/input/input_not_valid/InputNotValid.js");

var _InputNotValid2 = _interopRequireDefault(_InputNotValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PfAboutTownEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutTownEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        town = item_obj.town;

    //

    var _useState = (0, _react.useState)(town),
        _useState2 = _slicedToArray(_useState, 2),
        cur_town = _useState2[0],
        setCurTown = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        town_error = _useState4[0],
        setTownError = _useState4[1];

    //


    function handleChangeTown(e) {
        setCurTown(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_town) || town != '' && cur_town == '') {
            handleSave({
                permission: new_permission,
                town: cur_town.trim()
            });
        } else {
            setTownError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: town_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'Town must have at least 2 letters!'
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
                    name: 'town',
                    value: cur_town,
                    type: 'text',
                    placeholder: 'Home town',
                    handleChange: handleChangeTown
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

exports.default = PfAboutTownEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/place_lived/place/town/item/PfAboutTownItem.js":
/*!******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/place_lived/place/town/item/PfAboutTownItem.js ***!
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

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutTownEdit = __webpack_require__(/*! ../edit/PfAboutTownEdit */ "./src/pages/user_profile/user_pages/about/right/place_lived/place/town/edit/PfAboutTownEdit.js");

var _PfAboutTownEdit2 = _interopRequireDefault(_PfAboutTownEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutTownItem.propTypes = {
    town_obj: _propTypes2.default.object
};

//

//
function PfAboutTownItem(props) {
    //
    var town_obj = props.town_obj;

    //

    function handleUpdateItemObj(data) {
        var town = data.town,
            permission = data.permission;


        town_obj.title = town;
        town_obj.permission = permission;
        town_obj.town = town;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: town_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.town,
            ComponentEdit: _PfAboutTownEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_Town_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutTownItem;

/***/ })

}]);
//# sourceMappingURL=src_pages_user_profile_user_pages_about_right_place_lived__main_PfAboutPlaces_js.js.map