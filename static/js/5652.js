(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[5652],{7392:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconsProfileAbout=void 0;var r=l(n(67294)),a=l(n(4299));function l(e){return e&&e.__esModule?e:{default:e}}t.IconsProfileAbout={work:r.default.createElement(a.default,null),university:r.default.createElement(a.default,null),school:r.default.createElement(a.default,null),family:r.default.createElement(a.default,null),relationship:r.default.createElement(a.default,null),town:r.default.createElement(a.default,null),city:r.default.createElement(a.default,null),life_event:r.default.createElement(a.default,null),you:r.default.createElement(a.default,null),favour:r.default.createElement(a.default,null),other_name:r.default.createElement(a.default,null),email:r.default.createElement(a.default,{x:200}),phone:r.default.createElement(a.default,{y:200}),address:r.default.createElement(a.default,null),gender:r.default.createElement(a.default,null),birth:r.default.createElement(a.default,null),lang:r.default.createElement(a.default,null)}},82403:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useForceUpdate=void 0;var r=n(67294);t.useForceUpdate=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),t=e[0],n=e[1];return function(){n(!t)}}},25275:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useFocusBlur=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),t=e[0],n=e[1];return{is_focus:t,setIsFocus:n,handleFocus:function(){n(!0)},handleBlur:function(){n(!1)}}};var r=n(67294)},35155:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useMounted=function(){var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!0),2),t=e[0],n=e[1];return(0,r.useEffect)((function(){return function(){n(!1)}}),[]),t};var r=n(67294)},23337:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=l(n(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,n=e.x,a=e.y,l=e.color,i=e.is_editing;return r.default.createElement("svg",{className:"IconsEdit size-icon",width:t,height:t,viewBox:n+" "+a+" 200 200"},r.default.createElement("path",{d:"M0,200 L15,160 L175,0 L200,25 L40,185 Z",fill:l}),r.default.createElement("g",{stroke:"whiteSmoke",strokeWidth:"15"},r.default.createElement("line",{x1:"150",y1:"25",x2:"175",y2:"50"}),r.default.createElement("line",{x1:"20",y1:"155",x2:"45",y2:"180"})),r.default.createElement("g",{className:i?"EditIcons_active":"display-none",fill:"var(--md-color)"},r.default.createElement("circle",{cx:"80",cy:"190",r:"10"}),r.default.createElement("circle",{cx:"130",cy:"190",r:"10"}),r.default.createElement("circle",{cx:"180",cy:"190",r:"10"})))}n(91242),i.propTypes={x:a.default.number,y:a.default.number,size_icon:a.default.string,color:a.default.string,is_editing:a.default.bool},i.defaultProps={x:0,y:0,size_icon:"1.5rem",color:"var(--blue)",is_editing:!1},t.default=i},17892:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GetIdSlug=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";try{var n=(0,r.useParams)();return e?+n[t]:n[t]}catch(t){return e?parseInt(location.pathname.split("/").slice(-1)[0]):location.pathname.split("/").slice(-1)[0]}};var r=n(93191)},6797:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=i(n(45697)),l=n(25275);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.name,n=e.value,a=e.type,i=e.placeholder,u=e.max_length,o=e.handleChange,s=(0,l.useFocusBlur)(),d=s.is_focus,c=s.handleFocus,f=s.handleBlur;return r.default.createElement("div",{className:"InputNotValid position-rel "+(""!==n||d?"InputNotValid_text input-active":"")},r.default.createElement("input",{className:"InputNotValid_input brs-5px",name:t,type:a,maxLength:u,value:n,onChange:o,onFocus:c,onBlur:f}),r.default.createElement("div",{className:"InputNotValid_placeholder input-placeholder "+(d?"input-placeholder-active":"")},i))}n(8600),u.propTypes={name:a.default.string,type:a.default.string,placeholder:a.default.string,max_length:a.default.number,value:a.default.string,handleChange:a.default.func},u.defaultProps={type:"text",placeholder:"Placeholder",max_length:100},t.default=u},82919:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=u(n(45697)),l=u(n(37930)),i=u(n(57108));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.children,n=e.onClick;return r.default.createElement("div",{className:"AddDiv cursor-pointer label-field",onClick:n},r.default.createElement(i.default,{Icon:l.default,y:400,size_icon:"1rem"},t))}n(72997),o.propTypes={children:a.default.any,onClick:a.default.func},t.default=o},12702:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=i(n(45697)),l=i(n(78870));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.has_fetched,n=e.no_item,a=e.title;return r.default.createElement(l.default,{no_item:t&&n,title:a})}u.propTypes={has_fetched:a.default.bool,no_item:a.default.bool,title:l.default.propTypes.title},t.default=u},25237:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=i(n(45697)),l=n(27720);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.permission,n=e.show_title;return r.default.createElement("div",{className:"PermissionDiv padding-8px cursor-pointer hv-bg-blur "+(n?"brs-5px":"brs-50")},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",{className:"PermissionDiv_left display-flex-center"},l.IconsPermission[t].Icon),r.default.createElement("div",{className:n?"PermissionDiv_right":"display-none"},l.IconsPermission[t].title)))}n(28541),u.propTypes={permission:a.default.number,show_title:a.default.bool},u.defaultProps={permission:0,show_title:!1},t.default=u},57736:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=s(r),l=s(n(45697)),i=n(15130),u=s(n(23337)),o=s(n(25237));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=(0,r.useContext)(i.context_api).openScreenPermission,n=e.permission,l=e.is_editing,s=e.handleChoosePermission,d=e.toggleEdit;return a.default.createElement("div",null,a.default.createElement("div",{className:"display-flex align-item-center"},a.default.createElement("div",{className:"PermissionEditDiv_left "+(l?"display-none":""),onClick:function(){t(n,s)},title:"Change permission"},a.default.createElement(o.default,{permission:n,show_title:l})),a.default.createElement("div",{className:"display-flex-center"},a.default.createElement("div",{className:"PermissionEditDiv_right-icon display-flex-center brs-50 cursor-pointer hv-bg-blur",onClick:d,title:"Edit"},a.default.createElement(u.default,{is_editing:l,size_icon:"1rem"})))))}n(86943),d.propTypes={permission:l.default.number,is_editing:l.default.bool,handleChoosePermission:l.default.func,toggleEdit:l.default.func},t.default=d},39835:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_contact_basis_state={gender_obj:{gender:"",permission:0,title:""},lang_obj:{lang:"",permission:0,title:""},birth_obj:{birth:"",permission:0,title:""},email_obj:{id:0,title:"",email:"",permission:0},phone_arr:[{id:0,title:"",phone:"",permission:0}],address_arr:[{id:0,title:"",address:"",permission:0}],has_fetched:!1},t.initial_detail_state={you_obj:{id:0,title:"",you:"",permission:0},other_name_arr:[],favour_obj:{id:0,title:"",favour:"",permission:0},has_fetched:!1,no_item:!1},t.initial_life_state={life_event_arr:[],has_fetched:!1},t.initial_place_state={town_arr:[],city_arr:[],has_fetched:!1},t.initial_relation_state={relationship_obj:{relationship:"",permission:0},family_arr:[],has_fetched:!1},t.initial_work_edu_state={school_arr:[],university_arr:[],work_arr:[],has_fetched:!1},t.initial_overview_obj={work_arr:[{name:"",permission:0}]}},21716:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=d(r),l=(d(n(45697)),n(15130)),i=n(21092),u=n(35155),o=n(17892),s=d(n(82919));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){var t,n,d=(t=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E((function(){return _(t)}));case 2:p(t),x();case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(a,l){try{var i=e[a](l),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(u)}("next")}))},function(e){return n.apply(this,arguments)}),c=e.title_add,f=e.item_obj,m=e.ComponentEdit,p=e.handleCreate,_=e.handle_API_C,v=(0,r.useContext)(l.context_api).user.id==(0,o.GetIdSlug)(),h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),y=h[0],b=h[1],E=(0,i.useScreenFetching)(),g=(0,u.useMounted)();function x(){g&&b(!1)}return v&&a.default.createElement("div",{className:"PfAbout_add"},a.default.createElement("div",null,a.default.createElement("div",{className:"PfAboutAdd_add-contain "+(y?"display-none":""),onClick:function(){b(!0)}},a.default.createElement(s.default,null,c))),y&&a.default.createElement("div",null,a.default.createElement(m,{item_obj:f,handleCancel:function(){x()},handleSave:d})))}c.propTypes={},t.default=c},82322:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=o(r),l=o(n(45697)),i=n(15130),u=o(n(25237));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.permission,n=e.handleCancel,l=e.handleSave,o=(0,r.useContext)(i.context_api).openScreenPermission,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(t),2),d=s[0],c=s[1];return a.default.createElement("div",{className:"PfAboutConfirm"},a.default.createElement("div",{className:"display-flex align-items-center space-between"},a.default.createElement("div",{onClick:function(){o(d,(function(e){return c(e)}))}},a.default.createElement(u.default,{permission:d,show_title:!0})),a.default.createElement("div",null,a.default.createElement("div",{className:"display-flex align-items-center"},a.default.createElement("button",{className:"PfAboutConfirm_right_btn bg-ccc label-field hv-btn act-scale-sm",onClick:n},"Cancel"),a.default.createElement("button",{className:"PfAboutConfirm_right_btn bg-blue label-field text-white hv-btn act-scale-sm",onClick:function(){l(d)}},"Save")))))}n(30396),s.propTypes={permission:l.default.number,handleCancel:l.default.func,handleSave:l.default.func},t.default=s},68141:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(67294),l=f(a),i=f(n(45697)),u=n(15130),o=n(17892),s=f(n(4299)),d=f(n(48474)),c=f(n(12702));function f(e){return e&&e.__esModule?e:{default:e}}function m(e){var t=e.has_fetched,n=e.no_item,r=e.title,i=e.ComponentLeft,s=e.children,f=(0,a.useContext)(u.context_api).user.id==(0,o.GetIdSlug)();return l.default.createElement("div",null,l.default.createElement("div",{className:"text-secondary label-field"},l.default.createElement(c.default,{has_fetched:t&&!f,no_item:n,title:l.default.createElement(d.default,{ComponentLeft:i,ComponentRight:r})})),l.default.createElement("div",{className:t&&!f&&n?"display-none":""},s))}m.propTypes=r({},c.default.propTypes,{children:i.default.element,ComponentLeft:i.default.element}),m.defaultProps={ComponentLeft:l.default.createElement(s.default,{size_icon:"1.5rem"})},t.default=m},87163:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294)),a=u(n(45697)),l=u(n(57736)),i=u(n(48474));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.is_user,n=e.Icon,a=e.title,u=e.permission,o=e.is_editing,s=e.handleChoosePermission,d=e.toggleEdit;return r.default.createElement("div",null,r.default.createElement("div",{className:"AboutRowItem_left display-flex "+(o?"justify-content-end":"space-between")},r.default.createElement("div",{className:o?"display-none":"flex-grow-1"},r.default.createElement(i.default,{align_center:!1,ComponentLeft:n,ComponentRight:a})),t&&r.default.createElement("div",{className:"AboutRowItem_right"},r.default.createElement(l.default,{permission:u,is_editing:o,handleChoosePermission:s,toggleEdit:d}))))}n(59508),o.propTypes={is_user:a.default.bool,Icon:a.default.element,title:a.default.oneOfType([a.default.string,a.default.element]),permission:a.default.number,is_editing:a.default.bool,handleChoosePermission:a.default.func,toggleEdit:a.default.func},t.default=o},59487:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=c(r),l=c(n(45697)),i=n(15130),u=n(82403),o=n(21092),s=n(17892),d=c(n(87163));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,l){try{var i=t[a](l),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))}}function m(e){var t,n,l=(t=f(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j((function(){return h({permission:t})}));case 2:m.permission=t,C();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)}),c=(n=f(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j((function(){return h(t)}));case 2:y(t),P(!1);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),m=e.item_obj,p=e.Icon,_=e.label,v=e.ComponentEdit,h=e.handle_API_U,y=e.handleUpdateItemObj,b=(0,r.useContext)(i.context_api).user.id==(0,s.GetIdSlug)(),E=m.permission,g=m.title,x=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),w=x[0],P=x[1],C=(0,u.useForceUpdate)(),j=(0,o.useScreenFetching)();return a.default.createElement("div",{className:"AboutRowItemEdit "+(g?"":"display-none")},_&&a.default.createElement("div",null,a.default.createElement("div",{className:"label-field text-secondary"},_)),a.default.createElement("div",null,a.default.createElement("div",{className:"AboutRowItemEdit_item"},a.default.createElement(d.default,{is_user:b,Icon:p,title:g,permission:E,is_editing:w,handleChoosePermission:l,toggleEdit:function(){P(!w)}})),b&&w&&a.default.createElement("div",{className:"PfAbout_edit"},a.default.createElement(v,{item_obj:m,handleCancel:function(){P(!1)},handleSave:c}))))}n(40312),m.propTypes={item_obj:l.default.object,Icon:l.default.element,label:l.default.string,handle_API_U:l.default.func,ComponentEdit:l.default.func,handleUpdateItemObj:l.default.func},m.defaultProps={label:""},t.default=m},91242:(e,t,n)=>{"use strict";n.r(t)},8600:(e,t,n)=>{"use strict";n.r(t)},72997:(e,t,n)=>{"use strict";n.r(t)},28541:(e,t,n)=>{"use strict";n.r(t)},86943:(e,t,n)=>{"use strict";n.r(t)},30396:(e,t,n)=>{"use strict";n.r(t)},59508:(e,t,n)=>{"use strict";n.r(t)},40312:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=5652.js.map