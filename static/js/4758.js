(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[4758],{88590:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_city_history_arr=t.default_city_history_obj=t.default_city_arr=t.default_city_obj=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=a(39727),i=a(69565),l=a(8047),u=a(58822),o=a(7605),c=a(61426),s=["Ha Noi","Ha Nam","Nam Dinh","Da Lat","Da Nang","Can Tho","Ho Chi Minh"],d=["Nguyen Trai","Ha Dong","Nguyen Hue","Tran Khat Tran","Hai Ba Trung","Khuat Duy Tien","Cau Giay","To Huu"],f=["This is a street of Ha Noi","This is a street of Ha Nam","This is a street of Nam Dinh","This is a street of Da Nang","This is a street of Da Lat","This is a street of Can Tho","This is a street of Ho Chi Minh"],m=function(){return{city:(0,c.getRandomFromArr)(s),street:(0,c.getRandomFromArr)(d),quote:(0,c.getRandomFromArr)(f),bg_color:(0,i.getRandomNumber)(0,3)}},_=t.default_city_obj=function(){return r({id:(0,i.getRandomId)()},(0,u.getRandomUser)(),m(),{image:(0,l.getRandomVidPic)(),is_user:(0,n.getRandomBool)(),count_his:2})},p=(t.default_city_arr=function(){return(0,o.getDefaultArr)(_,4,4)},t.default_city_history_obj=function(){return r({id:(0,i.getRandomId)()},m(),{image:(0,l.getRandomVidPicOrNull)(),created_time:"2021-06-29T06:51:05.370Z"})});t.default_city_history_arr=function(){return(0,o.getDefaultArr)(p,3,4)}},77588:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handle_API_CityHistory_L=t.handle_API_City_L=void 0;var r,n,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=(t.handle_API_City_L=(r=o(regeneratorRuntime.mark((function e(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_City_L)(i({},u.params_city_l,{q:a,c_count:r}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),t.handle_API_CityHistory_L=(n=o(regeneratorRuntime.mark((function e(t){var a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.API_CityHistory_L)(i({},u.params_history_city,{city_model:t,c_count:r}));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)}),a(75405)),u=a(93187);function o(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function r(n,i){try{var l=t[n](i),u=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))}}},2760:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(a(67294)),n=i(a(45697));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.size_icon,a=e.x,n=e.y,i=e.stroke;return r.default.createElement("svg",{width:t,height:t,viewBox:a+" "+n+" 200 200"},r.default.createElement("path",{d:"M25,75 A65,50 0 0 1 170,75 M185,25 175,75 125,60\r M25,125 A65,50 0 0 0 170,125 M10,175 20,125 70,140",fill:"none",stroke:i,strokeWidth:"20",strokeLinejoin:"round",strokeLinecap:"round"}))}l.propTypes={size_icon:n.default.string,x:n.default.number,y:n.default.number,stroke:n.default.string},l.defaultProps={size_icon:"1rem",x:0,y:0,stroke:"var(--md-color)"},t.default=l},93187:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.params_city_l={page:1,size:5},t.params_history_city={page:1,size:5}},87898:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ParseLocationSearch=void 0;var r=a(17563);t.ParseLocationSearch=function(){return(0,r.parse)(location.search)}},75147:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};t.API_IsLogin=o,t.API_IsLogin_URL=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return o(r({},e,{url:t}),r({},e,{url:a}))};var n=u(a(87421)),i=u(a(62667)),l=a(50918);function u(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return 1!=localStorage.is_login||l.is_api_fake?(0,i.default)(t):(0,n.default)(e)}},75405:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_CityHistory_L=t.API_City_R=t.API_City_L=void 0;var r,n=(r=a(62667))&&r.__esModule?r:{default:r},i=a(75147),l=a(50918),u=a(88590);t.API_City_L=function(e){return(0,l.API_FakeReal)((0,u.default_city_arr)(),(function(){return(0,i.API_IsLogin_URL)({method:"GET",params:e},"api/city/city-l/","api/city/city-no-token-l/")}),e)},t.API_City_R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,n.default)({url:"/city/city-r/"+e+"/",method:"GET",params:t})},t.API_CityHistory_L=function(e){return(0,l.API_FakeReal)((0,u.default_city_history_arr)(),(function(){return(0,n.default)({url:"/city/history-l/",method:"GET",params:e})}),e)}},40374:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=o(r),i=o(a(45697)),l=o(a(37279)),u=o(a(37930));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.value,a=e.placeholder,i=e.handleChange,o=e.handleSearch,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(n)throw i}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(!1),2),s=c[0],d=c[1];return n.default.createElement("div",{className:"SearchAnimateDiv pos-rel "+(s?"":"SearchAnimateDiv_close")},n.default.createElement("div",{className:"SearchAnimateDiv_key"},n.default.createElement("div",{className:"SearchAnimateDiv_key_contain display-flex justify-content-center align-items-center cursor-pointer "+(s?"nav-active":""),onClick:function(){s?o():d(!0)}},n.default.createElement(l.default,{y:200}))),n.default.createElement("div",{className:"SearchAnimateDiv_input"},n.default.createElement("input",{type:"text",value:t,placeholder:a,onChange:function(e){i(e.target.value)},onKeyDown:function(e){13==e.keyCode&&(e.preventDefault(),o())}}),n.default.createElement("div",{className:"SearchAnimateDiv_input-clear",onClick:function(){i("")}},n.default.createElement(u.default,{y:400,size_icon:"0.8rem"}))),n.default.createElement("div",{className:"SearchAnimateDiv_right"},n.default.createElement("div",{className:"SearchAnimateDiv_icon-close display-flex justify-content-center align-items-center"},n.default.createElement("div",{className:"close-icon-small brs-50 cursor-pointer",onClick:function(){d(!1)}},n.default.createElement(u.default,{y:400,size_icon:"1rem"})))))}a(89497),c.propTypes={value:i.default.string,handleChange:i.default.func,handleSearch:i.default.func,placeholder:i.default.string},c.defaultProps={value:"",placeholder:"Search..."},t.default=c},3726:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=y(r),i=a(93191),l=a(2804),u=a(87898),o=y(a(27883)),c=y(a(40040)),s=a(77588),d=y(a(73721)),f=y(a(32529)),m=y(a(14974));a(86890),a(57868);var _=a(55852),p=y(a(37930));function y(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=(0,r.useRef)(null),t=(0,r.useRef)(""),a=(0,l.useObserverShowMore)({initial_arr:[],handle_API_L:function(e){return(0,s.handle_API_City_L)(t.current,e)}}),y=a.data_state,h=a.refreshData_API,v=a.observerShowMore,g=y.data_arr,b=y.is_fetching,E=y.has_fetched;return(0,r.useEffect)((function(){document.title="City",t.current=(0,u.ParseLocationSearch)().city,h(),v({fake_elm_end:e.current,rootMargin:"0px 0px 1000px 0px",way_scroll:"to_bottom",margin:1e3})}),[]),n.default.createElement("div",null,n.default.createElement("div",{className:"Cities "+(E?"":"display-none")},n.default.createElement("div",{className:"Cities_search"},n.default.createElement(d.default,{handleSearch:function(e){t.current=e,history.replaceState("","","?city="+e),h()}})),n.default.createElement("div",{className:"Cities_contain"},g.map((function(e){return n.default.createElement("div",{key:""+e.id,className:"Cities_item"},n.default.createElement(f.default,{city_obj:e,has_fetched:E}))})),n.default.createElement("div",{className:"width-fit-content margin-auto"},n.default.createElement(o.default,{is_fetching:b}))),1==localStorage.is_login&&n.default.createElement("div",{className:"Cities_add pos-fixed left-0 "+(_.IS_MOBILE?"bottom-0":"Cities_add-pc trans-x--50per bottom-50per")},n.default.createElement(i.Link,{to:"/new-city"},n.default.createElement("div",{className:"Cities_add-icon display-flex-center bg-green brs-50 box-shadow-fb cursor-pointer hv-opacity",title:"Add new city"},n.default.createElement(p.default,{y:400}))))),n.default.createElement("div",{className:E?"":"Cities_skeleton"},n.default.createElement(c.default,{component:n.default.createElement(m.default,null),has_fetched:E})),n.default.createElement("div",{ref:e,className:"padding-1px"}))}},35794:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(67294)),n=l(a(45697)),i=l(a(28108));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.initialValues,a=e.handleSubmit,n=e.detectHasChange;return r.default.createElement("div",{className:"CityUpdate"},r.default.createElement("div",null,r.default.createElement(i.default,{title_submit:"Update",initialValues:t,handleSubmit:a,use_has_change:!0,detectHasChange:n})))}a(41050),u.propTypes={initialValues:n.default.object,handleSubmit:n.default.func,detectHasChange:n.default.func},t.default=u},65244:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(a(67294)),n=(u(a(45697)),a(47442)),i=a(25788),l=u(a(3501));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.histories;return function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r])}(e,["histories"]),r.default.createElement("div",{className:"CityHistories"},r.default.createElement("ul",{className:"CityHistories_row"},t.map((function(e,t){return r.default.createElement("li",{key:""+t,className:"CityHistories_item"},r.default.createElement("div",{className:"inline-block"},r.default.createElement("div",{className:"font-12px font-italic label-field"},"Update at"," ",(0,n.formatLocalDateTimeString)(new Date(e.created_time)))),r.default.createElement("div",null,r.default.createElement(l.default,{city:e.city,street:e.street,quote:e.quote,image:e.image,bg:i.city_bg_color_arr[e.bg_color].bg,color:i.city_bg_color_arr[e.bg_color].color,created_time:e.created_time})))}))))}a(13369),o.propTypes={},t.default=o},3501:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.city,a=e.street,n=e.quote,i=e.image,l=e.bg,u=e.color;return e.created_time,r.default.createElement("div",{className:"padding-8px "+l+" "+u},r.default.createElement("div",null,r.default.createElement("address",null,r.default.createElement("div",{className:t?"":"display-none"},"City: ",t),r.default.createElement("div",{className:a?"":"display-none"},"Street: ",a)),r.default.createElement("article",{className:"CityHistoryItem_quote "+(n?"":"display-none")},"Quote: ",n)),r.default.createElement("div",{className:"CityHistoryItem_img "+(i?"":"display-none")},r.default.createElement("div",null,r.default.createElement("img",{className:"object-fit-cover",src:i,alt:"",width:"200",height:"200"}))))}n(a(45697)),i.propTypes={},t.default=i},79536:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(a(67294)),n=d(a(45697)),i=a(50918),l=d(a(32346)),u=d(a(58629)),o=d(a(87782)),c=d(a(4787)),s=d(a(64903));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.is_user,a=e.count_his,n=e.openHistory,d=e.openUpdate,f=e.openDelete,m=e.openReport;return r.default.createElement(l.default,null,r.default.createElement("ul",{className:"Choices_list list-none"},r.default.createElement("li",{className:a||i.is_api_fake?"":"display-none"},r.default.createElement(u.default,{handleOpenHistory:n})),r.default.createElement("li",{className:t||i.is_api_fake?"":"display-none"},r.default.createElement(o.default,{handleUpdate:d})),r.default.createElement("li",{className:!t||i.is_api_fake?"":"display-none"},r.default.createElement(s.default,{handleOpenReport:m})),r.default.createElement("li",{className:t||i.is_api_fake?"":"display-none"},r.default.createElement(c.default,{handleDelete:f}))))}a(26488),f.propTypes={count_his:n.default.number,is_user:n.default.bool},f.defaultProps={},t.default=f},32529:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=E(r),i=E(a(45697)),l=a(15130),u=a(73674),o=E(a(48321)),c=a(77588),s=a(21092),d=a(82403),f=a(39309),m=a(99452),_=a(13205),p=E(a(8119)),y=E(a(17852)),h=a(25788),v=E(a(79536)),g=E(a(35794)),b=E(a(65244));function E(e){return e&&e.__esModule?e:{default:e}}function C(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,a){return function r(n,i){try{var l=t[n](i),u=l.value}catch(e){return void a(e)}if(!l.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))}}function P(e){var t,a,i=(t=C(regeneratorRuntime.mark((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q((function(){return(0,u.API_City_UD)(w,"PATCH",(0,o.default)(t))}));case 2:P.city=t.city,P.street=t.street,t.image&&(P.image=t.image),P.quote=t.quote,P.bg_color=t.bg_color,F(),A();case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)}),E=(a=C(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.API_City_UD)(w,"DELETE");case 2:P.is_del=!0,F();case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)}),P=e.city_obj,N=(0,r.useContext)(l.context_api),S=N.openScreenFloor,A=N.closeScreenFloor,w=P.id,I=P.user,x=P.city,k=P.street,j=P.bg_color,M=P.quote,O=P.image,T=P.count_his,D=P.is_user,H=P.is_del,R=h.city_bg_color_arr[j],L=R.bg,U=R.color,F=(0,d.useForceUpdate)(),q=(0,s.useScreenFetching)();function z(e){return(0,c.handle_API_CityHistory_L)(w,e)}function V(){console.log("Report: "+w)}return!H&&n.default.createElement(y.default,null,n.default.createElement("div",{className:"CityItem brs-5px-md box-shadow-1 "+L+" "+U},n.default.createElement("div",{className:"CityItem_user"},n.default.createElement(p.default,{user:I})),n.default.createElement("div",null,n.default.createElement("address",null,n.default.createElement("div",null,"City: ",x),n.default.createElement("div",null,"Street: ",k)),n.default.createElement("article",{className:"CityItem_quote"},'"',M,'"')),n.default.createElement("div",{className:"CityItem_img"},n.default.createElement("a",{href:O,target:"_blank"},n.default.createElement("div",{className:"CityItem_img_contain bg-loader brs-5px"},n.default.createElement("div",{className:"display-flex-center h-100per"},n.default.createElement("img",{src:O,alt:""}))))),n.default.createElement("div",{className:"CityItem_choices"},n.default.createElement(v.default,{is_user:D,count_his:T,openHistory:function(){(0,m.openScreenHistory)({openScreenFloor:S,title:"History",handle_API_History_L:z,HisComponent:b.default})},openUpdate:function(){(0,_.openScreenUpdate)({openScreenFloor:S,title:"Update",UpdateComponent:g.default,initialValues:{city:x,street:k,image:O,quote:M,bg_color:j},handleSubmit:i})},openDelete:function(){(0,f.openScreenConfirm)({openScreenFloor:S,title:"Delete",notification:"Do you really want to delete this city?",handleConfirm:E})},openReport:function(){(0,f.openScreenConfirm)({openScreenFloor:S,title:"Report",notification:"Do you want to report this city?",handleConfirm:V})}}))))}a(8700),P.propTypes={city_obj:i.default.object,has_fetched:i.default.bool},t.default=P},14974:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(67294));function n(e){return e&&e.__esModule?e:{default:e}}function i(){return r.default.createElement("div",{className:"CityItemSkeleton brs-5px-md bg-primary bax-shadow-1"})}n(a(45697)),a(46157),i.propTypes={},t.default=i},73721:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(67294),n=u(r),i=u(a(45697)),l=u(a(40374));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.handleSearch,a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(n)throw i}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)(""),2),i=a[0],u=a[1];return n.default.createElement("div",{className:"CitySearch"},n.default.createElement("div",null,n.default.createElement(l.default,{value:i,placeholder:"City...",handleChange:function(e){u(e)},handleSearch:function(){t(i)}})))}a(95063),o.propTypes={handleSearch:i.default.func},t.default=o},89497:(e,t,a)=>{"use strict";a.r(t)},86890:(e,t,a)=>{"use strict";a.r(t)},57868:(e,t,a)=>{"use strict";a.r(t)},41050:(e,t,a)=>{"use strict";a.r(t)},13369:(e,t,a)=>{"use strict";a.r(t)},26488:(e,t,a)=>{"use strict";a.r(t)},8700:(e,t,a)=>{"use strict";a.r(t)},46157:(e,t,a)=>{"use strict";a.r(t)},95063:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=4758.js.map