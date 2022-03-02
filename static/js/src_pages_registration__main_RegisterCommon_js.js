(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_registration__main_RegisterCommon_js"],{

/***/ "./src/_initial/register/RegistrationInitial.js":
/*!******************************************************!*\
  !*** ./src/_initial/register/RegistrationInitial.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fields = exports.field_username = exports.validationSchema = exports.initialValues = exports.register_step_count = exports.register_step_obj = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _yup = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

var Yup = _interopRequireWildcard(_yup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//
var register_step_obj = exports.register_step_obj = {
    0: { part: 'name', fields: ['first_name', 'last_name'], form_valid: true },
    1: { part: 'birth', fields: ['birth'], form_valid: false },
    2: { part: 'email', fields: ['email'], form_valid: true },
    3: { part: 'account', fields: ['username', 'password'], form_valid: true }
};

var register_step_count = exports.register_step_count = Object.keys(register_step_obj).length;

//
var initialValues = exports.initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    password_confirm: ''
};

//
var name_validation = {
    first_name: Yup.string().matches(/^\S/, 'First name is invalid').min(1, 'First name is invalid').max(20, 'First name is invalid').trim('First name is invalid').required('First name is required'),

    last_name: Yup.string().matches(/^\S/, 'Last name is invalid').min(1, 'Last name is invalid').max(20, 'Last name is invalid').trim('Last name is invalid').required('Last name is required')
};
var email_validation = {
    email: Yup.string().email('Invalid email').matches(/^\S{4,30}@[a-z]mail\.com$/, 'Invalid email').required('Email is required')
};
var account_validation = {
    username: Yup.string().matches(/^[a-zA-Z0-9]{5,15}$/, 'Username is invalid').required('Username is required'),

    password: Yup.string().matches(/^[a-zA-Z0-9]{5,15}$/, 'Password is invalid').matches(/[A-Z]/, 'Password is invalid').required('Password is required')
};

var validationSchema = exports.validationSchema = Yup.object().shape(_extends({}, name_validation, email_validation, account_validation, {

    password_confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Password is not right').required('Confirm password is required')
}));

//
var field_username = exports.field_username = {
    name: 'username',
    type: 'text',
    label: 'Username',
    help: '5-15 english letters and no space',
    max_length: 15
};

var field_password = {
    name: 'password',
    type: 'password',
    label: 'Password',
    help: '5-15 english letters, no space and at least 1 uppercase letter',
    max_length: 15
};

var field_password_confirm = {
    name: 'password_confirm',
    type: 'password',
    label: 'Password confirm',
    help: 'Confirm your password',
    max_length: 15
};

var field_email = {
    name: 'email',
    type: 'email',
    label: 'Email',
    help: '****@*mail.com'
};

var field_first_name = {
    name: 'first_name',
    type: 'text',
    label: 'First name',
    help: '1-20 letters, spaces and start with a letter',
    max_length: 20
};

var field_last_name = {
    name: 'last_name',
    type: 'text',
    label: 'Last name',
    help: '1-15 letters, spaces and start with a letter',
    max_length: 15
};

//
var fields = exports.fields = [field_username, field_password, field_password_confirm, field_email, field_first_name, field_last_name];

/***/ }),

/***/ "./src/api/api_django_no_token/signup/Signup.js":
/*!******************************************************!*\
  !*** ./src/api/api_django_no_token/signup/Signup.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SignupRequest = undefined;

var _AxiosNoToken = __webpack_require__(/*! ../_axios/AxiosNoToken */ "./src/api/api_django_no_token/_axios/AxiosNoToken.js");

var _AxiosNoToken2 = _interopRequireDefault(_AxiosNoToken);

var _ConstAPI = __webpack_require__(/*! ../../_ConstAPI */ "./src/api/_ConstAPI.js");

var _DefaultLogin = __webpack_require__(/*! ../../../_default/login/DefaultLogin */ "./src/_default/login/DefaultLogin.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// registration

//
var SignupRequest = exports.SignupRequest = function SignupRequest(data) {
    return (0, _ConstAPI.API_FakeReal)(_DefaultLogin.default_login, function () {
        return (0, _AxiosNoToken2.default)({
            method: 'POST',
            data: data,
            url: 'api/account/register/'
        });
    });
};

/***/ }),

/***/ "./src/component/input/input_password/InputPassword.js":
/*!*************************************************************!*\
  !*** ./src/component/input/input_password/InputPassword.js ***!
  \*************************************************************/
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

var _IconsEye = __webpack_require__(/*! ../../../_icons_svg/icons_eye/IconsEye */ "./src/_icons_svg/icons_eye/IconsEye.js");

var _IconsEye2 = _interopRequireDefault(_IconsEye);

