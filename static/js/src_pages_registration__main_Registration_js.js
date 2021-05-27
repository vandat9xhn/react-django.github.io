(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_registration__main_Registration_js"],{

/***/ "./src/_icons_svg/icons_eye/IconsEye.js":
/*!**********************************************!*\
  !*** ./src/_icons_svg/icons_eye/IconsEye.js ***!
  \**********************************************/
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

// import './IconsEye.scss';

//
IconsEye.propTypes = {
    size_icon: _propTypes2.default.string,
    color: _propTypes2.default.string,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number,
    close_eye: _propTypes2.default.bool
};

IconsEye.defaultProps = {
    x: 0,
    y: 0,
    size_icon: '1.5rem',
    close_eye: true
};

/**
    IconsEye: (x, y)
        1. Eye show password: (200, 200)
*/
function IconsEye(props) {
    var size_icon = props.size_icon,
        x = props.x,
        y = props.y,
        close_eye = props.close_eye;

    return _react2.default.createElement(
        'svg',
        {
            className: 'IconsEye',
            height: size_icon,
            width: size_icon,
            viewBox: x + ' ' + y + ' 200 200',
            stroke: 'var(--black-brown)',
            fill: 'var(--black-brown)',
            strokeLinecap: 'round'
        },
        _react2.default.createElement('path', {
            d: 'M200,300 Q300,200 400,300 Q300,400 200,300',
            fill: 'none',
            strokeWidth: '10'
        }),
        _react2.default.createElement('circle', {
            className: close_eye ? 'display-none' : '',
            cx: '300',
            cy: '300',
            r: '30'
        }),
        _react2.default.createElement(
            'g',
            { className: close_eye ? '' : 'display-none' },
            _react2.default.createElement('path', { d: 'M200,300 Q300,350 400,300', fill: 'none', strokeWidth: '20' }),
            _react2.default.createElement('line', { x1: '210', y1: '210', x2: '390', y2: '390', strokeWidth: '30' })
        )
    );
};

exports.default = IconsEye;

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

var _DefaultLogin = __webpack_require__(/*! ../../../pages/login_form/_default/DefaultLogin */ "./src/pages/login_form/_default/DefaultLogin.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// registration

//
var SignupRequest = exports.SignupRequest = function SignupRequest(data) {
    return (0, _ConstAPI.API_FakeReal)(_DefaultLogin.default_login, function () {
        return (0, _AxiosNoToken2.default)({
            method: 'POST',
            data: data,
            url: '/registration/sign-up/'
        });
    });
};

/***/ }),

/***/ "./src/component/button/button_ripple/ButtonRipple.js":
/*!************************************************************!*\
  !*** ./src/component/button/button_ripple/ButtonRipple.js ***!
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

__webpack_require__(/*! ./ButtonRipple.scss */ "./src/component/button/button_ripple/ButtonRipple.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ButtonRipple.propTypes = {
    type: _propTypes2.default.string,
    title: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    ripple_type: _propTypes2.default.string,

    children: _propTypes2.default.any,
    onClick: _propTypes2.default.func
};
//


ButtonRipple.defaultProps = {
    title: '',
    type: 'text',
    ripple_type: 'right',
    disabled: false
};

//
function ButtonRipple(props) {
    // ripple_type is one of ['right', 'left', 'center']
    var children = props.children,
        onClick = props.onClick,
        type = props.type,
        disabled = props.disabled,
        ripple_type = props.ripple_type,
        title = props.title;

    //

    return _react2.default.createElement(
        'button',
        {
            className: 'ButtonRipple label-field ' + (disabled ? 'opacity-5 pointer-events-none' : 'cursor-pointer'),
            type: type,
            title: title,
            disabled: disabled,
            onClick: onClick
        },
        _react2.default.createElement('div', {
            className: 'ButtonRipple_common ButtonRipple_' + ripple_type + ' ' + (disabled ? 'display-none' : '')
        }),
        children
    );
}

