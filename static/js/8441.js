(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8441],{99452:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e};t.openScreenHistory=function(e){var t=e.openScreenFloor,n=e.title,a=e.handle_API_History_L,r=e.HisComponent,o=d(e,["openScreenFloor","title","handle_API_History_L","HisComponent"]);t(l({FloorComponent:f,title:n,handle_API_History_L:a,HisComponent:r},o))};var a=n(67294),r=s(a),o=(s(n(45697)),n(84353)),i=s(n(77992)),u=s(n(98513)),c=s(n(11623));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}function f(e){var t=e.closeScreen,n=e.title,s=e.handle_API_History_L,f=e.HisComponent,p=d(e,["closeScreen","title","handle_API_History_L","HisComponent"]),_=(0,o.useDataShowMore)({initial_arr:[],handle_API_L:s}),m=_.data_state,y=_.getData_API,v=m.data_arr,h=m.count,b=m.has_fetched,E=m.is_fetching;return(0,a.useEffect)((function(){y()}),[]),r.default.createElement(i.default,{closeScreen:t,waiting:!b&&E},r.default.createElement("div",{className:b?"":"display-none"},r.default.createElement(u.default,{title:n,closeScreenBlur:t}),r.default.createElement("div",{className:"ScreenBlur_body_contain scroll-thin"},r.default.createElement(f,l({histories:v},p))),r.default.createElement(c.default,{is_show_more:h>v.length,is_fetching:E,handleShowMore:function(){y()}})))}n(17431),f.propTypes={},t.default=f},13205:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e};t.openScreenUpdate=function(e){var t=e.openScreenFloor,n=e.title,a=e.UpdateComponent,r=e.is_fetching,o=f(e,["openScreenFloor","title","UpdateComponent","is_fetching"]);t(l({FloorComponent:p,title:n,UpdateComponent:a,is_fetching:r},o))};var a=n(67294),r=d(a),o=(d(n(45697)),n(15130)),i=d(n(77992)),u=d(n(98513)),c=n(39309),s=d(n(65635));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}function p(e){var t=e.closeScreen,n=e.title,d=e.UpdateComponent,p=(e.is_fetching,f(e,["closeScreen","title","UpdateComponent","is_fetching"])),_=(0,a.useContext)(o.context_api),m=_.openScreenFloor,y=_.detectScreenHasChange,v=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],l=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(l=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);l=!0);}catch(e){a=!0,r=e}finally{try{!l&&i.return&&i.return()}finally{if(a)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(!1),2),h=v[0],b=v[1],E=(0,a.useRef)(!1),g=(0,a.useRef)(!0);function C(){b(!0),setTimeout((function(){t(),y(!1)}),250)}function O(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!e&&E.current?(0,c.openScreenConfirm)({openScreenFloor:m,title:"Unsaved changes",notification:"Changes you've made will not be saved.",handleConfirm:C}):t()}return(0,a.useEffect)((function(){g.current=!1}),[]),r.default.createElement(i.default,{closeScreen:O,use_scale:g.current},r.default.createElement("div",null,r.default.createElement(u.default,{title:n,closeScreenBlur:O}),r.default.createElement("div",null,r.default.createElement(d,l({detectHasChange:function(e){E.current!=e&&(E.current=e,y(e))}},p))),r.default.createElement("div",{className:h?"pos-fixed-100v z-index-lv5":"display-none"},r.default.createElement(s.default,null))))}p.propTypes={},t.default=p},32346:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(67294),a=s(l),r=s(n(45697)),o=n(65765),i=s(n(88303)),u=s(n(35214)),c=s(n(93223));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.title_action,n=e.symbol_post,r=e.children,i=(0,l.useRef)(null),s=(0,l.useRef)(null),d=(0,o.usePositionXY)({ref_child_elm:i,ref_btn_elm:s,other_state:{}}),f=d.position_state,p=d.handleOpen,_=d.handleClose,m=f.is_open,y=f.position_y,v=f.max_height;return a.default.createElement(u.default,{makeDivHidden:function(){_()}},a.default.createElement("div",{className:"Actions_contain pos-rel",onClick:function(){m?_():p({})}},a.default.createElement("div",{ref:s,className:"Actions_symbol "+(n?"Actions_symbol-post":"")},a.default.createElement("div",{className:"Actions_symbol_contain display-flex-center brs-50 hv-opacity hv-bg-s-through"},t)),a.default.createElement("div",{className:"Actions_choices "+(m?"visibility-visible":"visibility-hidden")+" "+("top"==y?"Actions_choices-top":"Actions_choices-bottom")},a.default.createElement("div",{ref:i}),m&&a.default.createElement("div",{className:"Actions_choices_actions scroll-thin bg-primary box-shadow-fb brs-5px-md text-primary",style:{maxHeight:window.innerWidth<=400?void 0:v+"px"}},a.default.createElement("div",{className:"ActionsChoices_back display-none"},a.default.createElement(c.default,null)),r))))}n(74881),n(89495),d.propTypes={title_action:r.default.oneOfType([r.default.string,r.default.element]),symbol_post:r.default.bool,children:r.default.element},d.defaultProps={symbol_post:!0,title_action:a.default.createElement(i.default,{size_icon:"1.25rem"})},t.default=d},93223:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(67294)),a=i(n(45697)),r=i(n(57108)),o=i(n(37930));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.title;return l.default.createElement("div",{className:"ActionBack action-item",title:"Back"},l.default.createElement(r.default,{Icon:o.default,x:200,y:200},t))}n(95845),u.propTypes={title:a.default.string},u.defaultProps={title:"Back"},t.default=u},4787:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(67294)),a=i(n(45697)),r=i(n(39475)),o=i(n(57108));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleDelete,n=e.title;return l.default.createElement("div",{className:"action-item",onClick:t,title:"Delete"},l.default.createElement(o.default,{Icon:r.default},n))}u.propTypes={title:a.default.string,handleDelete:a.default.func},u.defaultProps={title:"Delete"},t.default=u},58629:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(67294)),a=i(n(45697)),r=i(n(39475)),o=i(n(57108));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleOpenHistory,n=e.title;return l.default.createElement("div",{className:"action-item",onClick:t,title:"History"},l.default.createElement(o.default,{Icon:r.default,y:400},n))}u.propTypes={title:a.default.string,handleOpenHistory:a.default.func},u.defaultProps={title:"History"},t.default=u},64903:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(67294)),a=i(n(45697)),r=i(n(39475)),o=i(n(57108));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleOpenReport,n=e.title;return l.default.createElement("div",{className:"action-item",onClick:t,title:"Report"},l.default.createElement(o.default,{Icon:r.default,x:400,y:400},n))}u.propTypes={title:a.default.string,handleOpenReport:a.default.func},u.defaultProps={title:"Report"},t.default=u},87782:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(n(67294)),a=i(n(45697)),r=i(n(57108)),o=i(n(2760));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.handleUpdate,n=e.title;return l.default.createElement("div",{className:"action-item",onClick:t,title:"Update"},l.default.createElement(r.default,{Icon:o.default,size_icon:"0.85rem"},n))}u.propTypes={title:a.default.string,handleUpdate:a.default.func},u.defaultProps={title:"Update"},t.default=u},4124:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(67294)),a=r(n(45697));function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.children,n=e.onClick,a=e.type,r=e.disabled,o=e.ripple_type,i=e.title;return l.default.createElement("button",{className:"ButtonRipple btn font-500 "+(r?"opacity-05 pointer-events-none":"cursor-pointer"),type:a,title:i,disabled:r,onClick:n},l.default.createElement("div",{className:"ButtonRipple_common ButtonRipple_"+o+" "+(r?"display-none":"")}),t)}n(40824),o.propTypes={type:a.default.string,title:a.default.string,disabled:a.default.bool,ripple_type:a.default.string,children:a.default.any,onClick:a.default.func},o.defaultProps={title:"",type:"text",ripple_type:"right",disabled:!1},t.default=o},17431:(e,t,n)=>{"use strict";n.r(t)},89495:(e,t,n)=>{"use strict";n.r(t)},74881:(e,t,n)=>{"use strict";n.r(t)},95845:(e,t,n)=>{"use strict";n.r(t)},40824:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=8441.js.map