var _IconsAction = __webpack_require__(/*! ../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _IconDiv = __webpack_require__(/*! ../../some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

__webpack_require__(/*! ./InputPassword.scss */ "./src/component/input/input_password/InputPassword.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
InputPassword.propTypes = {
    field: _propTypes2.default.object,
    form: _propTypes2.default.object,
    label: _propTypes2.default.string,
    max_length: _propTypes2.default.number,
    placeholder: _propTypes2.default.string
};

InputPassword.defaultProps = {
    max_length: 15
};

//
function InputPassword(_ref) {
    var field = _ref.field,
        form = _ref.form,
        label = _ref.label,
        placeholder = _ref.placeholder,
        max_length = _ref.max_length,
        help = _ref.help;

    //
    var name = field.name;
    var touched = form.touched,
        errors = form.errors;

    var showError = touched[name] && errors[name];

    //

    var _useState = (0, _react.useState)(true),
        _useState2 = _slicedToArray(_useState, 2),
        type_password = _useState2[0],
        setType = _useState2[1];

    //


    var ChangeTypePassword = function ChangeTypePassword() {
        setType(!type_password);
    };

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                { className: 'font-500' },
                label
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'InputPassword_password pos-rel' },
            _react2.default.createElement('input', _extends({
                className: 'InputPassword_input w-100per padding-8px brs-5px ' + (touched[name] && !errors[name] ? 'InputPassword_valid' : '') + ' ' + (touched[name] && !!errors[name] ? 'InputPassword_invalid' : '')
            }, field, {
                maxLength: max_length,
                placeholder: placeholder,
                type: type_password ? 'password' : 'text'
            })),
            _react2.default.createElement(
                'div',
                { className: 'InputPassword__eye' },
                _react2.default.createElement(
                    'div',
                    { onClick: ChangeTypePassword },
                    _react2.default.createElement(_IconsEye2.default, { x: 200, y: 200, close_eye: type_password })
                )
            )
        ),
        help && _react2.default.createElement(
            'div',
            { className: 'help-text' },
            _react2.default.createElement(
                _IconDiv2.default,
                { Icon: _IconsAction2.default, x: 600 },
                '* ',
                help
            )
        ),
        showError && _react2.default.createElement(
            'div',
            { className: 'error-field' },
            _react2.default.createElement(
                _IconDiv2.default,
                { Icon: _IconsAction2.default, x: 400, y: 400 },
                errors[name]
            )
        )
    );
}

exports.default = InputPassword;

/***/ }),

/***/ "./src/pages/registration/_main/RegisterCommon.js":
/*!********************************************************!*\
  !*** ./src/pages/registration/_main/RegisterCommon.js ***!
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

var _Constant = __webpack_require__(/*! ../../../_constant/Constant */ "./src/_constant/Constant.js");

var _Registration = __webpack_require__(/*! ../one_page/Registration */ "./src/pages/registration/one_page/Registration.js");

var _Registration2 = _interopRequireDefault(_Registration);

var _RegisterStep = __webpack_require__(/*! ../step_by_step/_main/RegisterStep */ "./src/pages/registration/step_by_step/_main/RegisterStep.js");

var _RegisterStep2 = _interopRequireDefault(_RegisterStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
RegisterCommon.propTypes = {};

//

//
function RegisterCommon(props) {
    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _Constant.IS_MOBILE && innerWidth <= 400 ? _react2.default.createElement(_RegisterStep2.default, null) : _react2.default.createElement(_Registration2.default, null)
        )
    );
}

exports.default = RegisterCommon;

/***/ }),

/***/ "./src/pages/registration/one_page/Registration.js":
/*!*********************************************************!*\
  !*** ./src/pages/registration/one_page/Registration.js ***!
  \*********************************************************/
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

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextAPI = __webpack_require__(/*! ../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _Signup = __webpack_require__(/*! ../../../api/api_django_no_token/signup/Signup */ "./src/api/api_django_no_token/signup/Signup.js");

var _UseScreenFetching = __webpack_require__(/*! ../../../_hooks/UseScreenFetching */ "./src/_hooks/UseScreenFetching.js");

var _useInputDate2 = __webpack_require__(/*! ../../../_hooks/useInputDate */ "./src/_hooks/useInputDate.js");

var _makeFormData = __webpack_require__(/*! ../../../_some_function/makeFormData */ "./src/_some_function/makeFormData.js");

var _makeFormData2 = _interopRequireDefault(_makeFormData);

var _handleScrollSmooth = __webpack_require__(/*! ../../../_some_function/handleScrollSmooth */ "./src/_some_function/handleScrollSmooth.js");

var _IconsAction = __webpack_require__(/*! ../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _ButtonRipple = __webpack_require__(/*! ../../../component/button/button_ripple/ButtonRipple */ "./src/component/button/button_ripple/ButtonRipple.js");

var _ButtonRipple2 = _interopRequireDefault(_ButtonRipple);

var _IconDiv = __webpack_require__(/*! ../../../component/some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

var _FetchingDiv = __webpack_require__(/*! ../../../component/some_div/fetching/FetchingDiv */ "./src/component/some_div/fetching/FetchingDiv.js");

var _FetchingDiv2 = _interopRequireDefault(_FetchingDiv);

var _InputText = __webpack_require__(/*! ../../../component/input/input_text/InputText */ "./src/component/input/input_text/InputText.js");

var _InputText2 = _interopRequireDefault(_InputText);

var _InputPassword = __webpack_require__(/*! ../../../component/input/input_password/InputPassword */ "./src/component/input/input_password/InputPassword.js");

var _InputPassword2 = _interopRequireDefault(_InputPassword);

var _RegistrationInitial = __webpack_require__(/*! ../../../_initial/register/RegistrationInitial */ "./src/_initial/register/RegistrationInitial.js");