exports.default = ButtonRipple;

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

// class
function InputPassword(props) {
    // state
    var _useState = (0, _react.useState)(true),
        _useState2 = _slicedToArray(_useState, 2),
        type_password = _useState2[0],
        setType = _useState2[1];

    // change type


    var ChangeTypePassword = function ChangeTypePassword() {
        setType(!type_password);
    };

    var field = props.field,
        form = props.form,
        label = props.label,
        placeholder = props.placeholder,
        max_length = props.max_length,
        help = props.help;
    var name = field.name;
    var touched = form.touched,
        errors = form.errors;

    var showError = touched[name] && errors[name];

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                { className: 'label-field', htmlFor: name },
                label
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'InputPassword_password' },
            _react2.default.createElement('input', _extends({
                className: 'InputPassword_input brs-5px ' + (touched[name] && !errors[name] ? 'InputPassword_valid' : '') + ' ' + (touched[name] && !!errors[name] ? 'InputPassword_invalid' : '')
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

exports.default = InputPassword;

/***/ }),

/***/ "./src/component/input/input_text/InputText.js":
/*!*****************************************************!*\
  !*** ./src/component/input/input_text/InputText.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// 

// 


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconDiv = __webpack_require__(/*! ../../some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

var _IconsAction = __webpack_require__(/*! ../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

__webpack_require__(/*! ./InputText.scss */ "./src/component/input/input_text/InputText.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

InputText.propTypes = {
    // field form of formik
    field: _propTypes2.default.object,
    form: _propTypes2.default.object,
    // properties
    type: _propTypes2.default.string,
    label: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    dataList: _propTypes2.default.array,
    help: _propTypes2.default.string,
    max_length: _propTypes2.default.number
};

InputText.defaultProps = {
    dataList: [],
    type: 'text'
};

// 
function InputText(props) {
    var field = props.field,
        form = props.form,
        type = props.type,
        label = props.label,
        placeholder = props.placeholder,
        dataList = props.dataList,
        help = props.help,
        max_length = props.max_length;
    var name = field.name;
    var touched = form.touched,
        errors = form.errors;

    var showError = touched[name] && errors[name];
    var dataListId = 'list_' + name + '_' + label;

    //
    return _react2.default.createElement(
        'div',
        { className: 'InputText' },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                { className: 'label-field', htmlFor: name },
                label
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', _extends({
                className: 'InputText_input brs-5px ' + (touched[name] && !errors[name] ? 'InputText_valid' : '') + ' ' + (touched[name] && !!errors[name] ? 'InputText_invalid' : '')
            }, field, {
                placeholder: placeholder,
                type: type,
                list: dataListId,
                maxLength: max_length
            }))
        ),
        _react2.default.createElement(
            'datalist',
            { id: dataListId },
            dataList.map(function (item, index) {
                return _react2.default.createElement(
                    'option',
                    { key: 'InputText_' + index },
                    item
                );
            })
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

exports.default = InputText;

/***/ }),

