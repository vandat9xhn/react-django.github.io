(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6420],{12402:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_fb_group_notice_arr=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(39727),l=r(69565),u=r(58822),o=r(7605),c=function(){return a({id:(0,l.getRandomId)()},(0,u.getRandomUser)(),(0,u.getRandomGroup)(),{type:"posted",has_seen:(0,n.getRandomBool)(),created_time:(new Date).toString()})};t.default_fb_group_notice_arr=function(){return(0,o.getDefaultArr)(c,4,10)}},28872:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_GroupNotice_L=void 0;var a,n,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u=(t.handle_API_GroupNotice_L=(a=regeneratorRuntime.mark((function e(t){var r,a=t.c_count,n=void 0===a?0:a,o=t.params,c=void 0===o?{}:o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_GroupNotice_L)(l({page:1,size:20,c_count:n},c));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function a(n,l){try{var u=e[n](l),o=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(o).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(o)}("next")}))},function(e){return n.apply(this,arguments)}),r(31578))},85131:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(a=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);a=!0);}catch(e){n=!0,l=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.useCountUp=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=(0,n.useState)(e),r=a(t,2),l=r[0],u=r[1];function o(){u((function(e){return e+1}))}return{count:l,countUp:o}};var n=r(67294)},67238:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=l(r(45697));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.size_icon,r=e.fill,n=e.stroke,l=e.stroke_width;return a.default.createElement("svg",{className:"IconSetting",width:t,height:t,viewBox:"0 0 200 200",fill:r,strokeWidth:l,stroke:n,strokeLinecap:"round",strokeLinejoin:"round"},a.default.createElement("path",{d:"M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z"}),a.default.createElement("circle",{className:"IconSetting_circle",cx:"100",cy:"100",r:"30",fill:"none"}))}r(18639),u.propTypes={fill:n.default.string,size_icon:n.default.string,stroke:n.default.string,stroke_width:n.default.number},u.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)",stroke_width:10},t.default=u},31578:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_GroupNotice_L=void 0;var a,n=(a=r(87421))&&a.__esModule?a:{default:a},l=r(50918),u=r(12402);t.API_GroupNotice_L=function(e){return(0,l.API_FakeReal)((0,u.default_fb_group_notice_arr)(),(function(){return(0,n.default)({url:"api/facebook/group-notice-l/",method:"GET",params:e})}),e,!0)}},81419:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=u(a),l=(u(r(45697)),u(r(91641)));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.children,r=(0,a.useRef)(null);return n.default.createElement("div",{className:"GroupLayout"},n.default.createElement("div",{className:"display-flex"},n.default.createElement("div",{className:"GroupLayout_left flex-shrink-0 left-bar-sticky"},n.default.createElement(l.default,{ref_scroll:r})),n.default.createElement("div",{className:"GroupLayout_right flex-grow-1"},t)))}o.propTypes={},t.default=o},91641:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(r(67294)),n=(c(r(45697)),c(r(34626))),l=c(r(7737)),u=c(r(84155)),o=c(r(60706));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.ref_scroll;return a.default.createElement("div",{className:"GroupLayoutLeft display-flex flex-col h-100per"},a.default.createElement("div",null,a.default.createElement(n.default,null)),a.default.createElement("div",{ref:t,className:"flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin"},a.default.createElement("div",null,a.default.createElement(l.default,null)),a.default.createElement("div",null,a.default.createElement(o.default,{ref_scroll:t})),a.default.createElement("div",null,a.default.createElement(u.default,{ref_scroll:t}))))}i.propTypes={},t.default=i},84002:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(r(67294)),n=(u(r(45697)),r(93191)),l=u(r(45915));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.item,r=t.id,u=t.user,o=t.group_obj,c=(t.notice_type,t.has_seen),i=t.created_time;return a.default.createElement(n.Link,{className:"GroupNoticeItem display-block padding-8px brs-6px hv-bg-fb "+(c?"text-secondary":"color-inherit"),to:"/group/"+o.id+"?post="+r},a.default.createElement("div",{className:"display-flex align-items-center"},a.default.createElement("img",{className:"flex-shrink-0 brs-50 border-blur object-fit-cover",src:u.picture,alt:"",width:"60",height:"60"}),a.default.createElement("div",{className:"flex-grow-1 overflow-hidden margin-left-12px"},a.default.createElement("div",{className:"text-nowrap"},a.default.createElement("span",{className:"font-600"},u.first_name," ",u.last_name),a.default.createElement("span",null," posted in "),a.default.createElement("span",{className:"font-600"},o.name)),a.default.createElement("div",{className:"line-16px font-13px "+(c?"":"text-blue")},a.default.createElement("span",null,a.default.createElement("span",{className:"inline-block padding-4px brs-50 "+(c?"bg-ccc":"bg-current")}),a.default.createElement("span",{className:"margin-left-5px"},(0,l.default)(new Date-new Date(i),"1min")," ","ago"))))))}r(76293),o.propTypes={},t.default=o},12700:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=(l(r(45697)),l(r(84002)));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.title,r=e.notice_arr;return 0==r.length?null:a.default.createElement("div",{className:"GroupNoticeList padding-y-20px brs-8px-pc bg-primary box-shadow-1"},a.default.createElement("h2",{className:"GroupNoticeList_title margin-bottom-5px padding-x-16px font-600 font-20px"},t),a.default.createElement("div",{className:"GroupNoticeList_contain padding-x-8px"},r.map((function(e,t){return a.default.createElement("div",{key:e.id},a.default.createElement(n.default,{item:e}))}))))}r(2650),u.propTypes={},t.default=u},56890:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),r(85131)),l=o(r(81419)),u=o(r(94852));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=(0,n.useCountUp)();return t.count,t.countUp,a.default.createElement("div",{className:"GroupNotice"},a.default.createElement(l.default,null,a.default.createElement("div",{className:"GroupNotice_right"},a.default.createElement("div",{className:"margin-auto w-500px"},a.default.createElement(u.default,null)))))}r(10845),c.propTypes={},t.default=c},48828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=c(a),l=(c(r(45697)),r(28872)),u=r(2804),o=c(r(12700));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=(0,a.useRef)(null),r=(0,u.useObserverShowMore)({handle_API_L:function(e){return(0,l.handle_API_GroupNotice_L)({c_count:e,params:{time:"earlier"}})}}),c=r.data_state,i=r.getData_API,s=r.observerShowMore;return(0,a.useEffect)((function(){i(),s({fake_elm_end:t.current,rootMargin:"0px 0px 250px 0px",way_scroll:"to_bottom",margin:250})}),[]),n.default.createElement("div",{className:"GroupNoticeEarlier"},n.default.createElement(o.default,{title:"Earlier",notice_arr:c.data_arr}),n.default.createElement("div",{ref:t,className:"padding-1px"}))}i.propTypes={},t.default=i},76650:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(67294),n=c(a),l=(c(r(45697)),r(28872)),u=r(2804),o=c(r(12700));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.handleGetNewDone,r=(0,a.useRef)(null),c=(0,u.useObserverShowMore)({handle_API_L:function(e){return(0,l.handle_API_GroupNotice_L)({c_count:e,params:{time:"new"}})}}),i=c.data_state,s=c.is_max,d=c.getData_API,f=c.observerShowMore;return(0,a.useEffect)((function(){d(),f({fake_elm_end:r.current,rootMargin:"0px 0px 250px 0px",way_scroll:"to_bottom",margin:250})}),[]),(0,a.useEffect)((function(){s.current&&t()}),[s.current]),n.default.createElement("div",{className:"GroupNoticeNew"},n.default.createElement(o.default,{title:"New",notice_arr:i.data_arr}),n.default.createElement("div",{ref:r,className:"padding-1px"}))}i.propTypes={},t.default=i},94852:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),r(85131)),l=o(r(76650)),u=o(r(48828));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=(0,n.useCountUp)(),r=t.count,o=t.countUp;return a.default.createElement("div",{className:"GroupNoticeRight"},a.default.createElement("div",null,a.default.createElement(l.default,{handleGetNewDone:o})),r>=1?a.default.createElement("div",{className:"margin-top-20px"},a.default.createElement(u.default,null)):null)}c.propTypes={},t.default=c},18639:(e,t,r)=>{"use strict";r.r(t)},76293:(e,t,r)=>{"use strict";r.r(t)},2650:(e,t,r)=>{"use strict";r.r(t)},10845:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=6420.js.map