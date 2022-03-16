(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[7927],{40843:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=c(r),l=(c(a(45697)),a(17892)),u=a(2336),i=a(10666),o=c(a(64739)),d=c(a(50779)),f=c(a(56144));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t,a,c=(t=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.handle_API_UserOverview_r)({user_id:s});case 2:t=e.sent,_({work_arr:t.work_arr,school_arr:t.school_arr,university_arr:t.university_arr,has_fetched:!0});case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=t.apply(this,arguments);return new Promise((function(t,a){return function r(n,l){try{var u=e[n](l),i=u.value}catch(e){return void a(e)}if(!u.done)return Promise.resolve(i).then((function(e){r("next",e)}),(function(e){r("throw",e)}));t(i)}("next")}))},function(){return a.apply(this,arguments)}),s=(0,l.GetIdSlug)(),m=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)((0,u.initial_work_edu_state)()),2),v=m[0],_=m[1],h=v.school_arr,p=v.university_arr,y=v.work_arr,b=v.has_fetched;return(0,r.useEffect)((function(){c()}),[]),n.default.createElement("div",null,n.default.createElement("div",{className:"PfAbout_part"},n.default.createElement(o.default,{work_arr:y,has_fetched:b})),n.default.createElement("div",{className:"PfAbout_part"},n.default.createElement(d.default,{university_arr:p,has_fetched:b})),n.default.createElement("div",{className:"PfAbout_part"},n.default.createElement(f.default,{school_arr:h,has_fetched:b})))}s.propTypes={},t.default=s},56144:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=c(a(45697)),l=a(82403),u=a(10666),i=c(a(21716)),o=c(a(38561)),d=c(a(39306)),f=c(a(68141));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.school_arr,a=e.has_fetched,n=(0,l.useForceUpdate)(),c=!t.length;return r.default.createElement("div",null,r.default.createElement("h3",{className:"PfAbout_title"},"High School"),r.default.createElement("div",null,r.default.createElement(f.default,{has_fetched:a,no_item:c,title:"No relationship"},r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_add"},r.default.createElement(i.default,{title_add:"Add a high school",item_obj:{school:"",permission:0},ComponentEdit:o.default,handleCreate:function(e){var a=e.school,r=e.permission;t.push({id:101+t.length,title:a,school:a,permission:r}),n()},handle_API_C:u.handle_API_School_C})),r.default.createElement("div",null,t.map((function(e){return r.default.createElement("div",{key:"PfAboutSchool_"+e.id},r.default.createElement(d.default,{school_obj:e}))})))))))}s.propTypes={school_arr:n.default.array},t.default=s},38561:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=a(67294),l=d(n),u=d(a(45697)),i=d(a(82322)),o=d(a(6797));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,d=t.permission,f=t.school,c=(0,n.useState)(f),s=r(c,2),m=s[0],v=s[1],_=(0,n.useState)(!1),h=r(_,2),p=h[0],y=h[1];return l.default.createElement("div",null,l.default.createElement("div",{className:p?"text-red":"display-none"},l.default.createElement("div",null,"School must have at least 2 letters!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(o.default,{name:"school",value:m,type:"text",placeholder:"School",handleChange:function(e){v(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(i.default,{permission:d,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(m)||""!=f&&""==m?a({permission:e,school:m.trim()}):y(!0)}})))}f.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=f},39306:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(a(67294)),n=d(a(45697)),l=a(7392),u=a(10666),i=d(a(59487)),o=d(a(38561));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.school_obj;return r.default.createElement("div",null,r.default.createElement(i.default,{item_obj:t,Icon:l.IconsProfileAbout.school,ComponentEdit:o.default,handle_API_U:u.handle_API_School_U,handleUpdateItemObj:function(e){var a=e.school,r=e.permission;t.title=a,t.permission=r,t.school=a}}))}f.propTypes={school_obj:n.default.object},t.default=f},50779:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=c(a(45697)),l=a(82403),u=a(10666),i=c(a(21716)),o=c(a(71625)),d=c(a(36310)),f=c(a(68141));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.university_arr,a=e.has_fetched,n=(0,l.useForceUpdate)(),c=!t.length;return r.default.createElement("div",null,r.default.createElement("h3",{className:"PfAbout_title"},"University"),r.default.createElement("div",null,r.default.createElement(f.default,{has_fetched:a,no_item:c,title:"No university to show"},r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_add"},r.default.createElement(i.default,{title_add:"Add a University",item_obj:{university:"",permission:0},ComponentEdit:o.default,handleCreate:function(e){var a=e.university,r=e.permission;t.push({id:101+t.length,title:a,university:a,permission:r}),n()},handle_API_C:u.handle_API_University_C})),r.default.createElement("div",null,t.map((function(e){return r.default.createElement("div",{key:"PfAboutUniversity_"+e.id},r.default.createElement(d.default,{university_obj:e}))})))))))}s.propTypes={university_arr:n.default.array},t.default=s},71625:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=a(67294),l=d(n),u=d(a(45697)),i=d(a(82322)),o=d(a(6797));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,d=t.permission,f=t.university,c=(0,n.useState)(f),s=r(c,2),m=s[0],v=s[1],_=(0,n.useState)(!1),h=r(_,2),p=h[0],y=h[1];return l.default.createElement("div",null,l.default.createElement("div",{className:p?"text-red":"display-none"},l.default.createElement("div",null,"University must have at least 2 letters!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(o.default,{name:"university",value:m,type:"text",placeholder:"University",handleChange:function(e){v(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(i.default,{permission:d,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(m)||""!=f&&""==m?a({permission:e,university:m.trim()}):y(!0)}})))}f.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=f},36310:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(a(67294)),n=d(a(45697)),l=a(7392),u=a(10666),i=d(a(59487)),o=d(a(71625));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.university_obj;return r.default.createElement("div",null,r.default.createElement(i.default,{item_obj:t,Icon:l.IconsProfileAbout.university,ComponentEdit:o.default,handle_API_U:u.handle_API_University_U,handleUpdateItemObj:function(e){var a=e.university,r=e.permission;t.title=a,t.permission=r,t.university=a}}))}f.propTypes={university_obj:n.default.object},t.default=f},64739:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(a(67294)),n=c(a(45697)),l=a(82403),u=a(10666),i=c(a(21716)),o=c(a(58631)),d=c(a(10305)),f=c(a(68141));function c(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.work_arr,a=e.has_fetched,n=(0,l.useForceUpdate)(),c=!t.length;return r.default.createElement("div",null,r.default.createElement("h3",{className:"PfAbout_title"},"Work"),r.default.createElement("div",null,r.default.createElement(f.default,{has_fetched:a,no_item:c,title:"No work to show"},r.default.createElement("div",null,r.default.createElement("div",{className:"PfAbout_add"},r.default.createElement(i.default,{title_add:"Add a Work",item_obj:{work:"",permission:0},ComponentEdit:o.default,handleCreate:function(e){var a=e.work,r=e.permission;t.push({id:101+t.length,title:a,work:a,permission:r}),n()},handle_API_C:u.handle_API_Work_C})),r.default.createElement("div",null,t.map((function(e){return r.default.createElement("div",{key:"PfAboutWork_"+e.id},r.default.createElement(d.default,{work_obj:e}))})))))))}s.propTypes={work_arr:n.default.array},t.default=s},58631:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(a.push(u.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw l}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=a(67294),l=d(n),u=d(a(45697)),i=d(a(82322)),o=d(a(6797));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.item_obj,a=e.handleSave,u=e.handleCancel,d=t.permission,f=t.work,c=(0,n.useState)(f),s=r(c,2),m=s[0],v=s[1],_=(0,n.useState)(!1),h=r(_,2),p=h[0],y=h[1];return l.default.createElement("div",null,l.default.createElement("div",{className:p?"text-red":"display-none"},l.default.createElement("div",null,"Work must have at least 2 letters!"),l.default.createElement("br",null)),l.default.createElement("div",null,l.default.createElement("div",{className:"PfAbout_input"},l.default.createElement(o.default,{name:"work",value:m,type:"text",placeholder:"Work",handleChange:function(e){v(e.target.value)}}))),l.default.createElement("div",null,l.default.createElement(i.default,{permission:d,handleCancel:u,handleSave:function(e){/[a-zA-Z]{2,}/.test(m)||""!=f&&""==m?a({permission:e,work:m.trim()}):y(!0)}})))}f.propTypes={item_obj:u.default.object,handleSave:u.default.func,handleCancel:u.default.func},t.default=f},10305:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(a(67294)),n=d(a(45697)),l=a(7392),u=a(10666),i=d(a(59487)),o=d(a(58631));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.work_obj;return r.default.createElement("div",null,r.default.createElement(i.default,{item_obj:t,Icon:l.IconsProfileAbout.work,ComponentEdit:o.default,handle_API_U:u.handle_API_Work_U,handleUpdateItemObj:function(e){var a=e.work,r=e.permission;t.title=a,t.permission=r,t.work=a}}))}f.propTypes={work_obj:n.default.object},t.default=f}}]);
//# sourceMappingURL=7927.js.map