/***/ "./src/pages/registration/_default/DefaultResgitration.js":
/*!****************************************************************!*\
  !*** ./src/pages/registration/_default/DefaultResgitration.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fields = exports.validationSchema = exports.initialValues = undefined;

var _yup = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");

var Yup = _interopRequireWildcard(_yup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// const
var initialValues = exports.initialValues = {
    username: '',
    password: '',
    password_confirm: '',
    email: '',
    first_name: '',
    last_name: ''
};

var validationSchema = exports.validationSchema = Yup.object().shape({
    username: Yup.string().matches(/^[a-zA-Z0-9]{5,15}$/, 'Username is invalid').required(),
    password: Yup.string().matches( true && /[A-Z]/, 'Password is invalid').required(),
    password_confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Password is not right').required(),
    email: Yup.string().email('Invalid email').matches(/^\S{3,10}@[a-z]mail\.com$/, 'Invalid email').required(),
    first_name: Yup.string().matches(/^[a-zA-Z]{1}[a-zA-Z ]{1,20}$/, 'First name is invalid').required().trim('First name is invalid'),
    last_name: Yup.string().matches(/^[a-zA-Z]{1}[a-zA-Z ]{1,14}$/, 'Last name is invalid').required().trim('First name is invalid')
});

// 
var fields = exports.fields = [{
    name: 'username',
    type: 'text',
    label: 'Username',
    help: '5-15 letters and no space',
    max_length: 15
}, {
    name: 'password',
    type: 'password',
    label: 'Password',
    help: '5-15 letters, no space and at least 1 uppercase letter',
    max_length: 15
}, {
    name: 'password_confirm',
    type: 'password',
    label: 'Password confirm',
    help: 'Confirm your password',
    max_length: 15
}, {
    name: 'email',
    type: 'email',
    label: 'Email',
    help: '***@*mail.com'
}, {
    name: 'first_name',
    type: 'text',
    label: 'First name',
    help: '1-20 letters, spaces and start with a letter',
    max_length: 20
}, {
    name: 'last_name',
    type: 'text',
    label: 'Last name',
    help: '1-15 letters, spaces and start with a letter',
    max_length: 15
}];

/***/ }),

/***/ "./src/pages/registration/_main/Registration.js":
/*!******************************************************!*\
  !*** ./src/pages/registration/_main/Registration.js ***!
  \******************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formik = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _Signup = __webpack_require__(/*! ../../../api/api_django_no_token/signup/Signup */ "./src/api/api_django_no_token/signup/Signup.js");

var _makeFormData = __webpack_require__(/*! ../../../_some_function/makeFormData */ "./src/_some_function/makeFormData.js");

var _makeFormData2 = _interopRequireDefault(_makeFormData);

var _ButtonRipple = __webpack_require__(/*! ../../../component/button/button_ripple/ButtonRipple */ "./src/component/button/button_ripple/ButtonRipple.js");

var _ButtonRipple2 = _interopRequireDefault(_ButtonRipple);

var _BlurFetchingDiv = __webpack_require__(/*! ../../../component/some_div/fetching/BlurFetchingDiv */ "./src/component/some_div/fetching/BlurFetchingDiv.js");

var _BlurFetchingDiv2 = _interopRequireDefault(_BlurFetchingDiv);

var _IconDiv = __webpack_require__(/*! ../../../component/some_div/icon_div/IconDiv */ "./src/component/some_div/icon_div/IconDiv.js");

var _IconDiv2 = _interopRequireDefault(_IconDiv);

var _IconsAction = __webpack_require__(/*! ../../../_icons_svg/icons_action/IconsAction */ "./src/_icons_svg/icons_action/IconsAction.js");

var _IconsAction2 = _interopRequireDefault(_IconsAction);

var _FetchingDiv = __webpack_require__(/*! ../../../component/some_div/fetching/FetchingDiv */ "./src/component/some_div/fetching/FetchingDiv.js");

var _FetchingDiv2 = _interopRequireDefault(_FetchingDiv);

var _DefaultResgitration = __webpack_require__(/*! ../_default/DefaultResgitration */ "./src/pages/registration/_default/DefaultResgitration.js");

var _InputText = __webpack_require__(/*! ../../../component/input/input_text/InputText */ "./src/component/input/input_text/InputText.js");

var _InputText2 = _interopRequireDefault(_InputText);

var _InputPassword = __webpack_require__(/*! ../../../component/input/input_password/InputPassword */ "./src/component/input/input_password/InputPassword.js");

var _InputPassword2 = _interopRequireDefault(_InputPassword);

