(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[7868],{58722:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useInterval=function(e){var t=e.time,n=e.callback,u=void 0===n?function(){}:n,a=(0,r.useRef)(!0),l=(0,r.useRef)(!0),c=(0,r.useRef)(!0);return(0,r.useEffect)((function(){var e;return e=setInterval((function(){c.current||(l.current?a.current?a.current=!1:u():clearInterval(e))}),t),function(){l.current=!1}}),[]),{doSkipInterval:function(){a.current=!0},stopInterval:function(e){c.current=e}}};var r=n(67294)},38669:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMouseMoveX=function(e){var t=e.handleMouseDown,n=void 0===t?function(){}:t,l=e.handleMouseMove,c=void 0===l?function(){}:l,o=e.handleMouseEnd,i=void 0===o?function(){}:o,s=(0,r.useRef)(!1),d=(0,r.useRef)(""),f=(0,r.useRef)(0),_=(0,r.useRef)(0);function p(e){if(s.current){var t=(0,a.getClientXY)(e),n=t.client_x,r=t.client_y,u=n-f.current,l=r-_.current;""==d.current&&(d.current=Math.abs(u)>=Math.abs(l)?"x":"y"),c(u),f.current=n,_.current=r}}function v(){s.current=!1,window.onmousemove=null,window.onmouseup=null,i(),d.current=""}return{is_run:s,first_orientation:d,handleStart:function(e){e.stopPropagation(),s.current=!0;var t=(0,a.getClientXY)(e),r=t.client_x,l=t.client_y;f.current=r,_.current=l,n(),u.IS_MOBILE?(window.ontouchmove=p,window.ontouchend=v):(window.onmousemove=p,window.onmouseup=v)},handleMove:p,handleEnd:v}};var r=n(67294),u=n(55852),a=n(81858)},11667:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.useVideoUtils=function(e){var t=e.other_state,n=void 0===t?{}:t,l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){u=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(u)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,u.useState)(r({is_play:!1,show_btn_play:!1},n)),2),c=l[0],o=l[1],i=c.is_play,s=c.show_btn_play,d=(0,u.useRef)(null),f=(0,a.useWaitingLastAction)({time_waiting:2e3,callback:_}).handleWaitingLastAction;function _(){o((function(e){return r({},e,{show_btn_play:!1})}))}return(0,u.useEffect)((function(){f()}),[i,s]),(0,u.useEffect)((function(){4==d.current.readyState&&(i?d.current.play():d.current.pause())}),[i]),{ref_video_elm:d,state_obj:c,setStateObj:o,toggleBtnPlay:function(){o((function(e){return r({},e,{show_btn_play:!e.show_btn_play})}))},togglePlayPause:function(){o((function(e){return r({},e,{is_play:!e.is_play})}))},doPause:function(){i&&(d.current.pause(),o((function(e){return r({},e,{is_play:!1})})))},hideBtnPlay:_,handleEnded:function(){o((function(e){return r({},e,{is_play:!1,show_btn_play:!0})}))}}};var u=n(67294),a=n(90663)},37709:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294)),u=a(n(45697));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.size_icon,n=e.x,u=e.y,a=e.color;return r.default.createElement("svg",{className:"IconsPlayPause",viewBox:n+" "+u+" 200 200",width:t,height:t},r.default.createElement("g",{className:"IconsPlayPause_play",fill:a},r.default.createElement("path",{d:"M45,25 155,100 45,175 Z"})),r.default.createElement("g",{className:"IconsPlayPause_pause",stroke:a,strokeWidth:"25"},r.default.createElement("line",{x1:"270",y1:"25",x2:"270",y2:"175"}),r.default.createElement("line",{x1:"330",y1:"25",x2:"330",y2:"175"})))}l.propTypes={x:u.default.number,y:u.default.number,size_icon:u.default.string,color:u.default.string},l.defaultProps={x:0,y:0,size_icon:"1.5rem",color:"var(--white)"},t.default=l},81858:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return r.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return r.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return r.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var r=n(55852)},83796:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.observerDisplay=function(e){var t=e.elm,n=e.callbackDisplay,r=void 0===n?function(){}:n,u=e.callbackNoDisplay,a=void 0===u?function(){}:u,l=e.options,c=void 0===l?{}:l;new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?r():a()}),c)})).observe(t)}},87868:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),u=p(r),a=p(n(45697)),l=n(55852),c=n(83796),o=n(58722),i=n(38669),s=n(82403),d=p(n(61498)),f=p(n(68163)),_=p(n(46752));function p(e){return e&&e.__esModule?e:{default:e}}function v(e){var t=e.vid_pics,n=e.link_to_arr,a=e.has_fetched,p=e.time_interval,v=e.time_trans,y=e.disabled_btn_when_trans,m=e.time_disabled_btn,h=e.is_btn_circle,b=e.use_dot,E=e.use_underscore,g=e.use_next_prev,w=e.use_auto_next,M=e.handleClick,P=e.handleCarouselMove,x=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){u=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(u)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(0),2),I=x[0],k=x[1],O=(0,r.useRef)(null),N=(0,r.useRef)(!0),j=(0,r.useRef)(!1),C=(0,r.useRef)(!0),S=(0,r.useRef)(1),T=(0,r.useRef)(t.length),R=(0,o.useInterval)({time:p,callback:function(){w&&(j.current||F())}}),X=R.doSkipInterval,B=R.stopInterval,A=(0,i.useMouseMoveX)({handleMouseDown:function(){B(!0),C.current=!0,X()},handleMouseMove:function(e){"x"==L.current?("none"!=O.current.style.touchAction&&(O.current.style.touchAction="none"),k((function(t){return t+e}))):D.current=!1},handleMouseEnd:function(){if("x"==L.current){var e=-I/O.current.clientWidth;e>=.25?Z():e<=-.25&&q(),C.current=!1,k(0),B(!1)}else"none"==O.current.style.touchAction&&O.current.style.removeProperty("touch-action")}}),D=A.is_run,L=A.first_orientation,Y=A.handleStart,z=A.handleMove,U=A.handleEnd,W=(0,s.useForceUpdate)();function V(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];j.current=!0,C.current=!1,setTimeout((function(){N.current&&(j.current=!1)}),y||e?v:m)}function F(){V(!0),S.current+=1,W(),S.current==T.current-1&&setTimeout((function(){N.current&&(S.current=1,C.current=!0,W())}),v)}function Z(){j.current||(X(),F())}function q(){j.current||(X(),V(!0),S.current-=1,W(),0==S.current&&setTimeout((function(){N.current&&(S.current=T.current-2,C.current=!0,W())}),v))}return(0,r.useEffect)((function(){return(0,c.observerDisplay)({elm:O.current,callbackDisplay:function(){return B(!1)},callbackNoDisplay:function(){return B(!0)}}),function(){N.current=!1}}),[]),(0,r.useEffect)((function(){a?(T.current=t.length,C.current=!1,B(!1),setTimeout((function(){W()}),0)):B(!0)}),[a]),(0,r.useEffect)((function(){P&&P(S.current)}),[S.current]),u.default.createElement("div",{ref:O,className:"Carousel pos-rel wh-100 overflow-hidden"},u.default.createElement("div",{className:"Carousel_row pos-rel display-flex h-100per",style:{width:100*t.length+"%",transform:"translateX(-"+100*S.current/t.length+"%) translateX("+I+"px)",transition:C.current?void 0:"all "+v+"ms"},onClick:M,onTouchStart:Y,onTouchMove:z,onTouchEnd:U},t.map((function(e,r){return u.default.createElement(f.default,{key:""+r,vid_pic_ix:S.current,vid_pic:e,width_vid_pic:100/t.length+"%",link_to:n.length&&n[r]||"",stopInterval:B})}))),u.default.createElement(_.default,{use_dot:b,use_underscore:E,has_fetched:a,count:T.current-2,active_ix:S.current-1==T.current-1?0:S.current-1}),g&&!l.IS_MOBILE&&a?u.default.createElement("div",{className:"text-white"},u.default.createElement(d.default,{is_btn_circle:h,size_icon:"14px",handleNext:Z,handlePrev:q})):null)}n(97109),v.propTypes={vid_pics:a.default.array,link_to_arr:a.default.array,has_fetched:a.default.bool,time_interval:a.default.number,time_trans:a.default.number,disabled_btn_when_trans:a.default.bool,time_disabled_btn:a.default.number,is_btn_circle:a.default.bool,use_dot:a.default.bool,use_underscore:a.default.bool,use_next_prev:a.default.bool,use_auto_next:a.default.bool,handleCarouselMove:a.default.func,handleClick:a.default.func},v.defaultProps={link_to_arr:[],has_fetched:!1,time_interval:6e3,time_trans:300,disabled_btn_when_trans:!0,time_disabled_btn:100,use_dot:!l.IS_MOBILE,use_underscore:l.IS_MOBILE,use_next_prev:!0,use_auto_next:!0},t.default=v},68163:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294)),u=o(n(45697)),a=n(32006),l=o(n(67884)),c=o(n(61691));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.vid_pic_ix,n=e.vid_pic,u=e.width_vid_pic,o=e.link_to,i=e.stopInterval;return r.default.createElement("div",{className:"CarouselItem h-100per",style:{width:u}},"img"==(0,a.getTypeVidOrPic)(n)?r.default.createElement(l.default,{vid_pic:n,link_to:o}):r.default.createElement(c.default,{vid_pic:n,vid_pic_ix:t,stopInterval:i}))}n(60786),i.propTypes={vid_pic:u.default.string,width_vid_pic:u.default.string,stopInterval:u.default.func},i.defaultProps={},t.default=i},67884:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),u=(l(n(45697)),n(93191)),a=l(n(19400));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.vid_pic,n=e.link_to;return n?r.default.createElement(u.Link,{to:n},r.default.createElement(a.default,{vid_pic:t,type:"img",img_props:{className:"wh-100 object-fit-cover"}})):r.default.createElement(a.default,{vid_pic:t,type:"img",img_props:{className:"wh-100 object-fit-cover"}})}c.propTypes={},t.default=c},61691:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),u=c(r),a=(c(n(45697)),n(11667)),l=c(n(67970));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.vid_pic,n=e.vid_pic_ix,c=e.stopInterval,o=(0,a.useVideoUtils)({other_state:{}}),i=o.ref_video_elm,s=o.state_obj,d=o.toggleBtnPlay,f=o.togglePlayPause,_=o.doPause,p=o.handleEnded,v=s.is_play,y=s.show_btn_play;return(0,r.useEffect)((function(){_()}),[n]),u.default.createElement("div",{className:"wh-100 pos-rel"},u.default.createElement("video",{ref:i,className:"wh-100 object-fit-content",src:t,onPlay:function(){c(!0)},onPause:function(){c(!1)},onEnded:p}),u.default.createElement(l.default,{size_icon:"2.5rem",is_play:v,show_btn_play:y,toggleBtnPlay:d,togglePlayPause:f}))}o.propTypes={},t.default=o},46752:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),u=(l(n(45697)),l(n(5234))),a=l(n(9083));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.has_fetched,n=e.use_dot,l=e.use_underscore,c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["has_fetched","use_dot","use_underscore"]);return n||l?r.default.createElement("div",{className:"pos-abs bottom-0 x-center padding-8px pointer-events-none "+(t?"":"display-none")},n?r.default.createElement(u.default,c):l?r.default.createElement(a.default,c):null):null}c.propTypes={},t.default=c},5234:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.count,n=e.active_ix;return r.default.createElement("div",{className:"CarouselDot"},r.default.createElement("div",{className:"display-flex-center"},Array(t).fill(1).map((function(e,t){return r.default.createElement("div",{key:t,className:"CarouselDot_item padding-4px"},r.default.createElement("div",{className:"CarouselDot_item_contain brs-50 "+(n==t?"bg-fashion-carousel-active":"bg-ccc")}))}))))}u(n(45697)),n(23354),a.propTypes={},t.default=a},9083:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(67294));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.count,n=e.active_ix;return r.default.createElement("div",{className:"CarouselUnderscore"},r.default.createElement("div",{className:"display-flex-center"},Array(t).fill(1).map((function(e,t){return r.default.createElement("div",{key:t,className:"CarouselUnderscore_item padding-4px"},r.default.createElement("div",{className:"CarouselUnderscore_item_contain "+(n==t?"bg-fashion-carousel-active":"bg-ccc")}))}))))}u(n(45697)),n(28847),a.propTypes={},t.default=a},67970:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294)),u=(a(n(45697)),n(90663),a(n(37709)));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.size_icon,n=e.color,a=e.is_play,l=e.show_btn_play,c=e.toggleBtnPlay,o=e.togglePlayPause;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"pos-abs-100 bg-shadow-2 "+(l?"":"display-none")}),r.default.createElement("div",{className:"pos-abs-100",onClick:c}),r.default.createElement("div",{className:"pos-abs-center "+(l?"":"display-none")},r.default.createElement("div",{className:"cursor-pointer",onClick:o},r.default.createElement(u.default,{x:a?200:0,size_icon:t,color:n}))))}l.propTypes={},t.default=l},97109:(e,t,n)=>{"use strict";n.r(t)},60786:(e,t,n)=>{"use strict";n.r(t)},23354:(e,t,n)=>{"use strict";n.r(t)},28847:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=7868.js.map