(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[2709],{44283:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStickyAuto=function(e){var t=e.sticky_location,r=void 0===t?/./:t,n=e.header_head,s=void 0===n?l.HEADER_HEAD+10:n,d=(0,u.useRef)(null),f=(0,u.useRef)(null),p=(0,u.useRef)(null),m=(0,u.useRef)(c()),v=(0,u.useRef)(o(r)),_=(0,u.useRef)(!1),y=(0,u.useRef)(0),g=(0,u.useRef)(!1),h=(0,u.useRef)(0),E=(0,u.useRef)(!0),x=(0,a.useMounted)();function b(){var e=p.current.getBoundingClientRect().height;return g.current=e+s>innerHeight,e-innerHeight}function w(){p.current.style.position="sticky",p.current.style.top=s+"px",f.current.style.height="0px"}function N(){p.current.style.position="static",f.current.style.height="0px",m.current=!1}function R(){_.current&&(window.onscroll=null,_.current=!1)}function k(){_.current||(window.onscroll=M,_.current=!0,setTimeout((function(){i(document.getElementsByTagName("html")[0].scrollTop+1)}),0))}function T(){p.current&&(v.current=o(r),m.current=c(),y.current=b(),m.current?g.current||w():N(),g.current&&v.current&&m.current?k():R())}function M(){if(p.current){var e=p.current.getBoundingClientRect(),t=e.top,r=e.bottom,n=-d.current.getBoundingClientRect().top,u=scrollY-h.current>0,l=r<=innerHeight,a=n<=s,c=t>=0;u?(E.current||(a?f.current.style.height="0px":c&&(f.current.style.height=n+s+"px")),p.current.style.top=-y.current+"px",p.current.style.bottom="auto",E.current=!0):(E.current&&l&&(f.current.style.height=n-y.current+"px"),p.current.style.top="auto",p.current.style.bottom=-y.current-s+"px",E.current=!1),h.current=scrollY}}function G(){if(v.current){var e=c();e?m.current?(y.current=b(),g.current?k():(w(),R())):(y.current=b(),m.current=!0,g.current?(p.current.style.position="sticky",k()):w(),h.current=scrollY-296-p.current.getBoundingClientRect().height,i(h.current)):!e&&m.current&&(R(),N(),h.current=scrollY+16+p.current.getBoundingClientRect().height,i(h.current))}}return(0,u.useEffect)((function(){return window.addEventListener("resize",G),function(){window.removeEventListener("resize",G),window.onscroll=null}}),[]),(0,u.useEffect)((function(){setTimeout((function(){x&&T()}),0)}),[location.href]),{calculateAgain:T,ref_main_elm:d,ref_preview_elm:p,ref_fake_elm:f}};var n,u=r(67294),l=((n=r(45697))&&n.__esModule,r(55852)),a=r(35155),c=function(){return innerWidth>900},o=function(e){return location.href.search(e)>=0};function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;document.getElementsByTagName("html")[0].scrollTop=e}},48800:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),u=a(n),l=(a(r(45697)),r(52538));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.ref_scroll_elm,r=(0,l.useBool)(),a=r.is_true,c=r.setIsTrue;function o(e){c(e.target.scrollTop>0)}return(0,n.useEffect)((function(){return t.current.addEventListener("scroll",o),function(){t.current&&t.current.removeEventListener("scroll",o)}}),[]),u.default.createElement("div",{className:"SeparateLineScrollToggle h-1px bg-blur "+(a?"":"display-none")})}c.propTypes={},t.default=c},81419:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),u=a(n),l=(a(r(45697)),a(r(91641)));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.children,r=(0,n.useRef)(null);return u.default.createElement("div",{className:"GroupLayout"},u.default.createElement("div",{className:"display-flex"},u.default.createElement("div",{className:"GroupLayout_left flex-shrink-0 left-bar-sticky"},u.default.createElement(l.default,{ref_scroll:r})),u.default.createElement("div",{className:"GroupLayout_right flex-grow-1"},t)))}c.propTypes={},t.default=c},91641:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(67294)),u=(i(r(45697)),i(r(34626))),l=i(r(7737)),a=i(r(84155)),c=i(r(60706)),o=i(r(48800));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.ref_scroll;return n.default.createElement("div",{className:"GroupLayoutLeft display-flex flex-col h-100per"},n.default.createElement("div",null,n.default.createElement(u.default,null)),n.default.createElement("div",{className:"padding-x-8px"},n.default.createElement(o.default,{ref_scroll_elm:t})),n.default.createElement("div",{ref:t,className:"flex-grow-1 flex-basis-1rem overflow-y-auto scroll-thin"},n.default.createElement("div",null,n.default.createElement(l.default,{ref_scroll_elm:t})),n.default.createElement("div",null,n.default.createElement(c.default,{ref_scroll:t})),n.default.createElement("div",null,n.default.createElement(a.default,{ref_scroll:t}))))}s.propTypes={},t.default=s},97398:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),u=(c(r(45697)),c(r(81419))),l=c(r(9198)),a=c(r(84734));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return n.default.createElement("div",{className:"GroupFeed"},n.default.createElement(u.default,null,n.default.createElement("div",{className:"GroupFeed_center_right padding-top-16px"},n.default.createElement("div",{className:"display-flex justify-content-center"},n.default.createElement("div",{className:"GroupFeed_center margin-8px w-500px"},n.default.createElement(a.default,null)),n.default.createElement("div",{className:"GroupFeed_right margin-8px w-360px"},n.default.createElement(l.default,null))))))}r(26197),o.propTypes={},t.default=o},9198:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(67294)),u=(c(r(45697)),r(55852)),l=r(44283),a=c(r(83069));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,l.useStickyAuto)({sticky_location:/\/group\/feed$/}),r=t.calculateAgain,c=t.ref_main_elm,o=t.ref_preview_elm,i=t.ref_fake_elm;return n.default.createElement("div",{ref:c,className:"GroupFeedRight h-100per"},n.default.createElement("div",{ref:i}),n.default.createElement("div",{ref:o,className:"pos-sticky"},n.default.createElement("div",{className:"GroupFeedRight_suggested"},n.default.createElement(a.default,{handleReady:function(){u.IS_MOBILE||r()}}))))}o.propTypes={},t.default=o},83069:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(67294),u=c(n),l=(c(r(45697)),r(93191)),a=c(r(869));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.handleReady,r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,l=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){u=!0,l=e}finally{try{!n&&c.return&&c.return()}finally{if(u)throw l}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(!1),2),c=r[0],o=r[1];return u.default.createElement("div",{className:"GroupFeedSuggested brs-8px bg-primary box-shadow-1 text-secondary"},u.default.createElement("div",{className:"GroupFeedSuggested_head padding-x-16px padding-y-20px"},u.default.createElement("div",{className:"flex-between-center"},u.default.createElement("h2",{className:"font-17px font-600"},"Suggested for you"),u.default.createElement(l.Link,{to:"/group/discover"},"See more")),u.default.createElement("div",null,"Groups you might be interested in.")),u.default.createElement("div",{className:"GroupFeedSuggested_body padding-bottom-20px "+(c?"":"display-none")},u.default.createElement(a.default,{handleFetched:function(){o(!0),setTimeout((function(){t()}),0)},params_api:{type:"suggested"}})),c?null:u.default.createElement("div",{className:"padding-top-100per"}))}r(24794),o.propTypes={},t.default=o},26197:(e,t,r)=>{"use strict";r.r(t)},24794:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=2709.js.map