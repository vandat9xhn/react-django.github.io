(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8914],{47348:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRouteLoaded=void 0;var a,r=n(67294),o=(a=n(7145))&&a.__esModule?a:{default:a};t.useRouteLoaded=function(e){var t=e.initial_route_arr,n=void 0===t?[]:t,a=e.allow_routes_str,i=void 0===a?"":a,u=e.part_location,l=void 0===u?"pathname":u,s=e.deps,c=void 0===s?[]:s,f=e.handleNotFoundRoute,d=void 0===f?function(){}:f,p=e.handleBeforeSetRouteLoaded,h=void 0===p?function(){}:p,m=e.handleAfterSetRouteLoaded,y=void 0===m?function(){}:m,_=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(n),2),v=_[0],b=_[1],g=(0,r.useRef)(!1);function E(){g.current=!0}function x(){b((function(e){var t=e.findIndex((function(e){return e[l].includes(location[l])})),n=(0,o.default)(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,{is_active:{$set:!0},is_loaded:{$set:!0}}));return n.map((function(e,n){return n!=t&&(e.is_active=!1,g.current&&(e.is_loaded=!1)),e})),g.current=!1,n}))}return(0,r.useLayoutEffect)((function(){E()}),c),(0,r.useLayoutEffect)((function(){i.includes(location[l])?(h(),g.current?function(){if(v.findIndex((function(e){return e[l].includes(location[l])}))==v.findIndex((function(e){return e.is_active})))return b(n),void setTimeout((function(){x()}),0);x()}():x(),y()):d()}),[location[l]].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c))),{route_arr:v,should_reset:g,setRouteArr:b,makeReset:E}}},42488:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=i(a),o=i(n(45697));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.route_arr,n=e.fallback,o=e.use_loaded;return r.default.createElement("div",null,r.default.createElement(a.Suspense,{fallback:n},t.map((function(e,t){return r.default.createElement("div",{key:"RouteLoaded_"+t,className:e.is_active?"":"display-none"},(o?e.is_loaded:e.is_active)&&r.default.createElement(e.component,e.props||{}))}))),t.some((function(e){return e.is_active}))?r.default.createElement("div",null):r.default.createElement("div",{className:"opacity-0"},n))}u.propTypes={route_arr:o.default.array,fallback:o.default.element,use_loaded:o.default.bool},u.defaultProps={part_location:"pathname",fallback:r.default.createElement(a.Fragment,null),use_loaded:!0},t.default=u},28746:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(67294)),r=n(93191),o=(i(n(45697)),i(n(23504)));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=(0,r.useHistory)();return a.default.createElement("div",{className:"FashionH"},a.default.createElement(o.default,{handled:!1,handleSearchFashion:function(e){t.push("/fashion/search?q="+e)}}))}u.propTypes={},t.default=u},67563:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=n(67294),o=d(r),i=(d(n(45697)),n(47348)),u=d(n(37930)),l=d(n(42488)),s=n(15151),c=d(n(42573)),f=d(n(28746));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){var t=(0,r.useState)(!1),n=a(t,2),d=n[0],p=n[1],h=(0,r.useState)(-1),m=a(h,2),y=m[0],_=m[1],v=(0,i.useRouteLoaded)({initial_route_arr:s.FashionRoutes,allow_routes_str:s.fashion_person_pathname_arr}).route_arr;return(0,r.useEffect)((function(){document.title="Personal"}),[]),(0,r.useEffect)((function(){_(s.fashion_path_arr.findIndex((function(e){return location.pathname.includes(e)}))),d&&p(!1)}),[location.pathname]),o.default.createElement("div",null,o.default.createElement("div",null,o.default.createElement("div",null,o.default.createElement(f.default,null)),o.default.createElement("div",{className:"FashionPersonal_ctg"},o.default.createElement("div",{className:"FashionPersonal_contain pos-rel"},o.default.createElement("div",{className:"FashionPersonal_row display-flex"},o.default.createElement("div",{className:"FashionPersonal_left "+(d?"":"FashionPersonal_left-hidden")},o.default.createElement(c.default,{active_ix:y,handleChangeActiveIx:function(e){_(e)}}),o.default.createElement("div",{className:"FashionPersonal_left-toggle "+(d?"":"FashionPersonal_left-toggle-hidden")},o.default.createElement("div",{className:"FashionPersonal_left-icon close-icon-small brs-50 "+(d?"":"FashionPersonal_left-icon-close"),onClick:function(){p(!d)}},o.default.createElement(u.default,{y:400,size_icon:"1rem"})))),o.default.createElement("div",{className:"FashionPersonal_right box-shadow-1"},o.default.createElement(l.default,{route_arr:v})))))))}n(93761),n(32618),p.propTypes={},t.default=p},18730:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.data_personal_list=[{title:"Personal",sub_list:[{title:"Information",link:"/user/info"},{title:"Contact",link:"/user/contact"}]},{title:"Bill",sub_list:[{title:"Buying",link:"/bill/buying"},{title:"Cancel",link:"/bill/cancel"}]},{title:"Notifications",link:"/notifications"},{title:"Promotion",sub_list:[{title:"Voucher",link:"/promotion/voucher"},{title:"Free Ship",link:"/promotion/free-ship"}]}]},42573:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(67294)),r=n(93191),o=(u(n(45697)),n(18730)),i=u(n(62784));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.active_ix,n=e.handleChangeActiveIx;function u(e){n(e)}function l(){n(-1)}return a.default.createElement("div",{className:"PersonalLeft bg-primary box-shadow-1"},a.default.createElement("ul",{className:"PersonalLeft_list list-none"},o.data_personal_list.map((function(e,n){return a.default.createElement("li",{key:"PersonalLeft_"+n},e.sub_list?a.default.createElement(i.default,{active_ix:t,item_ix:n,sub_list:e.sub_list,title:e.title,handleChangeActiveIx:u}):a.default.createElement(r.NavLink,{className:"normal-text",activeClassName:"color-fashion",to:"/fashion/personal"+e.link,replace:!0},a.default.createElement("h3",{className:"padding-8px margin-0",onClick:l},e.title)))}))))}n(6918),l.propTypes={},t.default=l},62784:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(67294)),r=n(93191);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.active_ix,n=e.item_ix,o=e.sub_list,i=e.title,u=e.handleChangeActiveIx;return a.default.createElement("div",{className:"SubList"},a.default.createElement("h3",{className:"padding-8px margin-0 cursor-pointer",onClick:function(){u(n)}},i),a.default.createElement("div",{className:"SubList_contain"},a.default.createElement("ul",{className:"SubList_list list-none bg-fb "+(t==n?"SubList_show":"SubList_hidden")},o.map((function(e,t){return a.default.createElement("li",{key:"SubList_"+t},a.default.createElement(r.NavLink,{className:"normal-text text-secondary label-field",activeClassName:"color-fashion",to:"/fashion/personal"+e.link,replace:!0},a.default.createElement("h4",{className:"SubList_title padding-8px margin-0"},e.title)))})))))}o(n(45697)),n(84856),i.propTypes={},t.default=i},15151:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fashion_person_pathname_arr=t.FashionRoutes=t.fashion_path_arr=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a},o=r.default.lazy((function(){return n.e(6032).then(n.bind(n,6032))})),i=r.default.lazy((function(){return n.e(5499).then(n.bind(n,55499))})),u=r.default.lazy((function(){return n.e(2249).then(n.bind(n,12249))})),l=r.default.lazy((function(){return n.e(8487).then(n.bind(n,48487))})),s=r.default.lazy((function(){return n.e(8594).then(n.bind(n,18594))})),c=r.default.lazy((function(){return n.e(662).then(n.bind(n,80662))})),f=r.default.lazy((function(){return n.e(2655).then(n.bind(n,42655))})),d=(t.fashion_path_arr=["/user","/bill","/notifications","/promotion"],t.FashionRoutes=[{pathname:"/fashion/personal/user/info",component:s,is_active:!1,is_loaded:!1,props:{}},{pathname:"/fashion/personal/user/contact",component:u,is_active:!1,is_loaded:!1,props:{}},{pathname:"/fashion/personal/bill/buying",component:o,is_active:!1,is_loaded:!1,props:{}},{pathname:"/fashion/personal/bill/cancel",component:i,is_active:!1,is_loaded:!1,props:{}},{pathname:"/fashion/personal/notifications",component:c,is_active:!1,is_loaded:!1,props:{}},{pathname:"/fashion/personal/promotion/voucher",component:f,is_active:!1,is_loaded:!1,props:{}},{pathname:"/fashion/personal/promotion/free-ship",component:l,is_active:!1,is_loaded:!1,props:{}}]);t.fashion_person_pathname_arr=d.reduce((function(e,t){return e+t.pathname}),"")},7145:(e,t)=>{"use strict";function n(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var a="object"==typeof process&&!0;function r(e,t){if(!e){if(a)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=r;var o=Object.prototype.hasOwnProperty,i=Array.prototype.splice,u=Object.prototype.toString;function l(e){return u.call(e).slice(8,-1)}var s=Object.assign||function(e,t){return c(t).forEach((function(n){o.call(t,n)&&(e[n]=t[n])})),e},c="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function f(e){return Array.isArray(e)?s(e.constructor(e.length),e):"Map"===l(e)?new Map(e):"Set"===l(e)?new Set(e):e&&"object"==typeof e?s(Object.create(Object.getPrototypeOf(e)),e):e}var d=function(){function e(){this.commands=s({},p),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var n=this,a="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(a)||r(!Array.isArray(a),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),r("object"==typeof a&&null!==a,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var i=e;return c(a).forEach((function(t){if(o.call(n.commands,t)){var r=e===i;i=n.commands[t](a[t],i,a,e),r&&n.isEquals(i,e)&&(i=e)}else{var u="Map"===l(e)?n.update(e.get(t),a[t]):n.update(e[t],a[t]),s="Map"===l(i)?i.get(t):i[t];n.isEquals(u,s)&&(void 0!==u||o.call(e,t))||(i===e&&(i=f(e)),"Map"===l(i)?i.set(t,u):i[t]=u)}})),i},e}();t.Context=d;var p={$push:function(e,t,n){return m(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return m(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,a,o){return function(e,t){r(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+n(e)})),_(t.$splice)}(t,a),e.forEach((function(e){_(e),t===o&&e.length&&(t=f(o)),i.apply(t,e)})),t},$set:function(e,t,n){return function(e){r(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),e},$toggle:function(e,t){y(e,"$toggle");var n=e.length?f(t):t;return e.forEach((function(e){n[e]=!t[e]})),n},$unset:function(e,t,n,a){return y(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===a&&(t=f(a)),delete t[e])})),t},$add:function(e,t,n,a){return v(t,"$add"),y(e,"$add"),"Map"===l(t)?e.forEach((function(e){var n=e[0],r=e[1];t===a&&t.get(n)!==r&&(t=f(a)),t.set(n,r)})):e.forEach((function(e){t!==a||t.has(e)||(t=f(a)),t.add(e)})),t},$remove:function(e,t,n,a){return v(t,"$remove"),y(e,"$remove"),e.forEach((function(e){t===a&&t.has(e)&&(t=f(a)),t.delete(e)})),t},$merge:function(e,t,a,o){var i,u;return i=t,r((u=e)&&"object"==typeof u,(function(){return"update(): $merge expects a spec of type 'object'; got "+n(u)})),r(i&&"object"==typeof i,(function(){return"update(): $merge expects a target of type 'object'; got "+n(i)})),c(e).forEach((function(n){e[n]!==t[n]&&(t===o&&(t=f(o)),t[n]=e[n])})),t},$apply:function(e,t){var a;return r("function"==typeof(a=e),(function(){return"update(): expected spec of $apply to be a function; got "+n(a)+"."})),e(t)}},h=new d;function m(e,t,a){r(Array.isArray(e),(function(){return"update(): expected target of "+n(a)+" to be an array; got "+n(e)+"."})),y(t[a],a)}function y(e,t){r(Array.isArray(e),(function(){return"update(): expected spec of "+n(t)+" to be an array; got "+n(e)+". Did you forget to wrap your parameter in an array?"}))}function _(e){r(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+n(e)+". Did you forget to wrap your parameters in an array?"}))}function v(e,t){var a=l(e);r("Map"===a||"Set"===a,(function(){return"update(): "+n(t)+" expects a target of type Set or Map; got "+n(a)}))}t.isEquals=h.update.isEquals,t.extend=h.extend,t.default=h.update,t.default.default=e.exports=s(t.default,t)},93761:(e,t,n)=>{"use strict";n.r(t)},32618:(e,t,n)=>{"use strict";n.r(t)},6918:(e,t,n)=>{"use strict";n.r(t)},84856:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=8914.js.map