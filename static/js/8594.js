(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8594],{18594:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),l=d(n),r=(d(a(45697)),d(a(29875)));function d(e){return e&&e.__esModule?e:{default:e}}a(89017);var i={name:"My My",address:"Vinh Phuc",phone:"0123456789",birth_day:"22-04-2001",mail:"mymy@gmail.com"};function u(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,l=!1,r=void 0;try{for(var d,i=e[Symbol.iterator]();!(n=(d=i.next()).done)&&(a.push(d.value),!t||a.length!==t);n=!0);}catch(e){l=!0,r=e}finally{try{!n&&i.return&&i.return()}finally{if(l)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)({user_info:{name:"",address:"",phone:"",birth_day:"",mail:""},has_fetch:!1}),2),a=t[0],d=t[1],u=a.user_info,s=a.has_fetch,c=u.name,f=u.address,m=u.phone,o=u.birth_day,v=u.mail,p=(0,n.useRef)(!0);return(0,n.useEffect)((function(){return function(){p.current=!1}}),[]),(0,n.useEffect)((function(){setTimeout((function(){p.current&&d({user_info:i,has_fetch:!0})}),500)}),[]),l.default.createElement("div",{className:"PersonalInformation"},l.default.createElement("h2",{className:"PersonalInformation_title margin-0 text-align-center text-secondary"},"Information"),l.default.createElement("div",{className:s?"":"display-none"},l.default.createElement("div",{className:"padding-8px"},l.default.createElement("div",{className:"font-500"},"Full name:"),l.default.createElement("div",null,c)),l.default.createElement("div",{className:"padding-8px"},l.default.createElement("div",{className:"font-500"},"Address:"),l.default.createElement("div",null,f)),l.default.createElement("div",{className:"padding-8px"},l.default.createElement("div",{className:"font-500"},"Birth Day:"),l.default.createElement("div",null,o)),l.default.createElement("div",{className:"padding-8px"},l.default.createElement("div",{className:"font-500"},"Phone:"),l.default.createElement("div",null,m)),l.default.createElement("div",{className:"padding-8px"},l.default.createElement("div",{className:"font-500"},"Mail:"),l.default.createElement("div",null,v))),!s&&l.default.createElement("div",{className:"PersonalInformation_skeleton"},l.default.createElement(r.default,{num:10})))}u.propTypes={},t.default=u},89017:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=8594.js.map