var _InputDate = __webpack_require__(/*! ../../../component/input/date/_main/InputDate */ "./src/component/input/date/_main/InputDate.js");

var _InputDate2 = _interopRequireDefault(_InputDate);

var _white_person = __webpack_require__(/*! ../../../../image/white_person.svg */ "./image/white_person.svg");

var _white_person2 = _interopRequireDefault(_white_person);

__webpack_require__(/*! ./Registration.scss */ "./src/pages/registration/one_page/Registration.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
Registration.propTypes = {};

//
function Registration(props) {

    //
    var _onSubmit = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
            var username, password, email, first_name, last_name, formData, res, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _handleScrollSmooth.handleScrollSmooth)(function () {
                                window.scroll(0, 0);
                            });

                            username = values.username, password = values.password, email = values.email;
                            first_name = values.first_name.trim();
                            last_name = values.last_name.trim();
                            formData = (0, _makeFormData2.default)({
                                username: username,
                                password: password,
                                email: email,
                                first_name: first_name,
                                last_name: last_name,
                                day: day,
                                month: month,
                                year: year
                            });
                            _context.prev = 5;
                            _context.next = 8;
                            return handleScreenFetching(function () {
                                return (0, _Signup.SignupRequest)(formData);
                            }, _react2.default.createElement(_FetchingDiv2.default, { is_fetching: true }));

                        case 8:
                            res = _context.sent;
                            data = res.data;


                            if (data == 'username_existed') {
                                setUserExisted(true);
                            } else if (data == 'email_existed') {
                                setEmailExisted(true);
                            } else {
                                sessionStorage.new_member = first_name + ' ' + last_name;

                                setDataUser({
                                    id: data.id,
                                    first_name: first_name,
                                    last_name: last_name,
                                    picture: _white_person2.default
                                });
                            }
                            _context.next = 16;
                            break;

                        case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](5);

                            console.log(_context.t0);

                        case 16:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[5, 13]]);
        }));

        return function _onSubmit(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        user = _useContext.user,
        setDataUser = _useContext.setDataUser;

    //


    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        username_existed = _useState2[0],
        setUserExisted = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        email_existed = _useState4[0],
        setEmailExisted = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        invalid = _useState6[0],
        setInvalid = _useState6[1];

    //


    var ref_register_elm = (0, _react.useRef)(null);

    //
    var handleScreenFetching = (0, _UseScreenFetching.useScreenFetching)();

    var _useInputDate = (0, _useInputDate2.useInputDate)({}),
        day = _useInputDate.day,
        month = _useInputDate.month,
        year = _useInputDate.year,
        handleChangeDay = _useInputDate.handleChangeDay,
        handleChangeMonth = _useInputDate.handleChangeMonth,
        handleChangeYear = _useInputDate.handleChangeYear;

    //


    (0, _react.useEffect)(function () {
        document.title = 'Registration';
        document.documentElement.setAttribute('data-theme', 'light');

        return function () {
            localStorage.light_mode != 1 && document.documentElement.setAttribute('data-theme', 'dark');
        };
    }, []);

    //
    function handleErrorBeforeSubmit(e, form_props) {
        if (form_props.dirty) {
            var err_keys = Object.keys(form_props.errors);

            if (err_keys.length) {
                (0, _handleScrollSmooth.handleScrollSmooth)(function () {
                    ref_register_elm.current.querySelector('[name=' + err_keys[0] + ']').scrollIntoView(false);
                });
            }
        }

        //
        var birth = new Date(year, month, day);

        if (birth > new Date() || birth <= new Date(1960)) {
            setInvalid(true);

            e.preventDefault();
        }
    }function closeMoreError() {
        username_existed && setUserExisted(false);
        email_existed && setEmailExisted(false);
        invalid && setInvalid(false);
    }

    //
    return _react2.default.createElement(
        'div',
        { ref: ref_register_elm },
        _react2.default.createElement(
            _formik.Formik,
            {
                initialValues: _RegistrationInitial.initialValues,
                validationSchema: _RegistrationInitial.validationSchema,
                onSubmit: function onSubmit(values, actions) {
                    _onSubmit(values);
                }
            },
            function (form_props) {
                return _react2.default.createElement(
                    _formik.Form,
                    {
                        autoComplete: 'off',
                        className: 'Registration_form App_Form brs-5px-md padding-8px',
                        onClick: closeMoreError
                    },
                    _react2.default.createElement(
                        'h2',
                        { className: 'App_title margin-0' },
                        'Sign up'
                    ),
                    ' ',
                    _react2.default.createElement('hr', { className: 'hr-bg' }),
                    _react2.default.createElement(
                        'div',
                        {
                            className: 'Registration_error text-red ' + (username_existed || email_existed ? '' : 'display-none')
                        },
                        _react2.default.createElement(
                            _IconDiv2.default,
                            { Icon: _IconsAction2.default, x: 400, y: 400 },
                            username_existed ? 'Username' : 'Email',
                            ' was existed'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _RegistrationInitial.fields.map(function (item, index) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: 'Registration_' + index,
                                    className: 'Registration_input'
                                },
                                _react2.default.createElement(_formik.FastField, {
                                    name: item.name,
                                    component: item.name.startsWith('password') ? _InputPassword2.default : _InputText2.default,
                                    label: item.label,
                                    placeholder: item.label + '...',
                                    help: item.help,
                                    max_length: item.max_length
                                })
                            );
                        }),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'font-500' },
                                    'Birth day'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_InputDate2.default, {
                                    day: day,
                                    month: month,
                                    year: year
                                    //
                                    , min_year: 1960,
                                    max_year: 2021
                                    //
                                    , invalid: invalid,
                                    title_invalid: 'Birth must be from 1960 to now'
                                    //
                                    , handleChangeDay: handleChangeDay,
                                    handleChangeMonth: handleChangeMonth,
                                    handleChangeYear: handleChangeYear
                                })
                            )
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'App_submit display-flex-center' },
                        _react2.default.createElement(
                            _ButtonRipple2.default,
                            {
                                type: 'submit',
                                onClick: function onClick(e) {
                                    return handleErrorBeforeSubmit(e, form_props);
                                }
                            },
                            'Sign up'
                        )
                    )
                );
            }
        )
    );
}

