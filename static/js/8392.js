(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8392],{5306:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,l=!1,n=void 0;try{for(var u,c=e[Symbol.iterator]();!(a=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){l=!0,n=e}finally{try{!a&&c.return&&c.return()}finally{if(l)throw n}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,l.useState)("vid_pic-observe opacity-0"),2),r=t[0],a=t[1];return(0,l.useEffect)((function(){e.current&&(0,n.default)({elements:[e.current],callback:function(){a("vid_pic-observe opacity-1")}})}),[e]),r};var a,l=r(67294),n=(a=r(66810))&&a.__esModule?a:{default:a}},75763:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294)),l=n(r(45697));function n(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,r=e.x,l=e.y;return a.default.createElement("svg",{className:"IconsPost",viewBox:r+" "+l+" 200 200",width:t,height:t,fill:"none",stroke:"var(--md-color)",strokeLinecap:"round"},a.default.createElement("path",{fill:"var(--blue)",d:"M10,95 L0,0 L95,10 L200,115 L115,200 Z"}),a.default.createElement("g",{stroke:"var(--blue)",fill:"white",strokeWidth:"5"},a.default.createElement("circle",{cx:"50",cy:"50",r:"20"}),a.default.createElement("circle",{cx:"80",cy:"165",r:"30"}),a.default.createElement("line",{x1:"80",y1:"145",x2:"80",y2:"185"}),a.default.createElement("line",{x1:"100",y1:"165",x2:"60",y2:"165"})),a.default.createElement("g",{className:"IconsPost_cmt",strokeWidth:"10"},a.default.createElement("path",{d:"M230,190 L230,165 L230,165 Q210,165 210,130 L210,30 Q210,5 230,5\r L370,5 Q390,5 390,30 L390,130 Q390,165 360,165 L270,165 Z"}),a.default.createElement("line",{x1:"240",y1:"40",x2:"360",y2:"40"}),a.default.createElement("line",{x1:"240",y1:"80",x2:"360",y2:"80"}),a.default.createElement("line",{x1:"240",y1:"120",x2:"360",y2:"120"})),a.default.createElement("path",{className:"IconsPost_share",d:"M180,300 L125,240 L125,280 Q40,290 25,380 Q40,330 125,320 L125,360 Z",strokeWidth:"10"}))}r(48787),u.propTypes={size_icon:l.default.string,x:l.default.number,y:l.default.number},u.defaultProps={x:0,y:0,size_icon:"1.5rem"},t.default=u},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,r=e.threshold,a=void 0===r?0:r,l=e.callback,n=void 0===l?function(){}:l,u=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),n())}))}),{threshold:a});t.forEach((function(e){u.observe(e)}))}},64754:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294)),l=(n(r(45697)),n(r(5738)));function n(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.active_ix,r=e.bg_img_arr,n=e.handleChooseBg;return a.default.createElement("div",{className:"BgImgList"},a.default.createElement("div",{className:"BgImgList_row display-flex flex-wrap justify-content-center"},r.map((function(e,r){return a.default.createElement("div",{key:""+r,className:"BgImgList_item padding-4px"},a.default.createElement(l.default,{ix:r,is_active:t==r,bg_img:e,handleChooseBg:n}))}))))}r(56352),u.propTypes={},t.default=u},5738:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294)),l=(n(r(45697)),n(r(19400)));function n(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.ix,r=e.is_active,n=e.bg_img,u=e.handleChooseBg;return a.default.createElement(l.default,{vid_pic:n,type:"img",img_props:{onClick:function(){u(t)},className:"BgImgItem wh-100 brs-50 "+(r?"BgImgItem-active pointer-events-none":"BgImgItem-inactive cursor-pointer")}})}r(59536),u.propTypes={},t.default=u},43658:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294));function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.children,r=e.title;return a.default.createElement("div",{className:"StoryCreateChoice wh-100 pos-rel cursor-pointer"},a.default.createElement("div",{className:"pos-abs-center w-100per"},a.default.createElement("div",{className:"display-flex justify-content-center"},a.default.createElement("div",{className:"StoryCreateChoice_icon display-flex-center bg-primary brs-50 box-shadow-fb"},t)),a.default.createElement("div",{className:"StoryCreateChoice_title padding-4px text-align-center"},a.default.createElement("span",{className:"font-700 text-white font-13px"},r))))}l(r(45697)),r(62180),n.propTypes={},t.default=n},79194:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),l=u(r(45697)),n=u(r(43658));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.title,r=e.openScreenStoryText;return a.default.createElement("div",{className:"StoryCreateTextChoice wh-100",onClick:r},a.default.createElement(n.default,{title:t},a.default.createElement("div",null,a.default.createElement("span",{className:"StoryCreateTextChoice_title font-500 font-18px"},"Aa"))))}r(46281),c.propTypes={title:l.default.string,openScreenStoryText:l.default.func},n.default.defaultProps={title:"Create a Text Story"},t.default=c},64116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(67294)),l=i(r(45697)),n=i(r(86804)),u=i(r(37279)),c=i(r(43658));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.title,r=e.openScreenStoryPic;return a.default.createElement("div",{className:"StoryCreatePicChoice h-100per"},a.default.createElement(n.default,{name:"vid_pic",accept:"image/*",handleChange:function(e){r(e)}},a.default.createElement(c.default,{title:t},a.default.createElement("div",null,a.default.createElement(u.default,null)))))}r(16833),s.propTypes={title:l.default.string,openScreenStoryText:l.default.func},s.defaultProps={title:"Create a Photo Story"},t.default=s},22784:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),l=(u(r(45697)),u(r(2760))),n=u(r(57108));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.handleRotate;return a.default.createElement("button",{className:"btn btn-hv btn-active padding-8px bg-always-white cursor-pointer brs-8px",onClick:t},a.default.createElement(n.default,{Icon:l.default},a.default.createElement("span",{className:"font-500"},"Rotate")))}c.propTypes={},t.default=c},19400:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=r(67294),n=s(l),u=s(r(45697)),c=r(5306),i=r(32006);function s(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.vid_pic,r=e.type,u=e.video_props,s=e.img_props,o=(0,i.getTypeVidOrPic)(t,r),d=(0,l.useRef)(null),f=(0,c.useObserveVidPic)(d);return(0,l.useEffect)((function(){d.current&&d.current.src&&(d.current.src=t)}),[t]),"img"==o?n.default.createElement("img",a({ref:d,className:""+f,"data-src":t,alt:""},s)):"video"==o?n.default.createElement("video",a({ref:d,className:""+f,"data-src":t},u)):null}o.propTypes={vid_pic:u.default.string,type:u.default.string,video_props:u.default.object,img_props:u.default.object},o.defaultProps={video_props:{},img_props:{}},t.default=o},48787:(e,t,r)=>{"use strict";r.r(t)},56352:(e,t,r)=>{"use strict";r.r(t)},59536:(e,t,r)=>{"use strict";r.r(t)},62180:(e,t,r)=>{"use strict";r.r(t)},46281:(e,t,r)=>{"use strict";r.r(t)},16833:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=8392.js.map