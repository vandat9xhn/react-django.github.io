(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[946],{71304:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(67294)),r=n(a(45697));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.class_icon,a=e.x,r=e.y,n=e.size_icon,i=e.stroke,u=e.stroke_width;return l.default.createElement("svg",{className:"IconGroupNoticeDot "+t,viewBox:a+" "+r+" 200 200",width:n,height:n,stroke:i,strokeWidth:u,fill:"none",strokeLinecap:"round"},l.default.createElement("path",{d:"M134.5 37.2973C99.5991 37.2973 70.7568 37.2973 35.8559 37.2973C25.5241 40.009 21.1075 42.8734 20 54.5945V161.261C20.5717 175.47 23.66 180.043 35.8559 180H141.081C153.784 178.122 157.696 174.134 158.378 161.261V59.5"}),l.default.createElement("circle",{fill:i,cx:"155",cy:"40",r:"15"}))}i.propTypes={class_icon:r.default.string,x:r.default.number,y:r.default.number,size_icon:r.default.string,stroke:r.default.string,stroke_width:r.default.number},i.defaultProps={class_icon:"",x:0,y:0,size_icon:"1rem",stroke:"currentColor",stroke_width:15},t.default=i},67238:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(67294)),r=n(a(45697));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.size_icon,a=e.fill,r=e.stroke,n=e.stroke_width;return l.default.createElement("svg",{className:"IconSetting",width:t,height:t,viewBox:"0 0 200 200",fill:a,strokeWidth:n,stroke:r,strokeLinecap:"round",strokeLinejoin:"round"},l.default.createElement("path",{d:"M113.576 20C113.576 20 114.534 35.5711 116.97 39.3189L132.821 45.7585L147.515 32.3839L166.92 52.1981L154.303 67.908L160.1 85.7408H180V113.622L160.1 116.736L154.303 132.941L166.92 148.297L147.03 168.111L132.821 154.737L115.771 160.469L113.576 180H86.4242L85.4545 160.469L69.4545 154.737L53.4545 168.111L33.9327 148.297L47.1515 132.941L40.3263 116.736L20 113.622V85.7408H40.3263L47.1515 67.908L33.9327 52.1981L53.4545 32.3839L69.4545 45.7585L85.4545 39.3189L86.4242 20H113.576Z"}),l.default.createElement("circle",{className:"IconSetting_circle",cx:"100",cy:"100",r:"30",fill:"none"}))}a(18639),i.propTypes={fill:r.default.string,size_icon:r.default.string,stroke:r.default.string,stroke_width:r.default.number},i.defaultProps={fill:"none",size_icon:"1rem",stroke:"var(--md-color)",stroke_width:10},t.default=i},80585:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(67294));function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.Icon,a=e.children,r=e.handleClick;return l.default.createElement("div",{className:"FbSettingsItemLayout padding-8px brs-6px cursor-pointer hv-bg-fb",onClick:r},l.default.createElement("div",{className:"display-flex align-items-center"},l.default.createElement("div",{className:"flex-shrink-0 btn-icon-36px bg-ccc"},t),l.default.createElement("div",{className:"flex-grow-1 flex-basis-1rem margin-left-12px"},a)))}r(a(45697)),a(43122),n.propTypes={},t.default=n},94017:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(67294)),r=d(a(45697)),n=a(52538),i=d(a(71304)),u=d(a(6060)),s=d(a(80585));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.callbackSwitch,a=(0,n.useBool)(!0),r=a.is_true,d=a.setIsTrue;return l.default.createElement("div",{className:"FbSettingsItemSwitchNotice"},l.default.createElement(s.default,{Icon:l.default.createElement(i.default,null),handleClick:function(){d((function(e){return t(e),!e}))}},l.default.createElement(u.default,{switch_on:r},l.default.createElement("div",{className:"group-settings-item-title"},"Show notification dots"))))}c.propTypes={callbackSwitch:r.default.func},c.defaultProps={callbackSwitch:function(){}},t.default=c},1900:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(67294));function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.title,a=e.info;return l.default.createElement("div",{className:"FbSettingsTitle"},l.default.createElement("h2",{className:"margin-bottom-5px font-17px font-600 line-20px"},t),l.default.createElement("div",{className:"font-13px text-secondary line-16px"},a))}r(a(45697)),n.propTypes={},t.default=n},44280:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r=u(a(67294)),n=u(a(45697)),i=u(a(36582));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.nav_arr;return r.default.createElement("div",{className:"LeftBarNav"},t.map((function(e,t){return r.default.createElement("div",{key:t},r.default.createElement(i.default,{item:e}))})))}s.propTypes={nav_arr:n.default.arrayOf(n.default.shape(l({},i.default.propTypes)))},t.default=s},36582:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(67294)),r=a(93191),n=i(a(45697));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.item;return l.default.createElement(r.NavLink,{className:"LeftBarNavItem flex-between-center padding-x-8px padding-y-8px brs-6px line-20px text-333 font-500 hv-bg-fb",activeClassName:"LeftBarNavItem-active bg-fb",to:t.link_to},l.default.createElement("div",{className:"LeftBarNavItem_left display-flex align-items-center"},l.default.createElement("div",{className:"LeftBarNavItem_icon btn-icon-36px bg-ccc margin-right-12px"},t.Icon),l.default.createElement("div",{className:"LeftBarNavItem_title"},t.title)),t.right?l.default.createElement("div",{className:"LeftBarNavItem_right"},t.right):null)}a(50616),u.propTypes={item:n.default.shape({link_to:n.default.string,Icon:n.default.object,title:n.default.string,right:n.default.oneOfType([n.default.string,n.default.element])})},t.default=u},6915:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(67294),r=s(l),n=(s(a(45697)),a(52538)),i=s(a(67238)),u=s(a(35214));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.title,a=e.setting_elm,s=(0,l.useRef)(null),d=(0,n.useBool)(),c=d.is_true,o=d.setIsTrue,f=d.toggleBool;return r.default.createElement("div",{className:"LeftBarTitleSettings pos-rel padding-top-10px padding-bottom-6px"},r.default.createElement("div",{className:"pos-rel padding-x-16px"},r.default.createElement("div",{className:"flex-between-center"},r.default.createElement("h1",{className:"LeftBarTitleSettings_title font-24px"},t),r.default.createElement("div",{ref:s,className:"btn-icon-36px cursor-pointer "+(c?"bg-fb-active nav-active":"bg-ccc hv-bg-hv"),onClick:f},r.default.createElement(i.default,{size_icon:"23px"}))),c?r.default.createElement(u.default,{refs_target:[s],makeDivHidden:function(){c&&o(!1)}},r.default.createElement("div",{className:"pos-abs left-0 top-100per z-index-1 padding-x-8px"},a)):null))}a(60858),d.propTypes={},t.default=d},56483:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(67294)),r=(i(a(45697)),i(a(6915))),n=i(a(77143));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return l.default.createElement("div",{className:"FriendsLeftHeadHome"},l.default.createElement(r.default,{title:"Friends",setting_elm:l.default.createElement(n.default,null)}))}a(33183),u.propTypes={},t.default=u},77143:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(67294)),r=(i(a(45697)),i(a(1900))),n=i(a(8095));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return l.default.createElement("div",{className:"FriendsSettings padding-top-16px padding-bottom-8px padding-x-8px brs-8px bg-primary box-shadow-fb"},l.default.createElement("div",{className:"padding-x-8px padding-bottom-12px border-bottom-blur"},l.default.createElement(r.default,{title:"Notification settings",info:"You can manage how you are notified about friends updates."})),l.default.createElement("div",{className:"padding-top-5px"},l.default.createElement(n.default,null)))}u.propTypes={},t.default=u},8095:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(67294)),r=(n(a(45697)),n(a(94017)));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.callbackSwitch;return l.default.createElement(r.default,{callbackSwitch:t})}i.propTypes={},t.default=i},65970:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=c(a(67294)),r=(c(a(45697)),a(55852)),n=c(a(4299)),i=c(a(66963)),u=c(a(37930)),s=c(a(31604)),d=c(a(44280));function c(e){return e&&e.__esModule?e:{default:e}}a(46553);var o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(r.IS_MOBILE?[]:[{Icon:l.default.createElement(i.default,null),title:"Home",link_to:"",right:!1}]),[{Icon:l.default.createElement(s.default,{is_request:!0}),title:"Friend requests",link_to:"requests",has_arrow:!0},{Icon:l.default.createElement(s.default,{is_plus:!0}),title:"Suggestions",link_to:"suggestions",has_arrow:!0},{Icon:l.default.createElement(s.default,{is_menu:!0}),title:"All Friends",link_to:"all",has_arrow:!0},{Icon:l.default.createElement(n.default,null),title:"Birthdays",link_to:"birthdays",has_arrow:!1},{Icon:l.default.createElement(s.default,{is_menu:!0}),title:"Custom lists",link_to:"friend_list",has_arrow:!0}]).map((function(e){return{Icon:e.Icon,title:e.title,link_to:"/friends/"+e.link_to,right:e.has_arrow?l.default.createElement(u.default,{x:200,size_icon:"18px"}):""}}));function f(e){return l.default.createElement("div",{className:"FriendsHomeLeft padding-left-8px"},l.default.createElement(d.default,{nav_arr:o}))}f.propTypes={},t.default=f},18639:(e,t,a)=>{"use strict";a.r(t)},43122:(e,t,a)=>{"use strict";a.r(t)},50616:(e,t,a)=>{"use strict";a.r(t)},60858:(e,t,a)=>{"use strict";a.r(t)},33183:(e,t,a)=>{"use strict";a.r(t)},46553:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=946.js.map