exports.default = Registration;

/***/ }),

/***/ "./src/pages/registration/step_by_step/_main/RegisterStep.js":
/*!*******************************************************************!*\
  !*** ./src/pages/registration/step_by_step/_main/RegisterStep.js ***!
  \*******************************************************************/
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

//

//

//


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ContextAPI = __webpack_require__(/*! ../../../../_context/ContextAPI */ "./src/_context/ContextAPI.js");

var _Signup = __webpack_require__(/*! ../../../../api/api_django_no_token/signup/Signup */ "./src/api/api_django_no_token/signup/Signup.js");

var _UseScreenFetching = __webpack_require__(/*! ../../../../_hooks/UseScreenFetching */ "./src/_hooks/UseScreenFetching.js");

var _useInputDate2 = __webpack_require__(/*! ../../../../_hooks/useInputDate */ "./src/_hooks/useInputDate.js");

var _makeFormData = __webpack_require__(/*! ../../../../_some_function/makeFormData */ "./src/_some_function/makeFormData.js");

var _makeFormData2 = _interopRequireDefault(_makeFormData);

var _handleScrollSmooth = __webpack_require__(/*! ../../../../_some_function/handleScrollSmooth */ "./src/_some_function/handleScrollSmooth.js");

var _IconsAction = __webpack_require__(/*! ../../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _IconDiv = __webpack_require__(/*! ../../../../component/some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

var _FetchingDiv = __webpack_require__(/*! ../../../../component/some_div/fetching/FetchingDiv */ "./src/component/some_div/fetching/FetchingDiv.js");

var _FetchingDiv2 = _interopRequireDefault(_FetchingDiv);

var _RegistrationInitial = __webpack_require__(/*! ../../../../_initial/register/RegistrationInitial */ "./src/_initial/register/RegistrationInitial.js");

__webpack_require__(/*! ./RegisterStepCommon.scss */ "./src/pages/registration/step_by_step/_main/RegisterStepCommon.scss");

var _RegisterBirth = __webpack_require__(/*! ../birth/RegisterBirth */ "./src/pages/registration/step_by_step/birth/RegisterBirth.js");

var _RegisterBirth2 = _interopRequireDefault(_RegisterBirth);

var _RegisterName = __webpack_require__(/*! ../name/RegisterName */ "./src/pages/registration/step_by_step/name/RegisterName.js");

var _RegisterName2 = _interopRequireDefault(_RegisterName);

var _RegisterEmail = __webpack_require__(/*! ../email/RegisterEmail */ "./src/pages/registration/step_by_step/email/RegisterEmail.js");

var _RegisterEmail2 = _interopRequireDefault(_RegisterEmail);

var _RegisterAccount = __webpack_require__(/*! ../account/RegisterAccount */ "./src/pages/registration/step_by_step/account/RegisterAccount.js");

var _RegisterAccount2 = _interopRequireDefault(_RegisterAccount);

var _RegisterNexPrev = __webpack_require__(/*! ../next_prev/RegisterNexPrev */ "./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.js");

var _RegisterNexPrev2 = _interopRequireDefault(_RegisterNexPrev);

var _white_person = __webpack_require__(/*! ../../../../../image/white_person.svg */ "./image/white_person.svg");

var _white_person2 = _interopRequireDefault(_white_person);

