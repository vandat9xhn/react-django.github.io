(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[142],{59149:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(67294),l=_(r),u=(_(a(45697)),a(15130)),o=a(17892),d=a(70361),i=a(39835),f=_(a(4663)),c=_(a(58726)),s=_(a(81066)),m=_(a(68141));function _(e){return e&&e.__esModule?e:{default:e}}function v(e){var t,a,_=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.handle_API_UserOverview_r)({user_id:h});case 2:t=e.sent,j({you_obj:t.you_obj,other_name_arr:t.other_name_arr,favour_obj:t.favour_obj,has_fetched:!0,no_item:!(t.you_obj.title||t.other_name_arr.length||t.favour_obj.title)});case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function n(r,l){try{var u=e[r](l),o=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(o).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(o)}("next")}))},function(){return a.apply(this,arguments)}),v=e.name,p=(0,r.useContext)(u.context_api).user.id,h=(0,o.GetIdSlug)(),b=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(n({},i.initial_detail_state)),2),y=b[0],j=b[1],E=y.you_obj,A=y.other_name_arr,P=y.favour_obj,I=y.has_fetched,O=y.no_item;return(0,r.useEffect)((function(){_()}),[]),l.default.createElement("div",null,l.default.createElement("h3",{className:"PfAbout_title"},"Details about ",p==h?"you":v),l.default.createElement("div",null,l.default.createElement(m.default,{has_fetched:I,no_item:O,title:"No detail to show"},l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_part"},l.default.createElement(f.default,{you_obj:E})),l.default.createElement("div",{className:"PfAbout_part"},l.default.createElement(c.default,{other_name_arr:A})),l.default.createElement("div",{className:"PfAbout_part"},l.default.createElement(s.default,{favour_obj:P}))))))}v.propTypes={},t.default=v},4663:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(67294)),r=f(a(45697)),l=a(82403),u=a(70361),o=f(a(21716)),d=f(a(29562)),i=f(a(65337));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.you_obj,a=(0,l.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add "+(""==t.you?"":"display-none")},n.default.createElement(o.default,{title_add:"Add about you",item_obj:{you:"",permission:0},ComponentEdit:d.default,handleCreate:function(e){var n=e.you,r=e.permission;t.title=n,t.you=n,t.permission=r,a()},handle_API_C:u.handle_API_You_U})),n.default.createElement("div",null,n.default.createElement(i.default,{you_obj:t,handleUpdateItemObj:function(e){var n=e.you,r=e.permission;t.title=n,t.permission=r,t.you=n,a()}})))}c.propTypes={you_obj:r.default.object},t.default=c},29562:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=d(n),l=d(a(45697)),u=d(a(6797)),o=d(a(82322));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.item_obj,a=e.handleSave,l=e.handleCancel,d=t.permission,i=t.you,f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(i),2),c=f[0],s=f[1];return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_input"},r.default.createElement(u.default,{name:"you",value:c,placeholder:"About you",max_length:1e3,handleChange:function(e){s(e.target.value)}}))),r.default.createElement("div",null,r.default.createElement(o.default,{permission:d,handleCancel:l,handleSave:function(e){a({permission:e,you:c})}})))}i.propTypes={item_obj:l.default.object,handleSave:l.default.func,handleCancel:l.default.func},t.default=i},65337:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=i(a(45697)),l=a(7392),u=a(70361),o=i(a(59487)),d=i(a(29562));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.you_obj,a=e.handleUpdateItemObj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(o.default,{item_obj:t,Icon:l.IconsProfileAbout.you,label:"About you",ComponentEdit:d.default,handle_API_U:u.handle_API_You_U,handleUpdateItemObj:a})))}f.propTypes={you_obj:r.default.object,handleUpdateItemObj:r.default.func},t.default=f},81066:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(67294)),r=f(a(45697)),l=a(82403),u=a(70361),o=f(a(21716)),d=f(a(53114)),i=f(a(85695));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.favour_obj,a=(0,l.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add "+(""==t.title?"":"display-none")},n.default.createElement(o.default,{title_add:"Add a favour",item_obj:{favour:"",permission:0},ComponentEdit:d.default,handleCreate:function(e){var n=e.favour,r=e.permission;t.title=n,t.favour=n,t.permission=r,a()},handle_API_C:u.handle_API_Favour_U})),n.default.createElement("div",null,n.default.createElement(i.default,{favour_obj:t,handleUpdateItemObj:function(e){var n=e.favour,r=e.permission;t.title=n,t.permission=r,t.favour=n,a()}})))}c.propTypes={favour_obj:r.default.object},t.default=c},53114:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67294),r=d(n),l=d(a(45697)),u=d(a(6797)),o=d(a(82322));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.item_obj,a=e.handleSave,l=e.handleCancel,d=t.permission,i=t.favour,f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)(i),2),c=f[0],s=f[1];return r.default.createElement("div",null,r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_input"},r.default.createElement(u.default,{name:"favour",value:c,placeholder:"About favour",max_length:1e3,handleChange:function(e){s(e.target.value)}}))),r.default.createElement("div",null,r.default.createElement(o.default,{permission:d,handleCancel:l,handleSave:function(e){a({permission:e,favour:c})}})))}i.propTypes={item_obj:l.default.object,handleSave:l.default.func,handleCancel:l.default.func},t.default=i},85695:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=i(a(45697)),l=a(7392),u=a(70361),o=i(a(59487)),d=i(a(53114));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.favour_obj,a=e.handleUpdateItemObj;return n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(o.default,{item_obj:t,Icon:l.IconsProfileAbout.favour,label:"Favour",ComponentEdit:d.default,handle_API_U:u.handle_API_Favour_U,handleUpdateItemObj:a})))}f.propTypes={favour_obj:r.default.object,handleUpdateItemObj:r.default.func},t.default=f},58726:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(67294)),r=f(a(45697)),l=a(82403),u=a(70361),o=f(a(21716)),d=f(a(15455)),i=f(a(10512));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.other_name_arr,a=(0,l.useForceUpdate)();return n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_add"},n.default.createElement(o.default,{title_add:"Add a other name",item_obj:{other_name:"",permission:0},ComponentEdit:d.default,handleCreate:function(e){var n=e.other_name,r=e.permission;t.push({id:101+t.length,title:n,other_name:n,permission:r}),a()},handle_API_C:u.handle_API_OtherName_C})),n.default.createElement("div",null,t.map((function(e){return n.default.createElement("div",{key:"PfAboutOtherName_"+e.id},n.default.createElement(i.default,{other_name_obj:e}))}))))}c.propTypes={other_name_arr:r.default.array},t.default=c},15455:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(a.push(u.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(67294),l=i(r),u=i(a(45697)),o=i(a(82322)),d=i(a(6797));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,i=t.permission,f=t.other_name,c=(0,r.useState)(f),s=n(c,2),m=s[0],_=s[1],v=(0,r.useState)(!1),p=n(v,2),h=p[0],b=p[1];return l.default.createElement("div",null,l.default.createElement("div",{className:h?"text-red":"display-none"},l.default.createElement("div",null,"OtherName must have at least 2 letters!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(d.default,{name:"other_name",value:m,type:"text",placeholder:"Other name",handleChange:function(e){_(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(o.default,{permission:i,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(m)||""!=f&&""==m?a({permission:e,other_name:m.trim()}):b(!0)}})))}f.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=f},10512:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a(67294)),r=i(a(45697)),l=a(7392),u=a(70361),o=i(a(59487)),d=i(a(15455));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.other_name_obj;return n.default.createElement("div",null,n.default.createElement(o.default,{item_obj:t,Icon:l.IconsProfileAbout.other_name,ComponentEdit:d.default,handle_API_U:u.handle_API_OtherName_U,handleUpdateItemObj:function(e){var a=e.other_name,n=e.permission;t.title=a,t.permission=n,t.other_name=a}}))}f.propTypes={other_name_obj:r.default.object},t.default=f}}]);
//# sourceMappingURL=142.js.map