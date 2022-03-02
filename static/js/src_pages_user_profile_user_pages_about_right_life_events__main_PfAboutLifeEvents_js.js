(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_pages_user_profile_user_pages_about_right_life_events__main_PfAboutLifeEvents_js"],{

/***/ "./src/pages/user_profile/user_pages/about/right/life_events/_main/PfAboutLifeEvents.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/life_events/_main/PfAboutLifeEvents.js ***!
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

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutLifeEvent = __webpack_require__(/*! ../life_event/_main/PfAboutLifeEvent */ "./src/pages/user_profile/user_pages/about/right/life_events/life_event/_main/PfAboutLifeEvent.js");

var _PfAboutLifeEvent2 = _interopRequireDefault(_PfAboutLifeEvent);

var _about = __webpack_require__(/*! ../../../../../../../_initial/profile/about */ "./src/_initial/profile/about.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
PfAboutLifeEvents.propTypes = {};

//
function PfAboutLifeEvents(props) {

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
                                life_event_arr: about_obj.life_event_arr,

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

    var _useState = (0, _react.useState)((0, _about.initial_life_state)()),
        _useState2 = _slicedToArray(_useState, 2),
        about_state = _useState2[0],
        setAboutState = _useState2[1];

    var life_event_arr = about_state.life_event_arr,
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
            _react2.default.createElement(_PfAboutLifeEvent2.default, {
                life_event_arr: life_event_arr,
                has_fetched: has_fetched
            })
        )
    );
}

exports.default = PfAboutLifeEvents;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/life_events/life_event/_main/PfAboutLifeEvent.js":
/*!********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/life_events/life_event/_main/PfAboutLifeEvent.js ***!
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

var _UseForceUpdate = __webpack_require__(/*! ../../../../../../../../_hooks/UseForceUpdate */ "./src/_hooks/UseForceUpdate.js");

var _ProfileHandleAPI = __webpack_require__(/*! ../../../../../../../../_handle_api/profile/ProfileHandleAPI */ "./src/_handle_api/profile/ProfileHandleAPI.js");

var _PfAboutAdd = __webpack_require__(/*! ../../../_component/add/PfAboutAdd */ "./src/pages/user_profile/user_pages/about/right/_component/add/PfAboutAdd.js");

var _PfAboutAdd2 = _interopRequireDefault(_PfAboutAdd);

var _PfAboutLifeEventEdit = __webpack_require__(/*! ../edit/PfAboutLifeEventEdit */ "./src/pages/user_profile/user_pages/about/right/life_events/life_event/edit/PfAboutLifeEventEdit.js");

var _PfAboutLifeEventEdit2 = _interopRequireDefault(_PfAboutLifeEventEdit);

var _PfAboutLifeEventItem = __webpack_require__(/*! ../item/PfAboutLifeEventItem */ "./src/pages/user_profile/user_pages/about/right/life_events/life_event/item/PfAboutLifeEventItem.js");

var _PfAboutLifeEventItem2 = _interopRequireDefault(_PfAboutLifeEventItem);

var _AboutNoItem = __webpack_require__(/*! ../../../_component/no_item/AboutNoItem */ "./src/pages/user_profile/user_pages/about/right/_component/no_item/AboutNoItem.js");

var _AboutNoItem2 = _interopRequireDefault(_AboutNoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutLifeEvent.propTypes = {
    life_event_arr: _propTypes2.default.array
};

//

//
function PfAboutLifeEvent(_ref) {
    var life_event_arr = _ref.life_event_arr,
        has_fetched = _ref.has_fetched;

    //
    var forceUpdate = (0, _UseForceUpdate.useForceUpdate)();

    //
    function handleCreate(data) {
        var life_event = data.life_event,
            permission = data.permission;


        life_event_arr.push({
            id: 101 + life_event_arr.length,
            title: life_event,
            life_event: life_event,
            permission: permission
        });
        forceUpdate();
    }

    //
    var no_item = !life_event_arr.length;

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            { className: 'PfAbout_title' },
            'Life Events'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _AboutNoItem2.default,
                {
                    has_fetched: has_fetched,
                    no_item: no_item,
                    title: 'No life event to show'
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'PfAbout_add' },
                        _react2.default.createElement(_PfAboutAdd2.default, {
                            title_add: 'Add a life event',
                            item_obj: {
                                life_event: '',
                                permission: 0
                            },
                            ComponentEdit: _PfAboutLifeEventEdit2.default,
                            handleCreate: handleCreate,
                            handle_API_C: _ProfileHandleAPI.handle_API_LifeEvent_C
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        life_event_arr.map(function (life_event_obj) {
                            return _react2.default.createElement(
                                'div',
                                {
                                    key: 'PfAboutLifeEvent_' + life_event_obj.id
                                },
                                _react2.default.createElement(_PfAboutLifeEventItem2.default, {
                                    life_event_obj: life_event_obj
                                })
                            );
                        })
                    )
                )
            )
        )
    );
}