__webpack_require__(/*! ./Registration.scss */ "./src/pages/registration/_main/Registration.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
Registration.propTypes = {};

//
function Registration(props) {

    // submit
    var _onSubmit = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(values) {
            var username, password, first_name, last_name, email, formData, res, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            username = values.username, password = values.password, first_name = values.first_name, last_name = values.last_name, email = values.email;

                            window.scroll(0, 0);
                            setSubmitting(true);
                            // make form data
                            formData = (0, _makeFormData2.default)({
                                username: username,
                                password: password,
                                email: email,
                                first_name: first_name,
                                last_name: last_name
                            });
                            //

                            _context.prev = 4;
                            _context.next = 7;
                            return (0, _Signup.SignupRequest)(formData);

                        case 7:
                            res = _context.sent;
                            data = res.data;
                            //

                            if (data == 'username_existed') {
                                setUserExisted(true);
                                setSubmitting(false);
                                //
                            } else if (data == 'email_existed') {
                                setEmailExisted(true);
                                setSubmitting(false);
                                //
                            } else {
                                sessionStorage.new_member = 1;
                                setDataUser({
                                    id: data.user_id,
                                    first_name: data.first_name,
                                    last_name: data.last_name,
                                    picture: data.picture
                                });
                            }
                            //
                            _context.next = 17;
                            break;

                        case 12:
                            _context.prev = 12;
                            _context.t0 = _context['catch'](4);

                            console.log(_context.t0);
                            alert('Something was wrong');
                            setSubmitting(false);

                        case 17:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[4, 12]]);
        }));

        return function _onSubmit(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    // close more error


    //
    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        submitting = _useState2[0],
        setSubmitting = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        username_existed = _useState4[0],
        setUserExisted = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        email_existed = _useState6[0],
        setEmailExisted = _useState6[1];

    //


    (0, _react.useEffect)(function () {
        document.title = 'Registration';
    }, []);function closeMoreError() {
        username_existed && setUserExisted(false);
        email_existed && setEmailExisted(false);
    }

    // 
    if (localStorage.is_login == 1) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' });
    }
    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _formik.Formik,
            {
                initialValues: _DefaultResgitration.initialValues,
                validationSchema: _DefaultResgitration.validationSchema,
                onSubmit: function onSubmit(values, actions) {
                    // console.log(actions);
                    _onSubmit(values);
                }
            },
            function (props) {
                return _react2.default.createElement(
                    _formik.Form,
                    {
                        autoComplete: 'off',
                        className: 'Registration_form App_Form brs-5px App_box_shadow',
                        onClick: closeMoreError
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'App_title' },
                        'Sign up'
                    ),
                    _react2.default.createElement('hr', { className: 'App_hr-bg' }),
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
                    _DefaultResgitration.fields.map(function (item, index) {
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
                    ')',
                    _react2.default.createElement(
                        'div',
                        { className: 'App_submit' },
                        _react2.default.createElement(
                            _ButtonRipple2.default,
                            {
                                type: 'submit',
                                title: 'Sign up',
                                disabled: submitting
                            },
                            'Sign up'
                        )
                    )
                );
            }
        ),
        _react2.default.createElement(_BlurFetchingDiv2.default, {
            FetchingComponent: _FetchingDiv2.default,
            open_fetching: submitting
        })
    );
}

