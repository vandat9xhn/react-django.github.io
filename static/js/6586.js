(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[6586],{3742:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRouteLoaded=void 0;var a=n(67294);t.useRouteLoaded=function(e){var t=e.part_location,n=void 0===t?"pathname":t,r=e.allowed_routes,l=void 0===r?[]:r,o=e.handleNotFoundRoute,i=void 0===o?function(){}:o,u=e.handleBeforeSetRouteLoaded,s=void 0===u?function(){}:u,c=e.handleAfterSetRouteLoaded,f=void 0===c?function(){}:c,d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)([]),2),p=d[0],m=d[1];return(0,a.useLayoutEffect)((function(){var e=location[n];l.length&&!l.includes(e)?i():(s(),!p.includes(e)&&m((function(t){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t),[e])})),f())}),[location[n]]),[p,m]}},42488:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=o(a),l=o(n(45697));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.route_arr,n=e.part_location,l=e.route_loaded_arr,o=e.fallback;return r.default.createElement(a.Suspense,{fallback:o},t.map((function(e,t){return r.default.createElement("div",{key:"RouteLoaded_"+t,className:("string"==typeof e[n]?e[n]==location[n]:e[n].includes(location[n]))?"":"display-none"},("string"==typeof e[n]?l.includes(e[n]):l.some((function(t){return e[n].includes(t)})))&&r.default.createElement(e.component,e.props||{}))})))}i.propTypes={route_arr:l.default.array,part_location:l.default.string,route_loaded_arr:l.default.array,fallback:l.default.element},i.defaultProps={part_location:"pathname",fallback:r.default.createElement(a.Fragment,null)},t.default=i},28746:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=i(a),l=n(93191),o=(i(n(45697)),i(n(23504)));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(""),2),n=t[0],i=t[1];return n?r.default.createElement(l.Redirect,{to:"/fashion/search?q="+n,push:!0}):r.default.createElement("div",{className:"FashionH"},r.default.createElement(o.default,{handled:!1,handleSearchFashion:function(e){e.trim()&&i(e)}}))}u.propTypes={},t.default=u},67563:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n(67294),l=d(r),o=(d(n(45697)),n(3742)),i=d(n(42488)),u=d(n(37930)),s=n(15151);n(93761);var c=d(n(42573)),f=d(n(28746));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){var t=(0,r.useState)(!1),n=a(t,2),d=n[0],p=n[1],m=(0,r.useState)(-1),h=a(m,2),_=h[0],v=h[1],y=(0,o.useRouteLoaded)({allowed_routes:s.fashion_person_pathname_arr}),b=a(y,1)[0];return(0,r.useEffect)((function(){document.title="Personal"}),[]),(0,r.useEffect)((function(){v(s.fashion_path_arr.findIndex((function(e){return location.pathname.includes(e)}))),d&&p(!1)}),[location.pathname]),l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement("div",null,l.default.createElement(f.default,null)),l.default.createElement("div",{className:"FashionPersonal_ctg"},l.default.createElement("div",{className:"FashionPersonal_contain position-rel"},l.default.createElement("div",{className:"FashionPersonal_row display-flex"},l.default.createElement("div",{className:"FashionPersonal_left bg-primary box-shadow-1 "+(d?"":"FashionPersonal_left-hidden")},l.default.createElement(c.default,{active_ix:_,handleChangeActiveIx:function(e){v(e)}}),l.default.createElement("div",{className:"FashionPersonal_left-toggle "+(d?"":"FashionPersonal_left-toggle-hidden")},l.default.createElement("div",{className:"FashionPersonal_left-icon close-icon-small brs-50 "+(d?"":"FashionPersonal_left-icon-close"),onClick:function(){p(!d)}},l.default.createElement(u.default,{y:400,size_icon:"1rem"})))),l.default.createElement("div",{className:"FashionPersonal_right"},l.default.createElement(i.default,{route_arr:s.FashionRoutes,route_loaded_arr:b})))))))}n(32618),p.propTypes={},t.default=p},18730:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_personal_list=[{title:"Personal",sub_list:[{title:"Information",link:"/user/info"},{title:"Contact",link:"/user/contact"}]},{title:"Bill",sub_list:[{title:"Buying",link:"/bill/buying"},{title:"Cancel",link:"/bill/cancel"}]},{title:"Notifications",link:"/notifications"},{title:"Promotion",sub_list:[{title:"Voucher",link:"/promotion/voucher"},{title:"Free Ship",link:"/promotion/free-ship"}]}]},42573:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(67294)),r=n(93191),l=(i(n(45697)),n(18730)),o=i(n(62784));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.active_ix,n=e.handleChangeActiveIx;function i(e){n(e)}function u(){n(-1)}return a.default.createElement("div",{className:"PersonalLeft"},a.default.createElement("ul",{className:"PersonalLeft_list list-none"},l.data_personal_list.map((function(e,n){return a.default.createElement("li",{key:"PersonalLeft_"+n},e.sub_list?a.default.createElement(o.default,{active_ix:t,item_ix:n,sub_list:e.sub_list,title:e.title,handleChangeActiveIx:i}):a.default.createElement(r.NavLink,{className:"normal-text",activeClassName:"text-blue",to:"/fashion/personal"+e.link,replace:!0},a.default.createElement("div",{className:"padding-8px label-field",onClick:u},e.title)))}))))}n(6918),u.propTypes={},t.default=u},62784:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(67294)),r=(l(n(45697)),n(93191));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.active_ix,n=e.item_ix,l=e.sub_list,o=e.title,i=e.handleChangeActiveIx;return a.default.createElement("div",{className:"SubList"},a.default.createElement("div",{className:"padding-8px label-field cursor-pointer",onClick:function(){i(n)}},o),a.default.createElement("ul",{className:"SubList_list list-none "+(t==n?"SubList_show":"SubList_hidden")},l.map((function(e,t){return a.default.createElement("li",{key:"SubList_"+t},a.default.createElement(r.NavLink,{className:"normal-text",activeClassName:"text-blue",to:"/fashion/personal"+e.link,replace:!0},a.default.createElement("div",{className:"padding-8px text-secondary label-field"},e.title)))}))))}n(84856),o.propTypes={},t.default=o},15151:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fashion_person_pathname_arr=t.FashionRoutes=t.fashion_path_arr=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a},l=r.default.lazy((function(){return n.e(6032).then(n.bind(n,6032))})),o=r.default.lazy((function(){return n.e(5499).then(n.bind(n,55499))})),i=r.default.lazy((function(){return n.e(2249).then(n.bind(n,12249))})),u=r.default.lazy((function(){return n.e(8487).then(n.bind(n,48487))})),s=r.default.lazy((function(){return n.e(8594).then(n.bind(n,18594))})),c=r.default.lazy((function(){return n.e(662).then(n.bind(n,80662))})),f=r.default.lazy((function(){return n.e(2655).then(n.bind(n,42655))})),d=(t.fashion_path_arr=["/user","/bill","/notifications","/promotion"],t.FashionRoutes=[{pathname:"/fashion/personal/user/info",component:s},{pathname:"/fashion/personal/user/contact",component:i},{pathname:"/fashion/personal/bill/buying",component:l},{pathname:"/fashion/personal/bill/cancel",component:o},{pathname:"/fashion/personal/notifications",component:c},{pathname:"/fashion/personal/promotion/voucher",component:f},{title:"Free Ship",pathname:"/fashion/personal/promotion/free-ship",component:u}]);t.fashion_person_pathname_arr=d.map((function(e){return e.pathname}))},93761:(e,t,n)=>{"use strict";n.r(t)},32618:(e,t,n)=>{"use strict";n.r(t)},6918:(e,t,n)=>{"use strict";n.r(t)},84856:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=6586.js.map