__webpack_require__(/*! ./RegisterStep.scss */ "./src/pages/registration/step_by_step/_main/RegisterStep.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
RegisterStep.propTypes = {};

//
function RegisterStep() {

    //
    var _onSubmit = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
            var username, password, email, first_name, last_name, formData, res, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            (0, _handleScrollSmooth.handleScrollSmooth)(function () {
                                window.scroll(0, 0);
                            });

                            username = values.username, password = values.password, email = values.email;
                            first_name = values.first_name.trim();
                            last_name = values.last_name.trim();
                            formData = (0, _makeFormData2.default)({
                                username: username,
                                password: password,
                                email: email,
                                first_name: first_name,
                                last_name: last_name,
                                day: day,
                                month: month,
                                year: year
                            });
                            _context.prev = 5;
                            _context.next = 8;
                            return handleScreenFetching(function () {
                                return (0, _Signup.SignupRequest)(formData);
                            }, _react2.default.createElement(_FetchingDiv2.default, { is_fetching: true }));

                        case 8:
                            res = _context.sent;
                            data = res.data;


                            if (data == 'username_existed') {
                                setUserExisted(true);
                            } else if (data == 'email_existed') {
                                setEmailExisted(true);
                            } else {
                                sessionStorage.new_member = first_name + ' ' + last_name;

                                setDataUser({
                                    id: data.id,
                                    first_name: first_name,
                                    last_name: last_name,
                                    picture: _white_person2.default
                                });
                            }
                            _context.next = 16;
                            break;

                        case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](5);

                            console.log(_context.t0);

                        case 16:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[5, 13]]);
        }));

        return function _onSubmit(_x2) {
            return _ref.apply(this, arguments);
        };
    }();

    //


    //
    var _useContext = (0, _react.useContext)(_ContextAPI.context_api),
        setDataUser = _useContext.setDataUser;

    //


    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        username_existed = _useState2[0],
        setUserExisted = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        email_existed = _useState4[0],
        setEmailExisted = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        invalid = _useState6[0],
        setInvalid = _useState6[1];

    var _useState7 = (0, _react.useState)(0),
        _useState8 = _slicedToArray(_useState7, 2),
        c_step = _useState8[0],
        setCStep = _useState8[1];

    //


    var handleScreenFetching = (0, _UseScreenFetching.useScreenFetching)();

    var _useInputDate = (0, _useInputDate2.useInputDate)({}),
        day = _useInputDate.day,
        month = _useInputDate.month,
        year = _useInputDate.year,
        handleChangeDay = _useInputDate.handleChangeDay,
        handleChangeMonth = _useInputDate.handleChangeMonth,
        handleChangeYear = _useInputDate.handleChangeYear;

    //


    (0, _react.useEffect)(function () {
        document.title = 'Registration';
        document.documentElement.setAttribute('data-theme', 'light');

        return function () {
            localStorage.light_mode != 1 && document.documentElement.setAttribute('data-theme', 'dark');
        };
    }, []);

    /* -------- COMMON -------- */

    //
    function handleFormValid(form_props) {
        var field_arr = _RegistrationInitial.register_step_obj[c_step].fields;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = field_arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var field = _step.value;

                if (form_props.errors[field] || !form_props.touched[field]) {
                    return false;
                }
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

        return true;
    }

    //
    function handleValidBirth() {
        var birth = new Date(year, month, day);
        var is_invalid = birth > new Date() || birth <= new Date(1960);

        setInvalid(is_invalid);
        return !is_invalid;
    }

    //
    function handleOtherValid() {
        if (_RegistrationInitial.register_step_obj[c_step].part == 'birth') {
            return handleValidBirth();
        }
    }

    /* ----------------- */

    //
    function handleNextPrevStep(form_props) {
        var is_next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var new_c_step = c_step + (is_next ? 1 : -1);

        if (new_c_step < 0 || new_c_step >= _RegistrationInitial.register_step_count) {
            return;
        }

        if (!is_next) {
            setCStep(c_step - 1);

            return;
        }

        var is_valid = _RegistrationInitial.register_step_obj[c_step].form_valid ? handleFormValid(form_props) : handleOtherValid();

        is_valid && setCStep(c_step + 1);
    }function closeMoreError() {
        username_existed && setUserExisted(false);
        email_existed && setEmailExisted(false);
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _formik.Formik,
                {
                    initialValues: _RegistrationInitial.initialValues,
                    validationSchema: _RegistrationInitial.validationSchema,
                    onSubmit: function onSubmit(values, actions) {
                        _onSubmit(values);
                    }
                },
                function (form_props) {
                    return _react2.default.createElement(
                        _formik.Form,
                        {
                            autoComplete: 'off',
                            className: 'RegistrationStep_form App_Form brs-8px-pc padding-8px',
                            onClick: closeMoreError
                        },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h2',
                                { className: 'App_title margin-0' },
                                'Sign up'
                            ),
                            ' ',
                            _react2.default.createElement('hr', { className: 'hr-bg' }),
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'RegistrationStep_error text-red ' + (username_existed || email_existed ? '' : 'display-none')
                                },
                                _react2.default.createElement(
                                    _IconDiv2.default,
                                    { Icon: _IconsAction2.default, x: 400, y: 400 },
                                    username_existed ? 'Username' : 'Email',
                                    ' ',
                                    'was existed'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'div',
                                {
                                    className: 'RegistrationStep_row display-flex',
                                    style: {
                                        transform: 'translateX(' + -100 * c_step / 4 + '%)'
                                    }
                                },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'RegistrationStep_part' },
                                    _react2.default.createElement(
                                        'div',
                                        {
                                            className: '' + (c_step == 0 ? '' : 'display-none')
                                        },
                                        _react2.default.createElement(_RegisterName2.default, null)
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'RegistrationStep_part' },
                                    _react2.default.createElement(
                                        'div',
                                        {
                                            className: '' + (c_step == 1 ? '' : 'display-none')
                                        },
                                        _react2.default.createElement(_RegisterBirth2.default, {
                                            day: day,
                                            month: month,
                                            year: year
                                            //
                                            , min_year: 1960,
                                            max_year: 2021
                                            //
                                            , invalid: invalid,
                                            title_invalid: 'Birth must be from 1960 to now'
                                            //
                                            , handleChangeDay: handleChangeDay,
                                            handleChangeMonth: handleChangeMonth,
                                            handleChangeYear: handleChangeYear
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'RegistrationStep_part' },
                                    _react2.default.createElement(
                                        'div',
                                        {
                                            className: '' + (c_step == 2 ? '' : 'display-none')
                                        },
                                        _react2.default.createElement(_RegisterEmail2.default, null)
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'RegistrationStep_part' },
                                    _react2.default.createElement(
                                        'div',
                                        {
                                            className: '' + (c_step == 3 ? '' : 'display-none')
                                        },
                                        _react2.default.createElement(_RegisterAccount2.default, null)
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(_RegisterNexPrev2.default, {
                            c_step: c_step,
                            form_props: form_props,
                            handleNextPrevStep: handleNextPrevStep
                        })
                    );
                }
            )
        )
    );
}

