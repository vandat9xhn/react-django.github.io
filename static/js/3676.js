(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3676],{15359:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_obj=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(39727),l=a(8047),o=a(58822),i=a(84962);t.default_fb_page_obj=function(){var e=(0,o.getRandomPage)().page_obj;return r({},e,{cover:(0,l.getRandomVidPic)(),has_new_story:(0,n.getRandomBool)(),info_extra_1:{title:"@"+e.name.toLowerCase().replace(" ",""),has_link:!1,link_to:""},info_extra_2:{title:(0,i.getRandomPageType)(),has_link:!1,link_to:""},action_main_arr:["learn_more"],action_arr:["like","chat"],has_liked:(0,n.getRandomBool)(),has_followed:(0,n.getRandomBool)()})}},75194:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbPage_R=void 0;var r,n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=(t.handle_API_FbPage_R=(r=regeneratorRuntime.mark((function e(t){var a,r=t.page_id,n=void 0===r?0:r,i=t.params,u=void 0===i?{}:i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.API_FbPage_R)(l({page_model:n},u));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=r.apply(this,arguments);return new Promise((function(t,a){return function r(n,l){try{var o=e[n](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(i)}("next")}))},function(e){return n.apply(this,arguments)}),a(2241))},37814:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_fb_page=function(){return{name:"",picture:"",cover:"",has_new_story:!1,info_extra_1:{title:"",has_link:!1,link_to:""},info_extra_2:{title:"",has_link:!1,link_to:""},action_main_arr:[],action_arr:[],has_liked:!1,has_followed:!1}}},2241:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbPage_R=void 0;var r,n=(r=a(87421))&&r.__esModule?r:{default:r},l=a(50918),o=a(15359);t.API_FbPage_R=function(e){return(0,l.API_FakeReal)((0,o.default_fb_page_obj)(),(function(){return(0,n.default)({url:"api/facebook/fb-page-r/",method:"GET",params:e})}),e)}},63629:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(16449)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.link_to,a=e.picture,l=e.has_new_story,o=e.openPicture;return r.default.createElement("div",{className:"ProfileLayoutPicture pos-rel h-100per"},r.default.createElement("div",{className:"ProfileLayoutPicture_contain pos-abs bottom-0 left-0 w-100per"},r.default.createElement(n.default,{className:"ProfileLayoutPicture_link display-block w-100per brs-50 box-shadow-1 "+(l?"ProfileLayoutPicture_link-story":""),has_link:!!t,link_to:t},r.default.createElement("img",{className:"ProfileLayoutPicture_img w-100per brs-50 bg-primary object-fit-cover",src:a,height:"160",alt:"",onClick:o}))))}a(274),o.propTypes={},t.default=o},64575:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(a(67294)),n=(d(a(45697)),d(a(17852))),l=d(a(58833)),o=d(a(78790)),i=d(a(16812)),u=d(a(22353)),c=d(a(11836));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.page_id,a=e.name,d=e.picture,f=e.cover,s=e.has_new_story,_=e.info_extra_1,p=e.info_extra_2,m=e.action_main_arr,v=e.action_arr,h=e.has_liked,g=e.has_followed,y=e.openCoverPicture,b=e.openPicture,P=e.handleAction;return r.default.createElement(n.default,null,r.default.createElement("div",{className:"FbPageInfo bg-primary"},r.default.createElement("div",{className:"FbPageInfo_cover"},r.default.createElement(l.default,{cover:f,openCoverPicture:y})),r.default.createElement("div",{className:"FbPageInfo_user_action display-flex space-between fb-profile-width-contain"},r.default.createElement("div",{className:"FbPageInfo_user display-flex"},r.default.createElement("div",{className:"flex-shrink-0"},r.default.createElement(u.default,{picture:d,has_new_story:s,openPicture:b})),r.default.createElement("div",{className:"FbPageInfo_name_extra margin-left-16px"},r.default.createElement("div",null,r.default.createElement(c.default,{name:a})),r.default.createElement("div",null,r.default.createElement(o.default,{info_extra_1:_,info_extra_2:p})))),r.default.createElement("div",{className:"FbPageInfo_actions align-self-end"},r.default.createElement(i.default,{page_id:t,action_main_arr:m,action_arr:v,has_liked:h,has_followed:g,handleAction:P})))))}a(18616),f.propTypes={},t.default=f},16812:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(67294)),n=(i(a(45697)),a(55852)),l=i(a(23633)),o=i(a(94856));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.page_id,a=e.action_main_arr,i=e.action_arr,u=e.has_liked,c=e.has_followed,d=e.handleAction;return n.IS_MOBILE?r.default.createElement("div",{className:"FbPageActionsMb display-flex flex-wrap"},i.map((function(e,a){return r.default.createElement("div",{key:a,className:"flex-grow-1 padding-4px"},r.default.createElement(l.default,{action_name:e,page_id:t,has_liked:u,has_followed:c,handleAction:d}))})),r.default.createElement("div",{className:"padding-4px"},r.default.createElement(o.default,{page_id:t,handleAction:d}))):r.default.createElement("div",{className:"FbPageActions"},r.default.createElement(l.default,{action_name:a[0],page_id:t,has_liked:u,has_followed:c,handleAction:d}))}a(24339),u.propTypes={},t.default=u},58833:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(85879)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.cover,a=e.openCoverPicture;return r.default.createElement(n.default,{cover:t,link_to:"/posts/1",openCoverPicture:a})}o.propTypes={},t.default=o},78790:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(16449)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.title,a=e.has_link,l=e.link_to;return r.default.createElement(n.default,{class_link:a?"font-500":"",has_link:a,link_to:l},t)}function i(e){var t=e.info_extra_1,a=e.info_extra_2;return r.default.createElement("div",{className:"FbPageInfoExtra text-secondary font-17px"},r.default.createElement(o,t)," · ",r.default.createElement(o,a))}a(24458),i.propTypes={},t.default=i},11836:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(67020)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.name;return r.default.createElement(n.default,{name:t})}o.propTypes={},t.default=o},22353:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(63629)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.picture,a=e.has_new_story,l=e.openPicture;return r.default.createElement(n.default,{link_to:"/posts/1",picture:t,has_new_story:a,openPicture:l})}o.propTypes={},t.default=o},62252:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=_(r),l=a(55852),o=a(47206),i=_(a(23633)),u=_(a(94856)),c=_(a(19936)),d=_(a(43642)),f=_(a(45102)),s=_(a(33594));function _(e){return e&&e.__esModule?e:{default:e}}function p(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}a(14111);var m=function(e){var t=e.page_id,a=void 0===t?0:t;return[{link_to:"/page/"+a+"/events",title:"Events"},{link_to:"/page/"+a+"/community",title:"Community"},{link_to:"/page/"+a+"/group",title:"Group"}]},v=function(e){var t=e.page_id,a=void 0===t?0:t;return[{link_to:"/page/"+a+"/",title:"Home"},{link_to:"/page/"+a+"/about",title:"About"},{link_to:"/page/"+a+"/videos",title:"Videos"},{link_to:"/page/"+a+"/photos",title:"Photos"}].concat(p(l.IS_MOBILE?m({page_id:a}):[]))};t.default=function(e){var t=e.page_id,a=e.name,_=e.picture,h=e.action_main_arr,g=e.action_arr,y=e.has_liked,b=e.has_followed,P=e.handleAction,E=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)({nav_arr:v({page_id:t}),nav_more_arr:l.IS_MOBILE?[]:m({page_id:t})}),2),k=E[0],w=(E[1],(0,o.useStickyOver)({}));return n.default.createElement(d.default,{has_scroll_over:!0,scroll_over_obj:w,left_main_elm:n.default.createElement("ul",{className:"FbPageNav_list flex-grow-1 display-flex list-none h-100per padding-top-3px"},k.nav_arr.map((function(e,t){return n.default.createElement("li",{key:t,className:"FbPageNav_item"},n.default.createElement(s.default,{link_to:e.link_to,title:e.title}))})),l.IS_MOBILE?null:n.default.createElement("li",{className:"FbPageNav_item"},n.default.createElement(f.default,{more_link_arr:k.nav_more_arr}))),left_sticky_elm:n.default.createElement("div",{className:"display-flex h-100per padding-y-2px"},n.default.createElement(c.default,{link_to:"/page/"+t+"/home",picture:_,name:a})),right_elm:l.IS_MOBILE?null:n.default.createElement("div",{className:"display-flex align-items-center h-100per"},[].concat(p(w.scroll_over?h:[]),p(g)).map((function(e,a){return n.default.createElement("div",{key:a,className:"margin-right-8px"},n.default.createElement(i.default,{action_name:e,page_id:t,has_liked:y,has_followed:b,handleAction:P}))})),n.default.createElement("div",null,n.default.createElement(u.default,{page_id:t,handleAction:P})))})}},33594:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(7077)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.link_to,a=e.title;return r.default.createElement(n.default,{title:a,link_to:t})}a(69026),o.propTypes={},t.default=o},45102:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=(l(a(45697)),l(a(91834)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.color,a=e.bg_btn,l=e.more_link_arr;return r.default.createElement(n.default,{color:t,bg_btn:a,more_link_arr:l})}o.propTypes={},t.default=o},14538:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(67294),l=s(n),o=a(93191),i=(s(a(45697)),a(37814)),u=a(75194),c=s(a(64575)),d=s(a(62252)),f=s(a(79090));function s(e){return e&&e.__esModule?e:{default:e}}function _(e){var t,a,s=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.handle_API_FbPage_R)({page_id:_});case 2:t=e.sent,v((function(e){return r({},e,{page_obj:t,has_fetch:!0})}));case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function r(n,l){try{var o=e[n](l),i=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(i)}("next")}))},function(){return a.apply(this,arguments)}),_=(0,o.useParams)().id,p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({page_obj:(0,i.initial_fb_page)(),has_fetch:!1}),2),m=p[0],v=p[1],h=m.page_obj,g=m.has_fetch,y=h.name,b=h.picture,P=h.cover,E=h.has_new_story,k=h.info_extra_1,w=h.info_extra_2,x=h.action_main_arr,M=h.action_arr,j=h.has_liked,O=h.has_followed;function A(){}return(0,n.useEffect)((function(){s()}),[_]),g?l.default.createElement("div",{key:_,className:"FbPage"},l.default.createElement("div",null,l.default.createElement(c.default,{page_id:_,name:y,picture:b,cover:P,has_new_story:E,info_extra_1:k,info_extra_2:w,action_main_arr:x,action_arr:M,has_liked:j,has_followed:O,openCoverPicture:function(){},openPicture:function(){},handleAction:A})),l.default.createElement("div",{className:"fb-profile-nav"},l.default.createElement("div",{className:"fb-profile-width-contain"},l.default.createElement(d.default,{page_id:_,name:y,picture:b,action_main_arr:x,action_arr:M,has_liked:j,has_followed:O,handleAction:A}))),l.default.createElement("div",{className:"padding-y-16px"},_>0?l.default.createElement(n.Suspense,{fallback:null},l.default.createElement(o.Switch,null,f.default.map((function(e,t){return l.default.createElement(o.Route,{key:t,path:e.path,render:function(t){return l.default.createElement(e.component,r({},t,{page_id:_}))}})})),l.default.createElement(o.Redirect,{to:"/page/"+_+"/home"}))):null)):null}_.propTypes={},t.default=_},79090:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=[{path:"/page/:id/home",component:((r=a(67294))&&r.__esModule?r:{default:r}).default.lazy((function(){return Promise.all([a.e(9859),a.e(4911),a.e(9319),a.e(6272),a.e(8239),a.e(8783)]).then(a.bind(a,25492))}))}];t.default=n},274:(e,t,a)=>{"use strict";a.r(t)},18616:(e,t,a)=>{"use strict";a.r(t)},24339:(e,t,a)=>{"use strict";a.r(t)},24458:(e,t,a)=>{"use strict";a.r(t)},14111:(e,t,a)=>{"use strict";a.r(t)},69026:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=3676.js.map