(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_about_right_contact_basis__main_PfAboutContactBasis_js"],{

/***/ "./src/_data/profile/language.js":
/*!***************************************!*\
  !*** ./src/_data/profile/language.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
//
var data_profile_lang_arr = exports.data_profile_lang_arr = ['Vietnamese', 'English', 'Italian', 'French', 'Germany', 'Thai', 'Chinese', 'Lao'];

/***/ }),

/***/ "./src/_hooks/useInputSelect.js":
/*!**************************************!*\
  !*** ./src/_hooks/useInputSelect.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.useInputSelect = useInputSelect;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
function useInputSelect(_ref) {
    var all_data_arr = _ref.all_data_arr,
        initial_data_str = _ref.initial_data_str,
        _ref$multiple = _ref.multiple,
        multiple = _ref$multiple === undefined ? true : _ref$multiple,
        _ref$delimiter = _ref.delimiter,
        delimiter = _ref$delimiter === undefined ? ',' : _ref$delimiter;

    //
    var _useState = (0, _react.useState)({
        cur_data_arr: initial_data_str ? initial_data_str.split(delimiter) : [],
        value_input: '',
        option_data_arr: all_data_arr.filter(function (item) {
            return !initial_data_str.includes(item);
        })
    }),
        _useState2 = _slicedToArray(_useState, 2),
        data_item_edit_state = _useState2[0],
        setLangEditState = _useState2[1];

    var cur_data_arr = data_item_edit_state.cur_data_arr,
        value_input = data_item_edit_state.value_input,
        option_data_arr = data_item_edit_state.option_data_arr;

    //

    function handleChangeInput(e) {
        var new_value = e.target.value;
        setLangEditState(_extends({}, data_item_edit_state, {
            value_input: new_value,
            option_data_arr: all_data_arr.filter(function (item) {
                return !cur_data_arr.includes(item);
            }).filter(function (item) {
                return item.toLowerCase().includes(new_value.toLowerCase());
            })
        }));
    }

    //
    function handleSelectOption(new_ix) {
        var new_data_item_arr = multiple ? [].concat(_toConsumableArray(cur_data_arr), [option_data_arr[new_ix]]) : [option_data_arr[new_ix]];

        !cur_data_arr.includes(option_data_arr[new_ix]) && setLangEditState(_extends({}, data_item_edit_state, {
            cur_data_arr: new_data_item_arr,
            value_input: '',
            option_data_arr: (multiple ? option_data_arr : all_data_arr).filter(function (_, ix) {
                return ix != new_ix;
            })
        }));
    }

    //
    function handleRemoveSelectedItem(remove_ix) {
        setLangEditState(_extends({}, data_item_edit_state, {
            cur_data_arr: cur_data_arr.filter(function (_, ix) {
                return ix != remove_ix;
            }),
            option_data_arr: [].concat(_toConsumableArray(option_data_arr), [cur_data_arr[remove_ix]]).filter(function (item) {
                return item.toLocaleLowerCase().includes(value_input.toLocaleLowerCase());
            })
        }));
    }

    //
    return {
        cur_data_arr: cur_data_arr,
        option_data_arr: option_data_arr,
        value_input: value_input,

        handleChangeInput: handleChangeInput,
        handleSelectOption: handleSelectOption,
        handleRemoveSelectedItem: handleRemoveSelectedItem
    };
}

/***/ }),

/***/ "./src/_some_function/joinArrayWithAnd.js":
/*!************************************************!*\
  !*** ./src/_some_function/joinArrayWithAnd.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.joinArrayWithAnd = joinArrayWithAnd;
//
function joinArrayWithAnd() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [''];

    return arr.length == 1 ? arr[0] : arr.slice(0, arr.length - 1).join(', ') + ' and ' + arr.slice(-1)[0];
}

/***/ }),

/***/ "./src/component/input/input_not_valid_pass/InputNotValidPass.js":
/*!***********************************************************************!*\
  !*** ./src/component/input/input_not_valid_pass/InputNotValidPass.js ***!
  \***********************************************************************/
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

var _IconsEye = __webpack_require__(/*! ../../../_icons_svg/icons_eye/IconsEye */ "./src/_icons_svg/icons_eye/IconsEye.js");

var _IconsEye2 = _interopRequireDefault(_IconsEye);

var _InputNotValid = __webpack_require__(/*! ../input_not_valid/InputNotValid */ "./src/component/input/input_not_valid/InputNotValid.js");

var _InputNotValid2 = _interopRequireDefault(_InputNotValid);

__webpack_require__(/*! ./InputNotValidPass.scss */ "./src/component/input/input_not_valid_pass/InputNotValidPass.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
InputNotValidPass.propTypes = {
    password: _propTypes2.default.string,
    name: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    max_length: _propTypes2.default.number,

    handleChange: _propTypes2.default.func
};

InputNotValidPass.defaultProps = {
    placeholder: 'Password',
    max_length: 100
};

//
function InputNotValidPass(_ref) {
    var password = _ref.password,
        name = _ref.name,
        placeholder = _ref.placeholder,
        max_length = _ref.max_length,
        handleChange = _ref.handleChange;

    //
    var _useState = (0, _react.useState)('password'),
        _useState2 = _slicedToArray(_useState, 2),
        type = _useState2[0],
        setType = _useState2[1];

    //


    function toggleType() {
        setType(type == 'password' ? 'text' : 'password');
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'InputNotValidPass' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_InputNotValid2.default, {
                name: name,
                type: type,
                placeholder: placeholder,
                max_length: max_length
                //
                , value: password,
                handleChange: handleChange
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'InputNotValidPass_eye' },
            _react2.default.createElement(
                'div',
                {
                    className: 'InputNotValidPass_eye_contain hv-opacity',
                    onClick: toggleType
                },
                _react2.default.createElement(_IconsEye2.default, { x: 200, y: 200, close_eye: type == 'password' })
            )
        )
    );
}

