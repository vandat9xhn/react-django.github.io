(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3317],{38320:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_suggested_arr=void 0;var a=r(69565),n=r(8047),l=r(58822),u=r(7605),o=r(61426),i=function(){var e=(0,u.getDefaultArr)((function(){return(0,l.getRandomUser)().user}),0,2),t=(0,a.getRandomNumber)(e.length,e.length+4);return{id:(0,a.getRandomId)(),name:"Group name",picture:(0,n.getRandomVidPic)(),privacy:(0,o.getRandomFromArr)(["Public","Private"]),count_member:1e3*(0,a.getRandomNumber)(1,20),post_count:(0,a.getRandomNumber)(1,50),post_unit:(0,o.getRandomFromArr)(["day","week"]),friend_arr:e,friend_count:t,has_more_friend:t>e.length}};t.default_fb_group_suggested_arr=function(){return(0,u.getDefaultArr)(i,16,16)}},59764:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_search_group_arr=void 0;var a=r(39727),n=r(70745),l=r(69565),u=r(8047),o=r(7605),i=r(61426);function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var s=function(){var e=(0,i.getRandomFromArr)(["joined","sent_request","not_joined"]);return{id:(0,l.getRandomId)(),name:"Group name",picture:(0,u.getRandomVidPic)(),privacy:(0,i.getRandomFromArr)(["Public","Private"]),count_member:1e3*(0,l.getRandomNumber)(1,20),info_arr:[(0,i.getRandomFromArr)([{title:(0,n.getRandomContent)().slice(0,100),icon_name:""},{title:(0,l.getRandomNumber)(2,4)+" friends are members",icon_name:"friends"}])].concat(c((0,a.getRandomBool)()?[]:[(0,i.getRandomFromArr)([{title:(0,l.getRandomNumber)(2,4)+" unread posts",icon_name:""},{title:(0,l.getRandomNumber)(2,10)+" posts a day",icon_name:""},{title:(0,l.getRandomNumber)(2,10)+" posts a week",icon_name:""}])])),action_case:e}};t.default_fb_search_group_arr=function(){return(0,o.getDefaultArr)(s,16,16)}},24841:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbGroupSuggested_L=void 0;var a,n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u=(t.handle_API_FbGroupSuggested_L=(a=regeneratorRuntime.mark((function e(t){var r,a=t.c_count,n=void 0===a?0:a,o=t.params,i=void 0===o?{}:o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_FbGroupSuggested_L)(l({c_count:n,size:10,page:1},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(o)}("next")}))},function(e){return n.apply(this,arguments)}),r(66603))},92356:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbSearchGroup_L=void 0;var a,n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u=(t.handle_API_FbSearchGroup_L=(a=regeneratorRuntime.mark((function e(t){var r,a,n=t.c_count,d=void 0===n?0:n,f=t.params,p=void 0===f?{}:f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.API_FbSearchGroup_L)(l({c_count:d,size:16,page:1},p));case 2:return r=e.sent,(a=r.data.data).map((function(e){var t=["joined","not_joined","sent_request"].indexOf(e.action_case);return e.action_case_obj=[{name:e.action_case,title:"Visit group",Icon:u.default.createElement(c.default,{stroke:"currentColor",size_icon:"12px"})},{name:e.action_case,title:"Join group",Icon:u.default.createElement(s.default,{stroke:"currentColor",size_icon:"10px"})},{name:e.action_case,title:"Pending",Icon:u.default.createElement("div",{className:"display-flex-center rotate-180 line-16px"},u.default.createElement(i.default,{x:200,y:200,size_icon:"14px"}))}][t],e})),e.abrupt("return",l({},r.data,{data:a}));case 6:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(o)}("next")}))},function(e){return n.apply(this,arguments)}),d(r(67294))),o=r(76821),i=d(r(37930)),c=d(r(46301)),s=d(r(24012));function d(e){return e&&e.__esModule?e:{default:e}}},67238:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,r=e.fill,n=e.stroke;return a.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:r,strokeWidth:"10",stroke:n},a.default.createElement("path",{d:"M145.216 99.5058C145.216 124.079 125.48 143.924 101.225 143.924C76.9699 143.924 57.2334\r 124.079 57.2334 99.5058C57.2334 74.9331 76.9699 55.0872 101.225 55.0872C125.48 55.0872 145.216\r 74.9331 145.216 99.5058Z"}),a.default.createElement("path",{d:"M59.0922 44.157L55.6628 23.4012L79.6686 15L91.9164 29.8256H110.043L124.251 15L144.827\r 23.4012V44.157L157.565 58.9826L177.161 56.5116L185 77.2674L171.282 90.6105V110.378L185\r 121.25L177.161 144.477H157.565L142.378 158.314L144.827 177.587L124.251 185L110.043\r 170.669H91.9164L79.6686 185L57.1326 177.587L59.0922 158.314L46.8444 144.477L24.7983\r 146.453L15 125.203L31.6571 110.378V93.5756L15 77.2674L24.7983 56.5116L42.9251\r 58.9826L59.092244.157Z"}),a.default.createElement("circle",{cx:"100",cy:"100",r:"35",fill:"none"}))}u.propTypes={fill:n.default.string,size_icon:n.default.string,stroke:n.default.string},u.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)"},t.default=u},66603:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbGroupSuggested_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},l=r(50918),u=r(38320);t.API_FbGroupSuggested_L=function(e){return(0,l.API_FakeReal)((0,u.default_fb_group_suggested_arr)(),(function(){return(0,n.default)({url:"api/facebook/fb-group-l/",method:"GET",params:e})}),e)}},76821:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbSearchGroup_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},l=r(50918),u=r(59764);t.API_FbSearchGroup_L=function(e){return(0,l.API_FakeReal)((0,u.default_fb_search_group_arr)(),(function(){return(0,n.default)({url:"api/facebook/fb-search-group-l/",method:"GET",params:e})}),e)}},27698:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(31913)),l=u(r(8489));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.initial_value,r=void 0===t?"":t,u=e.initial_open,o=void 0!==u&&u,i=e.always_open,c=void 0!==i&&i,s=e.placeholder,d=e.class_input,f=e.use_back,p=e.params_api,m=(0,n.useFbSearchInput)({initial_value:r,initial_open:o,always_open:c}),_=m.is_open,v=m.show_contain,g=m.value,b=m.handleFocus,h=m.handleChange,x=m.handleClose,y=m.onSearch;return a.default.createElement(l.default,{value:g,placeholder:s,class_input:d,is_open:_,show_contain:v,use_back:f,params_api:p,handleFocus:b,handleChange:h,onSearch:y,handleClose:x})}r(92688),o.propTypes={},t.default=o},52636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=o(r(45697)),l=o(r(88303)),u=o(r(14767));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.pic_arr,r=e.has_more,n=e.ItemComponent,u=e.clickMore;return a.default.createElement("div",{className:"flex-end row-reverse"},r&&a.default.createElement("div",{className:"OverlapPics_item"},a.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},a.default.createElement(n,{picture:t[0].picture}),a.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:u},a.default.createElement(l.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(r?1:0).map((function(e,t){return a.default.createElement("div",{key:t,className:"OverlapPics_item"},a.default.createElement("div",{className:"OverlapPics_item_img"},a.default.createElement(n,{picture:e.picture})))})))}r(89666),i.propTypes={pic_arr:n.default.array,has_more:n.default.bool,ItemComponent:n.default.func,clickMore:n.default.func},i.defaultProps={ItemComponent:u.default},t.default=i},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.picture;return a.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}n(r(45697)),l.propTypes={},t.default=l},15121:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(67294)),n=(i(r(45697)),r(93191)),l=i(r(37930)),u=i(r(83174)),o=i(r(47126));function i(e){return e&&e.__esModule?e:{default:e}}r(46714);var c=a.default.createElement("div",{className:"display-flex-center wh-100 bg-blue text-white"},"Join Group");function s(e){var t=e.id,r=e.name,i=e.picture,s=e.count_member,d=e.post_count,f=e.post_unit,p=e.friend_arr,m=e.friend_count,_=e.has_more_friend,v=e.BtnElm,g=void 0===v?c:v,b=e.removeGroupCard;return a.default.createElement("div",{className:"GroupCard pos-rel display-flex flex-col space-between h-100per brs-8px border-blur bg-primary overflow-hidden user-select-none"},a.default.createElement(n.Link,{className:"display-block pos-abs-100 z-index-1",to:"/group/"+t}),a.default.createElement("div",{className:"pos-abs right-0 top-0 z-index-1 padding-12px"},a.default.createElement("div",{className:"btn-icon-36px bg-shadow-5 active-scale-sm cursor-pointer",onClick:b},a.default.createElement(l.default,{y:400,size_icon:"24px"}))),a.default.createElement("div",null,a.default.createElement("div",{className:"GroupCard_pic pos-rel"},a.default.createElement("img",{className:"pos-abs-100 object-fit-cover",src:i,alt:""})),a.default.createElement("div",{className:"border-top-blur"},a.default.createElement(u.default,{name:r,count_member:s,post_count:d,post_unit:f}))),a.default.createElement("div",{className:"padding-top-8px"},m?a.default.createElement("div",{className:"padding-x-16px"},a.default.createElement(o.default,{friend_arr:p,friend_count:m,has_more_friend:_})):null,a.default.createElement("div",{className:"GroupCard_join padding-16px"},a.default.createElement("button",{className:"display-flex-center z-index-1 w-100per h-36px brs-6px btn btn-active overflow-hidden font-600 cursor-pointer hv-after-shadow-05"},g))))}s.propTypes={},t.default=s},47126:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),u(r(66963))),l=u(r(52636));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.friend_arr,r=e.friend_count,u=e.has_more_friend;return a.default.createElement("div",{className:"GroupCardFriends text-secondary"},a.default.createElement("div",{className:"display-flex align-items-center"},t.length?a.default.createElement("div",{className:"padding-right-5px"},a.default.createElement(l.default,{pic_arr:t,has_more:u})):a.default.createElement(n.default,{size_icon:"24px",fill:"currentColor"}),a.default.createElement("div",{className:"margin-left-5px"},t.length?t[0].last_name+(r>=2?" and "+(r-1)+" friend"+(r>3?"s":""):""):""+r," are member",r>=2?"s":"")))}r(44668),o.propTypes={},t.default=o},83174:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),r(36289));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.name,r=e.count_member,l=e.post_count,u=e.post_unit;return a.default.createElement("div",{className:"GroupCartInfo padding-x-16px padding-top-16px"},a.default.createElement("div",{className:"font-600 font-17px"},t),a.default.createElement("div",{className:"text-secondary"},(0,n.UnitNumber)(r)," members · ",(0,n.UnitNumber)(l)," ","post",l>=2?"s":""," a ",u))}u.propTypes={},t.default=u},869:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),l=d(n),u=(d(r(45697)),r(24841)),o=r(84353),i=r(42789),c=d(r(61498)),s=d(r(15121));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t,r,d=(t=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:m(),y();case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(o)}("next")}))},function(){return r.apply(this,arguments)}),f=e.params_api,p=e.BtnElm,m=e.handleFetched,_=(0,n.useRef)(null),v=(0,i.useScrollToX)({ref_scroll_elm:_,getItemElm:function(){return _.current.getElementsByClassName("GroupRowCardsFit_item")[0]}}),g=v.is_has_next,b=v.is_has_prev,h=v.handleNext,x=v.handlePrev,y=v.hasNextPrev,E=(0,o.useDataShowMore)({handle_API_L:function(e){return(0,u.handle_API_FbGroupSuggested_L)({c_count:e,params:a({size:5},f)})}}),N=E.data_state,P=E.getData_API,w=N.data_arr;return(0,n.useEffect)((function(){d()}),[]),l.default.createElement("div",{className:"GroupRowCardsFit pos-rel"},l.default.createElement("div",{ref:_,className:"wh-100 overflow-x-auto scroll-height-0"},l.default.createElement("ul",{className:"display-flex list-none"},w.map((function(e,t){return l.default.createElement("li",{key:e.id,className:"GroupRowCardsFit_item w-100per flex-shrink-0"},l.default.createElement(s.default,{id:e.id,name:e.name,picture:e.picture,count_member:e.count_member,post_count:e.post_count,post_unit:e.post_unit,friend_arr:e.friend_arr,friend_count:e.friend_count,has_more_friend:e.has_more_friend,BtnElm:p}))})))),l.default.createElement("div",{className:"text-secondary"},l.default.createElement(c.default,{is_btn_circle:!0,is_has_next:g,is_has_prev:b,handleNext:h,handlePrev:x})))}r(58402),f.propTypes={},t.default=f},81419:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(91641)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children;return a.default.createElement("div",{className:"GroupLayout"},a.default.createElement("div",{className:"display-flex"},a.default.createElement("div",{className:"GroupLayout_left flex-shrink-0 left-bar-sticky"},a.default.createElement(n.default,null)),a.default.createElement("div",{className:"GroupLayout_right flex-grow-1 overflow-hidden"},t)))}u.propTypes={},t.default=u},91641:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=i(a),l=(i(r(45697)),i(r(34626))),u=i(r(7737)),o=i(r(84155));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=(0,a.useRef)(null);return n.default.createElement("div",{className:"GroupLayoutLeft display-flex flex-col h-100per"},n.default.createElement("div",null,n.default.createElement(l.default,null)),n.default.createElement("div",{ref:t,className:"flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin"},n.default.createElement("div",null,n.default.createElement(u.default,null)),n.default.createElement("div",null,n.default.createElement(o.default,{ref_scroll:t}))))}c.propTypes={},t.default=c},34626:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),u(r(67238))),l=u(r(27698));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("div",{className:"GroupLayoutLeftHead padding-y-10px border-bottom-blur"},a.default.createElement("div",{className:"flex-between-center margin-bottom-6px padding-x-16px"},a.default.createElement("h1",{className:"font-24px font-700"},"Groups"),a.default.createElement("div",{className:"btn-icon-36px btn-active bg-fb cursor-pointer hv-bg-hv"},a.default.createElement(n.default,{size_icon:"24px"}))),a.default.createElement("div",{className:"GroupLayoutLeftHead_search"},a.default.createElement(l.default,{placeholder:"Search groups",always_open:!0,class_input:"PostInputSearch_input-36px",use_back:!1,params_api:{search_in:"group"}})))}r(6054),o.propTypes={},t.default=o},84155:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=i(a),l=(i(r(45697)),r(93191)),u=r(92356),o=r(2804);function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.ref_scroll,r=(0,a.useRef)(null),i=(0,o.useObserverShowMore)({handle_API_L:function(e){return(0,u.handle_API_FbSearchGroup_L)({c_count:e,params:{type:"joined"}})}}),c=i.data_state,s=i.is_max,d=i.getData_API,f=i.observerShowMore;return(0,a.useEffect)((function(){d(),f({fake_elm_end:r.current,root:t.current,rootMargin:"0px 0px 200px 0px",way_scroll:"to_bottom",margin:200})}),[]),n.default.createElement("div",{className:"GroupLeftJoined margin-x-8px padding-y-12px border-top-blur"},n.default.createElement("h2",{className:"margin-bottom-5px padding-x-8px font-17px font-600"},"Group you've joined"),c.data_arr.map((function(e,t){return n.default.createElement("div",{key:e.id},n.default.createElement(l.Link,{className:"display-flex padding-8px brs-6px color-inherit hv-bg-fb",to:"/group/"+e.id},n.default.createElement("img",{className:"brs-8px border-blur object-fit-cover",src:e.picture,alt:"",width:"60",height:"60"}),n.default.createElement("div",{className:"margin-left-12px"},n.default.createElement("div",{className:"wk-box-vertical line-clamp-2 overflow-hidden font-500"},e.name),n.default.createElement("div",null))))})),n.default.createElement("div",{ref:r,className:"GroupLeftJoined_fake "+(s.current?"display-none":"")}))}r(24548),c.propTypes={},t.default=c},7737:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(93191)),l=u(r(24012));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("div",{className:"GroupLayoutLeftNav padding-8px"},[{title:"Your feed",Icon:null,link_to:"/group/feed"},{title:"Discover",Icon:null,link_to:"/group/discover"},{title:"Your notifications",Icon:null,link_to:"/group/notifications"}].map((function(e,t){return a.default.createElement("div",{key:t},a.default.createElement(n.NavLink,{className:"display-flex align-items-center padding-x-8px padding-y-8px brs-6px line-20px text-333 font-500 hv-bg-fb",activeClassName:"bg-fb",to:e.link_to},a.default.createElement("div",{className:"btn-icon-36px margin-right-12px bg-ccc"},e.Icon),a.default.createElement("div",null,e.title)))})),a.default.createElement("div",{className:"margin-top-10px margin-x-4px"},a.default.createElement(n.Link,{className:"display-flex-center padding-x-8px padding-y-8px brs-6px bg-fb-active line-20px font-500 hv-after-shadow-05",to:"/group/create"},a.default.createElement(l.default,{size_icon:"15px",stroke:"currentColor"}),a.default.createElement("span",{className:"margin-left-5px"},"Create New Group"))))}o.propTypes={},t.default=o},92688:(e,t,r)=>{"use strict";r.r(t)},89666:(e,t,r)=>{"use strict";r.r(t)},46714:(e,t,r)=>{"use strict";r.r(t)},44668:(e,t,r)=>{"use strict";r.r(t)},58402:(e,t,r)=>{"use strict";r.r(t)},6054:(e,t,r)=>{"use strict";r.r(t)},24548:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=3317.js.map