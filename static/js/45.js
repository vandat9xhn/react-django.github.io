(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[45],{2434:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_sk_link_arr=[{sk:"",title:"Posts"},{sk:"about_overview",title:"About"},{sk:"friend",title:"Friends"},{sk:"photos_all",title:"Photos"}],t.more_link_arr=[{sk:"like",title:"Likes"},{sk:"group",title:"Groups"},{sk:"film",title:"Film"},{sk:"music",title:"Music"}]},92085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.useRouteFollowSearch=function(e){var t=e.base_path,r=void 0===t?/./:t,l=e.route_arr,u=void 0===l?[{component:function(){return React.createElement("div",null)},search:""}]:l,i=e.HasFuncDetectRoute,o=void 0===i?function(){return!1}:i,s=e.is_exact,c=void 0!==s&&s,f=e.getRouteIx,d=void 0===f?function(){return 0}:f,_=e.getRouteProps,m=void 0===_?function(){return{}}:_,p=e.handleNotFound,v=void 0===p?function(){}:p,h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({route_ix:0,route_props:{}}),2),y=h[0],P=h[1];return(0,n.useEffect)((function(){!function(){if(r.test(location.href)){var e,t=(e=location.search,o()?d():u.findIndex((function(t){return c||""==t.search?t.search==e:e.startsWith(t.search)})));t>=0?P((function(e){return a({},e,{route_ix:t,route_props:m(t)})})):v()}}()}),[location.href]),a({},y)};var n=r(67294)},58067:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=u(a),l=u(r(45697));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.RouteComponent,r=e.route_props,l=e.fallback;return n.default.createElement(a.Suspense,{fallback:l},n.default.createElement(t,r))}i.propTypes={RouteComponent:l.default.oneOfType([l.default.func,l.default.object]),route_props:l.default.object,fallback:l.default.element},i.defaultProps={route_props:{},fallback:null},t.default=i},52636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(67294)),n=i(r(45697)),l=i(r(88303)),u=i(r(14767));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.pic_arr,r=e.has_more,n=e.ItemComponent,u=e.clickMore;return a.default.createElement("div",{className:"flex-end row-reverse"},r&&a.default.createElement("div",{className:"OverlapPics_item"},a.default.createElement("div",{className:"OverlapPics_item_img pos-rel"},a.default.createElement(n,{picture:t[0].picture}),a.default.createElement("div",{className:"pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2",onClick:u},a.default.createElement(l.default,{size_icon:"15px",color:"var(--md-bg-blur)"})))),t.slice(r?1:0).map((function(e,t){return a.default.createElement("div",{key:t,className:"OverlapPics_item"},a.default.createElement("div",{className:"OverlapPics_item_img"},a.default.createElement(n,{picture:e.picture})))})))}r(89666),o.propTypes={pic_arr:n.default.array,has_more:n.default.bool,ItemComponent:n.default.func,clickMore:n.default.func},o.defaultProps={ItemComponent:u.default},t.default=o},14767:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.picture;return a.default.createElement("img",{className:"OverlapPicsItem wh-100 brs-50 object-fit-cover",src:t,alt:""})}n(r(45697)),l.propTypes={},t.default=l},63629:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(16449)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.link_to,r=e.picture,l=e.has_new_story,u=e.has_seen_story,i=e.openPicture;return a.default.createElement("div",{className:"ProfileLayoutPicture pos-rel h-100per"},a.default.createElement("div",{className:"ProfileLayoutPicture_contain pos-abs left-0 w-100per"},a.default.createElement(n.default,{class_link:"ProfileLayoutPicture_link",has_link:!!t,link_to:t},a.default.createElement("div",{className:"pos-rel padding-top-100per"},a.default.createElement("div",{className:"ProfileLayoutPicture_pic pos-abs-100 brs-50 box-shadow-1 "+(l?"ProfileLayoutPicture_pic-story cursor-pointer active-scale-sm "+(u?"ProfileLayoutPicture_pic-story_seen":"ProfileLayoutPicture_pic-story_new"):""),onClick:l?i:void 0},a.default.createElement("img",{className:"ProfileLayoutPicture_img wh-100 brs-50 bg-primary object-fit-cover",src:r,alt:""}))))))}r(274),u.propTypes={},t.default=u},7157:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileRoutes=void 0;var a,n=(a=r(67294))&&a.__esModule?a:{default:a},l=n.default.lazy((function(){return Promise.all([r.e(9859),r.e(8740),r.e(9319),r.e(6272),r.e(898),r.e(3261),r.e(4926),r.e(4766)]).then(r.bind(r,94596))})),u=n.default.lazy((function(){return r.e(1189).then(r.bind(r,1189))})),i=n.default.lazy((function(){return r.e(117).then(r.bind(r,10117))})),o=n.default.lazy((function(){return r.e(8780).then(r.bind(r,38780))})),s=n.default.lazy((function(){return Promise.all([r.e(9859),r.e(8740),r.e(9319),r.e(6272),r.e(898),r.e(945)]).then(r.bind(r,65066))})),c=n.default.lazy((function(){return r.e(7178).then(r.bind(r,47178))}));t.ProfileRoutes=[{component:l,search:""},{component:u,search:"?sk=about"},{component:i,search:"?sk=friend"},{component:o,search:"?sk=photo"},{component:s,search:"?sk=album_photo"},{component:c,search:"?sk=like"},{component:c,search:"?sk=group"},{component:c,search:"?sk=film"},{component:c,search:"?sk=music"}]},40673:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return a.default.createElement("div",{className:"ProfileSkeleton margin-auto h-100vh bg-primary"})}n(r(45697)),r(352),l.propTypes={},t.default=l},20045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),l=h(n),u=r(93191),i=(h(r(45697)),r(15130)),o=r(78295),s=r(80941),c=r(92085),f=r(7157),d=h(r(58067));r(19418);var _=h(r(40673)),m=h(r(77879)),p=h(r(86360)),v=h(r(92456));function h(e){return e&&e.__esModule?e:{default:e}}r(740),t.default=function(e){var t,r,h=(t=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(a({},g,{is_fetching:!0})),e.next=3,(0,s.handle_API_ProfileInfo_R)({user_id:P});case 3:t=e.sent,r=t.first_name+" "+t.last_name,document.title=r,N(a({},g,{profile:t,is_fetching:!1}));case 7:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(i)}("next")}))},function(){return r.apply(this,arguments)}),y=(0,u.useHistory)(),P=(0,u.useParams)().id||location.pathname.split("/")[2],E=(0,n.useContext)(i.context_api).user,b=P==E.id,k=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({profile:(0,o.initial_profile)(),is_fetching:!1}),2),g=k[0],N=k[1],x=g.profile,M=g.is_fetching,w=x.first_name,O=x.last_name,I=x.picture;(0,n.useEffect)((function(){window.scroll(0,0),h()}),[P]);var j=(0,c.useRouteFollowSearch)({base_path:/\/profile\/\d+/,route_arr:f.ProfileRoutes,is_exact:!1,getRouteProps:function(){return{user_id:P,name:x.first_name+" "+x.last_name,is_your:b}},handleNotFound:function(){y.replace("/profile/"+P)}}),A=j.route_ix,C=j.route_props;function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log(e)}return M?null:l.default.createElement("div",{key:P,className:"Profile"},l.default.createElement("div",{className:"Profile_info Profile_part bg-primary"},l.default.createElement(m.default,{profile:x,openCoverPicture:function(){console.log(P)},openPicture:function(){console.log(P)},handleAction:R})),x.sent_request?l.default.createElement("div",{className:"Profile_sent_request Profile_part bg-primary"},l.default.createElement(v.default,{user_name:x.first_name+" "+x.last_name,handleAction:R})):null,l.default.createElement("div",{className:"fb-profile-nav"},l.default.createElement("div",{className:"fb-profile-width-contain"},l.default.createElement(p.default,{user_id:P,user_name:w+" "+O,user_pic:I,handleAction:R}))),l.default.createElement("div",{className:"Profile_main margin-top-20px"},l.default.createElement(d.default,{RouteComponent:f.ProfileRoutes[A].component,route_props:C,fallback:l.default.createElement(_.default,null)})))}},77879:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=p(a),l=p(r(45697)),u=r(15130),i=r(55852),o=p(r(17852)),s=p(r(20658)),c=p(r(59625)),f=p(r(18069)),d=p(r(90410)),_=p(r(87227)),m=p(r(5675));function p(e){return e&&e.__esModule?e:{default:e}}function v(e){var t=e.profile,r=e.openCoverPicture,l=e.openPicture,p=e.handleAction,v=(0,a.useContext)(u.context_api).user,h=t.id,y=t.first_name,P=t.last_name,E=t.picture,b=t.cover,k=t.nick_name,g=t.bio,N=t.has_new_story,x=t.has_seen_story,M=t.friend_arr,w=t.friend_count,O=t.mutual_friend_arr,I=t.mutual_friend_count,j=t.has_more_friend,A=t.action_case_arr,C=v.id==h;return n.default.createElement(o.default,null,n.default.createElement("div",{className:"ProfileInfo bg-primary"},n.default.createElement("div",{className:"ProfileInfo_cover"},n.default.createElement(d.default,{cover:b,openCoverPicture:r})),n.default.createElement("div",{className:"ProfileInfo_user_action display-flex space-between fb-profile-width-contain"},n.default.createElement("div",{className:"ProfileInfo_user display-flex"},n.default.createElement("div",{className:"flex-shrink-0"},n.default.createElement(f.default,{picture:E,has_new_story:N,has_seen_story:x,openPicture:l})),n.default.createElement("div",{className:"ProfileInfo_name_friend "},n.default.createElement("div",null,n.default.createElement(_.default,{name:y+" "+P,nick_name:k})),i.IS_MOBILE?null:n.default.createElement("div",null,n.default.createElement(m.default,{is_user:C,friend_count:w,mutual_friend_count:I,friend_arr:I>0?O:M,has_more_friend:j})))),n.default.createElement("div",{className:"ProfileInfo_actions align-self-end"},n.default.createElement(s.default,{user_id:h,action_case_arr:A,handleAction:p}))),g?n.default.createElement("div",{className:"ProfileInfo_bio fb-profile-width-contain padding-top-20px"},n.default.createElement(c.default,{is_user:C,bio:g,handleChangeBio:function(){console.log(h)}})):null))}r(33768),v.propTypes={profile:l.default.object,openCoverPicture:l.default.func,openPicture:l.default.func},t.default=v},20658:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(67294)),n=(i(r(45697)),r(55852)),l=i(r(40808)),u=i(r(87049));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.action_case_arr,r=e.user_id,i=e.handleAction;return a.default.createElement("div",{className:"ProfileInfoActions"},a.default.createElement("div",{className:"flex-end align-items-center flex-wrap"},t.slice(0,n.IS_MOBILE?1:2).map((function(e,t){return a.default.createElement("div",{key:t,className:"ProfileInfoActions_item margin-x-4px margin-top-8px"},a.default.createElement(l.default,{action_case:e.name,user_id:r,handleAction:i}))})),n.IS_MOBILE?a.default.createElement("div",{className:"margin-x-4px margin-top-8px "+(2==t.length?"flex-grow-1 display-flex align-items-center":"")},2==t.length?a.default.createElement("div",{className:"ProfileInfoActions_item"},a.default.createElement(l.default,{action_case:t[1].name,user_id:r,handleAction:i})):null,a.default.createElement("div",{className:2==t.length?"margin-left-8px":""},a.default.createElement(u.default,{user_id:r,handleAction:i}))):null))}r(89662),o.propTypes={},t.default=o},59625:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(67294));function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.is_user,r=e.bio,n=e.handleChangeBio;return a.default.createElement("div",{className:"ProfileInfoBio margin-auto"},a.default.createElement("div",{className:"ProfileInfoBio_contain text-align-center"},a.default.createElement("div",{onClick:t?n:void 0},r)))}n(r(45697)),r(50724),l.propTypes={},t.default=l},90410:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(85879)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.cover,r=e.openCoverPicture;return a.default.createElement(n.default,{cover:t,link_to:"/posts/1",openCoverPicture:r})}r(58502),u.propTypes={},t.default=u},5675:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(67294)),n=(i(r(45697)),r(93191)),l=i(r(52636)),u=i(r(43174));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.is_user,r=e.friend_count,i=e.mutual_friend_count,o=e.friend_arr,s=e.has_more_friend;return a.default.createElement("div",{className:"ProfileInfoFriends"},a.default.createElement("div",null,a.default.createElement(u.default,{friend_count:r,mutual_friend_count:i,is_user:t})),a.default.createElement("div",{className:"padding-top-8px"},a.default.createElement(n.Link,{to:"?sk=friend"+(i&&!t?"&type=mutual":"")},a.default.createElement(l.default,{pic_arr:o,has_more:s}))))}r(95932),o.propTypes={},t.default=o},43174:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),r(93191));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.friend_count,r=e.mutual_friend_count,l=e.is_user;return a.default.createElement("div",{className:"text-secondary font-500"},t?a.default.createElement(n.Link,{to:"?sk=friend",className:"color-inherit hv-underline"},t," Friend",t>=2?"s":""):null,t&&r&&!l?" · ":"",!l&&r?a.default.createElement(n.Link,{to:"?sk=friend&type=mutual",className:"color-inherit hv-underline"},r," mutual friend",r>=2?"s":""):null)}u.propTypes={},t.default=u},87227:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(67020)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.name,r=e.nick_name;return a.default.createElement(n.default,{name:t,nick_name:r})}r(44501),u.propTypes={},t.default=u},18069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(63629)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.picture,r=e.has_new_story,l=e.has_seen_story,u=e.openPicture;return a.default.createElement(n.default,{link_to:r?"":"/posts/1",picture:t,has_new_story:r,has_seen_story:l,openPicture:u})}r(42724),u.propTypes={},t.default=u},86360:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=_(r(67294)),n=r(55852),l=r(87898),u=r(2434),i=_(r(87049)),o=_(r(19936)),s=_(r(43642)),c=_(r(91834)),f=_(r(36978)),d=_(r(29582));function _(e){return e&&e.__esModule?e:{default:e}}function m(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}r(20182),t.default=function(e){var t,r=e.user_id,_=e.user_name,p=e.user_pic,v=e.handleAction,h=(t=(0,l.ParseLocationSearch)().sk,u.more_link_arr.some((function(e){return e.sk==t})));return a.default.createElement(s.default,{left_main_elm:a.default.createElement("ul",{className:"ProfileNav_list flex-grow-1 display-flex list-none h-100per padding-top-3px"},[].concat(m(u.data_sk_link_arr),m(n.IS_MOBILE?u.more_link_arr:[])).map((function(e,t){return a.default.createElement("li",{key:t,className:"ProfileNav_item"},a.default.createElement(f.default,{sk:e.sk,title:e.title}))})),n.IS_MOBILE?null:a.default.createElement("li",{className:"ProfileNav_item"},a.default.createElement(c.default,{more_link_arr:u.more_link_arr,is_active:h,has_item_component:!0,item_props:{user_id:r},ItemComponent:d.default}))),left_sticky_elm:a.default.createElement("div",{className:"display-flex h-100per padding-y-2px"},a.default.createElement(o.default,{link_to:"/profile/"+r,picture:p,name:_})),right_elm:n.IS_MOBILE?null:a.default.createElement("div",{className:"display-flex align-items-center h-100per"},a.default.createElement(i.default,{user_id:r,handleAction:v}))})}},36978:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(7077)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.sk,r=e.title;return a.default.createElement(n.default,{title:r,link_to:location.pathname+(t?"?sk=":"")+t,IsActive:function(e,r){return r.search.startsWith("?sk="+t.split("_")[0])&&""!=t||""==r.search&&""==t||"photos_all"==t&&r.search.startsWith("?sk=album_photo")}})}r(58869),u.propTypes={},t.default=u},29582:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(87898)),l=u(r(2614));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.user_id,r=e.title,u=e.sk;return a.default.createElement(l.default,{title:r,link_to:"/profile/"+t+"?sk="+u,isActive:function(){return(0,n.ParseLocationSearch)().sk==u}})}i.propTypes={},t.default=i},92456:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(27345)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.user_name,r=e.handleAction;return a.default.createElement("div",{className:"ProfileSentFriendRequest fb-profile-width-contain padding-16px bg-fb"},a.default.createElement("div",{className:"ProfileSentFriendRequest_row flex-between-center"},a.default.createElement("div",{className:"ProfileSentFriendRequest_title font-17px font-600"},t," sent you a friend request"),a.default.createElement("div",{className:"display-flex flex-wrap"},a.default.createElement("div",{className:"ProfileSentFriendRequest_btn margin-5px"},a.default.createElement(n.default,{className:"bg-blue text-white",title:"Confirm Request",handleClick:function(){r("confirm_request")}})),a.default.createElement("div",{className:"ProfileSentFriendRequest_btn margin-5px"},a.default.createElement(n.default,{className:"bg-ccc",title:"Delete Request",handleClick:function(){r("delete_request")}})))))}r(98589),u.propTypes={},t.default=u},89666:(e,t,r)=>{"use strict";r.r(t)},274:(e,t,r)=>{"use strict";r.r(t)},352:(e,t,r)=>{"use strict";r.r(t)},740:(e,t,r)=>{"use strict";r.r(t)},19418:(e,t,r)=>{"use strict";r.r(t)},33768:(e,t,r)=>{"use strict";r.r(t)},89662:(e,t,r)=>{"use strict";r.r(t)},50724:(e,t,r)=>{"use strict";r.r(t)},58502:(e,t,r)=>{"use strict";r.r(t)},95932:(e,t,r)=>{"use strict";r.r(t)},44501:(e,t,r)=>{"use strict";r.r(t)},42724:(e,t,r)=>{"use strict";r.r(t)},20182:(e,t,r)=>{"use strict";r.r(t)},58869:(e,t,r)=>{"use strict";r.r(t)},98589:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=45.js.map