exports.default = InputNotValidPass;

/***/ }),

/***/ "./src/component/input/radio_custom/item/RadioItemCustom.js":
/*!******************************************************************!*\
  !*** ./src/component/input/radio_custom/item/RadioItemCustom.js ***!
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

var _FlexDiv = __webpack_require__(/*! ../../../some_div/flex_div/FlexDiv */ "./src/component/some_div/flex_div/FlexDiv.js");

var _FlexDiv2 = _interopRequireDefault(_FlexDiv);

var _RadioCustom = __webpack_require__(/*! ../RadioCustom */ "./src/component/input/radio_custom/RadioCustom.js");

var _RadioCustom2 = _interopRequireDefault(_RadioCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
RadioItemCustom.propTypes = {
    title: _propTypes2.default.string,
    ix: _propTypes2.default.number,
    active_ix: _propTypes2.default.number,
    handleChoose: _propTypes2.default.func
};

//

//
function RadioItemCustom(_ref) {
    var title = _ref.title,
        ix = _ref.ix,
        active_ix = _ref.active_ix,
        handleChoose = _ref.handleChoose;

    //
    function onChoose() {
        handleChoose(ix);
    }

    //
    return _react2.default.createElement(
        'div',
        {
            className: 'RadioItemCustom cursor-pointer hv-bg-blur',
            onClick: onChoose
        },
        _react2.default.createElement(_FlexDiv2.default, {
            ComponentLeft: _react2.default.createElement(_RadioCustom2.default, { is_active: ix == active_ix }),
            ComponentRight: title
        })
    );
}

exports.default = RadioItemCustom;

/***/ }),

/***/ "./src/component/input/radio_custom/list/RadioListCustom.js":
/*!******************************************************************!*\
  !*** ./src/component/input/radio_custom/list/RadioListCustom.js ***!
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

var _RadioItemCustom = __webpack_require__(/*! ../item/RadioItemCustom */ "./src/component/input/radio_custom/item/RadioItemCustom.js");

