(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8380],{65088:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_member_arr=t.default_fb_group_member_obj=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(74271),l=r(39727),u=r(69565),o=r(8047),i=r(32601),d=r(7605),c=r(61426),_=t.default_fb_group_member_obj=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{is_friend:!1},t=e.is_friend,r=(0,l.getRandomBool)()?"person":"page",d={id:(0,u.getRandomId)(),picture:(0,o.getRandomImg)(),type_user:r,badge_arr:[],badge_count:0};return a({},d,"person"==r?{first_name:(0,i.getRandomName)(),last_name:(0,i.getRandomName)(),info_1:"abc",info_2:"efg",action_case:t?n.default_action_user_case_obj.chat:(0,c.getRandomFromArr)([n.default_action_user_case_obj.chat,n.default_action_user_case_obj.follow,n.default_action_user_case_obj.add_friend,""])}:{name:(0,i.getRandomPageName)(),info_1:"abc",info_2:"efg",action_name:"like",has_liked:(0,l.getRandomBool)(),has_followed:!1})};t.default_fb_group_member_arr=function(e){var t=e.type,r=void 0===t?"":t;return(0,d.getDefaultArr)(_,"new"==r?15:0,15)}},3515:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_page_member_obj=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=r(44550),u=r(69565),o=r(7605),i=r(65088),d=function(e,t,r,a){var n=function(e,t,r){return(0,o.getDefaultArr)((function(){return(0,i.default_fb_group_member_obj)({is_friend:r})}),e,t)}(e,t,a);return[n,(0,u.getRandomNumber)(n.length,n.length<t?n.length:r)]};t.default_fb_group_page_member_obj=function(){var e=d(1,4,7),t=n(e,2),r=t[0],u=t[1],o=d(0,4,7),c=n(o,2),_=c[0],s=c[1],f=d(0,4,10,!0),m=n(f,2),p=m[0],h=m[1],g=d(4,6,20),v=n(g,2),b=v[0],y=v[1],E=d(2,4,8),P=n(E,2),M=P[0],w=P[1],x=d(8,8,40),j=n(x,2),N=j[0],A=j[1],k=a({},(0,i.default_fb_group_member_obj)(),l.default_define_user);return"person"==k.type_user?k.action_case="":k.action_name="",{you_obj:k,admin_arr:r,admin_count:u,expert_arr:_,expert_count:s,friend_arr:p,friend_count:h,same_arr:b,same_count:y,near_arr:M,near_count:w,new_arr:N,new_count:A}}},50522:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FbGroupMember_L=void 0;var a,n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u=(t.handle_API_FbGroupMember_L=(a=regeneratorRuntime.mark((function e(t){var r,a=t.c_count,n=void 0===a?0:a,o=t.group_id,i=void 0===o?0:o,d=t.type,c=void 0===d?"":d,_=t.params,s=void 0===_?{}:_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.FbGroupMember_L)(l({page:1,size:20,c_count:n,group_model:i,type:c},s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(o)}("next")}))},function(e){return n.apply(this,arguments)}),r(44126))},84114:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_FBGroupPageMember_R=void 0;var a,n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u=(t.handle_API_FBGroupPageMember_R=(a=regeneratorRuntime.mark((function e(t){var r,a=t.group_id,n=void 0===a?0:a,o=t.params,i=void 0===o?{}:o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_FBGroupPageMember_R)(l({group_model:n},i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(o)}("next")}))},function(e){return n.apply(this,arguments)}),r(7971))},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},44126:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FbGroupMember_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},l=r(50918),u=r(65088);t.FbGroupMember_L=function(e){return(0,l.API_FakeReal)((0,u.default_fb_group_member_arr)({type:e.type}),(function(){return(0,n.default)({url:"api/facebook/group-member-l/",method:"GET",params:e})}),e)}},7971:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FBGroupPageMember_R=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},l=r(50918),u=r(3515);t.API_FBGroupPageMember_R=function(e){return(0,l.API_FakeReal)((0,u.default_fb_group_page_member_obj)(),(function(){return(0,n.default)({url:"api/facebook/fb-group-page-member-r/",method:"GET",params:e})}),e)}},73830:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r(67294)),n=(c(r(45697)),c(r(25488))),l=c(r(32682)),u=c(r(183)),o=c(r(79738)),i=c(r(27688)),d=c(r(94856));function c(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=e.action_name,r=e.use_title,c=e.page_id,_=e.has_liked,s=e.has_followed,f=e.class_action_contain,m=e.is_at_body,p=e.handleAction;return"like"==t?a.default.createElement(n.default,{use_title:r,has_liked:_,handleAction:p}):"follow"==t?a.default.createElement(l.default,{use_title:r,has_followed:s,handleAction:p}):"chat"==t?a.default.createElement(u.default,{page_id:c,use_title:r}):"contact"==t?a.default.createElement(o.default,{use_title:r,handleAction:p}):"learn_more"==t?a.default.createElement(i.default,{use_title:r,handleAction:p}):"other"==t?a.default.createElement(d.default,{page_id:c,class_action_contain:f,is_at_body:m,handleAction:p}):null}_.propTypes={},t.default=_},25855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),r(93191));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.link_to;return a.default.createElement(n.Link,{className:"display-flex-center h-36px brs-6px bg-ccc color-inherit font-600 hv-bg-hv",to:t},"See All")}u.propTypes={},t.default=u},25495:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(16841))),l=o(r(22313)),u=o(r(25855));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.group_id,r=e.title,o=e.show_count_on_title,i=void 0===o||o,d=e.info,c=e.has_learn_more,_=e.link_learn_more,s=e.user_page_arr,f=e.user_page_count,m=e.link_all;function p(e){console.log(e)}return a.default.createElement("div",{className:"GPMemPartList"},a.default.createElement("div",null,a.default.createElement(n.default,{title:r,count:f,show_count:i,info:d,has_learn_more:c,link_learn_more:_})),a.default.createElement("div",{className:"margin-top-10px"},s.map((function(e,r){return a.default.createElement("div",{key:e.id},a.default.createElement(l.default,{group_id:t,has_action_other:!0,item:e,handleAction:p}))}))),f>s.length?a.default.createElement("div",{className:"margin-top-10px"},a.default.createElement(u.default,{link_to:m})):null)}i.propTypes={},t.default=i},16841:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),r(93191));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.title,r=e.count,l=e.show_count,u=void 0===l||l,o=e.info,i=e.has_learn_more,d=e.link_learn_more;return a.default.createElement("div",{className:"GPMemsPartTitle"},a.default.createElement("h3",{className:"font-15px"},a.default.createElement("span",{className:"font-600"},t),!!u&&a.default.createElement("span",{className:"text-secondary"}," · ",r)),a.default.createElement("div",{className:"font-13px text-secondary"},o," ",i?a.default.createElement(n.Link,{className:"hv-underline",to:d},"Learn more"):null))}u.propTypes={},t.default=u},70552:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(10153)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.name,r=e.picture,l=e.badge_arr,u=e.badge_count,o=e.info_1,i=e.info_2,d=e.action_elm,c=e.has_action_other,_=e.handle_API_ActionOther_L,s=e.handleActionOther;return a.default.createElement("div",{className:"GPMemUserPageLayout padding-y-8px break-word"},a.default.createElement("div",{className:"GPMemUserPageLayout_row display-flex align-items-center"},a.default.createElement("div",{className:"GPMemUserPageLayout_left flex-shrink-0 margin-right-12px"},r),a.default.createElement("div",{className:"GPMemUserPageLayout_right flex-grow-1 flex-between-center"},a.default.createElement("div",{className:"display-flex flex-col space-between padding-right-8px"},a.default.createElement("div",null,t),u>0?a.default.createElement("div",{className:"display-flex align-items-center font-13px"},l.map((function(e){return a.default.createElement("div",{className:"margin-right-4px bg-fb-active text-blue"},e.title)})),u-l.length?a.default.createElement("div",{className:"padding-x-4px padding-y-2px bg-ccc brs-6px"},"+",u-l.length):null):null,a.default.createElement("div",{className:"font-500 font-12px text-secondary"},o),a.default.createElement("div",{className:"font-12px text-secondary"},i)),a.default.createElement("div",{className:"display-flex"},d?a.default.createElement("div",null,d):null,c?a.default.createElement("div",{className:"margin-left-5px"},a.default.createElement(n.default,{handle_API_L:_,handleAction:s})):null))))}r(80319),u.propTypes={},t.default=u},22313:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),u(r(66676))),l=u(r(98700));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.group_id,r=e.has_action_other,u=e.item,o=e.use_title,i=e.handleAction;return"person"==u.type_user?a.default.createElement(n.default,{group_id:t,has_action_other:r,member_user_obj:u,use_title:o,handleAction:i}):a.default.createElement(l.default,{group_id:t,has_action_other:r,member_page_obj:u,use_title:o,handleAction:i})}o.propTypes={},t.default=o},98700:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=_(r(67294)),n=(_(r(45697)),r(93191)),l=r(55852),u=_(r(73830)),o=_(r(78740)),i=_(r(70552)),d=_(r(9955)),c=r(80551);function _(e){return e&&e.__esModule?e:{default:e}}function s(e){e.group_id;var t=e.member_page_obj,r=e.has_action_other,_=e.use_title,s=e.handleAction,f=t.id,m=t.name,p=t.picture,h=t.badge_arr,g=t.badge_count,v=t.info_1,b=t.info_2,y=t.action_name,E=t.has_liked,P=t.has_followed;return a.default.createElement("div",{className:"GPMemPage"},a.default.createElement(i.default,{name:a.default.createElement(o.default,{page_id:f,title_action:a.default.createElement(n.Link,{className:"color-inherit font-600",to:"/page/"+f},m)}),picture:a.default.createElement(o.default,{page_id:f,title_action:a.default.createElement(n.Link,{to:"/page/"+f},a.default.createElement(d.default,{picture:p}))}),badge_arr:h,badge_count:g,info_1:v,info_2:b,action_elm:a.default.createElement(u.default,{action_name:y,page_id:f,has_liked:E,has_followed:P,use_title:!l.IS_MOBILE&&_,handleAction:s}),has_action_other:r,handle_API_ActionOther_L:function(){return(0,c.handle_API_PageActions_L)({page_id:f,type:"other",params:{}})},handleActionOther:function(e){console.log(e)}}))}s.propTypes={},t.default=s},9955:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.picture;return a.default.createElement("img",{className:"brs-50 object-fit-cover",src:t,alt:"",width:"60",height:"60"})}n(r(45697)),l.propTypes={},t.default=l},66676:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=_(r(67294)),n=(_(r(45697)),r(93191)),l=r(55852),u=_(r(40808)),o=_(r(75238)),i=_(r(70552)),d=_(r(9955)),c=r(89948);function _(e){return e&&e.__esModule?e:{default:e}}function s(e){e.group_id;var t=e.has_action_other,r=e.member_user_obj,_=e.use_title,s=e.handleAction,f=r.id,m=r.first_name,p=r.last_name,h=r.picture,g=r.badge_arr,v=r.badge_count,b=r.info_1,y=r.info_2,E=r.action_case;return a.default.createElement("div",{className:"GPMemUser"},a.default.createElement(i.default,{name:a.default.createElement(o.default,{user_id:f,title_action:a.default.createElement(n.Link,{className:"color-inherit font-600",to:"/profile/"+f},m," ",p)}),picture:a.default.createElement(o.default,{user_id:f,title_action:a.default.createElement(n.Link,{to:"/profile/"+f},a.default.createElement(d.default,{picture:h}))}),badge_arr:g,badge_count:v,info_1:b,info_2:y,action_elm:a.default.createElement(u.default,{action_case:E,user_id:f,use_title:!l.IS_MOBILE&&_,handleAction:s}),has_action_other:t,handle_API_ActionOther_L:function(){return(0,c.handle_API_ProfileActions_L)({user_id:f,type:"other"})},handleActionOther:function(e){console.log(e)}}))}s.propTypes={},t.default=s},48380:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),l=p(n),u=(p(r(45697)),r(84114)),o=p(r(26963)),i=p(r(9084)),d=p(r(15980)),c=p(r(40537)),_=p(r(70875)),s=p(r(25755)),f=p(r(27796)),m=p(r(93517));function p(e){return e&&e.__esModule?e:{default:e}}function h(e){var t,r,p=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.handle_API_FBGroupPageMember_R)({group_id:h});case 2:t=e.sent,P((function(e){return a({},e,{group_member_obj:t,has_fetched:!0})}));case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(o)}("next")}))},function(){return r.apply(this,arguments)}),h=e.group_id,g=e.is_admin,v=(e.is_moderate,e.member_count),b=e.member_recent_count,y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({group_member_obj:{},has_fetched:!1}),2),E=y[0],P=y[1],M=E.group_member_obj,w=E.has_fetched,x=M.you_obj,j=M.admin_arr,N=M.admin_count,A=M.expert_arr,k=M.expert_count,O=M.friend_arr,G=M.friend_count,L=M.same_arr,I=M.same_count,T=M.near_arr,R=M.near_count,F=M.new_arr,S=M.new_count;return(0,n.useEffect)((function(){p()}),[]),w?l.default.createElement("div",{className:"GroupPageMembers display-flex justify-content-center"},l.default.createElement("div",{className:"GroupPageMembers_contain max-w-100per padding-16px brs-8px-pc bg-primary box-shadow-1 "+(g&&b?"w-500px":"w-680px")},l.default.createElement("div",null,l.default.createElement(o.default,{member_count:v})),l.default.createElement("hr",{className:"GroupPageMembers_hr gr-page-hr"}),l.default.createElement("div",null,l.default.createElement(i.default,{you_obj:x})),l.default.createElement("hr",{className:"GroupPageMembers_hr gr-page-hr"}),N?l.default.createElement("div",null,l.default.createElement(d.default,{group_id:h,admin_arr:j,admin_count:N}),l.default.createElement("hr",{className:"GroupPageMembers_hr gr-page-hr"})):null,k?l.default.createElement("div",null,l.default.createElement(c.default,{group_id:h,expert_arr:A,expert_count:k}),l.default.createElement("hr",{className:"GroupPageMembers_hr gr-page-hr"})):null,G?l.default.createElement("div",null,l.default.createElement(m.default,{group_id:h,friend_arr:O,friend_count:G}),l.default.createElement("hr",{className:"GroupPageMembers_hr gr-page-hr"})):null,I?l.default.createElement("div",null,l.default.createElement(_.default,{group_id:h,same_arr:L,same_count:I}),l.default.createElement("hr",{className:"GroupPageMembers_hr gr-page-hr"})):null,R?l.default.createElement("div",null,l.default.createElement(s.default,{group_id:h,near_arr:T,near_count:R}),l.default.createElement("hr",{className:"GroupPageMembers_hr gr-page-hr"})):null,S?l.default.createElement("div",null,l.default.createElement(f.default,{group_id:h,new_arr:F,new_count:S})):null)):l.default.createElement("div",{className:"h-100vh"})}r(48057),h.propTypes={},t.default=h},15980:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(25495)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.admin_arr,l=e.admin_count;return a.default.createElement("div",null,a.default.createElement(n.default,{group_id:t,title:"Admins & moderators",info:"",has_learn_more:!1,link_learn_more:"",user_page_arr:r,user_page_count:l,link_all:"/group/members/admins"}))}u.propTypes={},t.default=u},40537:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(25495)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.expert_arr,l=e.expert_count;return a.default.createElement("div",null,a.default.createElement(n.default,{group_id:t,title:"Group experts",info:"Group experts are chosen by admins and know a lot about the group's topic. They get a badge next to their name and help answer questions.",has_learn_more:!0,link_learn_more:"/help/group-experts",user_page_arr:r,user_page_count:l,link_all:"/group/members/experts"}))}u.propTypes={},t.default=u},93517:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(25495)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.friend_arr,l=e.friend_count;return a.default.createElement("div",null,a.default.createElement(n.default,{group_id:t,title:"Friends",info:"",has_learn_more:!1,link_learn_more:"",user_page_arr:r,user_page_count:l,link_all:"/group/members/friends"}))}u.propTypes={},t.default=u},26963:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),r(93191)),l=r(27179),u=o(r(25462));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.member_count,r=e.value_search,o=e.changeSearch;return a.default.createElement("div",{className:"GPMemHead"},a.default.createElement("div",{className:"margin-bottom-10px"},a.default.createElement("h2",{className:"font-17px font-600"},"Members",a.default.createElement("span",{className:"text-secondary"}," ","· ",(0,l.formatNum)(t))),a.default.createElement("div",null,a.default.createElement("span",{className:"text-secondary"},"New people and Pages that join this group will appear here.")," ",a.default.createElement(n.Link,{className:"font-500 color-inherit hv-underline",to:"/group/help"},"Learn more"))),a.default.createElement("div",null,a.default.createElement(u.default,{value:r,changeSearch:o,placeholder:"Find a member",hide_key_when_focus:!1})))}i.propTypes={},t.default=i},25755:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(25495)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.near_arr,l=e.near_count;return a.default.createElement("div",null,a.default.createElement(n.default,{group_id:t,title:"Members near you",info:"",has_learn_more:!1,link_learn_more:"",user_page_arr:r,user_page_count:l,link_all:"/group/members/near"}))}u.propTypes={},t.default=u},27796:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=d(a),l=(d(r(45697)),r(50522)),u=r(2804),o=d(r(16841)),i=d(r(22313));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.group_id,r=e.new_arr,d=(e.new_count,(0,a.useRef)(null)),c=(0,u.useObserverShowMore)({initial_arr:r,handle_API_L:function(e){return(0,l.handle_API_FbGroupMember_L)({c_count:e,group_id:t,type:"new"})}}),_=c.data_state,s=c.is_max,f=c.observerShowMore,m=_.data_arr;function p(e){console.log(e)}return(0,a.useEffect)((function(){f({fake_elm_end:d.current,rootMargin:"0px",way_scroll:"to_bottom",margin:0})}),[]),n.default.createElement("div",{className:"GPMemNew"},n.default.createElement("div",null,n.default.createElement(o.default,{title:"New to the group",count:0,show_count:!1,info:"This list includes people who've joined the group, as well as people who are previewing the group. Anyone who's been invited and approved can preview the content in the group.",has_learn_more:!1,link_learn_more:""})),n.default.createElement("div",{className:"margin-top-10px"},m.map((function(e,r){return n.default.createElement("div",{key:e.id},n.default.createElement(i.default,{group_id:t,has_action_other:!0,item:e,handleAction:p}))}))),n.default.createElement("div",{ref:d,className:"h-1px"}),s.current?null:n.default.createElement("div",{className:"h-250px"}))}c.propTypes={},t.default=c},70875:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(25495)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.same_arr,l=e.same_count;return a.default.createElement("div",null,a.default.createElement(n.default,{group_id:t,title:"Members with things in common",show_count_on_title:!1,info:"",has_learn_more:!1,link_learn_more:"",user_page_arr:r,user_page_count:l,link_all:"/group/members/sames"}))}u.propTypes={},t.default=u},9084:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(22313)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.group_id,r=e.you_obj;return a.default.createElement("div",{className:"GPMemYou"},a.default.createElement(n.default,{group_id:t,has_action_other:!0,item:r}))}u.propTypes={},t.default=u},80319:(e,t,r)=>{"use strict";r.r(t)},48057:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=8380.js.map