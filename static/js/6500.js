(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6500],{8951:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_fb_group_action_other_obj={your_content:{name:"your_content",title:"Your content",info:""},share:{name:"share",title:"Share",info:""},pin:{name:"pin",title:"Pin group",info:""},report:{name:"report",title:"Report group",info:""}},t.data_fb_group_action_joined_obj={notice:{name:"notice",title:"Mange notifications",info:""},unfollow:{name:"unfollow",title:"Unfollow group",info:""},leave:{name:"leave",title:"Leave group",info:""}}},96721:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_joined_action_arr=void 0;var n=r(8951);t.default_fb_group_joined_action_arr=function(){return[[n.data_fb_group_action_joined_obj.notice,n.data_fb_group_action_joined_obj.unfollow],[n.data_fb_group_action_joined_obj.leave]]}},76488:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_other_action_arr=void 0;var n=r(8951);t.default_fb_group_other_action_arr=function(){return[[n.data_fb_group_action_other_obj.your_content,n.data_fb_group_action_other_obj.pin,n.data_fb_group_action_other_obj.share,n.data_fb_group_action_other_obj.report]]}},65993:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_page_obj=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(39727),o=r(69565),l=r(8047),u=r(32601),i=r(58822),c=r(7605),d=r(61426),s=[{bg:"",bg_btn:"#0091DA",color:"#57BCEF"},{bg:"#B6C8DE",bg_btn:"#2F9A48",color:"#72BF84"},{bg:"#B6C8DE",bg_btn:"#0091DA",color:"#57BCEF"},{bg:"#E1BEC0",bg_btn:"#EF5370",color:"#FD90A5"}];t.default_fb_group_page_obj=function(){var e,t,r,f=(0,a.getRandomBool)(),_=(0,c.getDefaultArr)((function(){return(0,i.getRandomUser)().user}),6,8),p=(0,d.getRandomFromArr)(["person","page"]),m=!!((0,a.getRandomBool)()*(0,a.getRandomBool)()),v=!m&&!!((0,a.getRandomBool)()*(0,a.getRandomBool)());return n({},(0,i.getRandomGroup)().group_obj,(e={color_obj:(0,d.getRandomFromArr)(s),affiliation_obj:(0,a.getRandomBool)()?{to:p,id:(0,o.getRandomId)(),name:"person"==p?(0,u.getRandomName)():(0,u.getRandomPageName)(),picture:(0,l.getRandomVidPic)()}:{to:"",id:0,name:"",picture:""},is_admin:m,is_moderate:v,privacy:(0,a.getRandomBool)()?"Public":(0,d.getRandomFromArr)(["Public","Private"]),joined:f,member_count:1e3*(0,o.getRandomNumber)(1,20),action_name:f?"joined":"join",member_arr:_},t="member_count",r=1e4*(0,o.getRandomNumber)(1,20),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e))}},22512:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_page_preview_arr=t.default_fb_page_preview_obj=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(39727),o=r(70745),l=r(69565),u=r(58822),i=r(7605),c=r(61426),d=r(84962),s=t.default_fb_page_preview_obj=function(){var e=(0,a.getRandomBool)(),t=(0,a.getRandomBool)(),r=[];return t?r.push("like"):e?(r.push("follow"),(0,a.getRandomBool)()&&r.push("chat")):r.push((0,c.getRandomFromArr)(["like","chat"])),1==r.length&&(0,a.getRandomBool)()&&r.push((0,c.getRandomFromArr)(["learn_more","contact"])),n({},(0,u.getRandomPage)().page_obj,{following_count:1e3*(0,l.getRandomNumber)(1,20),like_count:1e3*(0,l.getRandomNumber)(1,20),has_followed:e,has_liked:t,type:(0,d.getRandomPageType)(),description:(0,o.getRandomContent)().slice(0,50),web_link:"https://fbshopeetgdd.web.app",phone:"0123456789",action_case_arr:r.map((function(e){return{action_name:e}}))})};t.default_fb_page_preview_arr=function(){return(0,i.getDefaultArr)(s,16,16)}},9022:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupActions_L=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=(t.handle_API_GroupActions_L=(n=regeneratorRuntime.mark((function e(t){var r,n=t.group_id,a=void 0===n?0:n,u=t.type,i=void 0===u?"":u,c=t.params,d=void 0===c?{}:c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_GroupActions_L)(o({group_model:a,type:i},d));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var l=e[a](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),r(26386))},80351:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupPage_R=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=(t.handle_API_GroupPage_R=(n=regeneratorRuntime.mark((function e(t){var r,n=t.group_id,a=void 0===n?0:n,u=t.params,i=void 0===u?{}:u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_GroupPage_R)(o({group_model:a},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var l=e[a](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),r(85534))},19952:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_PagePreview_R=void 0;var n,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=(t.handle_API_PagePreview_R=(n=regeneratorRuntime.mark((function e(t){var r,n=t.page_id,a=void 0===n?0:n,u=t.params,i=void 0===u?{}:u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_PagePreview_R)(o({page_model:a},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var l=e[a](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e){return a.apply(this,arguments)}),r(77979))},3791:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.size_icon,r=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",stroke:r,strokeLinejoin:"round"},n.default.createElement("path",{d:"M35 185V83.2216H165V185H35Z",fill:r,strokeWidth:"15"}),n.default.createElement("path",{d:"M139.342 83.2217C139.342 83.2217 139.342 65.5908 139.342 49.5627C139.342 33.0701 119.263\r 16.3218 101.711 15.1023C81.8786 13.7244 57.2368 26.3219 57.2368 49.5627C57.2368 67.0889\r 57.2368 83.2217 57.2368 83.2217",strokeWidth:"20",fill:"none"}),n.default.createElement("path",{d:"M80.2326 158L90.876 136.877C90.876 136.877 78.1384 126.503 80.2326 119.004C82.3196\r 111.531 89.3841 106.21 99.3907 106.006C109.712 105.795 116.989 111.382 119.613\r 119.004C122.052  126.088 109.5 136.877 109.5 136.877L119.613 158H80.2326Z",fill:"white"}))}l.propTypes={size_icon:a.default.string,stroke:a.default.string},l.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=l},68986:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=o(r(45697));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.size_icon,r=e.stroke;return n.default.createElement("svg",{width:t,height:t,viewBox:"0 0 200 200",fill:"none",strokeWidth:"5",stroke:r},n.default.createElement("circle",{cx:"100",cy:"100",r:"85",strokeWidth:"10"}),n.default.createElement("line",{x1:"99.3965",y1:"16.1017",x2:"99.3965",y2:"183.898",stroke:"black"}),n.default.createElement("line",{x1:"10",y1:"97.5",x2:"184.569",y2:"97.5"}),n.default.createElement("path",{d:"M55.1915 101.148C55.1915 64.7981 61.6037 18.555 99.4181 18.4258C137.303 18.2964 144.809\r 64.595 144.809 101.148C144.809 137.701 137.301 184.26 99.4181 183.87C61.7454 183.482 55.1915\r 137.498 55.1915 101.148Z"}),n.default.createElement("path",{d:"M44.1027 34.5106C44.1027 34.5106 63.6271 62.4681 100.771 62.4681C137.915 62.4681 158.596\r 34.5106 158.596 34.5106M44.1027 163.957C44.1027 163.957 58.2654 140.895 100.771 140.596C143.277\r 140.297 158.596 163.957 158.596 163.957"}))}l.propTypes={size_icon:a.default.string,stroke:a.default.string},l.defaultProps={size_icon:"1rem",stroke:"var(--md-color)"},t.default=l},64561:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_group_page_about=t.initial_group_page=void 0;var n=r(86449);t.initial_group_page=function(){return{id:0,name:"",picture:"",color_obj:{bg:"",bg_btn:"",color:""},affiliation_obj:{to:"person",id:0,name:"",picture:""},joined:!1,privacy:"",member_arr:[],member_count:0,action_name:""}},t.initial_group_page_about=function(){return{description:"",privacy:"",visibility:"",type_obj:{Icon:null,title:""},member_count:0,created_time:(new Date).toString(),recommended_count:0,friend_arr:[(0,n.initial_user)(),(0,n.initial_page)()],friend_name_str:"",admin_arr:[(0,n.initial_user)(),(0,n.initial_page)()],admin_name_str:"",post_day_count:0,post_month_count:0,member_week_count:0}}},33419:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_page_preview=function(){return{id:0,name:"",picture:"",following_count:0,like_count:0,has_followed:!1,has_liked:!1,type:"",description:"",web_link:"",phone:"",action_case_arr:[]}}},26386:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupActions_L=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),l=r(76488),u=r(96721);t.API_GroupActions_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.API_FakeReal)("other"==e.type?(0,l.default_fb_group_other_action_arr)():"joined"==e.type?(0,u.default_fb_group_joined_action_arr)():null,(function(){return(0,a.default)({url:"api/facebook/group-other-action-l",method:"GET",params:e})}))}},85534:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupPage_R=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),l=r(65993);t.API_GroupPage_R=function(e){return(0,o.API_FakeReal)((0,l.default_fb_group_page_obj)(),(function(){return(0,a.default)({url:"api/facebook/fb-group-page-r/",method:"GET",params:e})}),e)}},77979:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_PagePreview_R=void 0;var n,a=(n=r(87421))&&n.__esModule?n:{default:n},o=r(50918),l=r(22512);t.API_PagePreview_R=function(e){return(0,o.API_FakeReal)((0,l.default_fb_page_preview_obj)(),(function(){return(0,a.default)({url:"api/facebook/fb-page-preview-r/",method:"GET",params:e})}),e)}},78740:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(55852)),o=u(r(11384)),l=u(r(8452));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.page_id,r=e.title_action,u=e.has_tick;return n.default.createElement(n.default.Fragment,null,a.IS_MOBILE?r:n.default.createElement(o.default,{page_id:t,title_action:r}),u?n.default.createElement("span",null,n.default.createElement("span",{className:"inline-block vertical-align-middle margin-left-5px wh-16px"},n.default.createElement(l.default,null))):null)}i.propTypes={},t.default=i},11384:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=m(a),l=(m(r(45697)),r(33419)),u=r(19952),i=r(35155),c=m(r(68986)),d=m(r(72467)),s=m(r(62755)),f=m(r(13355)),_=m(r(94856)),p=m(r(23633));function m(e){return e&&e.__esModule?e:{default:e}}function v(e){var t=e.item,r=e.page_id,n=e.handleAction;return o.default.createElement(p.default,{action_name:t.action_name,page_id:r,has_liked:t.has_liked,has_followed:t.has_followed,handleAction:n})}r(60961);var g=function(e){var t=e.page_id,r=e.class_action_contain,n=e.handleAction;return o.default.createElement(_.default,{page_id:t,is_at_body:!0,class_action_contain:r,handleAction:n})};function b(e){var t,r,_=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(n({},h,{is_fetching:!0})),e.next=3,(0,u.handle_API_PagePreview_R)({page_id:p});case 3:if(t=e.sent,R){e.next=6;break}return e.abrupt("return");case 6:y(n({},h,{page:t,is_fetching:!1,has_fetched:!0}));case 7:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var l=e[a](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),p=e.page_id,m=e.title_action,b=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({page:(0,l.initial_page_preview)(),is_fetching:!1,has_fetched:!1}),2),h=b[0],y=b[1],P=h.page,E=h.is_fetching,j=h.has_fetched,w=P.id,M=P.name,k=P.picture,A=P.type,O=P.description,x=P.web_link,N=P.phone,I=P.action_case_arr,R=(0,i.useMounted)(),C=[{component:f.default,can_show:!0,props:{Icon:null,info:"",title:A}},{component:f.default,can_show:!0,props:{Icon:null,info:"",title:O}},{component:f.default,can_show:x,props:{Icon:o.default.createElement(c.default,null),info:"",title:o.default.createElement("a",{href:x,target:"_blank"},x.slice(8))}},{component:f.default,can_show:N,props:{Icon:o.default.createElement(d.default,null),info:"",title:N}}];return o.default.createElement(s.default,{title_action:m,class_action_contain:"ActionPreviewPagePc",id:w,name:M,picture:k,link_to:"/page/"+w,is_fetching:E,has_fetched:j,preview_arr:C,action_case_arr:I,case_props:{page_id:w},other_case_props:{page_id:w},getData_API:_,handleAction:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(e)},ActionsCaseComponent:v,ActionsOtherComponent:g})}b.propTypes={},t.default=b},18717:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),l(r(65102))),o=l(r(19088));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.action_name,r=e.group_id,l=e.handleAction;return"join"==t?n.default.createElement(a.default,{handleAction:l}):"joined"==t?n.default.createElement(o.default,{group_id:r,handleAction:l}):null}u.propTypes={},t.default=u},19088:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(9022)),o=u(r(68188)),l=u(r(97855));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.group_id,r=e.handleAction;return n.default.createElement("div",{className:"ActionsGroupJoined"},n.default.createElement(o.default,{title_action:n.default.createElement(l.default,null),handle_API_L:function(){return(0,a.handle_API_GroupActions_L)({group_id:t,type:"joined"})},handleAction:r}))}i.propTypes={},t.default=i},26651:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),r(9022)),o=l(r(63313));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t,r,l=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.handle_API_GroupActions_L)({group_id:u,type:"other"});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var l=e[a](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),u=e.group_id,i=e.class_action_contain,c=e.is_at_body,d=e.handleAction;return n.default.createElement(o.default,{is_at_body:c,class_action_contain:i,handle_API_L:l,handleAction:d})}u.propTypes={},t.default=u},2436:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(67294)),o=(u(r(45697)),u(r(24012))),l=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.title,n=e.Icon,o=e.btn_props,u=e.handleAction;return a.default.createElement(l.default,{className:"BtnGroupInvite "+t,title:r,Icon:n,btn_props:o,handleClick:function(){u("invite")}})}i.propTypes=n({},l.default.propTypes),i.defaultProps={className:"bg-blue text-white",title:"Invite",Icon:a.default.createElement(o.default,{stroke:"currentColor"})},t.default=i},65102:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(67294)),o=(u(r(45697)),u(r(79368))),l=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.title,n=e.Icon,o=e.handleAction;return a.default.createElement(l.default,{className:"BtnGroupJoin "+t,title:r,Icon:n,handleClick:function(){o("join")}})}i.propTypes=n({},l.default.propTypes),i.defaultProps={className:"bg-ccc",title:"Join Group",Icon:a.default.createElement(o.default,null)},t.default=i},97855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=u(r(67294)),o=(u(r(45697)),u(r(79368))),l=u(r(44257));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.className,r=e.title,n=e.Icon,o=e.handleAction;return a.default.createElement(l.default,{className:"BtnGroupJoined "+t,title:r,Icon:n,handleClick:function(){o&&o("joined")}})}i.propTypes=n({},l.default.propTypes),i.defaultProps={className:"bg-ccc",title:"Joined",Icon:a.default.createElement(o.default,null)},t.default=i},63313:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(10153)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.class_action_contain,r=e.is_at_body,o=e.handle_API_L,l=e.handleAction;return n.default.createElement(a.default,{class_main:"BtnGroupOther",class_btn:"BtnGroupOther_btn",class_action_contain:t,is_at_body:r,handle_API_L:o,handleAction:l})}l.propTypes={},t.default=l},28978:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),l(r(37279))),o=l(r(44257));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleClick;return n.default.createElement(o.default,{className:"bg-ccc",Icon:n.default.createElement(a.default,{y:200}),title:"",use_title:!1,handleClick:t})}u.propTypes={},t.default=u},52636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=u(r(45697)),o=u(r(88303)),l=u(r(14767));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.pic_arr,r=e.has_more,a=e.ItemComponent,l=e.clickMore;return n.default.createElement("div",{className:"flex-end row-reverse"},r&&n.default.createElement("div",{className:"OverlapPics_item"},n.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},n.default.createElement(a,{picture:t[0].picture}),n.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:l},n.default.createElement(o.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(r?1:0).map((function(e,t){return n.default.createElement("div",{key:t,className:"OverlapPics_item"},n.default.createElement("div",{className:"OverlapPics_item_img"},n.default.createElement(a,{picture:e.picture})))})))}r(89666),i.propTypes={pic_arr:a.default.array,has_more:a.default.bool,ItemComponent:a.default.func,clickMore:a.default.func},i.defaultProps={ItemComponent:l.default},t.default=i},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.picture;return n.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}a(r(45697)),o.propTypes={},t.default=o},8452:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(46301)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.size_icon;function r(e){e.stopPropagation(),e.preventDefault()}return n.default.createElement("div",{className:"PageTick pos-rel wh-100 brs-50 bg-blue"},n.default.createElement("div",{className:"pos-abs-100 z-index-lv1 display-flex-center",onMouseEnter:r,onMouseOver:r},n.default.createElement(a.default,{size_icon:t,stroke:"var(--white)"})))}l.propTypes={size_icon:a.default.propTypes.size_icon},l.defaultProps={size_icon:"14px"},t.default=l},76721:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),a=(i(r(45697)),i(r(81556))),o=i(r(60840)),l=i(r(7363)),u=i(r(6702));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.group_id,r=e.name,i=e.picture,c=e.color_obj,d=e.affiliation_obj,s=e.privacy,f=e.action_name,_=e.member_arr,p=e.member_count,m=e.openCoverPicture,v=e.toggleRelatedGroup,g=e.handleAction;return n.default.createElement("div",{className:"GroupPageInfo"},n.default.createElement("div",null,n.default.createElement(a.default,{picture:i,affiliation_obj:d,bg_btn:c.bg_btn,openCoverPicture:m})),n.default.createElement("div",{className:"GroupPageInfo_foot fb-profile-width-contain padding-top-16px"},n.default.createElement("div",{className:"GroupPageInfo_foot_row display-flex space-between"},n.default.createElement("div",{className:"padding-bottom-16px padding-top-6px padding-x-6px"},n.default.createElement("div",null,n.default.createElement(o.default,{name:r})),n.default.createElement("div",{className:"GroupPageInfo_member font-17px"},n.default.createElement(l.default,{group_id:t,privacy:s,member_arr:_,member_count:p}))),n.default.createElement("div",{className:"align-self-end padding-bottom-16px padding-top-6px padding-x-6px"},n.default.createElement(u.default,{action_name:f,group_id:t,bg_btn:c.bg_btn,handleAction:g,toggleRelatedGroup:v})))))}r(11833),c.propTypes={},t.default=c},6702:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),a=(c(r(45697)),r(55852)),o=c(r(37930)),l=c(r(2436)),u=c(r(44257)),i=c(r(18717));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.action_name,r=e.group_id,c=e.bg_btn,d=e.handleAction,s=e.toggleRelatedGroup;return n.default.createElement("div",{className:"GroupPageActions"},n.default.createElement("div",{className:"GroupPageActions_row display-flex align-items-center"},n.default.createElement("div",{className:"GroupPageActions_btn margin-right-8px"},n.default.createElement(i.default,{action_name:t,group_id:r,handleAction:d})),"joined"==t?n.default.createElement("div",{className:"GroupPageActions_btn margin-right-8px"},n.default.createElement(l.default,{className:"text-white",btn_props:{style:{backgroundColor:c}},handleAction:d})):null,a.IS_MOBILE||"joined"!=t?null:n.default.createElement("div",null,n.default.createElement(u.default,{className:"bg-ccc padding-x-16px",Icon:n.default.createElement(o.default,{class_icon:"rotate-90",x:200,size_icon:"12px"}),title:"",use_title:!1,handleClick:s}))))}r(63268),d.propTypes={},t.default=d},81556:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),l(r(85879))),o=l(r(94808));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.picture,r=e.bg_btn,l=e.affiliation_obj,u=e.openCoverPicture;return n.default.createElement(a.default,{cover:t,link_to:"/post/1",openCoverPicture:u},l.id>0?n.default.createElement("div",{className:"pos-abs bottom-0 left-0 w-100per"},n.default.createElement(o.default,{bg_btn:r,affiliation_obj:l})):null)}u.propTypes={},t.default=u},94808:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=r(93191),o=(u(r(45697)),u(r(75238))),l=u(r(78740));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.bg_btn,r=e.affiliation_obj,u=r.to,i=r.id,c=r.name;return n.default.createElement("div",{className:"GroupPageAffiliation padding-x-16px padding-y-10px font-600 bg-blue text-white",style:{backgroundColor:t||void 0,color:t?"white":void 0}},n.default.createElement("div",{className:"display-flex"},n.default.createElement("div",{className:"margin-right-8px"},"Group by"),n.default.createElement("div",null,"person"==u?n.default.createElement(o.default,{user_id:i,title_action:n.default.createElement(a.Link,{className:"color-inherit hv-underline",to:"/profile/"+i},c)}):n.default.createElement(l.default,{page_id:i,title_action:n.default.createElement(a.Link,{className:"color-inherit hv-underline",to:"/page/"+i},c)}))))}r(23921),i.propTypes={},t.default=i},7363:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),l(r(30484))),o=l(r(40030));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.privacy,l=e.member_arr,u=e.member_count;return n.default.createElement("div",{className:"GroupPageMembers"},n.default.createElement("div",{className:"margin-top-8px margin-bottom-12px"},n.default.createElement(a.default,{privacy:r,member_count:u})),n.default.createElement("div",null,n.default.createElement(o.default,{group_id:t,member_arr:l,member_count:u})))}u.propTypes={},t.default=u},30484:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(67294)),a=(u(r(45697)),r(36289)),o=u(r(3791)),l=u(r(68986));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.privacy,r=e.member_count;return n.default.createElement("div",{className:"GroupPageMemberCount text-secondary"},n.default.createElement("div",{className:"GroupPageMemberCount_row display-flex align-items-center"},n.default.createElement("div",{className:"display-flex align-items-center"},"PRIVATE"==t.toUpperCase()?n.default.createElement(o.default,{stroke:"currentColor"}):n.default.createElement(l.default,{stroke:"currentColor"}),n.default.createElement("div",{className:"margin-left-5px"},t," group")),n.default.createElement("div",{className:"margin-x-5px"},"·"),n.default.createElement("div",null,(0,a.UnitNumber)(r)," member",r>=2?"s":"")))}r(10268),i.propTypes={},t.default=i},40030:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(67294)),a=(l(r(45697)),r(93191)),o=l(r(52636));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.member_arr,l=e.member_count;return n.default.createElement("div",{className:"GroupPageMemberPics"},n.default.createElement(a.Link,{to:"/group/"+t+"/members"},n.default.createElement(o.default,{pic_arr:r,has_more:r<l})))}r(60940),u.propTypes={},t.default=u},60840:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(67020)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.name;return n.default.createElement(a.default,{name:t})}l.propTypes={},t.default=l},69108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),a=p(n),o=(p(r(45697)),r(55852)),l=p(r(18717)),u=p(r(2436)),i=p(r(43642)),c=p(r(28236)),d=p(r(5526)),s=p(r(11045)),f=p(r(24813)),_=p(r(57084));function p(e){return e&&e.__esModule?e:{default:e}}r(29696);var m=function(e){var t=e.group_id,r=void 0===t?0:t;return[{title:"Media",link_to:"/group/"+r+"/media"},{title:"Files",link_to:"/group/"+r+"/files"}]},v=function(e){var t=e.group_id,r=void 0===t?0:t;return[{title:"About",link_to:"/group/"+r+"/about"},{title:"Discussion",link_to:"/group/"+r+"/discuss"},{title:"Members",link_to:"/group/"+r+"/members"},{title:"Topics",link_to:"/group/"+r+"/topics"}].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(o.IS_MOBILE?m({group_id:r}):[]))};function g(e){var t=e.group_id,r=e.color,p=e.bg_btn,g=e.name,b=e.picture,h=e.link_to,y=e.action_name,P=e.no_permission,E=e.handleAction,j=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({nav_arr:v({group_id:t}),nav_more_arr:o.IS_MOBILE?[]:m({group_id:t})}),2),w=j[0];return j[1],a.default.createElement(i.default,{left_main_elm:a.default.createElement("ul",{className:"display-flex list-none h-100per padding-top-3px"},w.nav_arr.slice(0,P?2:void 0).map((function(e,t){return a.default.createElement("li",{key:t,className:"GroupPageNav_item"},a.default.createElement(d.default,{title:e.title,link_to:e.link_to,color_active:r,border_active:p}))})),o.IS_MOBILE||P?null:a.default.createElement("li",{className:"GroupPageNav_item"},a.default.createElement(c.default,{color:r,bg_btn:p,more_link_arr:w.nav_more_arr}))),left_sticky_elm:a.default.createElement("div",{className:"flex-between-center h-100per"},a.default.createElement("div",{className:"flex-grow-1 h-100per padding-y-2px overflow-hidden"},a.default.createElement(_.default,{name:g,picture:b,link_to:h})),a.default.createElement("div",{className:"display-flex align-items-center"},a.default.createElement("div",{className:"margin-left-8px"},a.default.createElement(l.default,{action_name:y,group_id:t,handleAction:E})),"joined"==y?a.default.createElement("div",{className:"margin-left-8px"},a.default.createElement(u.default,{className:"text-white",btn_props:{style:{backgroundColor:p}},handleAction:E})):null)),right_elm:a.default.createElement("div",{className:"display-flex align-items-center h-100per"},P?null:a.default.createElement("div",null,a.default.createElement(s.default,null)),a.default.createElement("div",{className:"margin-left-8px"},a.default.createElement(f.default,{group_id:t,handleAction:E})))})}g.propTypes={},t.default=g},24813:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(26651)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.group_id,r=e.handleAction;return n.default.createElement(a.default,{group_id:t,handleAction:r})}l.propTypes={},t.default=l},11045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(28978)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.openGroupSearch;return n.default.createElement(a.default,{handleClick:t})}l.propTypes={},t.default=l},57084:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),r(93191),o(r(19936)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.link_to,r=e.picture,o=e.name;return n.default.createElement(a.default,{link_to:t,picture:r,name:o})}l.propTypes={},t.default=l},5526:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(7077)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.title,r=e.link_to,o=e.color_active,l=e.border_active;return n.default.createElement(a.default,{title:t,link_to:r,color_active:o,border_active:l})}r(95094),l.propTypes={},t.default=l},28236:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(67294)),a=(o(r(45697)),o(r(91834)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.color,r=e.bg_btn,o=e.more_link_arr;return n.default.createElement(a.default,{color:t,bg_btn:r,more_link_arr:o})}l.propTypes={},t.default=l},38612:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(67294),o=f(a),l=r(93191),u=(f(r(45697)),r(64561)),i=r(80351),c=r(25259);r(65371);var d=f(r(76721)),s=f(r(69108));function f(e){return e&&e.__esModule?e:{default:e}}function _(e){var t,r,f=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.handle_API_GroupPage_R)({group_id:_});case 2:t=e.sent,v((function(e){return n({},e,{group_obj:t,has_fetch:!0})}));case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var l=e[a](o),u=l.value}catch(e){return void r(e)}if(!l.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(){return r.apply(this,arguments)}),_=(0,l.useParams)().id,p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({group_obj:(0,u.initial_group_page)(),has_fetch:!1}),2),m=p[0],v=p[1],g=m.group_obj,b=m.has_fetch,h=g.name,y=g.picture,P=g.color_obj,E=g.affiliation_obj,j=g.is_admin,w=g.is_moderate,M=g.privacy,k=g.action_name,A=g.member_arr,O=g.member_count,x="join"==k&&"PRIVATE"==M.toUpperCase();(0,a.useEffect)((function(){f()}),[_]);var N={group_id:_,is_admin:j,is_moderate:w,no_permission:x,member_count:O};return 0==location.pathname.search(/\/group\/\d+\/discuss/)&&(N.bg_btn=P.bg_btn),b?o.default.createElement("div",{key:_,className:"GroupPage"},o.default.createElement("div",{className:"bg-primary"},o.default.createElement(d.default,{group_id:_,name:h,picture:y,color_obj:P,affiliation_obj:E,privacy:M,action_name:k,member_arr:A,member_count:O,openCoverPicture:function(){},toggleRelatedGroup:function(){},handleAction:function(){}})),o.default.createElement("div",{className:"fb-profile-nav"},o.default.createElement("div",{className:"GroupPage_nav_contain fb-profile-width-contain"},o.default.createElement(s.default,{group_id:_,color:P.color,bg_btn:P.bg_btn,no_permission:x,action_name:k,name:h,picture:y,link_to:"/group/"+_+"/discuss"}))),o.default.createElement("div",{className:"padding-y-16px",style:{backgroundColor:P.bg}},_>0?o.default.createElement(a.Suspense,{fallback:null},o.default.createElement(l.Switch,null,c.GroupPageRoutes.slice(0,x?2:void 0).map((function(e,t){return o.default.createElement(l.Route,{key:t,path:e.path,render:function(t){return o.default.createElement(e.component,n({},t,N))}})})),o.default.createElement(l.Redirect,{to:"/group/"+_+"/discuss"}))):null)):null}r(50215),_.propTypes={},t.default=_},25259:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GroupPageRoutes=void 0;var n,a=(n=r(67294))&&n.__esModule?n:{default:n},o=a.default.lazy((function(){return Promise.all([r.e(869),r.e(5684)]).then(r.bind(r,17267))})),l=a.default.lazy((function(){return Promise.all([r.e(9859),r.e(9319),r.e(6272),r.e(8239),r.e(482)]).then(r.bind(r,90482))})),u=a.default.lazy((function(){return r.e(3774).then(r.bind(r,3774))})),i=a.default.lazy((function(){return r.e(8380).then(r.bind(r,48380))})),c=a.default.lazy((function(){return r.e(704).then(r.bind(r,80704))})),d=a.default.lazy((function(){return r.e(7178).then(r.bind(r,47178))}));t.GroupPageRoutes=[{component:o,path:"/group/:id/about"},{component:l,path:"/group/:id/discuss"},{component:i,path:"/group/:id/members"},{component:u,path:"/group/:id/topics"},{component:c,path:"/group/:id/media"},{component:d,path:"/group/:id/files"}]},60961:(e,t,r)=>{"use strict";r.r(t)},89666:(e,t,r)=>{"use strict";r.r(t)},11833:(e,t,r)=>{"use strict";r.r(t)},63268:(e,t,r)=>{"use strict";r.r(t)},23921:(e,t,r)=>{"use strict";r.r(t)},10268:(e,t,r)=>{"use strict";r.r(t)},60940:(e,t,r)=>{"use strict";r.r(t)},29696:(e,t,r)=>{"use strict";r.r(t)},95094:(e,t,r)=>{"use strict";r.r(t)},50215:(e,t,r)=>{"use strict";r.r(t)},65371:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=6500.js.map