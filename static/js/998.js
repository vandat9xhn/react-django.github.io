(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[998],{53692:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.useInputSelect=function(e){var t=e.all_data_arr,a=e.initial_data_str,l=e.multiple,d=void 0===l||l,i=e.delimiter,o=void 0===i?",":i,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)({cur_data_arr:a?a.split(o):[],value_input:"",option_data_arr:t.filter((function(e){return!a.includes(e)}))}),2),s=c[0],f=c[1],m=s.cur_data_arr,p=s.value_input,_=s.option_data_arr;return{cur_data_arr:m,option_data_arr:_,value_input:p,handleChangeInput:function(e){var a=e.target.value;f(n({},s,{value_input:a,option_data_arr:t.filter((function(e){return!m.includes(e)})).filter((function(e){return e.toLowerCase().includes(a.toLowerCase())}))}))},handleSelectOption:function(e){var a=d?[].concat(u(m),[_[e]]):[_[e]];!m.includes(_[e])&&f(n({},s,{cur_data_arr:a,value_input:"",option_data_arr:(d?_:t).filter((function(t,a){return a!=e}))}))},handleRemoveSelectedItem:function(e){f(n({},s,{cur_data_arr:m.filter((function(t,a){return a!=e})),option_data_arr:[].concat(u(_),[m[e]]).filter((function(e){return e.toLocaleLowerCase().includes(p.toLocaleLowerCase())}))}))}}};var l,r=a(67294);function u(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(l=a(45697))&&l.__esModule},82702:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294)),l=r(a(45697));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,a=e.x,l=e.y,r=e.close_eye;return n.default.createElement("svg",{className:"IconsEye",height:t,width:t,viewBox:a+" "+l+" 200 200",stroke:"var(--black-brown)",fill:"var(--black-brown)",strokeLinecap:"round"},n.default.createElement("path",{d:"M200,300 Q300,200 400,300 Q300,400 200,300",fill:"none",strokeWidth:"10"}),n.default.createElement("circle",{className:r?"display-none":"",cx:"300",cy:"300",r:"30"}),n.default.createElement("g",{className:r?"":"display-none"},n.default.createElement("path",{d:"M200,300 Q300,350 400,300",fill:"none",strokeWidth:"20"}),n.default.createElement("line",{x1:"210",y1:"210",x2:"390",y2:"390",strokeWidth:"30"})))}u.propTypes={size_icon:l.default.string,color:l.default.string,x:l.default.number,y:l.default.number,close_eye:l.default.bool},u.defaultProps={x:0,y:0,size_icon:"1.5rem",close_eye:!0},t.default=u},97619:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.joinArrayWithAnd=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[""];return 1==e.length?e[0]:e.slice(0,e.length-1).join(", ")+" and "+e.slice(-1)[0]}},22350:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),l=i(n),r=i(a(45697)),u=i(a(82702)),d=i(a(6797));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.password,a=e.name,r=e.placeholder,i=e.max_length,o=e.handleChange,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)("password"),2),s=c[0],f=c[1];return l.default.createElement("div",{className:"InputNotValidPass"},l.default.createElement("div",null,l.default.createElement(d.default,{name:a,type:s,placeholder:r,max_length:i,value:t,handleChange:o})),l.default.createElement("div",{className:"InputNotValidPass_eye"},l.default.createElement("div",{className:"InputNotValidPass_eye-contain hv-opacity",onClick:function(){f("password"==s?"text":"password")}},l.default.createElement(u.default,{x:200,y:200,close_eye:"password"==s}))))}a(41140),o.propTypes={password:r.default.string,name:r.default.string,placeholder:r.default.string,max_length:r.default.number,handleChange:r.default.func},o.defaultProps={placeholder:"Password",max_length:100},t.default=o},91617:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(67294),r=s(l),u=s(a(45697)),d=a(63609),i=s(a(35214)),o=s(a(15670)),c=s(a(95557));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.selected_item_arr,a=e.option_item_arr,u=e.value,o=e.multiple,c=e.placeholder,s=e.handleFocusInput,f=e.handleBlurInput,m=e.handleKeyDown,p=e.handleKeyUp,_=e.handleChangeInput,v=e.handleSelectOption,h=e.handleRemoveSelectedItem,b=e.ComponentSelectedList,y=e.ComponentOptionList,E=e.selected_props,g=e.option_props,j=(0,l.useRef)(null),P=(0,l.useRef)(null),I=(0,l.useRef)(null),C=(0,l.useRef)(80),A=(0,d.useFocusBlur)(),S=A.is_focus,O=(A.setIsFocus,A.handleFocus),M=A.handleBlur;return r.default.createElement(i.default,{makeDivHidden:function(){S&&(M(),f())}},r.default.createElement("div",{ref:P,className:"position-rel "+(S||u||t.length?"input-active":"")},r.default.createElement("div",{className:"InputSelect_head padding-8px brs-5px "+(S?"InputSelect_head-active":""),onClick:function(e){j.current.focus(),S||(O(),s())}},r.default.createElement("div",null,r.default.createElement(b,n({selected_item_arr:t,handleRemoveSelectedItem:h},E)),r.default.createElement("div",{className:"InputSelect_head-item "+(!o&&t.length?"display-none":"inline-block")},r.default.createElement("input",{className:"InputSelect_head-input",style:{width:C.current+"px"},ref:j,type:"text",value:u,onChange:function(e){C.current=I.current.offsetWidth,_(e)},onKeyDown:m,onKeyUp:p})))),r.default.createElement("div",{className:"input-placeholder bg-primary "+(S?"InputSelect_placeholder-active":"")},c),r.default.createElement("div",{className:"InputSelect_foot"},r.default.createElement(y,n({option_item_arr:a,value:u,handleSelectOption:v},g))),r.default.createElement("div",{ref:I,className:"InputSelect_input_length width-fit-content"},r.default.createElement("span",{className:"padding-8px"},u))))}a(96499),f.propTypes={selected_item_arr:u.default.array,option_item_arr:u.default.array,value:u.default.any,multiple:u.default.bool,placeholder:u.default.string,handleFocusInput:u.default.func,handleBlurInput:u.default.func,handleKeyDown:u.default.func,handleKeyUp:u.default.func,handleChangeInput:u.default.func,handleSelectOption:u.default.func,handleRemoveSelectedItem:u.default.func,ComponentSelectedList:u.default.func,ComponentOptionList:u.default.func,selected_props:u.default.object,option_props:u.default.object},f.defaultProps={multiple:!0,placeholder:"Write something",handleFocusInput:function(){},handleBlurInput:function(){},ComponentSelectedList:c.default,ComponentOptionList:o.default,selected_props:{},option_props:{}},t.default=f},15670:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294)),l=(r(a(45697)),r(a(6550)));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.value,a=e.option_item_arr,r=e.handleSelectOption;return n.default.createElement("div",{className:"InputSelectOptionList "+(t?"":"display-none")},n.default.createElement("div",{className:"InputSelectOptionList_contain bg-primary box-shadow-1"},n.default.createElement("ul",{className:"list-none"},a.map((function(e,t){return n.default.createElement("li",{key:"InputSelect_option_"+t},n.default.createElement(l.default,{ix:t,item:e,handleSelectOption:r}))})))))}u.propTypes={},t.default=u},6550:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294));function l(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.ix,a=e.item,l=e.handleSelectOption;return n.default.createElement("div",{className:"cursor-pointer hv-bg-blur padding-8px",onClick:function(){l(t)}},n.default.createElement("div",null,a))}l(a(45697)),r.propTypes={},t.default=r},95557:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294)),l=(r(a(45697)),r(a(91618)));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.selected_item_arr,a=e.handleRemoveSelectedItem;return n.default.createElement("div",{className:"inline-block"},t.map((function(e,t){return n.default.createElement("div",{key:"InputSelect_selected_"+t,className:"InputSelect_head-item inline-block"},n.default.createElement(l.default,{ix:t,item:e,handleRemoveSelectedItem:a}))})))}u.propTypes={},t.default=u},91618:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(67294)),l=(r(a(45697)),r(a(37930)));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.ix,a=e.item,r=e.handleRemoveSelectedItem;return n.default.createElement("div",{className:"InputSelectedItem brs-8px bg-active-fb text-blue"},n.default.createElement("div",{className:"InputSelectedItem_row"},n.default.createElement("div",{className:"inline-block label-field"},a),n.default.createElement("div",{className:"inline-block"},n.default.createElement("div",{className:"InputSelectedItem_icon display-flex-center cursor-pointer brs-50 hv-bg-blur",onClick:function(){r(t)}},n.default.createElement(l.default,{y:400,size_icon:"1rem"})))))}a(86004),u.propTypes={},t.default=u},15250:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(67294)),l=d(a(45697)),r=d(a(48474)),u=d(a(22421));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.title,a=e.ix,l=e.active_ix,d=e.handleChoose;return n.default.createElement("div",{className:"RadioItemCustom cursor-pointer hv-bg-blur",onClick:function(){d(a)}},n.default.createElement(r.default,{ComponentLeft:n.default.createElement(u.default,{is_active:a==l}),ComponentRight:t}))}i.propTypes={title:l.default.string,ix:l.default.number,active_ix:l.default.number,handleChoose:l.default.func},t.default=i},20469:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),l=u(a(45697)),r=u(a(15250));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.list,a=e.active_ix,l=e.handleChoose;return n.default.createElement("div",null,t.map((function(e,t){return n.default.createElement("div",{key:"RadioListCustom_"+t},n.default.createElement(r.default,{title:e.title,ix:t,active_ix:a,handleChoose:l}))})))}d.propTypes={list:l.default.array,active_ix:l.default.number,handleChoose:l.default.func},t.default=d},67262:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_lang_arr=["Vietnamese","English","Italian","French","Germany","Thai","Chinese","Lao"]},31157:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),l=(u(a(45697)),u(a(79335))),r=u(a(48600));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_part"},n.default.createElement(l.default,{phone_arr:[{id:1,title:"0123456789",phone:"0123456789",permission:0},{id:2,title:"9876543210",phone:"9876543210",permission:0}],email_obj:{id:1,title:"mymy@gmail.com",email:"mymy@gmail.com",permission:0},address_arr:[{id:1,title:"Ha Noi",address:"Ha Noi",permission:0},{id:2,title:"Vinh Phuc",address:"Vinh Phuc",permission:0}]})),n.default.createElement("div",{className:"PfAbout_part"},n.default.createElement(r.default,null)))}a(5271),d.propTypes={},t.default=d},48600:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(67294)),l=(d(a(45697)),d(a(96153))),r=d(a(11199)),u=d(a(40149));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){return n.default.createElement("div",null,n.default.createElement("h3",{className:"PfAbout_title"},"Basis info"),n.default.createElement("div",null,n.default.createElement(l.default,{gender_obj:{gender:"male",permission:0,title:"Male"}})),n.default.createElement("div",null,n.default.createElement(u.default,{birth_obj:{birth:"",permission:0,title:""}})),n.default.createElement("div",null,n.default.createElement(r.default,{lang_obj:{lang:"",permission:0,title:""}})))}i.propTypes={},t.default=i},40149:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(67294)),l=c(a(45697)),r=a(20804),u=a(70361),d=c(a(21716)),i=c(a(16075)),o=c(a(99681));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.birth_obj,a=(0,r.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add "+(""==t.birth?"":"display-none")},n.default.createElement(d.default,{title_add:"Add a birth",item_obj:{birth:"",permission:0},ComponentEdit:i.default,handleCreate:function(e){var n=e.birth,l=e.permission;t.title=n,t.birth=n,t.permission=l,a()},handle_API_C:u.handle_API_Birth_U})),n.default.createElement("div",{className:""==t.birth?"display-none":""},n.default.createElement(o.default,{birth_obj:t})))}s.propTypes={birth_obj:l.default.object},t.default=s},16075:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),l=d(n),r=d(a(45697)),u=d(a(82322));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.item_obj,a=e.handleSave,r=e.handleCancel,d=t.permission,i=t.birth,o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(i),2),c=o[0],s=o[1];return l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement("input",{value:c,type:"date",max:(new Date).toJSON().slice(0,10),onChange:function(e){s(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(u.default,{permission:d,handleCancel:r,handleSave:function(e){a({permission:e,birth:c})}})))}i.propTypes={item_obj:r.default.object,handleSave:r.default.func,handleCancel:r.default.func},t.default=i},99681:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),l=o(a(45697)),r=a(7392),u=a(70361),d=o(a(59487)),i=o(a(16075));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.birth_obj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(d.default,{item_obj:t,Icon:r.IconsProfileAbout.birth,label:"Birth",ComponentEdit:i.default,handle_API_U:u.handle_API_Birth_U,handleUpdateItemObj:function(e){var a=e.birth,n=e.permission;t.title=a,t.permission=n,t.birth=a}})))}c.propTypes={birth_obj:l.default.object},t.default=c},96153:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),l=(i(a(45697)),a(7392)),r=a(70361),u=i(a(59487)),d=i(a(10789));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.gender_obj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(u.default,{item_obj:t,Icon:l.IconsProfileAbout.gender,label:"Gender",ComponentEdit:d.default,handle_API_U:r.handle_API_Gender_U,handleUpdateItemObj:function(e){var a=e.gender,n=e.permission;t.permission=n,t.gender=a,t.title=a.slice(0,1).toUpperCase()+a.slice(1)}})))}a(19854),o.propTypes={},t.default=o},10789:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),l=i(n),r=i(a(45697)),u=i(a(20469)),d=i(a(82322));function i(e){return e&&e.__esModule?e:{default:e}}a(68038);var o=[{gender:"male",title:"Male"},{gender:"female",title:"Female"},{gender:"other",title:"Other"}];function c(e){var t=e.item_obj,a=e.handleSave,r=e.handleCancel,i=t.gender,c=t.permission,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(o.findIndex((function(e){return e.gender==i}))),2),f=s[0],m=s[1];return l.default.createElement("div",{className:"PfAbGenderEdit"},l.default.createElement("div",null,l.default.createElement(u.default,{list:o,active_ix:f,handleChoose:function(e){m(e)}})),l.default.createElement("div",null,l.default.createElement(d.default,{permission:c,handleSave:function(e){a({gender:o[f].gender,permission:e})},handleCancel:r})))}c.propTypes={gender:r.default.string,password:r.default.string,permission:r.default.number,handleSave:r.default.func,handleCancel:r.default.func},t.default=c},11199:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(67294)),l=s(a(45697)),r=a(20804),u=a(97619),d=a(70361),i=s(a(21716)),o=s(a(53049)),c=s(a(83695));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.lang_obj,a=(0,r.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add "+(""==t.title?"":"display-none")},n.default.createElement(i.default,{title_add:"Add a language",item_obj:{lang:"",permission:0},ComponentEdit:o.default,handleCreate:function(e){var n=e.lang,l=e.permission;t.title=(0,u.joinArrayWithAnd)(n.split(",")),t.lang=n,t.permission=l,a()},handle_API_C:d.handle_API_Lang_C})),n.default.createElement("div",null,n.default.createElement(c.default,{lang_obj:t,handleUpdateItemObj:function(e){var n=e.lang,l=e.permission;t.title=(0,u.joinArrayWithAnd)(n.split(",")),t.permission=l,t.lang=n,a()}})))}f.propTypes={lang_arr:l.default.array},t.default=f},53049:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),l=o(a(45697)),r=a(53692),u=o(a(91617)),d=a(67262),i=o(a(82322));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,l=e.handleCancel,o=t.permission,c=t.lang,s=(0,r.useInputSelect)({all_data_arr:d.data_lang_arr,initial_data_str:c}),f=s.cur_data_arr,m=s.option_data_arr,p=s.value_input,_=s.handleChangeInput,v=s.handleSelectOption,h=s.handleRemoveSelectedItem;return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_input"},n.default.createElement(u.default,{selected_item_arr:f,option_item_arr:m,value:p,placeholder:"Language",handleChangeInput:_,handleSelectOption:v,handleRemoveSelectedItem:h})),n.default.createElement("div",null,n.default.createElement(i.default,{permission:o,handleCancel:l,handleSave:function(e){a({permission:e,lang:f.join(",")})}})))}c.propTypes={item_obj:l.default.object,handleSave:l.default.func,handleCancel:l.default.func},t.default=c},83695:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),l=o(a(45697)),r=(a(97619),a(7392)),u=a(70361),d=o(a(59487)),i=o(a(53049));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.lang_obj,a=e.handleUpdateItemObj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(d.default,{item_obj:t,Icon:r.IconsProfileAbout.lang,label:"Language",ComponentEdit:i.default,handle_API_U:u.handle_API_Lang_U,handleUpdateItemObj:a})))}c.propTypes={lang_obj:l.default.object},t.default=c},79335:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(67294)),l=(d(a(45697)),d(a(82919)),d(a(92411))),r=d(a(97045)),u=d(a(93869));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.phone_arr,a=e.address_arr,d=e.email_obj;return n.default.createElement("div",{className:"PfAboutContact"},n.default.createElement("h3",{className:"PfAbout_title"},"Contact info"),n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(r.default,{phone_arr:t})),n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(u.default,{address_arr:a})),n.default.createElement("div",null,n.default.createElement(l.default,{email_obj:d})))}i.propTypes={},t.default=i},93869:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(67294)),l=c(a(45697)),r=a(20804),u=a(70361),d=c(a(21716)),i=c(a(3167)),o=c(a(17836));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.address_arr,a=(0,r.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(d.default,{title_add:"Add a address",item_obj:{address:"",permission:0},ComponentEdit:i.default,handleCreate:function(e){var n=e.address,l=e.permission;t.push({id:101+t.length,title:n,address:n,permission:l}),a()},handle_API_C:u.handle_API_Address_C})),n.default.createElement("div",null,t.map((function(e){return n.default.createElement("div",{key:"PfAboutAddress_"+e.id},n.default.createElement(o.default,{address_obj:e}))}))))}s.propTypes={address_arr:l.default.array},t.default=s},3167:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=a(67294),r=o(l),u=o(a(45697)),d=o(a(82322)),i=o(a(6797));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,o=t.permission,c=t.address,s=(0,l.useState)(c),f=n(s,2),m=f[0],p=f[1],_=(0,l.useState)(!1),v=n(_,2),h=v[0],b=v[1];return r.default.createElement("div",null,r.default.createElement("div",{className:h?"text-red":"display-none"},r.default.createElement("div",null,"Address must have at least 2 letters!"),r.default.createElement("br",null)),r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_input"},r.default.createElement(i.default,{name:"address",value:m,type:"text",placeholder:"Your address",handleChange:function(e){p(e.target.value)}}))),r.default.createElement("div",null,r.default.createElement(d.default,{permission:o,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(m)||""!=c&&""==m?a({permission:e,address:m.trim()}):b(!0)}})))}c.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=c},17836:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),l=o(a(45697)),r=a(7392),u=a(70361),d=o(a(59487)),i=o(a(3167));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.address_obj;return n.default.createElement("div",null,n.default.createElement(d.default,{item_obj:t,Icon:r.IconsProfileAbout.address,ComponentEdit:i.default,handle_API_U:u.handle_API_Address_U,handleUpdateItemObj:function(e){var a=e.address,n=e.permission;t.title=a,t.permission=n,t.address=a}}))}c.propTypes={address_obj:l.default.object},t.default=c},92411:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),l=(i(a(45697)),a(7392)),r=a(70361),u=i(a(59487)),d=i(a(63023));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.email_obj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(u.default,{item_obj:t,Icon:l.IconsProfileAbout.email,label:"Mail",ComponentEdit:d.default,handle_API_U:r.handle_API_Email_U,handleUpdateItemObj:function(e){var a=e.email,n=(e.password,e.permission);t.permission=n,t.email=a,t.title=a}})))}a(51189),o.propTypes={},t.default=o},63023:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(67294),r=c(l),u=c(a(45697)),d=c(a(6797)),i=c(a(22350)),o=c(a(82322));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,c=t.email,f=t.permission,m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)({cur_email:c,cur_pass:"",is_error:!1}),2),p=m[0],_=m[1],v=p.cur_email,h=p.cur_pass,b=p.is_error;function y(e,t){var a;_(n({},p,(s(a={},e,t.target.value),s(a,"is_error",!1),a)))}return r.default.createElement("div",{className:"PfAbEmailEdit"},r.default.createElement("div",{className:b?"":"display-none"},r.default.createElement("div",{className:"text-red"},"Your email does not look like a real email!"),r.default.createElement("br",null)),r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_input"},r.default.createElement(d.default,{name:"email",value:v,type:"email",placeholder:"Email",handleChange:function(e){y("cur_email",e)}})),r.default.createElement("div",{className:"PfAbout_input"},r.default.createElement(i.default,{name:"password",password:h,placeholder:"Confirm Password",handleChange:function(e){y("cur_pass",e)}}))),r.default.createElement("div",null,r.default.createElement(o.default,{permission:f,handleSave:function(e){/^[a-zA-Z0-9]{4,}@[a-z]{2,10}\.[a-z]{2,10}$/.test(v)?a({email:v,password:h,permission:e}):_(n({},p,{is_error:!0}))},handleCancel:u})))}a(71265),f.propTypes={email:u.default.string,password:u.default.string,permission:u.default.number,handleSave:u.default.func,handleCancel:u.default.func},t.default=f},97045:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(67294)),l=c(a(45697)),r=a(20804),u=a(70361),d=c(a(21716)),i=c(a(54100)),o=c(a(49165));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.phone_arr,a=(0,r.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(d.default,{title_add:"Add a phone",item_obj:{phone:"",permission:0},ComponentEdit:i.default,handleCreate:function(e){var n=e.phone,l=e.permission;t.push({id:101+t.length,title:n,phone:n,permission:l}),a()},handle_API_C:u.handle_API_Phone_C})),n.default.createElement("div",null,t.map((function(e){return n.default.createElement("div",{key:"PfAboutPhone_"+e.id},n.default.createElement(o.default,{phone_obj:e}))}))))}s.propTypes={phone_arr:l.default.array},t.default=s},54100:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&d.return&&d.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=a(67294),r=o(l),u=o(a(45697)),d=o(a(82322)),i=o(a(6797));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,o=t.permission,c=t.phone,s=(0,l.useState)(c),f=n(s,2),m=f[0],p=f[1],_=(0,l.useState)(!1),v=n(_,2),h=v[0],b=v[1];return r.default.createElement("div",null,r.default.createElement("div",{className:h?"text-red":"display-none"},r.default.createElement("div",null,"Phone must have 10 numbers!"),r.default.createElement("br",null)),r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_input"},r.default.createElement(i.default,{name:"phone",value:m,type:"tel",placeholder:"Your phone",handleChange:function(e){p(e.target.value)}}))),r.default.createElement("div",null,r.default.createElement(d.default,{permission:o,handleCancel:u,handleSave:function(e){/^\d{10}$/.test(m)||""!=c&&""==m?a({permission:e,phone:m}):b(!0)}})))}c.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=c},49165:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(67294)),l=o(a(45697)),r=a(7392),u=a(70361),d=o(a(59487)),i=o(a(54100));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.phone_obj;return n.default.createElement("div",null,n.default.createElement(d.default,{item_obj:t,Icon:r.IconsProfileAbout.phone,ComponentEdit:i.default,handle_API_U:u.handle_API_Phone_U,handleUpdateItemObj:function(e){var a=e.phone,n=e.permission;t.title=a,t.permission=n,t.phone=a}}))}c.propTypes={phone_obj:l.default.object},t.default=c},41140:(e,t,a)=>{"use strict";a.r(t)},96499:(e,t,a)=>{"use strict";a.r(t)},86004:(e,t,a)=>{"use strict";a.r(t)},5271:(e,t,a)=>{"use strict";a.r(t)},19854:(e,t,a)=>{"use strict";a.r(t)},68038:(e,t,a)=>{"use strict";a.r(t)},51189:(e,t,a)=>{"use strict";a.r(t)},71265:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=998.js.map