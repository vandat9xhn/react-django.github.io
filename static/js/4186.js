(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[4186],{29705:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.useInputDate=function(e){var t=e.initial_day,a=void 0===t?1:t,u=e.initial_month,s=void 0===u?1:u,d=e.initial_year,o=void 0===d?2e3:d,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)({day:a,month:s,year:o}),2),m=c[0],f=c[1],p=m.day,h=m.month,v=m.year;function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"month",a="month"==t?(0,l.getLastDayOfMonth)(+e,+v):(0,l.getLastDayOfMonth)(+h,+e);f((function(r){var l;return n({},r,(i(l={},t,e),i(l,"day",r.day>a?a:r.day),l))}))}return{day:p,month:h,year:v,handleChangeDay:function(e){f((function(t){return n({},t,{day:e.target.value})}))},handleChangeMonth:function(e){_(e.target.value,"month")},handleChangeYear:function(e){_(e.target.value,"year")}}};var r=a(67294),l=a(72851);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},54752:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fields=t.field_username=t.validationSchema=t.initialValues=t.register_step_count=t.register_step_obj=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(28824)),l=t.register_step_obj={0:{part:"name",fields:["first_name","last_name"],form_valid:!0},1:{part:"birth",fields:["birth"],form_valid:!1},2:{part:"email",fields:["email"],form_valid:!0},3:{part:"account",fields:["username","password"],form_valid:!0}},i=(t.register_step_count=Object.keys(l).length,t.initialValues={first_name:"",last_name:"",email:"",username:"",password:"",password_confirm:""},{first_name:r.string().matches(/^\S/,"First name is invalid").min(1,"First name is invalid").max(20,"First name is invalid").trim("First name is invalid").required("First name is required"),last_name:r.string().matches(/^\S/,"Last name is invalid").min(1,"Last name is invalid").max(20,"Last name is invalid").trim("Last name is invalid").required("Last name is required")}),u={email:r.string().email("Invalid email").matches(/^\S{4,30}@[a-z]mail\.com$/,"Invalid email").required("Email is required")},s={username:r.string().matches(/^[a-zA-Z0-9]{5,15}$/,"Username is invalid").required("Username is required"),password:r.string().matches(/^[a-zA-Z0-9]{5,15}$/,"Password is invalid").matches(/[A-Z]/,"Password is invalid").required("Password is required")},d=(t.validationSchema=r.object().shape(n({},i,u,s,{password_confirm:r.string().oneOf([r.ref("password"),null],"Password is not right").required("Confirm password is required")})),t.field_username={name:"username",type:"text",label:"Username",help:"5-15 english letters and no space",max_length:15});t.fields=[d,{name:"password",type:"password",label:"Password",help:"5-15 english letters, no space and at least 1 uppercase letter",max_length:15},{name:"password_confirm",type:"password",label:"Password confirm",help:"Confirm your password",max_length:15},{name:"email",type:"email",label:"Email",help:"****@*mail.com"},{name:"first_name",type:"text",label:"First name",help:"1-20 letters, spaces and start with a letter",max_length:20},{name:"last_name",type:"text",label:"Last name",help:"1-15 letters, spaces and start with a letter",max_length:15}]},72851:(e,t)=>{"use strict";function a(e,t){return 12==e?31:(new Date(t+"-"+(+e+1))-new Date(t+"-"+e))/864e5}Object.defineProperty(t,"__esModule",{value:!0}),t.getLastDayOfMonth=a,t.getDaysInMonth=function(e,t){var n=a(+e,+t);return Array.from({length:n},(function(e,t){return t+1}))}},86655:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeRange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Array.from({length:t-e},(function(t,a){return a+e}))}},54902:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SignupRequest=void 0;var n,r=(n=a(62667))&&n.__esModule?n:{default:n},l=a(50918),i=a(44550);t.SignupRequest=function(e){return(0,l.API_FakeReal)(i.default_login,(function(){return(0,r.default)({method:"POST",data:e,url:"api/account/register/"})}))}},4124:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=l(a(45697));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.children,a=e.onClick,r=e.type,l=e.disabled,i=e.ripple_type,u=e.title;return n.default.createElement("button",{className:"ButtonRipple btn font-500 "+(l?"opacity-05 pointer-events-none":"cursor-pointer"),type:r,title:u,disabled:l,onClick:a},n.default.createElement("div",{className:"ButtonRipple_common ButtonRipple_"+i+" "+(l?"display-none":"")}),t)}a(40824),i.propTypes={type:r.default.string,title:r.default.string,disabled:r.default.bool,ripple_type:r.default.string,children:r.default.any,onClick:r.default.func},i.defaultProps={title:"",type:"text",ripple_type:"right",disabled:!1},t.default=i},74275:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=(u(a(45697)),a(86655)),l=u(a(48197)),i=u(a(91406));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.day,a=e.month,u=e.year,s=e.min_year,d=e.max_year,o=e.invalid,c=e.title_invalid,m=e.handleChangeDay,f=e.handleChangeMonth,p=e.handleChangeYear;return n.default.createElement("div",{className:"InputDate"},n.default.createElement("div",null,n.default.createElement("div",{className:"InputDate_row display-flex align-items-center"},n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item_contain"},n.default.createElement(l.default,{day:t,month:a,year:u,handleChangeDay:m}))),n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item_contain"},n.default.createElement(i.default,{options:(0,r.makeRange)(1,13),current_option:a,onSelectOption:f}))),n.default.createElement("div",{className:"InputDate_item"},n.default.createElement("div",{className:"InputDate_item_contain"},n.default.createElement(i.default,{options:(0,r.makeRange)(s,d+1),current_option:u,onSelectOption:p}))))),o?n.default.createElement("div",{className:"text-red font-12px font-italic"},c||"Date is invalid!"):n.default.createElement("div",null))}a(90214),s.propTypes={},t.default=s},48197:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),a(72851)),l=i(a(91406));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.month,a=e.year,i=e.day,u=e.handleChangeDay,s=(0,r.getDaysInMonth)(t,a);return n.default.createElement(l.default,{options:s,current_option:i,onSelectOption:u})}u.propTypes={},t.default=u},3028:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=o(r),i=o(a(45697)),u=o(a(82702)),s=o(a(39475)),d=o(a(57108));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.field,a=e.form,i=e.label,o=e.placeholder,c=e.max_length,m=e.help,f=t.name,p=a.touched,h=a.errors,v=p[f]&&h[f],_=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!0),2),y=_[0],g=_[1];return l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("label",{className:"font-500"},i)),l.default.createElement("div",{className:"InputPassword_password pos-rel"},l.default.createElement("input",n({className:"InputPassword_input w-100per padding-8px brs-5px "+(p[f]&&!h[f]?"InputPassword_valid":"")+" "+(p[f]&&h[f]?"InputPassword_invalid":"")},t,{maxLength:c,placeholder:o,type:y?"password":"text"})),l.default.createElement("div",{className:"InputPassword__eye"},l.default.createElement("div",{onClick:function(){g(!y)}},l.default.createElement(u.default,{x:200,y:200,close_eye:y})))),m&&l.default.createElement("div",{className:"help-text"},l.default.createElement(d.default,{Icon:s.default,x:600},"* ",m)),v&&l.default.createElement("div",{className:"error-field"},l.default.createElement(d.default,{Icon:s.default,x:400,y:400},h[f])))}a(38093),c.propTypes={field:i.default.object,form:i.default.object,label:i.default.string,max_length:i.default.number,placeholder:i.default.string},c.defaultProps={max_length:15},t.default=c},22607:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=d(a(67294)),l=d(a(45697)),i=a(66878),u=d(a(57108)),s=d(a(39475));function d(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.field,a=e.form,l=e.is_textarea,d=e.type,o=e.label,c=e.placeholder,m=e.dataList,f=e.help,p=e.max_length,h=t.name,v=t.onChange,_=a.touched,y=a.errors,g=_[h]&&y[h],E="list_"+h+"_"+o;return r.default.createElement("div",{className:"InputText"},r.default.createElement("div",null,r.default.createElement("label",{className:"font-500"},o)),r.default.createElement("div",null,l?r.default.createElement("textarea",n({className:"InputText_input InputText_textarea scroll-thin brs-5px "+(_[h]&&!y[h]?"InputText_valid":"")+" "+(_[h]&&y[h]?"InputText_invalid":"")},t,{onChange:function(e){v(e),(0,i.makeAutoHeight)(e)},placeholder:c,type:d,maxLength:p})):r.default.createElement("input",n({className:"InputText_input brs-5px "+(_[h]&&!y[h]?"InputText_valid":"")+" "+(_[h]&&y[h]?"InputText_invalid":"")},t,{placeholder:c,type:d,list:E,maxLength:p}))),r.default.createElement("datalist",{id:E},m.map((function(e,t){return r.default.createElement("option",{key:"InputText_"+t},e)}))),f&&r.default.createElement("div",{className:"InputText_help help-text"},r.default.createElement(u.default,{Icon:s.default,x:600},"*",f)),g&&r.default.createElement("div",{className:"InputText_help_error error-field"},r.default.createElement(u.default,{Icon:s.default,x:400,y:400},y[h])))}a(17727),o.propTypes={field:l.default.object,form:l.default.object,is_textarea:l.default.bool,type:l.default.string,label:l.default.string,placeholder:l.default.string,dataList:l.default.array,help:l.default.string,max_length:l.default.number},o.defaultProps={is_textarea:!1,dataList:[],type:"text"},t.default=o},94186:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=(u(a(45697)),a(55852)),l=u(a(28696)),i=u(a(96200));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return n.default.createElement("div",null,n.default.createElement("div",null,r.IS_MOBILE&&innerWidth<=400?n.default.createElement(i.default,null):n.default.createElement(l.default,null)))}s.propTypes={},t.default=s},28696:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=x(r),i=a(43043),u=(x(a(45697)),a(15130)),s=a(54902),d=a(21092),o=a(29705),c=x(a(48321)),m=a(13118),f=x(a(39475)),p=x(a(4124)),h=x(a(57108)),v=x(a(27883)),_=x(a(22607)),y=x(a(3028)),g=a(54752),E=x(a(74275)),b=x(a(86578));function x(e){return e&&e.__esModule?e:{default:e}}function w(e){var t,a,x=(t=regeneratorRuntime.mark((function e(t){var a,n,r,i,u,d,o,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,m.handleScrollSmooth)((function(){window.scroll(0,0)})),a=t.username,n=t.password,r=t.email,i=t.first_name.trim(),u=t.last_name.trim(),d=(0,c.default)({username:a,password:n,email:r,first_name:i,last_name:u,day:B,month:Y,year:U}),e.prev=5,e.next=8,q((function(){return(0,s.SignupRequest)(d)}),l.default.createElement(v.default,{is_fetching:!0}));case 8:o=e.sent,"username_existed"==(f=o.data)?M(!0):"email_existed"==f?D(!0):(sessionStorage.new_member=i+" "+u,N({id:f.id,first_name:i,last_name:u,picture:b.default})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[5,13]])})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var i=e[r](l),u=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),w=(0,r.useContext)(u.context_api),N=(w.user,w.setDataUser),S=(0,r.useState)(!1),P=n(S,2),O=P[0],M=P[1],C=(0,r.useState)(!1),I=n(C,2),j=I[0],D=I[1],k=(0,r.useState)(!1),R=n(k,2),F=R[0],T=R[1],A=(0,r.useRef)(null),q=(0,d.useScreenFetching)(),L=(0,o.useInputDate)({}),B=L.day,Y=L.month,U=L.year,V=L.handleChangeDay,W=L.handleChangeMonth,z=L.handleChangeYear;function Z(){O&&M(!1),j&&D(!1),F&&T(!1)}return(0,r.useEffect)((function(){return document.title="Registration",document.documentElement.setAttribute("data-theme","light"),function(){1!=localStorage.light_mode&&document.documentElement.setAttribute("data-theme","dark")}}),[]),l.default.createElement("div",{ref:A},l.default.createElement(i.Formik,{initialValues:g.initialValues,validationSchema:g.validationSchema,onSubmit:function(e,t){x(e)}},(function(e){return l.default.createElement(i.Form,{autoComplete:"off",className:"Registration_form App_Form brs-5px-md padding-8px",onClick:Z},l.default.createElement("h2",{className:"App_title margin-0"},"Sign up")," ",l.default.createElement("hr",{className:"hr-bg"}),l.default.createElement("div",{className:"Registration_error text-red "+(O||j?"":"display-none")},l.default.createElement(h.default,{Icon:f.default,x:400,y:400},O?"Username":"Email"," was existed")),l.default.createElement("div",null,g.fields.map((function(e,t){return l.default.createElement("div",{key:"Registration_"+t,className:"Registration_input"},l.default.createElement(i.FastField,{name:e.name,component:e.name.startsWith("password")?y.default:_.default,label:e.label,placeholder:e.label+"...",help:e.help,max_length:e.max_length}))})),l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("div",{className:"font-500"},"Birth day")),l.default.createElement("div",null,l.default.createElement(E.default,{day:B,month:Y,year:U,min_year:1960,max_year:2021,invalid:F,title_invalid:"Birth must be from 1960 to now",handleChangeDay:V,handleChangeMonth:W,handleChangeYear:z})))),l.default.createElement("br",null),l.default.createElement("div",{className:"App_submit display-flex-center"},l.default.createElement(p.default,{type:"submit",onClick:function(t){return function(e,t){if(t.dirty){var a=Object.keys(t.errors);a.length&&(0,m.handleScrollSmooth)((function(){A.current.querySelector("[name="+a[0]+"]").scrollIntoView(!1)}))}var n=new Date(U,Y,B);(n>new Date||n<=new Date(1960))&&(T(!0),e.preventDefault())}(t,e)}},"Sign up")))})))}a(65892),w.propTypes={},t.default=w},96200:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=w(r),i=a(43043),u=(w(a(45697)),a(15130)),s=a(54902),d=a(21092),o=a(29705),c=w(a(48321)),m=a(13118),f=w(a(39475)),p=w(a(57108)),h=w(a(27883)),v=a(54752);a(42065);var _=w(a(6586)),y=w(a(70018)),g=w(a(96405)),E=w(a(87081)),b=w(a(21930)),x=w(a(86578));function w(e){return e&&e.__esModule?e:{default:e}}function N(){var e,t,a=(e=regeneratorRuntime.mark((function e(t){var a,n,r,i,u,d,o,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,m.handleScrollSmooth)((function(){window.scroll(0,0)})),a=t.username,n=t.password,r=t.email,i=t.first_name.trim(),u=t.last_name.trim(),d=(0,c.default)({username:a,password:n,email:r,first_name:i,last_name:u,day:U,month:V,year:W}),e.prev=5,e.next=8,B((function(){return(0,s.SignupRequest)(d)}),l.default.createElement(h.default,{is_fetching:!0}));case 8:o=e.sent,"username_existed"==(f=o.data)?O(!0):"email_existed"==f?j(!0):(sessionStorage.new_member=i+" "+u,w({id:f.id,first_name:i,last_name:u,picture:x.default})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[5,13]])})),t=function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function n(r,l){try{var i=t[r](l),u=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(u)}("next")}))},function(e){return t.apply(this,arguments)}),w=(0,r.useContext)(u.context_api).setDataUser,N=(0,r.useState)(!1),S=n(N,2),P=S[0],O=S[1],M=(0,r.useState)(!1),C=n(M,2),I=C[0],j=C[1],D=(0,r.useState)(!1),k=n(D,2),R=k[0],F=k[1],T=(0,r.useState)(0),A=n(T,2),q=A[0],L=A[1],B=(0,d.useScreenFetching)(),Y=(0,o.useInputDate)({}),U=Y.day,V=Y.month,W=Y.year,z=Y.handleChangeDay,Z=Y.handleChangeMonth,$=Y.handleChangeYear;function H(e){var t=v.register_step_obj[q].fields,a=!0,n=!1,r=void 0;try{for(var l,i=t[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var u=l.value;if(e.errors[u]||!e.touched[u])return!1}}catch(e){n=!0,r=e}finally{try{!a&&i.return&&i.return()}finally{if(n)throw r}}return!0}function X(){if("birth"==v.register_step_obj[q].part)return t=(e=new Date(W,V,U))>new Date||e<=new Date(1960),F(t),!t;var e,t}function G(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=q+(t?1:-1);if(!(a<0||a>=v.register_step_count))if(t){var n=v.register_step_obj[q].form_valid?H(e):X();n&&L(q+1)}else L(q-1)}function J(){P&&O(!1),I&&j(!1)}return(0,r.useEffect)((function(){return document.title="Registration",document.documentElement.setAttribute("data-theme","light"),function(){1!=localStorage.light_mode&&document.documentElement.setAttribute("data-theme","dark")}}),[]),l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement(i.Formik,{initialValues:v.initialValues,validationSchema:v.validationSchema,onSubmit:function(e,t){a(e)}},(function(e){return l.default.createElement(i.Form,{autoComplete:"off",className:"RegistrationStep_form App_Form brs-8px-pc padding-8px",onClick:J},l.default.createElement("div",null,l.default.createElement("h2",{className:"App_title margin-0"},"Sign up")," ",l.default.createElement("hr",{className:"hr-bg"}),l.default.createElement("div",{className:"RegistrationStep_error text-red "+(P||I?"":"display-none")},l.default.createElement(p.default,{Icon:f.default,x:400,y:400},P?"Username":"Email"," ","was existed"))),l.default.createElement("div",null,l.default.createElement("div",{className:"RegistrationStep_row display-flex",style:{transform:"translateX("+-100*q/4+"%)"}},l.default.createElement("div",{className:"RegistrationStep_part"},l.default.createElement("div",{className:0==q?"":"display-none"},l.default.createElement(y.default,null))),l.default.createElement("div",{className:"RegistrationStep_part"},l.default.createElement("div",{className:1==q?"":"display-none"},l.default.createElement(_.default,{day:U,month:V,year:W,min_year:1960,max_year:2021,invalid:R,title_invalid:"Birth must be from 1960 to now",handleChangeDay:z,handleChangeMonth:Z,handleChangeYear:$}))),l.default.createElement("div",{className:"RegistrationStep_part"},l.default.createElement("div",{className:2==q?"":"display-none"},l.default.createElement(g.default,null))),l.default.createElement("div",{className:"RegistrationStep_part"},l.default.createElement("div",{className:3==q?"":"display-none"},l.default.createElement(E.default,null))))),l.default.createElement("br",null),l.default.createElement(b.default,{c_step:q,form_props:e,handleNextPrevStep:G}))}))))}a(52107),N.propTypes={},t.default=N},87081:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(67294)),r=a(43043),l=(u(a(45697)),u(a(22607))),i=u(a(3028));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("h2",{className:"register-part-title"},"Account to login"),n.default.createElement("div",null,n.default.createElement("div",null,"Username and password has 5-15 letters, numbers and no spaces. Password has at least a upper letter")),n.default.createElement("div",null,n.default.createElement("div",{className:"register-part-item"},n.default.createElement(r.FastField,{name:"username",component:l.default,label:"",placeholder:"username",max_length:15})),n.default.createElement("div",{className:"register-part-item"},n.default.createElement(r.FastField,{name:"password",component:i.default,label:"",placeholder:"password",max_length:15})),n.default.createElement("div",{className:"register-part-item"},n.default.createElement(r.FastField,{name:"password_confirm",component:i.default,label:"",placeholder:"password confirm",max_length:15})))))}s.propTypes={},t.default=s},6586:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(67294)),r=(l(a(45697)),l(a(74275)));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.day,a=e.month,l=e.year,i=e.invalid,u=e.handleChangeDay,s=e.handleChangeMonth,d=e.handleChangeYear;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("h2",{className:"register-part-title"},"When were you born?"),n.default.createElement("div",null,n.default.createElement("div",null,"Birth must be from 1960 to now")),n.default.createElement("div",{className:"register-part-item"},n.default.createElement(r.default,{day:t,month:a,year:l,min_year:1960,max_year:2021,invalid:i,title_invalid:"Birth must be from 1960 to now",handleChangeDay:u,handleChangeMonth:s,handleChangeYear:d}))))}i.propTypes={},t.default=i},96405:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=a(43043),l=(i(a(45697)),i(a(22607)));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("h2",{className:"register-part-title"},"Your email"),n.default.createElement("div",null,n.default.createElement("div",null,'Email must like "**@gmail.com"')),n.default.createElement("div",{className:"register-part-item"},n.default.createElement(r.FastField,{name:"email",component:l.default,label:"",placeholder:"email"}))))}u.propTypes={},t.default=u},70018:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=a(43043),l=(i(a(45697)),i(a(22607)));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("h2",{className:"register-part-title"},"What is your name?"),n.default.createElement("div",null,n.default.createElement("div",null,"Last name and first name has 1-20 letters, spaces and start with a letter")),n.default.createElement("div",null,n.default.createElement("div",{className:"register-part-item"},n.default.createElement(r.FastField,{name:"first_name",component:l.default,label:"",placeholder:"first name",max_length:20})),n.default.createElement("div",{className:"register-part-item"},n.default.createElement(r.FastField,{name:"last_name",component:l.default,label:"",placeholder:"last name",max_length:20})))))}u.propTypes={},t.default=u},21930:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=(i(a(45697)),i(a(4124))),l=a(54752);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.c_step,a=e.form_props,i=e.handleNextPrevStep;return n.default.createElement("div",null,n.default.createElement("div",{className:"display-flex"},n.default.createElement("div",{className:"RegisterNexPrev_btn btn btn-active w-100per text-align-center text-white "+(0==t?"display-none":""),onClick:function(){return i(a,!1)}},n.default.createElement("div",{className:"padding-8px bg-blue brs-5px"},n.default.createElement("strong",null,"Prev"))),t==l.register_step_count-1?n.default.createElement("div",{className:"RegisterNexPrev_btn App_submit w-100per"},n.default.createElement(r.default,{type:"submit"},"Sign up")):n.default.createElement("div",{className:"RegisterNexPrev_btn btn btn-active w-100per text-align-center text-white",onClick:function(){return i(a)}},n.default.createElement("div",{className:"padding-8px bg-blue brs-5px"},n.default.createElement("strong",null,"Next")))))}a(10822),u.propTypes={},t.default=u},40824:(e,t,a)=>{"use strict";a.r(t)},90214:(e,t,a)=>{"use strict";a.r(t)},38093:(e,t,a)=>{"use strict";a.r(t)},17727:(e,t,a)=>{"use strict";a.r(t)},65892:(e,t,a)=>{"use strict";a.r(t)},52107:(e,t,a)=>{"use strict";a.r(t)},42065:(e,t,a)=>{"use strict";a.r(t)},10822:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=4186.js.map