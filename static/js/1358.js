(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[1358],{23598:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_search_user_arr=void 0;var a=r(74271),n=r(39727),c=r(69565),l=r(8047),o=r(32601),i=r(7605),u=r(61426),s=function(){var e=(0,u.getRandomFromArr)([a.default_action_user_case_obj.add_friend,a.default_action_user_case_obj.reply_request,a.default_action_user_case_obj.follow,a.default_action_user_case_obj.chat]);return{id:(0,c.getRandomId)(),first_name:(0,o.getRandomName)(),last_name:(0,o.getRandomName)(),picture:(0,l.getRandomVidPic)(),action_case:e,info_1:(0,u.getRandomFromArr)(["Friend",(0,c.getRandomNumber)(100,200)+" followers","Trường THPT Cao Bá Quát"]),info_2_arr:(0,u.getRandomFromArr)([["Lives in Hanoi, Vietnam","Hanoi University"],["Lives in Nam Dinh"],["Havrd University"]])}};t.default_fb_search_user_arr=function(){return(0,i.getDefaultArr)(s,(0,n.getRandomBool)()?10:0,10)}},13:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbSearchUser_L=void 0;var a,n,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l=(t.handle_API_FbSearchUser_L=(a=regeneratorRuntime.mark((function e(t){var r,a=t.c_count,n=void 0===a?0:a,o=t.search,i=void 0===o?"":o,u=t.params,s=void 0===u?{}:u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_FbSearchUser_L)(c({c_count:n,search:i,size:10,page:1},s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,c){try{var l=e[n](c),o=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(o).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(o)}("next")}))},function(e){return n.apply(this,arguments)}),r(71236))},4814:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.useObserverMoreSearch=function(e){var t=e.handle_API_L,r=(0,n.useRef)(null),l=(0,c.useObserverShowMore)({handle_API_L:t});return(0,n.useEffect)((function(){l.refreshData_API()}),[location.search]),(0,n.useEffect)((function(){l.observerShowMore({fake_elm_end:r.current,rootMargin:"0px 0px 250px 0px",way_scroll:"to_bottom",margin:250})}),[]),a({ref_fake_elm:r},l)};var n=r(67294),c=r(2804)},81858:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getClientX=function(e){return a.IS_MOBILE?e.touches[0].clientX:e.clientX},t.getClientY=function(e){return a.IS_MOBILE?e.touches[0].clientY:e.clientY},t.getClientXY=function(e){return a.IS_MOBILE?{client_x:e.touches[0].clientX,client_y:e.touches[0].clientY}:{client_x:e.clientX,client_y:e.clientY}},t.getTouchClientXY=function(e,t){return{client_x:e.touches[t].clientX,client_y:e.touches[t].clientY}};var a=r(55852)},71236:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbSearchUser_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},c=r(50918),l=r(23598);t.API_FbSearchUser_L=function(e){return(0,c.API_FakeReal)((0,l.default_fb_search_user_arr)(),(function(){return(0,n.default)({url:"api/facebook/fb-search-user-l/",method:"GET",params:e})}),e,!0)}},59203:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=l(r(67294)),c=(l(r(45697)),r(93191));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){e.id;var t=e.picture,r=e.name,l=e.PicComponent,o=e.NameComponent,i=e.link_to,u=e.action_img_props,s=e.action_name_props,d=e.info_1,f=e.info_2,_=e.Icon;return n.default.createElement("div",{className:"FsSearchPageUserPageGroup fb-search-page-right-item-contain padding-16px bg-primary brs-8px box-shadow-1"},n.default.createElement("div",{className:"display-flex"},n.default.createElement("div",{className:"margin-right-12px"},n.default.createElement(l,a({title_action:n.default.createElement(c.Link,{className:"display-block brs-50 overflow-hidden hv-after-shadow-05",to:i},n.default.createElement("img",{className:"FsSearchPageUserPageGroup_pic brs-50 border-blur object-fit-cover",src:t,alt:"",width:"60",height:"60"}))},u))),n.default.createElement("div",{className:"flex-grow-1 flex-between-center"},n.default.createElement("div",null,n.default.createElement("div",{className:"display-flex"},n.default.createElement(o,a({title_action:n.default.createElement(c.Link,{className:"color-inherit",to:i},n.default.createElement("div",{className:"font-600"},r))},s))),d?n.default.createElement("div",{className:"font-13px text-secondary"},d):null,f?n.default.createElement("div",{className:"margin-top-10px text-secondary"},f):null),_?n.default.createElement("div",{className:"flex-shrink-0"},_):null)))}r(87890),o.propTypes={},t.default=o},72732:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(87898)),c=r(13),l=r(4814),o=u(r(91285)),i=u(r(29448));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=(0,l.useObserverMoreSearch)({handle_API_L:function(e){return(0,c.handle_API_FbSearchUser_L)({c_count:e,params:(0,n.ParseLocationSearch)()})}}),r=t.ref_fake_elm,u=t.data_state,s=t.data_count,d=u.data_arr,f=u.has_fetched;return a.default.createElement("div",{className:"FbSearchPagePeople"},a.default.createElement(i.default,{right_elm:a.default.createElement("div",{className:"fb-search-page-right-contain display-flex-center"},a.default.createElement("div",{className:"FbSearchPagePeople_list w-680px"},d.map((function(e,t){return a.default.createElement("div",{key:t,className:"fb-search-page-right-item"},a.default.createElement(o.default,{profile:e}))}))),a.default.createElement("div",{ref:r,className:"padding-1px"})),no_result:f&&0==s.current,title:"People"}))}r(69498),s.propTypes={},t.default=s},91285:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(40808))),c=o(r(75238)),l=o(r(59203));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.profile,r=t.id,o=t.first_name,i=t.last_name,u=t.picture,s=t.info_1,d=t.info_2_arr,f=t.action_case;return a.default.createElement("div",{className:"FbSearchPagePeopleItem"},a.default.createElement(l.default,{id:r,picture:u,name:o+" "+i,PicComponent:c.default,NameComponent:c.default,link_to:"/profile/"+r,action_img_props:{user_id:r},action_name_props:{user_id:r},info_1:s,info_2:a.default.createElement("div",null,d.map((function(e,t){return a.default.createElement("div",{key:t},e)}))),Icon:a.default.createElement(n.default,{action_case:f,user_id:r,use_title:!1,handleAction:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];console.log(t)}})}))}r(20794),i.propTypes={},t.default=i},87890:(e,t,r)=>{"use strict";r.r(t)},69498:(e,t,r)=>{"use strict";r.r(t)},20794:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=1358.js.map