var _RadioItemCustom2 = _interopRequireDefault(_RadioItemCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
RadioListCustom.propTypes = {
    list: _propTypes2.default.array,
    active_ix: _propTypes2.default.number,
    handleChoose: _propTypes2.default.func
};

//

//
function RadioListCustom(_ref) {
    var list = _ref.list,
        active_ix = _ref.active_ix,
        handleChoose = _ref.handleChoose;

    //
    return _react2.default.createElement(
        'div',
        { className: 'RadioListCustom' },
        list.map(function (item, ix) {
            return _react2.default.createElement(
                'div',
                { key: '' + ix },
                _react2.default.createElement(_RadioItemCustom2.default, {
                    title: item.title,
                    ix: ix,
                    active_ix: active_ix,
                    handleChoose: handleChoose
                })
            );
        })
    );
}

exports.default = RadioListCustom;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/_main/PfAboutContactBasis.js":
/*!**************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/_main/PfAboutContactBasis.js ***!
  \**************************************************************************************************/
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

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GetIdSlug = __webpack_require__(/*! ../../../../../../../_some_function/GetIdSlug */ "./src/_some_function/GetIdSlug.js");

var _about = __webpack_require__(/*! ../../../../../../../_initial/profile/about */ "./src/_initial/profile/about.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _useMounted = __webpack_require__(/*! ../../../../../../../_hooks/useMounted */ "./src/_hooks/useMounted.js");

var _PfAboutContact = __webpack_require__(/*! ../contact/_main/PfAboutContact */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/_main/PfAboutContact.js");

var _PfAboutContact2 = _interopRequireDefault(_PfAboutContact);

var _PfAboutBasis = __webpack_require__(/*! ../basis/_main/PfAboutBasis */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/_main/PfAboutBasis.js");

var _PfAboutBasis2 = _interopRequireDefault(_PfAboutBasis);

__webpack_require__(/*! ./PfAboutContactBasis.scss */ "./src/pages/user_profile/user_pages/about/right/contact_basis/_main/PfAboutContactBasis.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PfAboutContactBasis.propTypes = {};

//
function PfAboutContactBasis(props) {

    //
    var getData_API_About = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var about_obj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (mounted) {
                                _context.next = 2;
                                break;
                            }

                            return _context.abrupt('return');

                        case 2:
                            _context.next = 4;
                            return (0, _ProfileHandleAPI.handle_API_UserOverview_r)({ user_id: user_id });

                        case 4:
                            about_obj = _context.sent;


                            mounted && setAboutState({
                                phone_arr: about_obj.phone_arr,
                                email_obj: about_obj.email_obj,
                                address_arr: about_obj.address_arr,

                                gender_obj: about_obj.gender_obj,
                                birth_obj: about_obj.birth_obj,
                                lang_obj: about_obj.lang_obj,

                                has_fetched: true
                            });

                        case 6:
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

    var _useState = (0, _react.useState)((0, _about.initial_contact_basis_state)()),
        _useState2 = _slicedToArray(_useState, 2),
        about_state = _useState2[0],
        setAboutState = _useState2[1];

    var phone_arr = about_state.phone_arr,
        email_obj = about_state.email_obj,
        address_arr = about_state.address_arr,
        gender_obj = about_state.gender_obj,
        birth_obj = about_state.birth_obj,
        lang_obj = about_state.lang_obj,
        has_fetched = about_state.has_fetched;

    //

    var mounted = (0, _useMounted.useMounted)();

    //
    (0, _react.useEffect)(function () {
        getData_API_About();
    }, []);return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutContact2.default, {
                phone_arr: phone_arr,
                email_obj: email_obj,
                address_arr: address_arr,
                has_fetched: has_fetched
            })
        ),
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_part' },
            _react2.default.createElement(_PfAboutBasis2.default, {
                gender_obj: gender_obj,
                birth_obj: birth_obj,
                lang_obj: lang_obj,
                has_fetched: has_fetched
            })
        )
    );
}

exports.default = PfAboutContactBasis;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/_main/PfAboutBasis.js":
/*!*************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/_main/PfAboutBasis.js ***!
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

var _AboutNoItem = __webpack_require__(/*! ../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

var _PfAboutGender = __webpack_require__(/*! ../gender/_main/PfAboutGender */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.js");

var _PfAboutGender2 = _interopRequireDefault(_PfAboutGender);

var _PfAboutLang = __webpack_require__(/*! ../language/_main/PfAboutLang */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/_main/PfAboutLang.js");

var _PfAboutLang2 = _interopRequireDefault(_PfAboutLang);

var _PfAboutBirth = __webpack_require__(/*! ../birth/_main/PfAboutBirth */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/_main/PfAboutBirth.js");

var _PfAboutBirth2 = _interopRequireDefault(_PfAboutBirth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutBasis.propTypes = {};

//
function PfAboutBasis(_ref) {
    var gender_obj = _ref.gender_obj,
        birth_obj = _ref.birth_obj,
        lang_obj = _ref.lang_obj,
        has_fetched = _ref.has_fetched;

    //
    var no_item = !(gender_obj.title || lang_obj.title || birth_obj.title);

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Basis info'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No basis info to show'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_PfAboutGender2.default, { gender_obj: gender_obj })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_PfAboutBirth2.default, { birth_obj: birth_obj })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_PfAboutLang2.default, { lang_obj: lang_obj })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutBasis;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/_main/PfAboutBirth.js":
/*!*******************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/_main/PfAboutBirth.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _FormatDate = __webpack_require__(/*! ../../../../../../../../../_some_function/FormatDate */ "./src/_some_function/FormatDate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutBirthEdit = __webpack_require__(/*! ../edit/PfAboutBirthEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/edit/PfAboutBirthEdit.js");

var _PfAboutBirthEdit2 = _interopRequireDefault(_PfAboutBirthEdit);

var _PfAboutBirthItem = __webpack_require__(/*! ../item/PfAboutBirthItem */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/item/PfAboutBirthItem.js");

var _PfAboutBirthItem2 = _interopRequireDefault(_PfAboutBirthItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PfAboutBirth.propTypes = {
    birth_obj: _propTypes2.default.object
};

//

// 
function PfAboutBirth(_ref) {
    var birth_obj = _ref.birth_obj;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var birth = data.birth,
            permission = data.permission;


        birth_obj.title = (0, _FormatDate.formatLocalDateString)(birth);
        birth_obj.birth = birth;
        birth_obj.permission = permission;
        forceUpdate();
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            {
                className: 'PfAbout_add ' + (birth_obj.birth == '' ? '' : 'display-none')
            },
            _react2.default.createElement(_PfAboutAdd2.default, {
                title_add: 'Add a birth',
                item_obj: {
                    birth: '',
                    permission: 0
                },
                ComponentEdit: _PfAboutBirthEdit2.default,
                handleCreate: handleCreate,
                handle_API_C: _ProfileHandleAPI.handle_API_Birth_U
            })
        ),
        _react2.default.createElement(
            'div',
            { className: '' + (birth_obj.birth == '' ? 'display-none' : '') },
            _react2.default.createElement(_PfAboutBirthItem2.default, { birth_obj: birth_obj })
        )
    );
}

exports.default = PfAboutBirth;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/edit/PfAboutBirthEdit.js":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/edit/PfAboutBirthEdit.js ***!
  \**********************************************************************************************************/
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

var _useInputDate2 = __webpack_require__(/*! ../../../../../../../../../_hooks/useInputDate */ "./src/_hooks/useInputDate.js");

var _InputDate = __webpack_require__(/*! ../../../../../../../../../component/input/date/_main/InputDate */ "./src/component/input/date/_main/InputDate.js");

var _InputDate2 = _interopRequireDefault(_InputDate);

var _PfAboutConfirm = __webpack_require__(/*! ../../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
PfAboutBirthEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutBirthEdit(_ref) {
    var item_obj = _ref.item_obj,
        handleSave = _ref.handleSave,
        handleCancel = _ref.handleCancel;

    //
    var permission = item_obj.permission,
        birth = item_obj.birth;

    //

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        invalid = _useState2[0],
        setInvalid = _useState2[1];

    //


    var _useInputDate = (0, _useInputDate2.useInputDate)({
        initial_day: new Date(birth).getDate(),
        initial_month: new Date(birth).getMonth() + 1,
        initial_year: new Date(birth).getFullYear()
    }),
        day = _useInputDate.day,
        month = _useInputDate.month,
        year = _useInputDate.year,
        handleChangeDay = _useInputDate.handleChangeDay,
        handleChangeMonth = _useInputDate.handleChangeMonth,
        handleChangeYear = _useInputDate.handleChangeYear;

    //


    function onSave(new_permission) {
        // const new_birth = new Date(year, month - 1, day);
        var new_birth = new Date(year + '-' + month + '-' + day);

        if (new_birth >= new Date() || new_birth <= new Date(1960)) {
            setInvalid(true);

            return;
        }

        handleSave({ permission: new_permission, birth: new_birth.getTime() });
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
                _react2.default.createElement(_InputDate2.default, {
                    day: day,
                    month: month,
                    year: year
                    //
                    , min_year: 1960,
                    max_year: 2021
                    //
                    , invalid: invalid,
                    title_invalid: 'Date must be from 1960 to now'
                    //
                    , handleChangeDay: handleChangeDay,
                    handleChangeMonth: handleChangeMonth,
                    handleChangeYear: handleChangeYear
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

exports.default = PfAboutBirthEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/item/PfAboutBirthItem.js":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/item/PfAboutBirthItem.js ***!
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

var _FormatDate = __webpack_require__(/*! ../../../../../../../../../_some_function/FormatDate */ "./src/_some_function/FormatDate.js");

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutBirthEdit = __webpack_require__(/*! ../edit/PfAboutBirthEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/birth/edit/PfAboutBirthEdit.js");

var _PfAboutBirthEdit2 = _interopRequireDefault(_PfAboutBirthEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
PfAboutBirthItem.propTypes = {
    birth_obj: _propTypes2.default.object
};

//

//

//
function PfAboutBirthItem(_ref) {
    var birth_obj = _ref.birth_obj;

    //
    function handleUpdateItemObj(data) {
        var birth = data.birth,
            permission = data.permission;


        birth_obj.title = (0, _FormatDate.formatLocalDateString)(birth);
        birth_obj.birth = birth;
        birth_obj.permission = permission;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AboutRowItemEdit2.default, {
                item_obj: birth_obj,
                Icon: _GroupIconProfileAbout.IconsProfileAbout.birth,
                label: 'Birth'
                //
                , ComponentEdit: _PfAboutBirthEdit2.default,
                handle_API_U: _ProfileHandleAPI.handle_API_Birth_U,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutBirthItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.js":
/*!*********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.js ***!
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

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAbGenderEdit = __webpack_require__(/*! ../edit/PfAbGenderEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.js");

var _PfAbGenderEdit2 = _interopRequireDefault(_PfAbGenderEdit);

__webpack_require__(/*! ./PfAboutGender.scss */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutGender.propTypes = {};

//

//

//
function PfAboutGender(_ref) {
    var gender_obj = _ref.gender_obj;

    //
    function handleUpdateItemObj(data) {
        var gender = data.gender,
            permission = data.permission;


        gender_obj.permission = permission;
        gender_obj.gender = gender;
        gender_obj.title = gender.slice(0, 1).toUpperCase() + gender.slice(1);
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AboutRowItemEdit2.default, {
                item_obj: gender_obj,
                Icon: _GroupIconProfileAbout.IconsProfileAbout.gender,
                label: 'Gender',
                ComponentEdit: _PfAbGenderEdit2.default,
                handle_API_U: _ProfileHandleAPI.handle_API_Gender_U,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutGender;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.js":
/*!*********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.js ***!
  \*********************************************************************************************************/
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

var _RadioListCustom = __webpack_require__(/*! ../../../../../../../../../component/input/radio_custom/list/RadioListCustom */ "./src/component/input/radio_custom/list/RadioListCustom.js");

var _RadioListCustom2 = _interopRequireDefault(_RadioListCustom);

var _PfAboutConfirm = __webpack_require__(/*! ../../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

__webpack_require__(/*! ./PfAbGenderEdit.scss */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var gender_arr = [{
    gender: 'male',
    title: 'Male'
}, {
    gender: 'female',
    title: 'Female'
}, {
    gender: 'other',
    title: 'Other'
}];

//
PfAbGenderEdit.propTypes = {
    gender: _propTypes2.default.string,
    password: _propTypes2.default.string,
    permission: _propTypes2.default.number,

    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAbGenderEdit(_ref) {
    var item_obj = _ref.item_obj,
        handleSave = _ref.handleSave,
        handleCancel = _ref.handleCancel;

    //
    var gender = item_obj.gender,
        permission = item_obj.permission;

    //

    var _useState = (0, _react.useState)(gender_arr.findIndex(function (item) {
        return item.gender == gender;
    })),
        _useState2 = _slicedToArray(_useState, 2),
        cur_gender_ix = _useState2[0],
        setCurGenderIx = _useState2[1];

    //


    function handleChangeGender(ix) {
        setCurGenderIx(ix);
    }

    //
    function onSave(new_permission) {
        handleSave({
            gender: gender_arr[cur_gender_ix].gender,
            permission: new_permission
        });
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PfAbGenderEdit' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_RadioListCustom2.default, {
                list: gender_arr,
                active_ix: cur_gender_ix,
                handleChoose: handleChangeGender
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PfAboutConfirm2.default, {
                permission: permission,
                handleSave: onSave,
                handleCancel: handleCancel
            })
        )
    );
}

exports.default = PfAbGenderEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/_main/PfAboutLang.js":
/*!*********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/_main/PfAboutLang.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _joinArrayWithAnd = __webpack_require__(/*! ../../../../../../../../../_some_function/joinArrayWithAnd */ "./src/_some_function/joinArrayWithAnd.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutLangEdit = __webpack_require__(/*! ../edit/PfAboutLangEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/edit/PfAboutLangEdit.js");

var _PfAboutLangEdit2 = _interopRequireDefault(_PfAboutLangEdit);

var _PfAboutLangItem = __webpack_require__(/*! ../item/PfAboutLangItem */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/item/PfAboutLangItem.js");

var _PfAboutLangItem2 = _interopRequireDefault(_PfAboutLangItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PfAboutLang.propTypes = {
    lang_arr: _propTypes2.default.array
};

//
function PfAboutLang(props) {
    //
    var lang_obj = props.lang_obj;

    //

    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var lang = data.lang,
            permission = data.permission;


        lang_obj.title = (0, _joinArrayWithAnd.joinArrayWithAnd)(lang.split(','));
        lang_obj.lang = lang;
        lang_obj.permission = permission;

        forceUpdate();
    }

    //
    function handleUpdateItemObj(data) {
        var lang = data.lang,
            permission = data.permission;


        lang_obj.title = (0, _joinArrayWithAnd.joinArrayWithAnd)(lang.split(','));
        lang_obj.permission = permission;
        lang_obj.lang = lang;

        forceUpdate();
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            {
                className: 'PfAbout_add ' + (lang_obj.title == '' ? '' : 'display-none')
            },
            _react2.default.createElement(_PfAboutAdd2.default, {
                title_add: 'Add a language',
                item_obj: {
                    lang: '',
                    permission: 0
                },
                ComponentEdit: _PfAboutLangEdit2.default,
                handleCreate: handleCreate,
                handle_API_C: _ProfileHandleAPI.handle_API_Lang_C
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PfAboutLangItem2.default, {
                lang_obj: lang_obj,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutLang;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/edit/PfAboutLangEdit.js":
/*!************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/edit/PfAboutLangEdit.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _useInputSelect2 = __webpack_require__(/*! ../../../../../../../../../_hooks/useInputSelect */ "./src/_hooks/useInputSelect.js");

var _InputSelect = __webpack_require__(/*! ../../../../../../../../../component/input/input_select/_main/InputSelect */ "./src/component/input/input_select/_main/InputSelect.js");

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _language = __webpack_require__(/*! ../../../../../../../../../_data/profile/language */ "./src/_data/profile/language.js");

var _PfAboutConfirm = __webpack_require__(/*! ../../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//

//
PfAboutLangEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//

//
function PfAboutLangEdit(_ref) {
    var item_obj = _ref.item_obj,
        handleSave = _ref.handleSave,
        handleCancel = _ref.handleCancel;

    //
    var permission = item_obj.permission,
        lang = item_obj.lang;

    //

    var _useInputSelect = (0, _useInputSelect2.useInputSelect)({
        all_data_arr: _language.data_profile_lang_arr,
        initial_data_str: lang
    }),
        cur_lang_arr = _useInputSelect.cur_data_arr,
        option_lang_arr = _useInputSelect.option_data_arr,
        value_input = _useInputSelect.value_input,
        handleChangeInput = _useInputSelect.handleChangeInput,
        handleSelectOption = _useInputSelect.handleSelectOption,
        handleRemoveSelectedItem = _useInputSelect.handleRemoveSelectedItem;

    //


    function onSave(new_permission) {
        handleSave({
            permission: new_permission,
            lang: cur_lang_arr.join(',')
        });
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'PfAbout_input' },
            _react2.default.createElement(_InputSelect2.default, {
                selected_item_arr: cur_lang_arr,
                option_item_arr: option_lang_arr,
                value: value_input,
                placeholder: 'Language'
                //
                , handleChangeInput: handleChangeInput,
                handleSelectOption: handleSelectOption,
                handleRemoveSelectedItem: handleRemoveSelectedItem
            })
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

exports.default = PfAboutLangEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/item/PfAboutLangItem.js":
/*!************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/item/PfAboutLangItem.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _joinArrayWithAnd = __webpack_require__(/*! ../../../../../../../../../_some_function/joinArrayWithAnd */ "./src/_some_function/joinArrayWithAnd.js");

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAboutLangEdit = __webpack_require__(/*! ../edit/PfAboutLangEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/language/edit/PfAboutLangEdit.js");

var _PfAboutLangEdit2 = _interopRequireDefault(_PfAboutLangEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutLangItem.propTypes = {
    lang_obj: _propTypes2.default.object
};

//

//

//
function PfAboutLangItem(props) {
    //
    var lang_obj = props.lang_obj,
        handleUpdateItemObj = props.handleUpdateItemObj;

    //

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AboutRowItemEdit2.default, {
                item_obj: lang_obj,
                Icon: _GroupIconProfileAbout.IconsProfileAbout.lang,
                label: 'Language'
                // 
                , ComponentEdit: _PfAboutLangEdit2.default,
                handle_API_U: _ProfileHandleAPI.handle_API_Lang_U,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutLangItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/_main/PfAboutContact.js":
/*!*****************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/_main/PfAboutContact.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AboutNoItem = __webpack_require__(/*! ../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

var _PfAboutEmail = __webpack_require__(/*! ../email/_main/PfAboutEmail */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.js");

var _PfAboutEmail2 = _interopRequireDefault(_PfAboutEmail);

var _PfAboutPhone = __webpack_require__(/*! ../phone/_main/PfAboutPhone */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/_main/PfAboutPhone.js");

var _PfAboutPhone2 = _interopRequireDefault(_PfAboutPhone);

var _PfAboutAddress = __webpack_require__(/*! ../address/_main/PfAboutAddress */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/_main/PfAboutAddress.js");

var _PfAboutAddress2 = _interopRequireDefault(_PfAboutAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutContact.propTypes = {};

//
function PfAboutContact(_ref) {
    var phone_arr = _ref.phone_arr,
        address_arr = _ref.address_arr,
        email_obj = _ref.email_obj,
        has_fetched = _ref.has_fetched;

    // 
    var no_item = !(phone_arr.length || address_arr.length || email_obj.title);

    //
    return _react2.default.createElement(
        'div',
        { className: 'PfAboutContact' },
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Contact info'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No basis info to show'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_add' },
                        _react2.default.createElement(_PfAboutPhone2.default, { phone_arr: phone_arr })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_add' },
                        _react2.default.createElement(_PfAboutAddress2.default, { address_arr: address_arr })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_PfAboutEmail2.default, { email_obj: email_obj })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutContact;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/_main/PfAboutAddress.js":
/*!*************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/_main/PfAboutAddress.js ***!
  \*************************************************************************************************************/
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

var _PfAboutAddressEdit = __webpack_require__(/*! ../edit/PfAboutAddressEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/edit/PfAboutAddressEdit.js");

var _PfAboutAddressEdit2 = _interopRequireDefault(_PfAboutAddressEdit);

var _PfAboutAddressItem = __webpack_require__(/*! ../item/PfAboutAddressItem */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/item/PfAboutAddressItem.js");

var _PfAboutAddressItem2 = _interopRequireDefault(_PfAboutAddressItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutAddress.propTypes = {
    address_arr: _propTypes2.default.array
};

//

//
function PfAboutAddress(props) {
    //
    var address_arr = props.address_arr;

    //

    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var address = data.address,
            permission = data.permission;


        address_arr.push({
            id: 101 + address_arr.length,
            title: address,
            address: address,
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
                title_add: 'Add a address',
                item_obj: {
                    address: '',
                    permission: 0
                },
                ComponentEdit: _PfAboutAddressEdit2.default,
                handleCreate: handleCreate,
                handle_API_C: _ProfileHandleAPI.handle_API_UserAddress_C
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            address_arr.map(function (address_obj) {
                return _react2.default.createElement(
                    'div',
                    { key: 'PfAboutAddress_' + address_obj.id },
                    _react2.default.createElement(_PfAboutAddressItem2.default, { address_obj: address_obj })
                );
            })
        )
    );
}

exports.default = PfAboutAddress;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/edit/PfAboutAddressEdit.js":
/*!****************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/edit/PfAboutAddressEdit.js ***!
  \****************************************************************************************************************/
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
PfAboutAddressEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutAddressEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        address = item_obj.address;

    //

    var _useState = (0, _react.useState)(address),
        _useState2 = _slicedToArray(_useState, 2),
        cur_address = _useState2[0],
        setCurAddress = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        address_error = _useState4[0],
        setAddressError = _useState4[1];

    //


    function handleChangeAddress(e) {
        setCurAddress(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_address) || address != '' && cur_address == '') {
            handleSave({ permission: new_permission, address: cur_address.trim() });
        } else {
            setAddressError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: address_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'Address must have at least 2 letters!'
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
                    name: 'address',
                    value: cur_address,
                    type: 'text',
                    placeholder: 'Your address',
                    handleChange: handleChangeAddress
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

exports.default = PfAboutAddressEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/item/PfAboutAddressItem.js":
/*!****************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/item/PfAboutAddressItem.js ***!
  \****************************************************************************************************************/
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

var _PfAboutAddressEdit = __webpack_require__(/*! ../edit/PfAboutAddressEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/address/edit/PfAboutAddressEdit.js");

var _PfAboutAddressEdit2 = _interopRequireDefault(_PfAboutAddressEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutAddressItem.propTypes = {
    address_obj: _propTypes2.default.object
};

//

//
function PfAboutAddressItem(props) {
    //
    var address_obj = props.address_obj;

    //

    function handleUpdateItemObj(data) {
        var address = data.address,
            permission = data.permission;


        address_obj.title = address;
        address_obj.permission = permission;
        address_obj.address = address;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: address_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.address,
            ComponentEdit: _PfAboutAddressEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_UserAddress_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutAddressItem;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.js":
/*!*********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.js ***!
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

var _GroupIconProfileAbout = __webpack_require__(/*! ../../../../../../../../../_groups_icon/about/GroupIconProfileAbout */ "./src/_groups_icon/about/GroupIconProfileAbout.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _AboutRowItemEdit = __webpack_require__(/*! ../../../../_component/row_item_edit/AboutRowItemEdit */ "./src/pages/user_profile/user_pages/about/right/_component/row_item_edit/AboutRowItemEdit.js");

var _AboutRowItemEdit2 = _interopRequireDefault(_AboutRowItemEdit);

var _PfAbEmailEdit = __webpack_require__(/*! ../edit/PfAbEmailEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.js");

var _PfAbEmailEdit2 = _interopRequireDefault(_PfAbEmailEdit);

__webpack_require__(/*! ./PfAboutEmail.scss */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutEmail.propTypes = {};

//

//

//
function PfAboutEmail(_ref) {
    var email_obj = _ref.email_obj;

    //
    function handleUpdateItemObj(data) {
        var email = data.email,
            password = data.password,
            permission = data.permission;


        email_obj.permission = permission;
        email_obj.email = email;
        email_obj.title = email;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_AboutRowItemEdit2.default, {
                item_obj: email_obj,
                Icon: _GroupIconProfileAbout.IconsProfileAbout.email,
                label: 'Mail'
                //
                , ComponentEdit: _PfAbEmailEdit2.default,
                handle_API_U: _ProfileHandleAPI.handle_API_UserEmail_U,
                handleUpdateItemObj: handleUpdateItemObj
            })
        )
    );
}

exports.default = PfAboutEmail;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.js":
/*!*********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.js ***!
  \*********************************************************************************************************/
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

var _InputNotValid = __webpack_require__(/*! ../../../../../../../../../component/input/input_not_valid/InputNotValid */ "./src/component/input/input_not_valid/InputNotValid.js");

var _InputNotValid2 = _interopRequireDefault(_InputNotValid);

var _InputNotValidPass = __webpack_require__(/*! ../../../../../../../../../component/input/input_not_valid_pass/InputNotValidPass */ "./src/component/input/input_not_valid_pass/InputNotValidPass.js");

var _InputNotValidPass2 = _interopRequireDefault(_InputNotValidPass);

var _PfAboutConfirm = __webpack_require__(/*! ../../../../_component/confirm/PfAboutConfirm */ "./src/pages/user_profile/user_pages/about/right/_component/confirm/PfAboutConfirm.js");

var _PfAboutConfirm2 = _interopRequireDefault(_PfAboutConfirm);

__webpack_require__(/*! ./PfAbEmailEdit.scss */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
PfAbEmailEdit.propTypes = {
    email: _propTypes2.default.string,
    password: _propTypes2.default.string,
    permission: _propTypes2.default.number,

    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAbEmailEdit(_ref) {
    var item_obj = _ref.item_obj,
        handleSave = _ref.handleSave,
        handleCancel = _ref.handleCancel;

    // 
    var email = item_obj.email,
        permission = item_obj.permission;

    //

    var _useState = (0, _react.useState)({
        cur_email: email,
        cur_pass: '',
        is_error: false
    }),
        _useState2 = _slicedToArray(_useState, 2),
        email_state = _useState2[0],
        setEmailState = _useState2[1];

    var cur_email = email_state.cur_email,
        cur_pass = email_state.cur_pass,
        is_error = email_state.is_error;

    //

    function handleChange(key, event) {
        var _extends2;

        setEmailState(_extends({}, email_state, (_extends2 = {}, _defineProperty(_extends2, key, event.target.value), _defineProperty(_extends2, 'is_error', false), _extends2)));
    }

    //
    function handleChangeEmail(e) {
        handleChange('cur_email', e);
    }

    //
    function handleChangePass(e) {
        handleChange('cur_pass', e);
    }

    //
    function onSave(new_permission) {
        if (/^[a-zA-Z0-9]{4,}@[a-z]{2,10}\.[a-z]{2,10}$/.test(cur_email)) {
            handleSave({
                email: cur_email,
                password: cur_pass,
                permission: new_permission
            });
        } else {
            setEmailState(_extends({}, email_state, {
                is_error: true
            }));
        }
    }

    //
    return _react2.default.createElement(
        'div',
        { className: 'PfAbEmailEdit' },
        _react2.default.createElement(
            'div',
            { className: is_error ? '' : 'display-none' },
            _react2.default.createElement(
                'div',
                { className: 'text-red' },
                'Your email does not look like a real email!'
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
                    name: 'email',
                    value: cur_email,
                    type: 'email',
                    placeholder: 'Email',
                    handleChange: handleChangeEmail
                })
            ),
            _react2.default.createElement(
                'div',
                { className: 'PfAbout_input' },
                _react2.default.createElement(_InputNotValidPass2.default, {
                    name: 'password',
                    password: cur_pass,
                    placeholder: 'Confirm Password',
                    handleChange: handleChangePass
                })
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PfAboutConfirm2.default, {
                permission: permission,
                handleSave: onSave,
                handleCancel: handleCancel
            })
        )
    );
}

exports.default = PfAbEmailEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/_main/PfAboutPhone.js":
/*!*********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/_main/PfAboutPhone.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutPhoneEdit = __webpack_require__(/*! ../edit/PfAboutPhoneEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/edit/PfAboutPhoneEdit.js");

var _PfAboutPhoneEdit2 = _interopRequireDefault(_PfAboutPhoneEdit);

var _PfAboutPhoneItem = __webpack_require__(/*! ../item/PfAboutPhoneItem */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/item/PfAboutPhoneItem.js");

var _PfAboutPhoneItem2 = _interopRequireDefault(_PfAboutPhoneItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutPhone.propTypes = {
    phone_arr: _propTypes2.default.array
};

//

//
function PfAboutPhone(_ref) {
    var phone_arr = _ref.phone_arr;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var phone = data.phone,
            permission = data.permission;


        phone_arr.push({
            id: 101 + phone_arr.length,
            title: phone,
            phone: phone,
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
                title_add: 'Add a phone',
                item_obj: {
                    phone: '',
                    permission: 0
                },
                ComponentEdit: _PfAboutPhoneEdit2.default,
                handleCreate: handleCreate,
                handle_API_C: _ProfileHandleAPI.handle_API_UserPhone_C
            })
        ),
        _react2.default.createElement(
            'div',
            null,
            phone_arr.map(function (phone_obj) {
                return _react2.default.createElement(
                    'div',
                    { key: 'PfAboutPhone_' + phone_obj.id },
                    _react2.default.createElement(_PfAboutPhoneItem2.default, { phone_obj: phone_obj })
                );
            })
        )
    );
}

exports.default = PfAboutPhone;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/edit/PfAboutPhoneEdit.js":
/*!************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/edit/PfAboutPhoneEdit.js ***!
  \************************************************************************************************************/
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
PfAboutPhoneEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutPhoneEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        phone = item_obj.phone;

    //

    var _useState = (0, _react.useState)(phone),
        _useState2 = _slicedToArray(_useState, 2),
        cur_phone = _useState2[0],
        setCurPhone = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        phone_error = _useState4[0],
        setPhoneError = _useState4[1];

    //


    function handleChangePhone(e) {
        setCurPhone(e.target.value);
    }

    function onSave(new_permission) {
        if (/^\d{10}$/.test(cur_phone) || phone != '' && cur_phone == '') {
            handleSave({ permission: new_permission, phone: cur_phone });
        } else {
            setPhoneError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: phone_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'Phone must have 10 numbers!'
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
                    name: 'phone',
                    value: cur_phone,
                    type: 'tel',
                    placeholder: 'Your phone',
                    handleChange: handleChangePhone
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

exports.default = PfAboutPhoneEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/item/PfAboutPhoneItem.js":
/*!************************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/item/PfAboutPhoneItem.js ***!
  \************************************************************************************************************/
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

var _PfAboutPhoneEdit = __webpack_require__(/*! ../edit/PfAboutPhoneEdit */ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/phone/edit/PfAboutPhoneEdit.js");

var _PfAboutPhoneEdit2 = _interopRequireDefault(_PfAboutPhoneEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutPhoneItem.propTypes = {
    phone_obj: _propTypes2.default.object
};

//

//
function PfAboutPhoneItem(props) {
    //
    var phone_obj = props.phone_obj;

    //

    function handleUpdateItemObj(data) {
        var phone = data.phone,
            permission = data.permission;


        phone_obj.title = phone;
        phone_obj.permission = permission;
        phone_obj.phone = phone;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: phone_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.phone,
            ComponentEdit: _PfAboutPhoneEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_UserPhone_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutPhoneItem;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid_pass/InputNotValidPass.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid_pass/InputNotValidPass.scss ***!
  \**********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".InputNotValidPass {\n  position: relative;\n}\n\n.InputNotValidPass_eye {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n}\n\n.InputNotValidPass_eye_contain {\n  padding: 0;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/component/input/input_not_valid_pass/InputNotValidPass.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;;AAGA;EACI,kBAAA;EACA,QAAA;EACA,WAAA;EACA,2BAAA;AAAJ;;AAGA;EACI,UAAA;EACA,eAAA;AAAJ","sourcesContent":[".InputNotValidPass{\r\n    position: relative;\r\n}\r\n\r\n//\r\n.InputNotValidPass_eye{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 10px;\r\n    transform: translateY(-50%);\r\n}\r\n//\r\n.InputNotValidPass_eye_contain{\r\n    padding: 0;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/_main/PfAboutContactBasis.scss":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/_main/PfAboutContactBasis.scss ***!
  \*************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.scss ***!
  \********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.scss ***!
  \********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".PfAbGenderEdit .RadioItemCustom {\n  padding: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.scss"],"names":[],"mappings":"AAEI;EACI,eAAA;AADR","sourcesContent":["\r\n.PfAbGenderEdit{\r\n    .RadioItemCustom{\r\n        padding: 0.5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.scss ***!
  \********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.scss ***!
  \********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/input/input_not_valid_pass/InputNotValidPass.scss":
/*!*************************************************************************!*\
  !*** ./src/component/input/input_not_valid_pass/InputNotValidPass.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValidPass_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./InputNotValidPass.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_not_valid_pass/InputNotValidPass.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValidPass_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputNotValidPass_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/_main/PfAboutContactBasis.scss":
/*!****************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/_main/PfAboutContactBasis.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutContactBasis_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PfAboutContactBasis.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/_main/PfAboutContactBasis.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutContactBasis_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutContactBasis_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutGender_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PfAboutGender.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/_main/PfAboutGender.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutGender_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutGender_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAbGenderEdit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PfAbGenderEdit.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/basis/gender/edit/PfAbGenderEdit.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAbGenderEdit_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAbGenderEdit_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutEmail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PfAboutEmail.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/_main/PfAboutEmail.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutEmail_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAboutEmail_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAbEmailEdit_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js!./PfAbEmailEdit.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/user_profile/user_pages/about/right/contact_basis/contact/email/edit/PfAbEmailEdit.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAbEmailEdit_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_PfAbEmailEdit_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_user_profile_user_pages_about_right_contact_basis__main_PfAboutContactBasis_js.js.map