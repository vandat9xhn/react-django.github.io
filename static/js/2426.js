(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[2426],{17892:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GetIdSlug=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";try{var r=(0,a.useParams)();return e?+r[t]:r[t]}catch(t){return e?parseInt(location.pathname.split("/").slice(-1)[0]):location.pathname.split("/").slice(-1)[0]}};var a=r(93191)},92204:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=o(r(45697)),l=r(32006);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.vid_pic;return a.default.createElement("div",{className:"PicSquareDiv position-rel"},a.default.createElement("div",{className:"pos-abs-100"},a.default.createElement("div",{className:"wh-100"},(0,l.VideoOrImage)(t,""))))}r(29264),i.propTypes={vid_pic:n.default.string},t.default=i},67309:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),l=d(n),o=d(r(45697)),i=r(17892),u=d(r(40040)),c=d(r(11623));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function s(e){var t,r,o=(t=regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(a({},y,{is_fetching:!0})),e.next=3,_(d,w?E.length:0);case 3:t=e.sent,r=t.data,n=t.count,b((function(e){var t=e.photo_arr,a=e.photo_count,l=e.has_fetched;return{photo_arr:l?[].concat(f(t),f(r)):r,photo_count:l?a:n,has_fetched:!0,is_fetching:!1}}));case 7:case"end":return e.stop()}}),e,this)})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var o=e[n](l),i=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(i).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(i)}("next")}))},function(){return r.apply(this,arguments)}),d=(0,i.GetIdSlug)(),s=e.initial_photo_state,m=e.item_props,h=e.title_show_more,_=e.handle_API_Photo_L,p=e.ProfilePhotoItem,v=e.ProfilePhotoMainSkeleton,P=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({photo_arr:s,photo_count:0,has_fetched:!1,is_fetching:!1}),2),y=P[0],b=P[1],E=y.photo_arr,g=y.photo_count,w=y.has_fetched,M=y.is_fetching;return(0,n.useLayoutEffect)((function(){o()}),[]),l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("div",{className:"display-flex flex-wrap"},E.map((function(e){return l.default.createElement("div",{key:"ProfilePhotoMain_"+e.id,className:"ProfilePhotoMain_item"},l.default.createElement(p,a({item:e},m)))})))),l.default.createElement("div",null,l.default.createElement(c.default,{title:h,is_show_more:g>E.length,is_fetching:M&&w,handleShowMore:function(){o()}})),l.default.createElement(u.default,{has_fetched:w,component:v}))}r(22442),s.propTypes={initial_photo_state:o.default.array,item_props:o.default.object,title_show_more:o.default.string,handle_API_Photo_L:o.default.func,ProfilePhotoItem:o.default.func,ProfilePhotoMainSkeleton:o.default.element},s.defaultProps={item_props:{},title_show_more:"See more photos"},t.default=s},92646:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=u(r(45697)),l=r(70361),o=u(r(67309)),i=u(r(85630));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.album_model,r=e.ProfilePhotoMainSkeleton;return a.default.createElement("div",null,a.default.createElement(o.default,{initial_photo_state:[{id:0,vid_pic:""}],handle_API_Photo_L:function(e,r){return(0,l.handle_API_VidPic_L)(e,r,t)},ProfilePhotoItem:i.default,ProfilePhotoMainSkeleton:r}))}c.propTypes={album_model:n.default.number,ProfilePhotoMainSkeleton:n.default.element},c.defaultProps={album_model:0},t.default=c},85630:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(67294)),n=i(r(45697)),l=r(93191),o=i(r(92204));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.item,r=t.id,n=t.vid_pic;return a.default.createElement(l.Link,{to:"/post/photos/"+r,className:"w-100per"},a.default.createElement("div",{className:"ProfilePhotoItem"},a.default.createElement(o.default,{vid_pic:n})))}r(84296),u.propTypes={item:n.default.shape({id:n.default.number,vid_pic:n.default.string})},t.default=u},82426:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=f(a),l=(f(r(45697)),r(13118)),o=f(r(98989)),i=r(70361),u=f(r(67309)),c=f(r(73061)),d=f(r(92646));function f(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)({album_model:0,album_name:"",is_fetching:!1}),2),r=t[0],f=t[1],s=r.album_model,m=r.album_name,h=r.is_fetching,_=(0,a.useRef)(null);return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(u.default,{initial_photo_state:[{id:0,name:"",vid_pics:[{vid_pic:""}]}],item_props:{handleChooseAlbum:function(e,t){f({album_model:0,album_name:"",is_fetching:!0}),setTimeout((function(){f({album_model:e,album_name:t,is_fetching:!1}),(0,l.handleScrollSmooth)((function(){_.current.scrollIntoView()}))}),100)}},title_show_more:"See more album",handle_API_Photo_L:i.handle_API_AlbumVidPic_L,ProfilePhotoItem:c.default,ProfilePhotoMainSkeleton:n.default.createElement("div",{className:"height-100vh"})})),n.default.createElement("div",{ref:_},n.default.createElement("br",null)),s?n.default.createElement("div",{id:"#ProfilePhotoAlbumItem_"+s,className:"ProfilePhotoAlbum_current"},n.default.createElement("h3",null,m," ",s),n.default.createElement("div",null,n.default.createElement(d.default,{album_model:s,ProfilePhotoMainSkeleton:n.default.createElement("div",{className:"width-fit-content margin-auto height-100vh"},n.default.createElement(o.default,{is_fetching:!0}))}))):n.default.createElement("div",{className:"height-100vh "+(h?"":"display-none")}))}r(18584),s.propTypes={},t.default=s},73061:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(r(93191),l(r(45697)),l(r(92204)));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.item,r=e.handleChooseAlbum,l=t.id,o=t.name,i=t.vid_pics;return a.default.createElement("div",{className:"ProfilePhotoAlbumItem",onClick:function(){r(l,o)}},a.default.createElement("div",null,a.default.createElement(n.default,{vid_pic:i[0].vid_pic})),a.default.createElement("div",null,o))}r(87651),o.propTypes={},t.default=o},29264:(e,t,r)=>{"use strict";r.r(t)},22442:(e,t,r)=>{"use strict";r.r(t)},84296:(e,t,r)=>{"use strict";r.r(t)},18584:(e,t,r)=>{"use strict";r.r(t)},87651:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=2426.js.map