(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[9423],{29996:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_ContentMoreHistory_R=t.handle_API_History_L=t.handle_API_Share_L=t.handle_API_Like_L=t.handle_API_Post_U=t.handle_API_MoreContent_R=t.handle_API_Post_C=t.handle_API_PostUpdate_R=void 0;var r,a,o,l,i,s,u,c,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.handle_API_PostUpdate_R=(r=h(regeneratorRuntime.mark((function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.API_Post_RD)(n,"GET",p.params_post_update);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),t.handle_API_Post_C=(a=h(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.API_Post_C)((0,m.default)(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)}),t.handle_API_MoreContent_R=(o=h(regeneratorRuntime.mark((function e(){var t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.API_PostMoreContent_R)(r,p.params_more_content_post);case 2:return t=e.sent,n=t.data.content_obj.content_more,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),t.handle_API_Post_U=(l=h(regeneratorRuntime.mark((function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments[1];return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.API_Post_U)(n,(0,m.default)(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),t.handle_API_Like_L=(i=h(regeneratorRuntime.mark((function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments[2];return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.API_PostLike_L)(d({},p.params_like_post_l,{post_model:n,c_count:r,type_like:a}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)}),t.handle_API_Share_L=(s=h(regeneratorRuntime.mark((function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.API_PostShare_L)(d({},p.params_share_post_l,{post_model:n,c_count:r}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)}),t.handle_API_History_L=(u=h(regeneratorRuntime.mark((function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.API_PostHistory_L)(d({},p.params_history_post_l,{post_model:n,c_count:r}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)}),t.handle_API_ContentMoreHistory_R=(c=h(regeneratorRuntime.mark((function e(){var t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.API_PostHistory_R)(d({},p.params_more_content_history_post,{his_model:r}));case 2:return t=e.sent,n=t.data.content_obj.content_more,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)}),t.handle_API_Post_D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,f.API_Post_RD)(e,"DELETE")},t.handle_API_Permission_U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,f.API_Post_U)(e,(0,m.default)({permission_post:t}))};var _,f=n(81042),m=(_=n(48321))&&_.__esModule?_:{default:_},p=n(9824);function h(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,o){try{var l=t[a](o),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(i)}("next")}))}}},42441:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initial_posts=[{id:0,user:{id:0,picture:"",first_name:"",last_name:"",is_online:!1},content_obj:{content_more:"",has_more_content:!1,content:""},vid_pics:[{id:0,likes:[],arr_unique_like:[],count_like:0,vid_pic:"",content_obj:{content_more:"",has_more_content:!1,content:""},comments:[],count_comment:0,histories:[],created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}],count_vid_pic:0,likes:[],count_like:0,user_type_like:-1,shares:[],count_share:0,count_unique_share:0,count_user_shared:0,comments:[],count_comment:0,histories:[],count_history:0,permission_post:0,created_time:"2021-04-01T07:48:48.176630Z",updated_time:"2021-04-01T15:18:30.339347Z"}]},21838:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.openScreenShare=function(e){(0,e.openScreenFloor)({FloorComponent:d,title:e.title,handle_API_Share_L:e.handle_API_Share_L})};var r=n(67294),a=c(r),o=(c(n(45697)),n(84353)),l=c(n(15877)),i=c(n(77992)),s=c(n(98513)),u=c(n(11623));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.closeScreen,n=e.title,c=e.handle_API_Share_L,d=(0,o.useDataShowMore)({initial_arr:[],handle_API_L:c}),_=d.data_state,f=d.getData_API,m=_.data_arr,p=_.count,h=_.is_fetching,v=_.has_fetched;function P(e){console.log(e)}return(0,r.useEffect)((function(){f()}),[]),a.default.createElement(i.default,{closeScreen:t},a.default.createElement("div",{className:"ScreenShare_contain"},a.default.createElement(s.default,{title:n,closeScreenBlur:t}),a.default.createElement("div",{className:"ScreenBlur_body "+(v?"":"display-none")},a.default.createElement("div",{className:"ScreenBlur_body_contain scroll-thin"},m.map((function(e,t){return a.default.createElement(l.default,{key:"ScreenLike_"+t,user:e.user,handleSendAddFriend:P})})))),a.default.createElement(u.default,{is_show_more:p>m.length,is_fetching:h,handleShowMore:function(){f()}})))}n(72644),d.propTypes={},t.default=d},41481:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.openScreenPostVidPic=function(e){var t=e.openScreenFloor,n=e.show_screen_title,a=e.handleDeleteVidPicPost,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["openScreenFloor","show_screen_title","handleDeleteVidPicPost"]);t(r({FloorComponent:i,show_screen_title:n,handleDeleteVidPicPost:a},o))};var a=l(n(67294)),o=(l(n(45697)),l(n(46272)));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.closeScreen,n=e.show_screen_title,r=e.handleDeleteVidPicPost;return a.default.createElement(o.default,{show_screen_title:n,closeScreenTitle:t,handleDeleteVidPicPost:r})}i.propTypes={},t.default=i},6043:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=i(n(45697)),o=n(27720),l=i(n(48474));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.current_permission,n=e.handleOpenPermission,a=e.title;return r.default.createElement("div",{className:"action-item",onClick:n,title:"Permission"},r.default.createElement(l.default,{ComponentLeft:o.IconsPermission[t].Icon,ComponentRight:r.default.createElement("div",null,a)}))}s.propTypes={current_permission:a.default.number,title:a.default.string,handleOpenPermission:a.default.func},s.defaultProps={current_permission:0,title:"Permission"},t.default=s},40845:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(67294),o=N(a),l=N(n(45697)),i=n(15130),s=n(75153),u=n(82403),c=n(21092),d=N(n(17852)),_=N(n(8119)),f=N(n(20358)),m=n(39309),p=n(99452),h=n(14927),v=n(13205),P=n(29996),y=N(n(70657)),E=N(n(72021)),g=N(n(17884)),C=N(n(52442)),x=N(n(44840)),b=N(n(81555)),I=N(n(21624)),A=N(n(75532));function N(e){return e&&e.__esModule?e:{default:e}}function S(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function w(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,o){try{var l=t[a](o),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(i)}("next")}))}}function k(e){var t,n,l,N,k,M=(t=w(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve((function(){return(0,P.handle_API_PostUpdate_R)(Z)}));case 2:t=e.sent,n=t.vid_pics.map((function(e){return{id:e.id,content:e.content,vid_pic:e.vid_pic,type:e.vid_pic.endsWith("./mp4")?"video":"image"}})),(0,v.openScreenUpdate)({openScreenFloor:V,title:"Update",UpdateComponent:y.default,main_content:t.content,vid_pics:n,handleCUPost:L});case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)}),L=(n=w(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve((function(){return(0,P.handle_API_Post_U)(Z,t)}));case 2:e.sent,Y.content=t.main_content,Y.content_more="",Y.has_more_content=!1,O.vid_pics=t.c_vid_pics,he(),B(),console.log(t);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),R=(l=w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve((function(){return(0,P.handle_API_Post_D)(Z)}));case 2:O.is_del=!0,he();case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)}),H=(N=w(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve((function(){return(0,P.handle_API_Permission_U)(Z,t)}));case 2:O.permission_post=t,he();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return N.apply(this,arguments)}),F=(k=w(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ae.length||!oe){e.next=11;break}return me(!0),e.next=4,q(Z);case 4:t=e.sent,n=t.data,ae.push.apply(ae,S(n)),me(!1),Ee(),e.next=12;break;case 11:Ee();case 12:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)}),O=e.post,U=e.post_ix,j=e.enabled_share,T=(0,a.useContext)(i.context_api),D=T.user,V=T.openScreenFloor,B=T.closeScreenFloor,q=(0,a.useContext)(s.context_post).handle_API_Cmt_L,z=O.is_del,Z=O.id,W=O.user,J=O.vid_pics,Y=O.content_obj,G=O.permission_post,K=O.updated_time,Q=O.likes,X=O.count_like,$=O.user_type_like,ee=O.shares,te=O.count_share,ne=O.count_unique_share,re=O.count_user_shared,ae=O.comments,oe=O.count_comment,le=D.id==W.id,ie=(0,a.useState)(!1),se=r(ie,2),ue=se[0],ce=se[1],de=(0,a.useState)(!1),_e=r(de,2),fe=_e[0],me=_e[1],pe=(0,a.useRef)(null),he=(0,u.useForceUpdate)(),ve=(0,c.useScreenFetching)();function Pe(e){return(0,P.handle_API_History_L)(Z,e)}function ye(){console.log("Report: "+Z)}function Ee(){D.id&&(!ue&&ce(!0),setTimeout((function(){pe.current.querySelector(".Comments_input_contain textarea.CommentInput_textarea").focus()}),1))}return!z&&o.default.createElement(d.default,{rootMargin_y:1e3},o.default.createElement("div",{className:"Post padding-8px bg-primary box-shadow-1 brs-8px-md"},o.default.createElement("div",{className:"Post_head pos-rel"},o.default.createElement("div",{className:"Post__user"},o.default.createElement(_.default,{user:W,content:o.default.createElement(g.default,{permission_post:+G,updated_time:K})})),o.default.createElement("div",{className:"Post__actions"},o.default.createElement(x.default,{is_poster:le,openHistoryPost:function(){(0,p.openScreenHistory)({openScreenFloor:V,title:"History",handle_API_History_L:Pe,HisComponent:A.default,handle_API_MoreContent:P.handle_API_ContentMoreHistory_R})},openUpdatePost:M,openDeletePost:function(){(0,m.openScreenConfirm)({openScreenFloor:V,title:"Delete",notification:"Do you really want to delete this post?",handleConfirm:R})},openReportPost:function(){(0,m.openScreenConfirm)({openScreenFloor:V,title:"Report",notification:"Do you want to report this post?",handleConfirm:ye})},openPermissionPost:function(){(0,h.openScreenPermission)({openScreenFloor:V,permission:G,handleChoosePermission:H})}}))),o.default.createElement("div",{className:"Post_content"},o.default.createElement("div",{className:"Post__text"},o.default.createElement(f.default,{content_obj:Y,seeMoreContent:function(){return(0,P.handle_API_MoreContent_R)(Z)}})),o.default.createElement("div",{className:"Post__pic"},o.default.createElement(E.default,{post_ix:U,vid_pics:J}))),o.default.createElement("div",{className:"Post_Info"},o.default.createElement(C.default,{parent_id:Z,count_comment:oe,likes:Q,count_like:X,user_type_like:$,enabled_share:j,shares:ee,count_share:te,count_unique_share:ne,handleClickBtnCmt:F})),o.default.createElement("div",{className:"Post_btn"},o.default.createElement(I.default,{parent_id:Z,enabled_like:!0,user_type_like:$,enabled_cmt:!0,count_comment:oe,enabled_share:!0,count_share:te,count_user_shared:re,handleClickBtnCmt:F})),o.default.createElement("div",{ref:pe,className:"Post_comment"},o.default.createElement(b.default,{is_poster:le,parent_id:Z,comments:ae,count_comment:oe,open_input:ue,fetching_first_cmt:fe}))))}n(62900),k.propTypes={post:l.default.object},t.default=k},44840:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(67294)),a=(d(n(45697)),n(50918)),o=d(n(32346)),l=d(n(58629)),i=d(n(87782)),s=d(n(4787)),u=d(n(64903)),c=d(n(6043));function d(e){return e&&e.__esModule?e:{default:e}}function _(e){var t=e.is_poster,n=e.openHistoryPost,d=e.openUpdatePost,_=e.openDeletePost,f=e.openReportPost,m=e.openPermissionPost;return r.default.createElement("div",{className:"ActionsPost"},r.default.createElement(o.default,null,r.default.createElement("ul",{className:"ActionsPost__list"},r.default.createElement("li",null,r.default.createElement(l.default,{handleOpenHistory:n})),r.default.createElement("li",{className:t||a.is_api_fake?"":"display-none"},r.default.createElement(i.default,{handleUpdate:d})),r.default.createElement("li",{className:t||a.is_api_fake?"":"display-none"},r.default.createElement(c.default,{handleOpenPermission:m})),r.default.createElement("li",{className:!t||a.is_api_fake?"":"display-none"},r.default.createElement(u.default,{handleOpenReport:f})),r.default.createElement("li",{className:t||a.is_api_fake?"":"display-none"},r.default.createElement(s.default,{handleDelete:_})))))}n(47763),_.propTypes={},t.default=_},75532:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294)),a=(o(n(45697)),o(n(76369)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.histories,n=e.handle_API_MoreContent;return r.default.createElement("div",null,r.default.createElement("ul",{className:"PostHistory_list ScreenBlur_list"},t.map((function(e,t){return r.default.createElement("li",{className:"PostHistory_item ScreenBlur_item",key:"PostHistory_item_"+t},r.default.createElement(a.default,{his_item:e,handle_API_MoreContent:n}))}))))}l.propTypes={},t.default=l},76369:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=(i(n(45697)),n(47442)),o=i(n(20358));n(48024);var l=n(32006);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t,n,i=(t=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(a,o){try{var l=e[a](o),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(i)}("next")}))},function(){return n.apply(this,arguments)}),s=e.his_item,u=e.handle_API_MoreContent,c=s.id,d=s.created_time,_=s.content_obj,f=s.vid_pics_create,m=s.vid_pics_del,p=s.count_vid_pic_create,h=s.count_vid_pic_del,v=_.content;return r.default.createElement("div",{className:"PostHistoryItem"},r.default.createElement("div",null,r.default.createElement("div",{className:"PostHistoryItem_time ScreenBlurItem_time"},"Updated at"," ",(0,a.formatLocalDateTimeString)(new Date(d))),r.default.createElement("div",{className:v?"":"display-none"},r.default.createElement(o.default,{content_obj:_,seeMoreContent:i})),r.default.createElement("div",{className:p?"":"display-none"},r.default.createElement("div",null,r.default.createElement("div",{className:"PostHistoryItem__title-pic font-italic"},"Created ",p," videos / pictures:"),r.default.createElement("div",{className:"PostHistoryItem__pic"},r.default.createElement("div",{className:"display-flex"},f.map((function(e,t){return r.default.createElement("div",{key:"PostHistoryItem_pic_create_"+t},(0,l.VideoOrImage)(e.vid_pic))})))))),r.default.createElement("div",{className:h?"":"display-none"},r.default.createElement("div",null,r.default.createElement("div",{className:"PostHistoryItem__title-pic font-italic"},"Deleted ",h," videos / pictures:"),r.default.createElement("div",{className:"PostHistoryItem__pic"},r.default.createElement("div",{className:"display-flex"},m.map((function(e,t){return r.default.createElement("div",{key:"PostHistoryItem_pic_del_"+t},(0,l.VideoOrImage)(e.vid_pic))}))))))))}s.propTypes={},t.default=s},48546:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(67294)),a=(o(n(45697)),o(n(29875)));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return r.default.createElement("div",{className:"Post bg-primary brs-5px-md box-shadow-1"},r.default.createElement("div",{className:"padding-8px"},r.default.createElement("div",{className:"display-flex"},r.default.createElement("div",{className:"PictureNameCommon__pic brs-50"}),r.default.createElement("div",{className:"PostSkeleton_name"},r.default.createElement(a.default,null)))),r.default.createElement("div",{className:"VidPics_count"}))}l.propTypes={},t.default=l},72021:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=i(n(45697)),o=i(n(97817)),l=i(n(88943));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.post_ix,n=e.vid_pics;return r.default.createElement("div",{className:"VidPicsPost"},n?r.default.createElement("div",{className:n.length>0?"VidPics_count":""},n.map((function(e,a){return r.default.createElement(l.default,{key:"VidPicsPost_"+a,index:a,post_ix:t,count_vid_pic:n.length,id:e.id,vid_pic:e.vid_pic})}))):r.default.createElement("img",{src:o.default,alt:""}))}s.propTypes={vid_pics:a.default.array},s.defaultProps={vid_pics:[1]},t.default=s},88943:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=s(r),o=n(93191),l=(s(n(45697)),n(32006)),i=n(75153);function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.count_vid_pic,n=e.index,s=e.post_ix,u=e.id,c=e.vid_pic,d=(0,r.useContext)(i.context_post).zoomVidPicPost;return a.default.createElement("div",{className:"VidPicPostItem VidPics_count_"+(t>4?5:t),"data-length":3==n&&t>4?t-4:void 0},a.default.createElement(o.Link,{to:"/post/photos/"+u,onClick:function(e){e.preventDefault(),d(n,s)}},(0,l.VideoOrImage)(c)))}n(82503),u.propTypes={},t.default=u},14122:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=v(r),o=v(n(45697)),l=n(15130),i=n(50918),s=n(41481),u=v(n(75153)),c=v(n(40040)),d=v(n(27883)),_=n(29996),f=n(91800),m=n(97218),p=v(n(40845)),h=v(n(48546));function v(e){return e&&e.__esModule?e:{default:e}}function P(e){var t=e.posts,n=e.has_fetched,o=e.is_fetching,v=(0,r.useContext)(l.context_api),P=v.openScreenFloor,y=v.closeScreenFloor,E=(0,r.useRef)(null),g=(0,r.useRef)(-1);function C(){g.current=-1,y(),history.back()}function x(e){console.log(e,t[g.current].vid_pics)}return(0,r.useEffect)((function(){E.current=localStorage.is_login&&!i.is_api_fake?new WebSocket(""):null,null!=E.current&&(E.current.onopen=function(){console.log("open")})}),[]),a.default.createElement("div",{className:"Posts"},a.default.createElement(u.default,{ws_send:E.current?E.current.send:function(e){console.log(e)},ws_type_post:"post",ws_type_cmt:"cmt",ws_type_sub:"sub",zoomVidPicPost:function(e,n){var r=t[n].vid_pics[e].id;g.current=e,(0,s.openScreenPostVidPic)({openScreenFloor:P,show_screen_title:!0,handleDeleteVidPicPost:x,closeScreen:C}),history.pushState("","","/post/photos/"+r)},handle_API_Like_L:_.handle_API_Like_L,handle_API_Share_L:_.handle_API_Share_L,handle_API_MoreContentCmt_R:f.handle_API_MoreContentCmt_R,handle_API_Cmt_L:f.handle_API_Cmt_L,handle_API_Cmt_C:f.handle_API_Cmt_C,handle_API_Cmt_U:f.handle_API_Cmt_U,handle_API_LikeCmt_L:f.handle_API_LikeCmt_L,handle_API_HistoryCmt_L:f.handle_API_HistoryCmt_L,handle_API_MoreContentHisCmt_R:f.handle_API_MoreContentHisCmt_R,handle_API_MoreContentSub_R:m.handle_API_MoreContentSub_R,handle_API_Sub_L:m.handle_API_Sub_L,handle_API_Sub_C:m.handle_API_Sub_C,handle_API_Sub_U:m.handle_API_Sub_U,handle_API_LikeSub_L:m.handle_API_LikeSub_L,handle_API_HistorySub_L:m.handle_API_HistorySub_L,handle_API_MoreContentHisSub_R:m.handle_API_MoreContentHisSub_R},a.default.createElement(c.default,{has_fetched:n,component:a.default.createElement(h.default,null),num:1}),t.map((function(e,t){return a.default.createElement("div",{key:"Posts_"+e.id,className:"Posts_item"},a.default.createElement(p.default,{post:e,post_ix:t}))})),a.default.createElement("div",{className:"width-fit-content margin-auto"},a.default.createElement(d.default,{is_fetching:o&&n}))))}n(71530),P.propTypes={posts:o.default.array,has_fetched:o.default.bool,is_fetching:o.default.bool},P.defaultProps={has_fetched:!1,is_fetching:!1},t.default=P},70657:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(67294),o=u(a),l=u(n(45697)),i=u(n(51993)),s=u(n(40259));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function d(e){var t=e.main_content,n=e.vid_pics,l=e.title_action,u=e.detectHasChange,d=e.handleCUPost,_=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({main_content:t||"",c_vid_pics:JSON.parse(JSON.stringify(n)),created_arr:Array(n.length).fill(""),deleted_arr:[]||0,updated_arr:[]||0,is_loading:!1,open_fix_all:!1}),2),f=_[0],m=_[1],p=f.main_content,h=f.c_vid_pics,v=f.created_arr,P=f.deleted_arr,y=f.updated_arr,E=f.is_loading,g=f.open_fix_all,C=!!(t!=p||v.some((function(e){return""!=e}))||P.length||y.length);return u(C),o.default.createElement("div",{className:"CUPost bg-primary"},o.default.createElement("div",{className:"CUPost_row display-flex "+(g?"CUPost_row-fix":"")},o.default.createElement("div",null,o.default.createElement("div",{className:g?"display-none":""},o.default.createElement(i.default,{main_content:p,vid_pics:h,title_action:l,has_change:C,is_loading:E,showFixAll:function(){h.length&&m((function(e){return r({},e,{open_fix_all:!0})}))},handleChangeMainContent:function(e){var t=e.target.value;m((function(e){return r({},e,{main_content:t})}))},handleStartLoadFile:function(){m((function(e){return r({},e,{is_loading:!0})}))},handleChooseFiles:function(e){var t=e.files,n=e.vid_pics.map((function(e){return e.content="",e.id=0,e}));m((function(e){return r({},e,{created_arr:[].concat(c(v),c(t)),c_vid_pics:[].concat(c(h),c(n)),is_loading:!1})}))},handleCUPost:function(){C&&d(f)}}))),o.default.createElement("div",null,o.default.createElement("div",{className:g?"":"display-none"},o.default.createElement(s.default,{open_fix_all:g,vid_pics:h,closeFixAll:function(){m((function(e){return r({},e,{open_fix_all:!1})}))},deleteAnItem:function(e){var t=h[e],n=h.filter((function(t,n){return n!=e}));t.id&&P.push(t.id),m((function(t){return r({},t,{c_vid_pics:n,created_arr:v.filter((function(t,n){return n!=e})),open_fix_all:!!n.length&&g})}))},handleChangeContentVidPic:function(e,t){var a=[].concat(c(h));a[t].content=e;var o=function(e,t){if(!e)return y;if(n.find((function(t){return t.id==e})).content==t)return y.filter((function(t){return t.id!=e}));var r=[].concat(c(y)),a=r.find((function(t){return t.id==e}));return a?a.content=t:r.push({id:e,content:t}),r}(h[t].id,e);m(r({},f,{c_vid_pics:a,updated_arr:o}))}})))))}n(61745),n(77142),d.propTypes={main_content:l.default.string,vid_pics:l.default.arrayOf(l.default.shape({id:l.default.number,vid_pic:l.default.string,content:l.default.string,type:l.default.string})),title_action:l.default.string,detectHasChange:l.default.func,handleCUPost:l.default.func},d.defaultProps={main_content:"",vid_pics:[]||0,detectHasChange:function(){},title_action:"Post"},t.default=d},40259:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=(l(n(45697)),l(n(7050))),o=l(n(37930));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.vid_pics,n=e.closeFixAll,l=e.deleteAnItem,i=e.handleChangeContentVidPic;return r.default.createElement("div",null,r.default.createElement("div",{className:"FixAll_close"},r.default.createElement("div",{className:"FixAll_arrowLeft hv-opacity brs-5px",title:"Back",onClick:n},r.default.createElement(o.default,{x:200,y:200}))),r.default.createElement("div",{className:"FixAll_content scroll-thin"},t.map((function(e,t){return e.vid_pic&&r.default.createElement(a.default,{key:"UpdateCreatePostCmt_fix_"+t,ix:t,vid_pic:e.vid_pic,content:e.content,deleteAnItem:l,handleChangeContentVidPic:i})}))))}n(69555),i.propTypes={},t.default=i},7050:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(67294),o=m(a),l=m(n(45697)),i=n(15130),s=n(32006),u=n(39309),c=m(n(75763)),d=m(n(23337)),_=m(n(37930)),f=m(n(10797));function m(e){return e&&e.__esModule?e:{default:e}}function p(e){var t=e.ix,n=e.content,l=e.vid_pic,m=e.deleteAnItem,p=e.handleChangeContentVidPic,h=(0,a.useContext)(i.context_api).openScreenFloor,v=(0,a.useState)(!!n),P=r(v,2),y=P[0],E=P[1],g=(0,a.useState)(!1),C=r(g,2),x=C[0],b=C[1];function I(){m(t)}return o.default.createElement("div",{className:"FixItem"},o.default.createElement("div",{className:"display-flex-center"},o.default.createElement("div",{className:"FixItem_pic display-flex-center"},(0,s.VideoOrImage)(l))),o.default.createElement("div",{className:"FixItem_choice"},o.default.createElement("div",{className:"FixItem__tag",title:"Tag your friends"},o.default.createElement(c.default,null)),o.default.createElement("div",{className:"FixItem__add-content",onClick:function(){E(!y)},title:"Add content"},o.default.createElement(d.default,{is_editing:x}))),o.default.createElement("div",{className:"FixItem_content "+(y?"":"display-none")},o.default.createElement(f.default,{text:n,placeholder:"Write something...",textarea_class:"FixItem_content-textarea scroll-thin",onChange:function(e){p(e,t)},handleFocus:function(){b(!0)},handleBlur:function(){b(!1)}})),o.default.createElement("div",{className:"FixItem_delete"},o.default.createElement("div",{className:"FixItem_delete_item close-icon-small brs-50 cursor-pointer hv-opacity",title:"Delete",onClick:function(){(0,u.openScreenConfirm)({openScreenFloor:h,title:"Delete",notification:"Do you really want to delete this?",handleConfirm:I})}},o.default.createElement(_.default,{y:400,size_icon:"1rem"}))))}n(64966),p.propTypes={ix:l.default.number,vid_pic:l.default.string,content:l.default.string,handleChangeContentVidPic:l.default.func,deleteAnItem:l.default.func},t.default=p},51993:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=u(r),o=(u(n(45697)),n(15130)),l=u(n(44314)),i=u(n(61208)),s=u(n(51098));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.main_content,n=e.vid_pics,u=e.title_action,c=e.has_change,d=e.is_loading,_=e.showFixAll,f=e.handleChangeMainContent,m=e.handleStartLoadFile,p=e.handleChooseFiles,h=e.handleCUPost,v=(0,r.useContext)(o.context_api).user;return a.default.createElement("div",null,a.default.createElement("div",{className:"CUPostHome_user"},a.default.createElement(l.default,{user:v})),a.default.createElement("div",null,a.default.createElement(i.default,{main_content:t,urls_preview:n,is_loading:d,showFixAll:_,handleChangeMainContent:f})),a.default.createElement("div",{className:"CUPostHome_footer"},a.default.createElement("div",{className:"CUPostHome_files-tag"},a.default.createElement(s.default,{handleStartLoadFile:m,handleChooseFiles:p})),a.default.createElement("div",null,a.default.createElement("button",{className:"CUPostHome_post w-100per padding-8px brs-5px text-secondary font-500 text-align-center "+(c?"bg-blue text-white cursor-pointer":"bg-ccc opacity-5 text-third"),disabled:!c,title:u,onClick:h},u))))}n(42898),c.propTypes={},t.default=c},61208:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(67294)),a=(l(n(45697)),l(n(23596))),o=l(n(27883));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.main_content,n=e.urls_preview,l=e.is_loading,i=e.showFixAll,s=e.handleChangeMainContent;return r.default.createElement("div",{className:"CUPostHomeContent brs-5px-md scroll-thin"},r.default.createElement("div",{className:"CUPostHomeContent_input"},r.default.createElement("div",{className:"CUPostHomeContent_input_contain brs-5px"},r.default.createElement("textarea",{className:"CUPostHomeContent__textarea scroll-thin",rows:"4",value:t,placeholder:"",onChange:s}))),r.default.createElement("div",{className:"CUPostHomeContent_preview"},r.default.createElement("div",{className:"CUPostHomeContent_preview_contain brs-5px"},r.default.createElement(a.default,{urls:n,vid_pic_count:!0})),r.default.createElement("div",{className:"CUPostHomeContent_loading"},r.default.createElement(o.default,{is_fetching:l})),r.default.createElement("h3",{className:"display-none margin-0 "+(n.length?"CUPostHomeContent__fixAll pos-abs-0 bg-loader brs-5px hv-opacity text-white cursor-pointer":""),onClick:i},"Fix All"),r.default.createElement("div",{className:0==n.length?"CUPostHomeContent__no-pic pos-abs-center w-100per":"display-none"},r.default.createElement("h2",{className:"text-align-center text-secondary font-500"},"No picture, video"))))}n(30788),i.propTypes={},t.default=i},51098:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=(i(n(45697)),i(n(37279))),o=i(n(86804)),l=i(n(75763));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.handleStartLoadFile,n=e.handleChooseFiles;return r.default.createElement("div",{className:"CUPostHomeMoreInput bg-primary brs-5px-md"},r.default.createElement("div",{className:"CUPostHomeMoreInput_row display-flex align-items-center"},r.default.createElement("div",{className:"CUPostHomeContent__files"},r.default.createElement(o.default,{handleStartLoadFile:t,handleChange:n,accept:"image/*, video/*",file_multiple:!0,title:"Choose images/videos"},r.default.createElement(a.default,{size_icon:"1.5rem"}))),r.default.createElement("div",{className:"CUPostHomeContent__tag",title:"Tag your friends"},r.default.createElement(l.default,null))))}n(90591),s.propTypes={},t.default=s},52442:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(67294),a=h(r),o=h(n(45697)),l=n(15130),i=n(75153),s=n(36289),u=n(44918),c=n(21838),d=h(n(13027)),_=h(n(98989)),f=h(n(43603)),m=h(n(60717)),p=h(n(95906));function h(e){return e&&e.__esModule?e:{default:e}}function v(e){var t=e.parent_id,n=e.count_comment,o=(e.likes,e.count_like),h=e.user_type_like,v=e.enabled_share,P=(e.shares,e.count_share),y=e.count_unique_share,E=e.handleClickBtnCmt,g=(0,r.useContext)(l.context_api).openScreenFloor,C=(0,r.useContext)(i.context_post),x=C.handle_API_Like_L,b=C.handle_API_Share_L;function I(){return b(t,0)}function A(e){return x(t,0,e)}var N=o>1?h>=0?"You and "+(0,s.UnitNumber)(o-1)+" others":""+(0,s.UnitNumber)(o):h>=0?"You":""+(0,s.UnitNumber)(o),S=(0,s.UnitNumber)(P)+(P>1?" shares":" share");return a.default.createElement("div",{className:"Info"},a.default.createElement("div",{className:"Info_row flex-between-center"},a.default.createElement("div",{className:"Info_like pos-rel"},a.default.createElement(f.default,{title:N,count_like:o,arr_unique_like:[0,1,3],on_API_Like_L:A,onOpenDetailLike:function(e){(0,u.openScreenLike)({openScreenFloor:g,handle_API_Like_L:A,type_like:e})}})),a.default.createElement("div",{className:"Info_cmt-share display-flex padding-4px"},a.default.createElement("div",null,a.default.createElement(m.default,{count_comment:n,handleClickBtnCmt:E})),v&&a.default.createElement("div",{className:"Info_share pos-rel "+(P?"":"display-none")},a.default.createElement(d.default,{count:P,title:a.default.createElement("span",{className:"font-14px font-500"},S),total_people:y,PeopleComponent:p.default,handle_API_L:I,handleOpenScreen:function(){(0,c.openScreenShare)({openScreenFloor:g,title:"Share",handle_API_Share_L:I})},LoadingComponent:_.default})))))}n(66290),v.propTypes={enabled_share:o.default.bool},v.defaultProps={enabled_share:!0},t.default=v},60717:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.count_comment,n=e.handleClickBtnCmt;return r.default.createElement("div",{className:"Info_cmt cursor-pointer "+(t?"":"display-none"),onClick:n},r.default.createElement("span",{className:"font-14px font-500"},t," comment",t>1?"s":""))}a(n(45697)),o.propTypes={},t.default=o},95906:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(67294));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.item;return r.default.createElement("div",{className:"PeopleShare text-nowrap"},r.default.createElement("span",{className:"text-white font-13px"},t.user.first_name," ",t.user.last_name))}a(n(45697)),n(62733),o.propTypes={},t.default=o},17884:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(67294)),a=i(n(45697)),o=i(n(45915)),l=i(n(25237));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.permission_post,n=e.updated_time;return r.default.createElement("div",{className:"PermissionPost font-italic"},r.default.createElement("div",{className:"inline-flex align-items-center"},r.default.createElement("span",{className:"PermissionPost_time",title:new Date(n).toLocaleString()},(0,o.default)((new Date).getTime()-new Date(n).getTime())),r.default.createElement("span",{className:"PermissionPost_delimiter"},"*"),r.default.createElement("span",{className:"PermissionPost_permission pointer-events-none"},r.default.createElement(l.default,{permission:t}))))}n(84393),s.propTypes={permission_post:a.default.number,updated_time:a.default.string},s.defaultProps={permission_post:0},t.default=s},97817:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},72644:(e,t,n)=>{"use strict";n.r(t)},62900:(e,t,n)=>{"use strict";n.r(t)},47763:(e,t,n)=>{"use strict";n.r(t)},48024:(e,t,n)=>{"use strict";n.r(t)},82503:(e,t,n)=>{"use strict";n.r(t)},71530:(e,t,n)=>{"use strict";n.r(t)},61745:(e,t,n)=>{"use strict";n.r(t)},77142:(e,t,n)=>{"use strict";n.r(t)},69555:(e,t,n)=>{"use strict";n.r(t)},64966:(e,t,n)=>{"use strict";n.r(t)},42898:(e,t,n)=>{"use strict";n.r(t)},30788:(e,t,n)=>{"use strict";n.r(t)},90591:(e,t,n)=>{"use strict";n.r(t)},66290:(e,t,n)=>{"use strict";n.r(t)},62733:(e,t,n)=>{"use strict";n.r(t)},84393:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=9423.js.map