exports.default = Registration;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss ***!
  \***********************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/******** Button *******/\n.ButtonRipple {\n  position: relative;\n  height: 2.5rem;\n  background-color: var(--blue);\n  border-radius: 5px;\n  overflow: hidden;\n  color: whitesmoke;\n  /****** Button Ripple Common ******/\n  /****** Ripple type ******/\n}\n.ButtonRipple:hover {\n  opacity: 0.8;\n}\n.ButtonRipple:focus {\n  outline: none;\n}\n.ButtonRipple:active .ButtonRipple_common {\n  opacity: 1;\n  transition: 0s;\n}\n.ButtonRipple:active .ButtonRipple_center {\n  transform: translate(-50%, -50%) scale(0);\n}\n.ButtonRipple:active .ButtonRipple_right, .ButtonRipple:active .ButtonRipple_left {\n  width: 0%;\n}\n.ButtonRipple .ButtonRipple_common {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  background-color: white;\n  border-radius: 5px;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.ButtonRipple .ButtonRipple_right {\n  top: 0;\n  left: 0;\n}\n.ButtonRipple .ButtonRipple_left {\n  top: 0;\n  right: 0;\n}\n.ButtonRipple .ButtonRipple_center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n}", "",{"version":3,"sources":["webpack://./src/component/button/button_ripple/ButtonRipple.scss"],"names":[],"mappings":"AAEA,wBAAA;AACA;EACI,kBAAA;EACA,cAAA;EAEA,6BAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EAqBA,mCAAA;EAaA,0BAAA;AAlCJ;AAEI;EACI,YAbE;AAaV;AAEI;EACI,aAAA;AAAR;AAGQ;EACI,UAAA;EACA,cAAA;AADZ;AAGQ;EACI,yCAAA;AADZ;AAGQ;EACI,SAAA;AADZ;AAMI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EAEA,uBAAA;EACA,kBAAA;EACA,UAAA;EAEA,oBAAA;AANR;AAUI;EACI,MAAA;EACA,OAAA;AARR;AAUI;EACI,MAAA;EACA,QAAA;AARR;AAUI;EACI,QAAA;EACA,SAAA;EACA,yCAAA;AARR","sourcesContent":["$opacity: 0.8;\r\n\r\n/******** Button *******/\r\n.ButtonRipple{\r\n    position: relative;\r\n    height: 2.5rem;\r\n\r\n    background-color: var(--blue);\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    color: whitesmoke;\r\n\r\n    &:hover{\r\n        opacity: $opacity;\r\n    }\r\n    &:focus{\r\n        outline: none;\r\n    }\r\n    &:active{\r\n        .ButtonRipple_common{\r\n            opacity: 1;\r\n            transition: 0s;\r\n        }\r\n        .ButtonRipple_center{\r\n            transform: translate(-50%, -50%) scale(0);\r\n        }\r\n        .ButtonRipple_right, .ButtonRipple_left{\r\n            width: 0%;\r\n        }\r\n    }\r\n    \r\n    /****** Button Ripple Common ******/\r\n    .ButtonRipple_common{\r\n        position: absolute;\r\n        width: 120%;\r\n        height: 100%;\r\n    \r\n        background-color: white;\r\n        border-radius: 5px;\r\n        opacity: 0;\r\n    \r\n        transition: all 0.3s;\r\n    }\r\n    \r\n    /****** Ripple type ******/\r\n    .ButtonRipple_right{\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n    .ButtonRipple_left{\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n    .ButtonRipple_center{\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%) scale(1);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ".InputPassword_password {\n  position: relative;\n}\n\n.InputPassword_input {\n  width: 100%;\n  padding: 0.5rem;\n}\n.InputPassword_input:focus {\n  outline: none;\n}\n\n.InputPassword_valid {\n  border: 2px solid var(--success);\n}\n\n.InputPassword_invalid {\n  border: 2px solid var(--danger);\n}\n\n/* eye */\n.InputPassword__eye {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/component/input/input_password/InputPassword.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;AACJ;;AAGA;EACI,WAAA;EACA,eAAA;AAAJ;AAEI;EACI,aAAA;AAAR;;AAIA;EACI,gCAAA;AADJ;;AAIA;EACI,+BAAA;AADJ;;AAIA,QAAA;AACA;EACI,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;EACA,eAAA;AADJ","sourcesContent":[".InputPassword_password{\r\n    position: relative;\r\n}\r\n\r\n//\r\n.InputPassword_input{\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n\r\n    &:focus{\r\n        outline: none;\r\n    }\r\n}\r\n//\r\n.InputPassword_valid{\r\n    border: 2px solid var(--success);\r\n}\r\n//\r\n.InputPassword_invalid{\r\n    border: 2px solid var(--danger);\r\n}\r\n\r\n/* eye */\r\n.InputPassword__eye{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_text/InputText.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_text/InputText.scss ***!
  \****************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".InputText_input {\n  width: 100%;\n  padding: 0.5rem;\n}\n.InputText_input:focus {\n  outline: none;\n}\n\n.InputText_valid {\n  border: 2px solid var(--success);\n}\n\n.InputText_invalid {\n  border: 2px solid var(--danger);\n}\n\n@media (max-width: 500px) {\n  .InputText_input {\n    padding: 0.35rem;\n  }\n}\n@media (max-width: 300px) {\n  .InputText_input {\n    padding: 0.25rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/input/input_text/InputText.scss"],"names":[],"mappings":"AAEA;EACI,WAAA;EACA,eAAA;AADJ;AAGI;EACI,aAAA;AADR;;AAKA;EACI,gCAAA;AAFJ;;AAKA;EACI,+BAAA;AAFJ;;AAOA;EACI;IACI,gBAAA;EAJN;AACF;AAOA;EACI;IACI,gBAAA;EALN;AACF","sourcesContent":["\r\n//\r\n.InputText_input{\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n\r\n    &:focus{\r\n        outline: none;\r\n    }\r\n}\r\n//\r\n.InputText_valid{\r\n    border: 2px solid var(--success);\r\n}\r\n//\r\n.InputText_invalid{\r\n    border: 2px solid var(--danger);\r\n}\r\n\r\n\r\n//\r\n@media (max-width: 500px){\r\n    .InputText_input{\r\n        padding: 0.35rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px){\r\n    .InputText_input{\r\n        padding: 0.25rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/_main/Registration.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/_main/Registration.scss ***!
  \*****************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Registration_form {\n  margin-top: 1rem;\n  max-width: 27rem;\n}\n\n/* btn ripple bg */\n.App_submit .ButtonRipple {\n  background-color: var(--green);\n}\n\n.Registration_error {\n  margin-top: 1rem;\n  padding: 0.5rem;\n  border: 2px solid var(--danger);\n  background-color: var(--heart-blur);\n}\n\n.Registration_input {\n  margin: 1rem 0;\n}", "",{"version":3,"sources":["webpack://./src/pages/registration/_main/Registration.scss"],"names":[],"mappings":"AACA;EACI,gBAAA;EACA,gBAAA;AAAJ;;AAGA,kBAAA;AACA;EACI,8BAAA;AAAJ;;AAGA;EACI,gBAAA;EACA,eAAA;EACA,+BAAA;EACA,mCAAA;AAAJ;;AAGA;EACI,cAAA;AAAJ","sourcesContent":["//\r\n.Registration_form{\r\n    margin-top: 1rem;\r\n    max-width: 27rem;\r\n}\r\n\r\n/* btn ripple bg */\r\n.App_submit .ButtonRipple{\r\n    background-color: var(--green);\r\n}\r\n\r\n.Registration_error{\r\n    margin-top: 1rem;\r\n    padding: 0.5rem;\r\n    border: 2px solid var(--danger);\r\n    background-color: var(--heart-blur);\r\n}\r\n\r\n.Registration_input{\r\n    margin: 1rem 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/component/button/button_ripple/ButtonRipple.scss":
/*!**************************************************************!*\
  !*** ./src/component/button/button_ripple/ButtonRipple.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ButtonRipple.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/button/button_ripple/ButtonRipple.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ButtonRipple_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./src/component/input/input_text/InputText.scss":
/*!*******************************************************!*\
  !*** ./src/component/input/input_text/InputText.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputText_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./InputText.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/input/input_text/InputText.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputText_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_InputText_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/pages/registration/_main/Registration.scss":
/*!********************************************************!*\
  !*** ./src/pages/registration/_main/Registration.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./Registration.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pages/registration/_main/Registration.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_pages_registration__main_Registration_js.js.map