exports.default = RegisterStep;

/***/ }),

/***/ "./src/pages/registration/step_by_step/account/RegisterAccount.js":
/*!************************************************************************!*\
  !*** ./src/pages/registration/step_by_step/account/RegisterAccount.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputText = __webpack_require__(/*! ../../../../component/input/input_text/InputText */ "./src/component/input/input_text/InputText.js");

var _InputText2 = _interopRequireDefault(_InputText);

var _InputPassword = __webpack_require__(/*! ../../../../component/input/input_password/InputPassword */ "./src/component/input/input_password/InputPassword.js");

var _InputPassword2 = _interopRequireDefault(_InputPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
RegisterAccount.propTypes = {};

//
function RegisterAccount() {
    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                { className: 'register-part-title' },
                'Account to login'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    'Username and password has 5-15 letters, numbers and no spaces. Password has at least a upper letter'
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'register-part-item' },
                    _react2.default.createElement(_formik.FastField, {
                        name: 'username',
                        component: _InputText2.default,
                        label: '',
                        placeholder: 'username',
                        max_length: 15
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'register-part-item' },
                    _react2.default.createElement(_formik.FastField, {
                        name: 'password',
                        component: _InputPassword2.default,
                        label: '',
                        placeholder: 'password',
                        max_length: 15
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'register-part-item' },
                    _react2.default.createElement(_formik.FastField, {
                        name: 'password_confirm',
                        component: _InputPassword2.default,
                        label: '',
                        placeholder: 'password confirm',
                        max_length: 15
                    })
                )
            )
        )
    );
}

exports.default = RegisterAccount;

/***/ }),

/***/ "./src/pages/registration/step_by_step/birth/RegisterBirth.js":
/*!********************************************************************!*\
  !*** ./src/pages/registration/step_by_step/birth/RegisterBirth.js ***!
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

var _InputDate = __webpack_require__(/*! ../../../../component/input/date/_main/InputDate */ "./src/component/input/date/_main/InputDate.js");

var _InputDate2 = _interopRequireDefault(_InputDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
RegisterBirth.propTypes = {};

//

//
function RegisterBirth(_ref) {
    var day = _ref.day,
        month = _ref.month,
        year = _ref.year,
        invalid = _ref.invalid,
        handleChangeDay = _ref.handleChangeDay,
        handleChangeMonth = _ref.handleChangeMonth,
        handleChangeYear = _ref.handleChangeYear;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                { className: 'register-part-title' },
                'When were you born?'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    'Birth must be from 1960 to now'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'register-part-item' },
                _react2.default.createElement(_InputDate2.default, {
                    day: day,
                    month: month,
                    year: year
                    //
                    , min_year: 1960,
                    max_year: 2021
                    //
                    , invalid: invalid,
                    title_invalid: 'Birth must be from 1960 to now'
                    //
                    , handleChangeDay: handleChangeDay,
                    handleChangeMonth: handleChangeMonth,
                    handleChangeYear: handleChangeYear
                })
            )
        )
    );
}

exports.default = RegisterBirth;

/***/ }),

/***/ "./src/pages/registration/step_by_step/email/RegisterEmail.js":
/*!********************************************************************!*\
  !*** ./src/pages/registration/step_by_step/email/RegisterEmail.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputText = __webpack_require__(/*! ../../../../component/input/input_text/InputText */ "./src/component/input/input_text/InputText.js");

var _InputText2 = _interopRequireDefault(_InputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
RegisterEmail.propTypes = {};

//

//
function RegisterEmail() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                { className: 'register-part-title' },
                'Your email'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    'Email must like "**@gmail.com"'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'register-part-item' },
                _react2.default.createElement(_formik.FastField, {
                    name: 'email',
                    component: _InputText2.default,
                    label: '',
                    placeholder: 'email'
                })
            )
        )
    );
}

exports.default = RegisterEmail;

/***/ }),

/***/ "./src/pages/registration/step_by_step/name/RegisterName.js":
/*!******************************************************************!*\
  !*** ./src/pages/registration/step_by_step/name/RegisterName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputText = __webpack_require__(/*! ../../../../component/input/input_text/InputText */ "./src/component/input/input_text/InputText.js");

