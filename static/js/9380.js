(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[9380],{27720:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IconsPermission=void 0;var r=a(n(67294)),i=a(n(31604)),l=a(n(66963)),o=a(n(3791)),c=a(n(68986)),u=a(n(67238));function a(e){return e&&e.__esModule?e:{default:e}}t.IconsPermission=[{Icon:r.default.createElement(c.default,null),title:"Public"},{Icon:r.default.createElement(i.default,null),title:"Friend"},{Icon:r.default.createElement(l.default,null),title:"Friend of friend"},{Icon:r.default.createElement(u.default,null),title:"Setting"},{Icon:r.default.createElement(o.default,null),title:"Private"}]},51353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseMoveXY=function(e){var t=e.handleMouseMove,n=void 0===t?function(){}:t,o=e.handleMouseEnd,c=void 0===o?function(){}:o,u=(0,r.useRef)(!1),a=(0,r.useRef)(0),s=(0,r.useRef)(0);function d(e){if(u.current){if(e.touches&&e.touches.length>1)return window.onmousemove=null,void(window.onmouseup=null);var t=(0,l.getClientXY)(e),r=t.client_x,i=t.client_y;n({old_client_x:a.current,old_client_y:s.current,new_client_x:r,new_client_y:i,client_x_change:r-a.current,client_y_change:i-s.current}),a.current=r,s.current=i}}function f(){u.current=!1,c(),i.IS_MOBILE?(window.ontouchmove=null,window.ontouchend=null):(window.onmousemove=null,window.onmouseup=null)}return{handleStart:function(e){e.stopPropagation(),u.current=!0;var t=(0,l.getClientXY)(e),n=t.client_x,r=t.client_y;a.current=n,s.current=r,i.IS_MOBILE?(window.ontouchmove=d,window.ontouchend=f):(window.onmousemove=d,window.onmouseup=f)}}};var r=n(67294),i=n(55852),l=n(81858)},67238:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),i=l(n(45697));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.size_icon,n=e.fill,i=e.stroke,l=e.stroke_width;return r.default.createElement("svg",{className:"IconSetting",width:t,height:t,viewBox:"0 0 200 200",fill:n,strokeWidth:l,stroke:i,strokeLinecap:"round",strokeLinejoin:"round"},r.default.createElement("path",{d:"M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z"}),r.default.createElement("circle",{className:"IconSetting_circle",cx:"100",cy:"100",r:"30",fill:"none"}))}n(18639),o.propTypes={fill:i.default.string,size_icon:i.default.string,stroke:i.default.string,stroke_width:i.default.number},o.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)",stroke_width:10},t.default=o},2760:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),i=l(n(45697));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.size_icon,n=e.x,i=e.y,l=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:n+" "+i+" 200 200"},r.default.createElement("path",{d:"M25,75 A65,50 0 0 1 170,75 M185,25 175,75 125,60\r M25,125 A65,50 0 0 0 170,125 M10,175 20,125 70,140",fill:"none",stroke:l,strokeWidth:"20",strokeLinejoin:"round",strokeLinecap:"round"}))}o.propTypes={size_icon:i.default.string,x:i.default.number,y:i.default.number,stroke:i.default.string},o.defaultProps={size_icon:"1rem",x:0,y:0,stroke:"var(--md-color)"},t.default=o},81858:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return r.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return r.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return r.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var r=n(55852)},77992:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(67294)),i=c(n(45697)),l=n(30796),o=c(n(65635));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){e.closeScreen;var t=e.children,n=e.screen_center,i=e.waiting,c=e.use_body_hidden,u=e.use_scale,a=e.FetchingComponent;return(0,l.useMakeBodyHidden)({hidden_app:c}),r.default.createElement("div",{className:"ScreenBlur "+(n?"ScreenBlur_center display-flex-center":"")},r.default.createElement("div",{className:i?"width-0 height-0":"App_Form"},r.default.createElement("div",{className:"ScreenBlur_contain bg-primary brs-5px-md box-shadow-fb "+(i?"ScreenBlur_contain-waiting":"")+" "+(u?"ScreenBlur_contain-scale":"")+" "+(n?"":"ScreenBlur_contain-normal")},t)),r.default.createElement("div",{className:"ScreenBlur_waiting pos-fixed-100v "+(i?"":"display-none")},r.default.createElement(o.default,{FetchingComponent:a})))}n(16209),u.propTypes={closeScreen:i.default.func,children:i.default.element,use_body_hidden:i.default.bool,screen_center:i.default.bool,waiting:i.default.bool,use_scale:i.default.bool,FetchingComponent:i.default.func},u.defaultProps={use_body_hidden:!1,screen_center:!1,waiting:!1,use_scale:!1},t.default=u},14927:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.openScreenPermission=function(e){var t=e.openScreenFloor,n=void 0===t?function(){}:t,r=e.permission,i=void 0===r?0:r,l=e.handleChoosePermission;n({FloorComponent:m,permission:i,handleChoosePermission:void 0===l?function(){}:l})};var i=n(67294),l=f(i),o=f(n(45697)),c=n(27720),u=f(n(98513)),a=f(n(77992)),s=f(n(52122)),d=f(n(33468));function f(e){return e&&e.__esModule?e:{default:e}}function m(e){var t=e.permission,n=e.closeScreen,o=e.handleChoosePermission,f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,l=e}finally{try{!r&&c.return&&c.return()}finally{if(i)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,i.useState)({active_permission:t}),2),m=f[0],_=f[1],v=m.active_permission;function p(e){_(r({},m,{active_permission:e}))}return l.default.createElement(a.default,{closeScreen:n,screen_center:!0},l.default.createElement("div",{className:"ScreenPermission"},l.default.createElement("div",null,l.default.createElement(u.default,{title:"Permission",closeScreenBlur:n})),l.default.createElement("div",{className:"ScreenBlur_body_contain scroll-thin"},c.IconsPermission.map((function(e,t){return l.default.createElement("div",{key:"ScreenPermission_"+t,className:"ScreenPermission_item"},l.default.createElement(s.default,{ix:t,is_active:v==t,icon_obj:e,choosePermission:p}))}))),l.default.createElement("div",null,l.default.createElement(d.default,{disabled:t==v,handleConfirm:function(){n(),t!=v&&o(v)},closeScreenBlur:n}))))}n(15934),m.propTypes={permission:o.default.number,closeScreen:o.default.func,handleChoosePermission:o.default.func},m.defaultProps={permission:0},t.default=m},52122:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294)),i=o(n(45697)),l=o(n(22421));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.is_active,n=e.ix,i=e.icon_obj,o=e.choosePermission,c=i.Icon,u=i.title;return r.default.createElement("div",{className:"ScreenPermissionItem cursor-pointer "+(t?"ScreenPermissionItem_active":""),onClick:function(){!t&&o(n)}},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",null,r.default.createElement(l.default,{is_active:t})),r.default.createElement("div",{className:"ScreenPermissionItem_right"},r.default.createElement("div",{className:"display-flex align-items-center"},r.default.createElement("div",{className:"ScreenPermissionItem_right_icon display-flex"},c),r.default.createElement("div",{className:"font-500"},u)))))}n(83180),c.propTypes={is_active:i.default.bool,icon_obj:i.default.object},t.default=c},22421:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),i=l(n(45697));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.is_active;return r.default.createElement("div",{className:"RadioCustom brs-50 "+(t?"RadioCustom_active":"RadioCustom_inactive")},r.default.createElement("div",{className:"RadioCustom_center pos-abs-center brs-50"}))}n(69226),o.propTypes={is_active:i.default.bool},o.defaultProps={is_active:!1},t.default=o},18639:(e,t,n)=>{"use strict";n.r(t)},16209:(e,t,n)=>{"use strict";n.r(t)},15934:(e,t,n)=>{"use strict";n.r(t)},83180:(e,t,n)=>{"use strict";n.r(t)},69226:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=9380.js.map