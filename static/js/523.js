(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[523],{8951:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_group_action_other_obj={your_content:{name:"your_content",title:"Your content",info:""},share:{name:"share",title:"Share",info:""},pin:{name:"pin",title:"Pin group",info:""},report:{name:"report",title:"Report group",info:""}},t.data_fb_group_action_joined_obj={notice:{name:"notice",title:"Mange notifications",info:""},unfollow:{name:"unfollow",title:"Unfollow group",info:""},leave:{name:"leave",title:"Leave group",info:""}}},96721:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_joined_action_arr=void 0;var n=r(8951);t.default_fb_group_joined_action_arr=function(){return[[n.data_fb_group_action_joined_obj.notice,n.data_fb_group_action_joined_obj.unfollow],[n.data_fb_group_action_joined_obj.leave]]}},76488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_other_action_arr=void 0;var n=r(8951);t.default_fb_group_other_action_arr=function(){return[[n.data_fb_group_action_other_obj.your_content,n.data_fb_group_action_other_obj.pin,n.data_fb_group_action_other_obj.share,n.data_fb_group_action_other_obj.report]]}},35379:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_home_preview_obj=void 0;var n=r(39727),a=r(70745),o=r(69565),i=r(8047),u=r(7605);t.default_fb_page_home_preview_obj=function(){var e=(0,n.getRandomBool)();return{info_obj:{content:(0,a.getRandomContent)().slice(0,100),link_to:e?"https://fbshopeetgdd.web.app/":"",link_title:e?"fbshopeetgdd.web.app/":""},like_obj:{count:1e3*(0,o.getRandomNumber)(1,20),friend_arr:[],friend_count:0},follow_obj:{count:1e3*(0,o.getRandomNumber)(10,30)},site_obj:{link_to:"https://fbshopeetgdd.web.app/",link_title:"fbshopeetgdd.web.app/"},phone_obj:{num_phone:"0123456789"},pic_arr:(0,u.getDefaultArr)((function(){return{id:(0,o.getRandomId)(),img:(0,i.getRandomVidPic)()}}),4,9),video_obj:{id:(0,o.getRandomNumber)(),content:(0,a.getRandomContent)().slice(0,100),thumbnail:(0,i.getRandomVidPic)(),video_time:"4:22",view_count:1e4*(0,o.getRandomNumber)(1,20),created_time_str:"a day ago",reacted_ix_arr:[0,1,2],reacted_count:1e3*(0,o.getRandomNumber)(1,20),user_reacted_ix:1,reacted_count_arr:[{reacted_ix:0,count:500},{reacted_ix:1,count:1500},{reacted_ix:2,count:300}]}}}},67634:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_pinned_post_obj=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(81524),o=r(39727);t.default_fb_page_pinned_post_obj=function(){var e=(0,a.default_post_obj)({post_where:"page"});return(0,o.getRandomBool)()?n({},e):null}},96246:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_post_arr=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(81524),o=r(7605),i=function(){var e=(0,a.default_post_obj)({post_where:"page"});return n({},e)};t.default_fb_page_post_arr=function(){return(0,o.getDefaultArr)(i,10,10)}},9022:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupActions_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=(t.handle_API_GroupActions_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.group_id,a=void 0===n?0:n,u=t.type,l=void 0===u?"":u,c=t.params,d=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_GroupActions_L)(o({group_model:a,type:l},d));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var i=e[a](o),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),r(26386))},67791:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbPageHomePreview_R=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=(t.handle_API_FbPageHomePreview_R=(n=regeneratorRuntime.mark((function e(t){var r,n=t.page_id,a=void 0===n?0:n,u=t.params,l=void 0===u?{}:u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_FbPageHomePreview_R)(o({page_model:a},l));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var i=e[a](o),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),r(51653))},29776:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbPagePinnedPost_R=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=(t.handle_API_FbPagePinnedPost_R=(n=regeneratorRuntime.mark((function e(t){var r,n=t.page_id,a=void 0===n?0:n,u=t.params,l=void 0===u?{}:u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_FbPagePinnedPost_R)(o({page_model:a},l));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var i=e[a](o),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),r(85531))},81772:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbPagePost_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=(t.handle_API_FbPagePost_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.page_id,a=void 0===n?0:n,u=t.c_count,l=void 0===u?0:u,c=t.params,d=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.API_FbPagePost_L)(o({page_model:a,c_count:l,page:1,size:10},d));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var i=e[a](o),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),r(71865))},44283:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStickyAuto=function(e){var t=e.sticky_location,r=void 0===t?/./:t,n=e.header_head,d=void 0===n?o.HEADER_HEAD+10:n,s=(0,a.useRef)(null),f=(0,a.useRef)(null),_=(0,a.useRef)(null),p=(0,a.useRef)(u()),m=(0,a.useRef)(l(r)),v=(0,a.useRef)(!1),h=(0,a.useRef)(0),b=(0,a.useRef)(!1),g=(0,a.useRef)(0),P=(0,a.useRef)(!0),y=(0,i.useMounted)();function E(){var e=_.current.getBoundingClientRect().height;return b.current=e+d>innerHeight,e-innerHeight}function w(){_.current.style.position="sticky",_.current.style.top=d+"px",f.current.style.height="0px"}function j(){_.current.style.position="static",f.current.style.height="0px",p.current=!1}function x(){v.current&&(window.onscroll=null,v.current=!1)}function k(){v.current||(window.onscroll=N,v.current=!0,setTimeout((function(){c(document.getElementsByTagName("html")[0].scrollTop+1)}),0))}function O(){_.current&&(m.current=l(r),p.current=u(),h.current=E(),p.current?b.current||w():j(),b.current&&m.current&&p.current?k():x())}function N(){if(_.current){var e=_.current.getBoundingClientRect(),t=e.top,r=e.bottom,n=-s.current.getBoundingClientRect().top,a=scrollY-g.current>0,o=r<=innerHeight,i=n<=d,u=t>=0;a?(P.current||(i?f.current.style.height="0px":u&&(f.current.style.height=n+d+"px")),_.current.style.top=-h.current+"px",_.current.style.bottom="auto",P.current=!0):(P.current&&o&&(f.current.style.height=n-h.current+"px"),_.current.style.top="auto",_.current.style.bottom=-h.current-d+"px",P.current=!1),g.current=scrollY}}function M(){if(m.current){var e=u();e?p.current?(h.current=E(),b.current?k():(w(),x())):(h.current=E(),p.current=!0,b.current?(_.current.style.position="sticky",k()):w(),g.current=scrollY-296-_.current.getBoundingClientRect().height,c(g.current)):!e&&p.current&&(x(),j(),g.current=scrollY+16+_.current.getBoundingClientRect().height,c(g.current))}}return(0,a.useEffect)((function(){return window.addEventListener("resize",M),function(){window.removeEventListener("resize",M),window.onscroll=null}}),[]),(0,a.useEffect)((function(){setTimeout((function(){y&&O()}),0)}),[location.href]),{calculateAgain:O,ref_main_elm:s,ref_preview_elm:_,ref_fake_elm:f}};var n,a=r(67294),o=((n=r(45697))&&n.__esModule,r(55852)),i=r(35155),u=function(){return innerWidth>900},l=function(e){return location.href.search(e)>=0};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;document.getElementsByTagName("html")[0].scrollTop=e}},3791:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,r=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:r,strokeLinejoin:"round"},n.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:r,strokeWidth:"15"}),n.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),n.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}i.propTypes={size_icon:a.default.string,stroke:a.default.string},i.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=i},92854:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_fb_page_home_preview=function(){return{info_obj:{content:"",link_to:"",link_title:""},like_obj:{count:0,friend_arr:[],friend_count:0},follow_obj:{count:0},site_obj:{link_to:"",link_title:""},phone_obj:{num_phone:""},pic_arr:[""],video_obj:{id:0,content:"",thumbnail:"",video_time:"",view_count:0,created_time_str:"",reacted_ix_arr:[0],reacted_count:0,user_reacted_ix:-1,reacted_count_arr:[{reacted_ix:0,count:0}]}}}},42441:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_posts=function(){return[{id:0,user:{id:0,picture:"",first_name:"",last_name:"",is_online:!1},user_tag_arr:[],user_tag_count:0,emoji_obj:{},content_obj:{content_more:"",has_more_content:!1,content:""},vid_pics:[{id:0,likes:[],arr_unique_like:[],count_like:0,vid_pic:"",content_obj:{content_more:"",has_more_content:!1,content:""},comments:[],count_comment:0,histories:[],created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}],vid_pic_count:0,likes:[],count_like:0,user_reacted_ix:-1,shares:[],count_share:0,count_unique_share:0,count_user_shared:0,comments:[],count_comment:0,histories:[],count_history:0,permission_post:0,created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}]}},26386:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupActions_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),i=r(76488),u=r(96721);t.API_GroupActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)("other"==e.type?(0,i.default_fb_group_other_action_arr)():"joined"==e.type?(0,u.default_fb_group_joined_action_arr)():null,(function(){return(0,a.default)({url:"api/facebook/group-other-action-l",method:"GET",params:e})}))}},51653:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbPageHomePreview_R=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),i=r(35379);t.API_FbPageHomePreview_R=function(e){return(0,o.API_FakeReal)((0,i.default_fb_page_home_preview_obj)(),(function(){return(0,a.default)({url:"api/facebook/fb-page-home-preview-r/",method:"GET",params:e})}),e)}},85531:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbPagePinnedPost_R=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),i=r(67634);t.API_FbPagePinnedPost_R=function(e){return(0,o.API_FakeReal)((0,i.default_fb_page_pinned_post_obj)(),(function(){return(0,a.default)({url:"api/facebook/fb-page-pinned-post-r/",method:"GET",params:e})}))}},71865:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FbPagePost_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),i=r(96246);t.API_FbPagePost_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)((0,i.default_fb_page_post_arr)(),(function(){return(0,a.default)({url:"api/facebook/page-post-l",method:"GET",params:e})}),e)}},26651:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),a=(i(r(45697)),r(9022)),o=i(r(63313));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t,r,i=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.handle_API_GroupActions_L)({group_id:u,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var i=e[a](o),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),u=e.group_id,l=e.class_action_contain,c=e.is_at_body,d=e.handleAction;return n.default.createElement(o.default,{is_at_body:c,class_action_contain:l,handle_API_L:i,handleAction:d})}u.propTypes={},t.default=u},65102:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(67294)),o=(u(r(45697)),u(r(79368))),i=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.className,r=e.title,n=e.Icon,o=e.handleAction;return a.default.createElement(i.default,{className:"BtnGroupJoin "+t,title:r,Icon:n,handleClick:function(){o("join")}})}l.propTypes=n({},i.default.propTypes),l.defaultProps={className:"bg-ccc",title:"Join Group",Icon:a.default.createElement(o.default,null)},t.default=l},63313:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(10153)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.class_action_contain,r=e.is_at_body,o=e.handle_API_L,i=e.handleAction;return n.default.createElement(a.default,{class_main:"BtnGroupOther",class_btn:"BtnGroupOther_btn",class_action_contain:t,is_at_body:r,handle_API_L:o,handleAction:i})}i.propTypes={},t.default=i},52636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=u(r(45697)),o=u(r(88303)),i=u(r(14767));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.pic_arr,r=e.has_more,a=e.ItemComponent,i=e.clickMore;return n.default.createElement("div",{className:"flex-end row-reverse"},r&&n.default.createElement("div",{className:"OverlapPics_item"},n.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},n.default.createElement(a,{picture:t[0].picture}),n.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:i},n.default.createElement(o.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(r?1:0).map((function(e,t){return n.default.createElement("div",{key:t,className:"OverlapPics_item"},n.default.createElement("div",{className:"OverlapPics_item_img"},n.default.createElement(a,{picture:e.picture})))})))}r(89666),l.propTypes={pic_arr:a.default.array,has_more:a.default.bool,ItemComponent:a.default.func,clickMore:a.default.func},l.defaultProps={ItemComponent:i.default},t.default=l},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.picture;return n.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}a(r(45697)),o.propTypes={},t.default=o},70798:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=v(a),i=r(93191),u=v(r(45697)),l=r(15130),c=r(55852),d=r(65394),s=v(r(4299)),f=v(r(37279)),_=v(r(79460)),p=v(r(70657)),m=v(r(966));function v(e){return e&&e.__esModule?e:{default:e}}r(49437);var h=c.IS_MOBILE?[{Icon:o.default.createElement(f.default,{size_icon:"14px"}),title:"Text",component_props:{}},{Icon:o.default.createElement(f.default,{size_icon:"14px"}),title:"Live video",component_props:{}},{Icon:o.default.createElement(s.default,{size_icon:"14px"}),title:"Location",component_props:{}}]:[{Icon:o.default.createElement(f.default,{size_icon:"24px"}),title:"Live video",component_props:{}},{Icon:o.default.createElement(f.default,{size_icon:"24px"}),title:"Photo/Video",component_props:{chosen_vid_pic:!0}},{Icon:o.default.createElement(_.default,{size_icon:"24px",stroke:"var(--gold)"}),title:"Feeling/Activity",component_props:{chosen_emoji:!0}}];function b(e){var t=e.title,r=e.handleCreatePost,u=(0,a.useContext)(l.context_api),s=u.user,_=u.openScreenFloor;function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=c.IS_MOBILE?m.default:p.default;(0,d.openScreenWithElm)({openScreenFloor:_,elm:o.default.createElement(t,n({title:"Create post",main_content:"",vid_pics:[],title_action:"Post",user_tag_arr:[],handleCUPost:r},e))})}return o.default.createElement("div",{className:"AddNewPost padding-x-16px padding-y-12px bg-primary brs-8px"},o.default.createElement("div",{className:"AddNewPost_head display-flex align-items-center padding-bottom-12px border-bottom-blur"},o.default.createElement(i.Link,{to:"/profile/"+s.id},o.default.createElement("img",{className:"brs-50",src:s.picture,alt:"",width:"40",height:"40"})),o.default.createElement("div",{className:"AddNewPost_title flex-grow-1 margin-left-12px padding-x-12px padding-y-8px bg-fb text-nowrap text-third font-17px cursor-pointer hv-bg-hv",onClick:v},t),c.IS_MOBILE?o.default.createElement("div",{className:"padding-y-8px font-12px text-third font-600"},o.default.createElement("div",{className:"AddNewPost_photo display-flex-center flex-col padding-x-10px",onClick:function(){v({chosen_vid_pic:!0})}},o.default.createElement("div",null,o.default.createElement(f.default,{size_icon:"18px"})),o.default.createElement("div",{className:"margin-top-5px"},"Photo"))):null),o.default.createElement("div",{className:"AddNewPost_foot flex-between-center margin-top-10px font-600 text-third"},h.map((function(e,t){return o.default.createElement("div",{key:t,className:"AddNewPost_foot_part display-flex-center padding-y-8px brs-5px cursor-pointer hv-bg-hv",onClick:function(){return v(e.component_props)}},e.Icon,o.default.createElement("div",{className:"margin-left-10px"},e.title))}))))}b.propTypes={title:u.default.string,handleCreatePost:u.default.func},b.defaultProps={title:"What's on your mind?"},t.default=b},30719:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.Icon,r=e.children;return n.default.createElement("div",{className:"ProfileLayoutAboutPreviewItem"},n.default.createElement("div",{className:"display-flex align-items-start"},n.default.createElement("div",{className:"ProfileLayoutAboutPreviewItem_icon padding-6px"},t),n.default.createElement("div",{className:"padding-6px"},r)))}a(r(45697)),r(50205),o.propTypes={},t.default=o},75546:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=r(93191),o=u(r(45697)),i=u(r(40040));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.title,r=e.link_to,o=e.is_fetching,u=e.children,l=e.ProfilePrSkeleton;return n.default.createElement("div",{className:"ProfileLayoutHomePreview padding-16px bg-primary box-shadow-1 brs-8px-pc"},n.default.createElement("div",{className:o?"display-none":""},n.default.createElement("div",{className:"flex-between-center padding-bottom-16px"},n.default.createElement("h2",{className:"ProfileLayoutHomePreview_title font-20px"},t),n.default.createElement(a.Link,{to:r,className:"hv-underline"},"See all")),n.default.createElement("div",null,u)),n.default.createElement(i.default,{component:n.default.createElement(l,null),has_fetched:!o}))}r(92410),l.propTypes={title:o.default.string,sk:o.default.string,is_fetching:o.default.bool,children:o.default.oneOfType([o.default.element,o.default.string]),ProfilePrSkeleton:o.default.func},l.defaultProps={ProfilePrSkeleton:function(){return n.default.createElement("div",{className:"h-250px"})}},t.default=l},48628:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(67294)),o=(u(r(45697)),r(93191)),i=u(r(75546));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.title,r=e.link_to,u=e.is_fetching,l=e.ProfilePrSkeleton,c=e.pic_arr,d=e.getLinkItem,s=e.has_item_component,f=e.ItemComponent,_=e.item_props;return a.default.createElement(i.default,{title:t,link_to:r,is_fetching:u,ProfilePrSkeleton:l},a.default.createElement("div",{className:"PrLayoutHomePreviewPics brs-8px overflow-hidden"},a.default.createElement("div",{className:"PrLayoutHomePreviewPics_row display-flex flex-wrap"},c.map((function(e,t){return a.default.createElement("div",{key:t,className:"PrLayoutHomePreviewPics_item"},s?a.default.createElement(f,n({ix:t,item:e},_)):a.default.createElement(o.Link,{className:"pos-rel display-block padding-top-100per hv-after-shadow-05",to:d(e)},a.default.createElement("img",{className:"pos-abs-100 object-fit-cover",src:e.img,alt:""})))}))),c.length?null:a.default.createElement("div",null,"No video, image")))}r(92950),l.propTypes={},t.default=l},91002:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),a=r(93191),o=(c(r(45697)),r(36289)),i=r(12592),u=c(r(43603));r(95088);var l=c(r(75546));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.title,r=e.link_to,c=e.is_fetching,d=e.ProfilePrSkeleton,s=e.link_to_item,f=e.content,_=e.thumbnail,p=e.video_time,m=e.view_count,v=e.created_time_str,h=e.reacted_ix_arr,b=e.reacted_count,g=e.user_reacted_ix,P=e.on_API_Like_L,y=e.onOpenDetailLike;return n.default.createElement(l.default,{title:t,link_to:r,is_fetching:c,ProfilePrSkeleton:d},n.default.createElement("div",{className:"PrLayoutHomePreviewVideo line-20px"},n.default.createElement(a.Link,{className:"PrLayoutHomePreviewVideo_thumbnail display-block pos-rel color-inherit hv-after-shadow-05",to:s},n.default.createElement("img",{className:"pos-abs-100 object-fit-cover",src:_,alt:""}),n.default.createElement("div",{className:"pos-abs right-0 bottom-0 padding-8px"},n.default.createElement("div",{className:"padding-x-8px padding-y-5px brs-8px bg-shadow-5 text-white font-500"},p))),n.default.createElement(a.Link,{className:"display-block padding-y-5px text-nowrap font-17px font-600 color-inherit hv-underline",to:s},f),n.default.createElement("div",{className:"font-13px"},n.default.createElement(u.default,{title:(0,i.getPostTitleReacted)({reacted_count:b,user_reacted_ix:g}),count_like:b,arr_unique_like:h,on_API_Like_L:P,onOpenDetailLike:y})),n.default.createElement(a.Link,{className:"color-inherit hv-underline",to:s},n.default.createElement("div",{className:"font-13px"},(0,o.UnitNumber)(m)," view",m>=2?"s":""," · ",v))))}d.propTypes={},t.default=d},25492:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(55852)),o=u(r(50667)),i=u(r(10448));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.page_id;return n.default.createElement("div",{className:"FbPageHome"},n.default.createElement("div",{className:"FbPageHome_row display-flex justify-content-center"},a.IS_MOBILE?null:n.default.createElement("div",{className:"FbPageHome_left w-360px margin-right-15px"},n.default.createElement(i.default,{page_id:t})),n.default.createElement("div",{className:"FbPageHome_right w-500px max-w-100per"},n.default.createElement(o.default,{page_id:t}))))}r(31720),r(66403),l.propTypes={},t.default=l},10448:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=_(a),i=(_(r(45697)),r(55852)),u=r(92854),l=r(67791),c=r(44283),d=_(r(15473));r(38466);var s=_(r(23371)),f=_(r(4768));function _(e){return e&&e.__esModule?e:{default:e}}function p(e){var t,r,_=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.handle_API_FbPageHomePreview_R)({page_id:p});case 2:t=e.sent,h((function(e){return n({},e,{page_preview_obj:t,has_fetched:!0,is_fetching:!1})})),setTimeout((function(){i.IS_MOBILE||N()}),100);case 5:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var i=e[a](o),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),p=e.page_id,m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({page_preview_obj:(0,u.initial_fb_page_home_preview)(),has_fetched:!1,is_fetching:!0}),2),v=m[0],h=m[1],b=v.page_preview_obj,g=(v.has_fetched,v.is_fetching),P=b.info_obj,y=b.like_obj,E=b.follow_obj,w=b.site_obj,j=b.phone_obj,x=b.pic_arr,k=b.video_obj,O=(0,c.useStickyAuto)({sticky_location:/\/page\/\d+\/home$/,header_head:i.HEADER_HEAD+70}),N=O.calculateAgain,M=O.ref_main_elm,A=O.ref_preview_elm,I=O.ref_fake_elm;return(0,a.useEffect)((function(){_()}),[]),o.default.createElement("div",{ref:M,className:"FPHomeLeft h-100per"},o.default.createElement("div",{ref:I}),o.default.createElement("div",{ref:A,className:"FPHomeLeft_preview pos-sticky padding-bottom-10px"},o.default.createElement("div",{className:"FPHomeLeft_item"},o.default.createElement(d.default,{page_id:p,is_fetching:g,info_obj:P,like_obj:y,follow_obj:E,site_obj:w,phone_obj:j})),o.default.createElement("div",{className:"FPHomeLeft_pic FPHomeLeft_item"},o.default.createElement(f.default,{page_id:p,pic_arr:x,is_fetching:g})),o.default.createElement("div",{className:"FPHomeLeft_item"},o.default.createElement(s.default,{page_id:p,is_fetching:g,video_obj:k}))))}p.propTypes={},t.default=p},15473:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r(67294)),a=(f(r(45697)),f(r(75546))),o=f(r(29875)),i=f(r(49713)),u=f(r(28769)),l=f(r(16141)),c=f(r(56269)),d=f(r(22768)),s=f(r(1649));function f(e){return e&&e.__esModule?e:{default:e}}function _(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.default.createElement(o.default,{num:6})}function p(e){var t=e.page_id,r=e.is_fetching,o=e.info_obj,f=e.like_obj,p=e.follow_obj,m=e.site_obj,v=e.phone_obj;return n.default.createElement(a.default,{title:"About",link_to:"/page/"+t+"/about",is_fetching:r,ProfilePrSkeleton:_},n.default.createElement("div",{className:"FPHomeAbout"},n.default.createElement("div",{className:"FPHomeAbout_item"},n.default.createElement(i.default,{info_obj:o})),n.default.createElement("div",{className:"FPHomeAbout_item"},n.default.createElement(u.default,{like_obj:f})),n.default.createElement("div",{className:"FPHomeAbout_item"},n.default.createElement(l.default,{follow_obj:p})),n.default.createElement("div",{className:"FPHomeAbout_item"},n.default.createElement(c.default,{site_obj:m})),n.default.createElement("div",{className:"FPHomeAbout_item"},n.default.createElement(d.default,{phone_obj:v})),n.default.createElement("div",{className:"FPHomeAbout_item"},n.default.createElement(s.default,{page_id:t}))))}r(34771),p.propTypes={},t.default=p},1649:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=l(n),o=(l(r(45697)),r(15130)),i=l(r(48454)),u=l(r(30719));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.page_id,r=(0,n.useContext)(o.context_api).openRoomChat;return a.default.createElement("div",{className:"FPHomeAboutChat"},a.default.createElement(u.default,{Icon:a.default.createElement(i.default,{x:200,y:200})},a.default.createElement("div",{className:"text-blue cursor-pointer hv-underline",onClick:function(){r(t)}},"Send message")))}c.propTypes={},t.default=c},16141:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(36289)),o=u(r(96770)),i=u(r(30719));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.follow_obj.count;return n.default.createElement("div",{className:"FPHomeAboutFollow"},n.default.createElement(i.default,{Icon:n.default.createElement(o.default,null)},n.default.createElement("div",null,(0,a.UnitNumber)(t)," people follow this")))}l.propTypes={},t.default=l},49713:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),a=(i(r(45697)),r(93191),i(r(39475))),o=i(r(30719));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.info_obj,r=t.content,i=t.link_to,u=t.link_title;return n.default.createElement("div",{className:"FPHomeAboutInfo"},n.default.createElement(o.default,{Icon:n.default.createElement(a.default,{x:600})},n.default.createElement("div",null,r),i?n.default.createElement("div",null,n.default.createElement("a",{className:"hv-underline",href:i,target:"_blank"},u)):null))}u.propTypes={},t.default=u},28769:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),r(36289)),o=l(r(6153)),i=l(r(30719)),u=l(r(52636));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.like_obj,r=t.count,l=t.friend_arr,c=t.friend_count;return n.default.createElement("div",{className:"FPHomeAboutLike"},n.default.createElement(i.default,{Icon:n.default.createElement(o.default,null)},n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement("span",null,(0,a.UnitNumber)(r)," people like this"),0==c?null:n.default.createElement("span",null,", including ",c," of your friend",c>=2?"s":"")),n.default.createElement("div",null,n.default.createElement(u.default,{pic_arr:l})))))}c.propTypes={},t.default=c},22768:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),a=(i(r(45697)),i(r(72467))),o=i(r(30719));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.phone_obj.num_phone;return n.default.createElement("div",{className:"FPHomeAboutPhone"},n.default.createElement(o.default,{Icon:n.default.createElement(a.default,null)},n.default.createElement("div",null,t)))}u.propTypes={},t.default=u},56269:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),a=(i(r(45697)),r(93191),i(r(68986))),o=i(r(30719));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.site_obj,r=t.link_to,i=t.link_title;return n.default.createElement("div",{className:"FPHomeAboutSite"},n.default.createElement(o.default,{Icon:n.default.createElement(a.default,null)},n.default.createElement("a",{className:"hv-underline",href:r,target:"_blank"},i)))}u.propTypes={},t.default=u},4768:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(48628)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.page_id,r=e.pic_arr,o=e.is_fetching;return n.default.createElement(a.default,{title:"Photos",link_to:"/page/"+t+"/photos",is_fetching:o,pic_arr:r,getLinkItem:function(e){return"/page/"+t+"/photos/"+e.id}})}i.propTypes={},t.default=i},23371:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=c(n),o=(c(r(45697)),r(15130)),i=r(44918),u=r(21914),l=c(r(91002));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.page_id,r=e.is_fetching,c=e.video_obj,d=(0,n.useContext)(o.context_api).openScreenFloor,s=c.id,f=c.content,_=c.thumbnail,p=c.video_time,m=c.view_count,v=c.created_time_str,h=c.reacted_ix_arr,b=c.reacted_count,g=c.user_reacted_ix,P=c.reacted_count_arr;return a.default.createElement(l.default,{title:"Videos",link_to:"/page/"+t+"/videos",is_fetching:r,link_to_item:"/page/"+t+"/videos/"+s,content:f,thumbnail:_,video_time:p,view_count:m,created_time_str:v,reacted_ix_arr:h,reacted_count:b,user_reacted_ix:g,on_API_Like_L:function(e){return(0,u.handle_API_PostVidPicLike_L)(s)},onOpenDetailLike:function(e){(0,i.openScreenLike)({openScreenFloor:d,type_like:e,reacted_count_arr:P,handle_API_Like_L:function(e){return(0,u.handle_API_PostVidPicLike_L)(s,e)}})}})}d.propTypes={},t.default=d},50667:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=s(n),o=(s(r(45697)),r(42441)),i=r(81772),u=r(2804);r(50489);var l=s(r(30724)),c=s(r(80064)),d=s(r(10945));function s(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.page_id,r=(0,n.useRef)(null),s=(0,u.useObserverShowMore)({initial_data_arr:(0,o.initial_posts)(),handle_API_L:function(e){return(0,i.handle_API_FbPagePost_L)({c_count:e,page_id:t})}}),f=s.data_state,_=(s.setDataState,s.is_max),p=s.refreshData_API,m=s.observerShowMore,v=f.data_arr,h=f.is_fetching,b=f.has_fetched;return(0,n.useEffect)((function(){p(),m({fake_elm_end:r.current,rootMargin:"0px 0px 500px 0px",way_scroll:"to_bottom",margin:500})}),[]),a.default.createElement("div",{className:"FbPageHomeRight"},a.default.createElement("div",{className:"FbPageHomeRight_part"},a.default.createElement(l.default,null)),a.default.createElement("div",null,a.default.createElement(d.default,{page_id:t})),a.default.createElement("div",null,a.default.createElement(c.default,{post_arr:v,has_fetched:b,is_fetching:h})),a.default.createElement("div",{ref:r,className:"h-1px"}),_.current?null:a.default.createElement("div",{className:"h-360px"}))}r(89375),f.propTypes={},t.default=f},30724:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(70798)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return n.default.createElement("div",{className:"FPHomeCreate"},n.default.createElement(a.default,{handleCreatePost:function(e){console.log(e)}}))}i.propTypes={},t.default=i},80064:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(70898)));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.post_arr,r=e.has_fetched,o=e.is_fetching;return n.default.createElement("div",{className:"FPHomePosts"},n.default.createElement("h2",{className:"fb-page-home-title-post"},"Other posts"),n.default.createElement("div",null,n.default.createElement(a.default,{posts:t,has_fetched:r,is_fetching:o})))}i.propTypes={},t.default=i},10945:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=c(a),i=(c(r(45697)),r(42441),r(29776)),u=r(35155),l=c(r(70898));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t,r,c=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(n({},f,{post_arr:[],has_fetched:!1,is_fetching:!0})),e.next=3,(0,i.handle_API_FbPagePinnedPost_R)({page_id:d,type:"pinned"});case 3:t=e.sent,h&&_({post_arr:t?[t]:[],has_fetched:!0,is_fetching:!1});case 5:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var i=e[a](o),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),d=e.page_id,s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({post_arr:[]||0,has_fetched:!1,is_fetching:!1}),2),f=s[0],_=s[1],p=f.post_arr,m=f.has_fetched,v=f.is_fetching,h=(0,u.useMounted)();return(0,a.useEffect)((function(){c()}),[]),0==p.length?null:o.default.createElement("div",{className:"FbPageHomePostsPinned"},o.default.createElement("h2",{className:"fb-page-home-title-post"},"Pinned post"),o.default.createElement("div",null,o.default.createElement(l.default,{posts:p,has_fetched:m,is_fetching:v})))}d.propTypes={},t.default=d},89666:(e,t,r)=>{"use strict";r.r(t)},49437:(e,t,r)=>{"use strict";r.r(t)},50205:(e,t,r)=>{"use strict";r.r(t)},92410:(e,t,r)=>{"use strict";r.r(t)},92950:(e,t,r)=>{"use strict";r.r(t)},95088:(e,t,r)=>{"use strict";r.r(t)},31720:(e,t,r)=>{"use strict";r.r(t)},66403:(e,t,r)=>{"use strict";r.r(t)},38466:(e,t,r)=>{"use strict";r.r(t)},34771:(e,t,r)=>{"use strict";r.r(t)},89375:(e,t,r)=>{"use strict";r.r(t)},50489:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=523.js.map