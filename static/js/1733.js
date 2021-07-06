(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[1733],{97684:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(67294),l=o(a),u=(o(n(45697)),n(17892)),i=n(70361),f=n(39835),d=o(n(55566));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t,n,o=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.handle_API_UserOverview_r)({user_id:c});case 2:t=e.sent,_({life_event_arr:t.life_event_arr,has_fetched:!0});case 4:case"end":return e.stop()}}),e,this)})),n=function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(a,l){try{var u=e[a](l),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(i)}("next")}))},function(){return n.apply(this,arguments)}),c=(0,u.GetIdSlug)(),s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,a.useState)(r({},f.initial_life_state)),2),v=s[0],_=s[1],m=v.life_event_arr,p=v.has_fetched;return(0,a.useEffect)((function(){o()}),[]),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_part"},l.default.createElement(d.default,{life_event_arr:m,has_fetched:p})))}c.propTypes={},t.default=c},55566:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(67294)),a=c(n(45697)),l=n(82403),u=n(70361),i=c(n(21716)),f=c(n(4581)),d=c(n(42804)),o=c(n(68141));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.life_event_arr,n=e.has_fetched,a=(0,l.useForceUpdate)(),c=!t.length;return r.default.createElement("div",null,r.default.createElement("h3",{className:"PfAbout_title"},"Life Events"),r.default.createElement("div",null,r.default.createElement(o.default,{has_fetched:n,no_item:c,title:"No life event to show"},r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_add"},r.default.createElement(i.default,{title_add:"Add a life event",item_obj:{life_event:"",permission:0},ComponentEdit:f.default,handleCreate:function(e){var n=e.life_event,r=e.permission;t.push({id:101+t.length,title:n,life_event:n,permission:r}),a()},handle_API_C:u.handle_API_LifeEvent_C})),r.default.createElement("div",null,t.map((function(e){return r.default.createElement("div",{key:"PfAboutLifeEvent_"+e.id},r.default.createElement(d.default,{life_event_obj:e}))})))))))}s.propTypes={life_event_arr:a.default.array},t.default=s},4581:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(67294),l=d(a),u=d(n(45697)),i=d(n(82322)),f=d(n(6797));function d(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.item_obj,n=e.handleSave,u=e.handleCancel,d=t.permission,o=t.life_event,c=(0,a.useState)(o),s=r(c,2),v=s[0],_=s[1],m=(0,a.useState)(!1),p=r(m,2),h=p[0],y=p[1];return l.default.createElement("div",null,l.default.createElement("div",{className:h?"text-red":"display-none"},l.default.createElement("div",null,"LifeEvent must have at least 2 letters!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(f.default,{name:"life_event",value:v,type:"text",placeholder:"Life event",handleChange:function(e){_(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(i.default,{permission:d,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(v)||""!=o&&""==v?n({permission:e,life_event:v.trim()}):y(!0)}})))}o.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=o},42804:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(67294)),a=d(n(45697)),l=n(7392),u=n(70361),i=d(n(59487)),f=d(n(4581));function d(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.life_event_obj;return r.default.createElement("div",null,r.default.createElement(i.default,{item_obj:t,Icon:l.IconsProfileAbout.life_event,ComponentEdit:f.default,handle_API_U:u.handle_API_LifeEvent_U,handleUpdateItemObj:function(e){var n=e.life_event,r=e.permission;t.title=n,t.permission=r,t.life_event=n}}))}o.propTypes={life_event_obj:a.default.object},t.default=o}}]);
//# sourceMappingURL=1733.js.map