exports.default = PfAboutLifeEvent;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/life_events/life_event/edit/PfAboutLifeEventEdit.js":
/*!***********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/life_events/life_event/edit/PfAboutLifeEventEdit.js ***!
  \***********************************************************************************************************/
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
PfAboutLifeEventEdit.propTypes = {
    item_obj: _propTypes2.default.object,
    handleSave: _propTypes2.default.func,
    handleCancel: _propTypes2.default.func
};

//
function PfAboutLifeEventEdit(props) {
    //
    var item_obj = props.item_obj,
        handleSave = props.handleSave,
        handleCancel = props.handleCancel;
    var permission = item_obj.permission,
        life_event = item_obj.life_event;

    //

    var _useState = (0, _react.useState)(life_event),
        _useState2 = _slicedToArray(_useState, 2),
        cur_life_event = _useState2[0],
        setCurLifeEvent = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        life_event_error = _useState4[0],
        setLifeEventError = _useState4[1];

    //


    function handleChangeLifeEvent(e) {
        setCurLifeEvent(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_life_event) || life_event != '' && cur_life_event == '') {
            handleSave({
                permission: new_permission,
                life_event: cur_life_event.trim()
            });
        } else {
            setLifeEventError(true);
        }
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: life_event_error ? 'text-red' : 'display-none' },
            _react2.default.createElement(
                'div',
                null,
                'LifeEvent must have at least 2 letters!'
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
                    name: 'life_event',
                    value: cur_life_event,
                    type: 'text',
                    placeholder: 'Life event',
                    handleChange: handleChangeLifeEvent
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

exports.default = PfAboutLifeEventEdit;

/***/ }),

/***/ "./src/pages/user_profile/user_pages/about/right/life_events/life_event/item/PfAboutLifeEventItem.js":
/*!***********************************************************************************************************!*\
  !*** ./src/pages/user_profile/user_pages/about/right/life_events/life_event/item/PfAboutLifeEventItem.js ***!
  \***********************************************************************************************************/
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

var _PfAboutLifeEventEdit = __webpack_require__(/*! ../edit/PfAboutLifeEventEdit */ "./src/pages/user_profile/user_pages/about/right/life_events/life_event/edit/PfAboutLifeEventEdit.js");

var _PfAboutLifeEventEdit2 = _interopRequireDefault(_PfAboutLifeEventEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

//
PfAboutLifeEventItem.propTypes = {
    life_event_obj: _propTypes2.default.object
};

//

//
function PfAboutLifeEventItem(props) {
    //
    var life_event_obj = props.life_event_obj;

    //

    function handleUpdateItemObj(data) {
        var life_event = data.life_event,
            permission = data.permission;


        life_event_obj.title = life_event;
        life_event_obj.permission = permission;
        life_event_obj.life_event = life_event;
    }

    //
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AboutRowItemEdit2.default, {
            item_obj: life_event_obj,
            Icon: _GroupIconProfileAbout.IconsProfileAbout.life_event,
            ComponentEdit: _PfAboutLifeEventEdit2.default,
            handle_API_U: _ProfileHandleAPI.handle_API_LifeEvent_U,
            handleUpdateItemObj: handleUpdateItemObj
        })
    );
}

exports.default = PfAboutLifeEventItem;

/***/ })

}]);
//# sourceMappingURL=src_pages_user_profile_user_pages_about_right_life_events__main_PfAboutLifeEvents_js.js.map