var _InputText2 = _interopRequireDefault(_InputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
RegisterName.propTypes = {};

//

//
function RegisterName() {
    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h2',
                { className: 'register-part-title' },
                'What is your name?'
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    'Last name and first name has 1-20 letters, spaces and start with a letter'
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'register-part-item' },
                    _react2.default.createElement(_formik.FastField, {
                        name: 'first_name',
                        component: _InputText2.default,
                        label: '',
                        placeholder: 'first name',
                        max_length: 20
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'register-part-item' },
                    _react2.default.createElement(_formik.FastField, {
                        name: 'last_name',
                        component: _InputText2.default,
                        label: '',
                        placeholder: 'last name',
                        max_length: 20
                    })
                )
            )
        )
    );
}

exports.default = RegisterName;

/***/ }),

/***/ "./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.js":
/*!**************************************************************************!*\
  !*** ./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.js ***!
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

var _ButtonRipple = __webpack_require__(/*! ../../../../component/button/button_ripple/ButtonRipple */ "./src/component/button/button_ripple/ButtonRipple.js");

var _ButtonRipple2 = _interopRequireDefault(_ButtonRipple);

var _RegistrationInitial = __webpack_require__(/*! ../../../../_initial/register/RegistrationInitial */ "./src/_initial/register/RegistrationInitial.js");

__webpack_require__(/*! ./RegisterNexPrev.scss */ "./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

// 
RegisterNexPrev.propTypes = {};

//

//

//
function RegisterNexPrev(_ref) {
    var c_step = _ref.c_step,
        form_props = _ref.form_props,
        handleNextPrevStep = _ref.handleNextPrevStep;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'display-flex' },
            _react2.default.createElement(
                'div',
                {
                    className: 'RegisterNexPrev_btn btn btn-active w-100per text-align-center text-white ' + (c_step == 0 ? 'display-none' : ''),
                    onClick: function onClick() {
                        return handleNextPrevStep(form_props, false);
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'padding-8px bg-blue brs-5px' },
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Prev'
                    )
                )
            ),
            c_step == _RegistrationInitial.register_step_count - 1 ? _react2.default.createElement(
                'div',
                { className: 'RegisterNexPrev_btn App_submit w-100per' },
                _react2.default.createElement(
                    _ButtonRipple2.default,
                    { type: 'submit' },
                    'Sign up'
                )
            ) : _react2.default.createElement(
                'div',
                {
                    className: 'RegisterNexPrev_btn btn btn-active w-100per text-align-center text-white',
                    onClick: function onClick() {
                        return handleNextPrevStep(form_props);
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'padding-8px bg-blue brs-5px' },
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Next'
                    )
                )
            )
        )
    );
}

