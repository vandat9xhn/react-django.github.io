(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[237],{36759:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_page_media_video_arr=void 0;var a=r(69565),n=r(8047),u=r(7605),o=function(){var e=(0,a.getRandomId)();return{id:e,img:(0,n.getRandomImg)(),link_to:"/post/videos/"+e}};t.default_fb_group_page_media_video_arr=function(){return(0,u.getDefaultArr)(o,15,15)}},15854:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbGroupMediaVideo_L=void 0;var a,n,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o=(t.handle_API_FbGroupMediaVideo_L=(a=regeneratorRuntime.mark((function e(t){var r,a=t.c_count,n=void 0===a?0:a,i=t.group_id,d=void 0===i?0:i,l=t.params,s=void 0===l?{}:l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.API_FbGroupMediaVideo_L)(u({page:1,size:20,c_count:n,group_model:d},s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,u){try{var o=e[n](u),i=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(i).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(i)}("next")}))},function(e){return n.apply(this,arguments)}),r(89820))},89820:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbGroupMediaVideo_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},u=r(50918),o=r(36759);t.API_FbGroupMediaVideo_L=function(e){return(0,u.API_FakeReal)((0,o.default_fb_group_page_media_video_arr)(),(function(){return(0,n.default)({url:"api/facebook/group-media-video-l/",method:"GET",params:e})}),e)}},49508:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=i(a),u=(i(r(45697)),r(2804)),o=i(r(81499));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.handle_API_L,r=(0,a.useRef)(null),i=(0,u.useObserverShowMore)({handle_API_L:t}),d=i.data_state,l=i.is_max,s=i.getData_API,c=i.observerShowMore,_=d.data_arr;return d.has_fetched,(0,a.useEffect)((function(){s(),c({fake_elm_end:r.current,rootMargin:"0px",way_scroll:"to_bottom",margin:0})}),[]),n.default.createElement("div",{className:"GPMediaPics"},n.default.createElement("ul",{className:"display-flex flex-wrap list-none"},_.map((function(e,t){return n.default.createElement("li",{key:e.id,className:"GPMediaPics_item gr-page-media-item"},n.default.createElement(o.default,{img:e.img,link_to:e.link_to}))}))),n.default.createElement("div",{ref:r,className:"h-1px"}),l.current?null:n.default.createElement("div",{className:"h-250px"}))}r(59322),d.propTypes={},t.default=d},81499:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(93191));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.img,r=e.link_to,u=e.children;return a.default.createElement(n.Link,{className:"GPMediaPicsItem display-block h-100per brs-8px color-inherit hv-after-shadow-05",to:r},a.default.createElement("div",{className:"padding-top-100per pos-rel"},a.default.createElement("img",{className:"pos-abs-100 brs-8px border-blur object-fit-cover",src:t,alt:""})),a.default.createElement("div",{className:"GPMediaPicsItem_title"},u))}r(44647),o.propTypes={},t.default=o},20237:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),r(15854)),u=o(r(49508));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.group_id;return a.default.createElement("div",{className:"GPMediaVideos"},a.default.createElement(u.default,{handle_API_L:function(e){return(0,n.handle_API_FbGroupMediaVideo_L)({c_count:e,group_id:t})}}))}i.propTypes={},t.default=i},59322:(e,t,r)=>{"use strict";r.r(t)},44647:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=237.js.map