exports.default = RegisterNexPrev;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_password/InputPassword.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_password/InputPassword.scss ***!
  \************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".InputPassword_input {\n  border: 1px solid var(--md-color-secondary);\n}\n.InputPassword_input:focus {\n  outline: none;\n}\n\n.InputPassword_valid {\n  border: 1px solid var(--success);\n}\n\n.InputPassword_invalid {\n  border: 1px solid var(--danger);\n}\n\n/* eye */\n.InputPassword__eye {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/component/input/input_password/InputPassword.scss"],"names":[],"mappings":"AACA;EACI,2CAAA;AAAJ;AAEI;EACI,aAAA;AAAR;;AAIA;EACI,gCAAA;AADJ;;AAIA;EACI,+BAAA;AADJ;;AAIA,QAAA;AACA;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;EACA,eAAA;AADJ","sourcesContent":["//\r\n.InputPassword_input {\r\n    border: 1px solid var(--md-color-secondary);\r\n\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n}\r\n//\r\n.InputPassword_valid {\r\n    border: 1px solid var(--success);\r\n}\r\n//\r\n.InputPassword_invalid {\r\n    border: 1px solid var(--danger);\r\n}\r\n\r\n/* eye */\r\n.InputPassword__eye {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/one_page/Registration.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/one_page/Registration.scss ***!
  \********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Registration_form {\n  padding: 0.5rem;\n  max-width: 500px;\n  background-image: linear-gradient(45deg, var(--success), var(--blue-tear));\n  /* btn ripple bg */\n}\n.Registration_form .App_submit display-flex-center .ButtonRipple {\n  background-color: var(--green);\n}\n\n.Registration_error {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  border: 2px solid var(--danger);\n  background-color: var(--heart-blur);\n}\n\n.Registration_input {\n  margin: 1rem 0;\n}\n.Registration_input input {\n  border-radius: 20px;\n  padding: 8px 15px;\n}", "",{"version":3,"sources":["webpack://./src/pages/registration/one_page/Registration.scss"],"names":[],"mappings":"AACA;EACI,eAAA;EACA,gBAAA;EAEA,0EAAA;EAEA,kBAAA;AAFJ;AAGI;EACI,8BAAA;AADR;;AAKA;EACI,gBAAA;EACA,eAAA;EACA,+BAAA;EACA,mCAAA;AAFJ;;AAKA;EACI,cAAA;AAFJ;AAGI;EACI,mBAAA;EACA,iBAAA;AADR","sourcesContent":["//\r\n.Registration_form {\r\n    padding: 0.5rem;\r\n    max-width: 500px;\r\n\r\n    background-image: linear-gradient(45deg, var(--success), var(--blue-tear));\r\n\r\n    /* btn ripple bg */\r\n    .App_submit display-flex-center .ButtonRipple {\r\n        background-color: var(--green);\r\n    }\r\n}\r\n\r\n.Registration_error {\r\n    margin-top: 1rem;\r\n    padding: 0.5rem;\r\n    border: 2px solid var(--danger);\r\n    background-color: var(--heart-blur);\r\n}\r\n\r\n.Registration_input {\r\n    margin: 1rem 0;\r\n    input {\r\n        border-radius: 20px;\r\n        padding: 8px 15px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/_main/RegisterStep.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/_main/RegisterStep.scss ***!
  \******************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".RegistrationStep_form {\n  max-width: 500px;\n  overflow: hidden;\n  background-image: linear-gradient(45deg, var(--success), var(--blue-tear));\n  /* btn ripple bg */\n}\n.RegistrationStep_form .App_submit display-flex-center .ButtonRipple {\n  background-color: var(--green);\n}\n\n.RegistrationStep_error {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  border: 2px solid var(--danger);\n  background-color: var(--heart-blur);\n}\n\n.RegistrationStep_row {\n  width: 400%;\n  transition: transform 250ms ease;\n}\n\n.RegistrationStep_part {\n  width: 100%;\n  min-height: 25rem;\n  padding: 8px;\n}\n.RegistrationStep_part input {\n  border-radius: 20px;\n  padding: 8px 15px;\n}\n\n.RegisterStep_next_prev {\n  margin: 0 0.25rem;\n}", "",{"version":3,"sources":["webpack://./src/pages/registration/step_by_step/_main/RegisterStep.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,gBAAA;EAEA,0EAAA;EAEA,kBAAA;AADJ;AAEI;EACI,8BAAA;AAAR;;AAIA;EACI,gBAAA;EACA,eAAA;EACA,+BAAA;EACA,mCAAA;AADJ;;AAIA;EACI,WAAA;EACA,gCAAA;AADJ;;AAIA;EACI,WAAA;EACA,iBAAA;EACA,YAAA;AADJ;AAGI;EACI,mBAAA;EACA,iBAAA;AADR;;AAKA;EACI,iBAAA;AAFJ","sourcesContent":[".RegistrationStep_form {\r\n    max-width: 500px;\r\n    overflow: hidden;\r\n\r\n    background-image: linear-gradient(45deg, var(--success), var(--blue-tear));\r\n\r\n    /* btn ripple bg */\r\n    .App_submit display-flex-center .ButtonRipple {\r\n        background-color: var(--green);\r\n    }\r\n}\r\n\r\n.RegistrationStep_error {\r\n    margin-top: 1rem;\r\n    padding: 0.5rem;\r\n    border: 2px solid var(--danger);\r\n    background-color: var(--heart-blur);\r\n}\r\n\r\n.RegistrationStep_row {\r\n    width: 400%;\r\n    transition: transform 250ms ease;\r\n}\r\n// .\r\n.RegistrationStep_part {\r\n    width: 100%;\r\n    min-height: 25rem;\r\n    padding: 8px;\r\n\r\n    input {\r\n        border-radius: 20px;\r\n        padding: 8px 15px;\r\n    }\r\n}\r\n\r\n.RegisterStep_next_prev{\r\n    margin: 0 0.25rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/_main/RegisterStepCommon.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/_main/RegisterStepCommon.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".register-part-title {\n  margin: 0 0 1rem;\n  font-size: 18px;\n}\n\n.register-part-item {\n  margin: 1rem 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/registration/step_by_step/_main/RegisterStepCommon.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,eAAA;AACJ;;AAEA;EACI,cAAA;AACJ","sourcesContent":[".register-part-title{\r\n    margin: 0 0 1rem;\r\n    font-size: 18px;\r\n}\r\n\r\n.register-part-item{\r\n    margin: 1rem 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".RegisterNexPrev_btn {\n  margin: 0 0.25rem;\n  height: 40px;\n}", "",{"version":3,"sources":["webpack://./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.scss"],"names":[],"mappings":"AAAA;EACI,iBAAA;EACA,YAAA;AACJ","sourcesContent":[".RegisterNexPrev_btn{\r\n    margin: 0 0.25rem;\r\n    height: 40px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/input/input_password/InputPassword.scss":
/*!***************************************************************!*\
  !*** ./src/component/input/input_password/InputPassword.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputPassword_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./InputPassword.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_password/InputPassword.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputPassword_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputPassword_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/registration/one_page/Registration.scss":
/*!***********************************************************!*\
  !*** ./src/pages/registration/one_page/Registration.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Registration.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/one_page/Registration.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/registration/step_by_step/_main/RegisterStep.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/registration/step_by_step/_main/RegisterStep.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterStep_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./RegisterStep.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/_main/RegisterStep.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterStep_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterStep_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/registration/step_by_step/_main/RegisterStepCommon.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/registration/step_by_step/_main/RegisterStepCommon.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterStepCommon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./RegisterStepCommon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/_main/RegisterStepCommon.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterStepCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterStepCommon_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterNexPrev_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js!./RegisterNexPrev.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/step_by_step/next_prev/RegisterNexPrev.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterNexPrev_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_RegisterNexPrev_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_registration__main_RegisterCommon_js.js.map