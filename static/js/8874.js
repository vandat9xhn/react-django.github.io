(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[8874],{5306:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,u=e}finally{try{!a&&l.return&&l.return()}finally{if(n)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,n.useState)("vid_pic-observe opacity-0"),2),r=t[0],a=t[1];return(0,n.useEffect)((function(){e.current&&(0,u.default)({elements:[e.current],callback:function(){a("vid_pic-observe opacity-1")}})}),[e]),r};var a,n=r(67294),u=(a=r(66810))&&a.__esModule?a:{default:a}},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,r=e.threshold,a=void 0===r?0:r,n=e.callback,u=void 0===n?function(){}:n,o=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),u())}))}),{threshold:a});t.forEach((function(e){o.observe(e)}))}},17089:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=document.getElementsByClassName(e)[0].getBoundingClientRect().width,n=document.getElementsByClassName(t)[0].getBoundingClientRect().width,u=n*r,o=Math.floor(a/n)*n,l=u-a;return[o,l]}},62944:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting?(e.target.dataset.appearance=!0,t.unobserve(e.target)):e.target.dataset.appearance&&(e.target.dataset.appearance=!1,t.unobserve(e.target))}))}),{threshold:.9}).observe(e)}},15765:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(67294)),n=r(93191),u=i(r(45697)),o=r(27179),l=i(r(19400)),c=i(r(86383));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.num_row_info,r=e.link,u=e.img,i=e.name,s=e.in_stock,d=e.new_price,f=e.old_price,p=e.discount,m=e.installment;return i?a.default.createElement("div",{className:"ProductItem padding-8px pos-rel",title:i},a.default.createElement(n.Link,{to:r,className:"normal-text hv-cl-blue"},a.default.createElement("div",{className:"ProductItem_head"},a.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},a.default.createElement(l.default,{vid_pic:u}))),a.default.createElement("div",{className:"ProductItem_foot"},a.default.createElement("div",{className:"ProductItem_name label-field"},i),s&&a.default.createElement("div",{className:"text-red"},s),a.default.createElement("div",{className:"ProductItem_price"},d&&a.default.createElement("div",{className:"label-field font-italic"},(0,o.formatNum)(d)),f&&a.default.createElement("div",null,a.default.createElement("span",{className:"ProductItem_old-price"},(0,o.formatNum)(f)),a.default.createElement("sup",{className:"dv-vnd"},"đ"))))),p&&a.default.createElement("div",{className:"ProductItem_discount text-red"},-p+"%"),void 0!==m&&a.default.createElement("div",{className:"ProductItem_installment brs-5px"},m,"%")):a.default.createElement(c.default,{num_row_info:t})}r(82463),s.propTypes={num_row_info:u.default.number,link:u.default.string,img:u.default.string,name:u.default.string,in_stock:u.default.string,new_price:u.default.oneOfType([u.default.string,u.default.number]),old_price:u.default.oneOfType([u.default.string,u.default.number]),discount:u.default.oneOfType([u.default.string,u.default.number]),installment:u.default.oneOfType([u.default.string,u.default.number])},s.defaultProps={num_row_info:4},t.default=s},86383:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=(o(r(45697)),o(r(29875))),u=o(r(97817));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.num_row_info;return a.default.createElement("div",{className:"ProductItem padding-8px pos-rel"},a.default.createElement("div",{className:"ProductItem_head"},a.default.createElement("div",{className:"ProductItem_head-img pos-abs-100"},a.default.createElement("img",{src:u.default,alt:""}))),a.default.createElement("div",{className:"ProductItem_foot"},a.default.createElement(n.default,{num:t})))}l.propTypes={},t.default=l},19400:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=r(67294),u=i(n),o=i(r(45697)),l=r(5306),c=r(32006);function i(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.vid_pic,r=e.type,o=e.video_props,i=e.img_props,s=(0,c.type_video_or_img)(t,r),d=(0,n.useRef)(null),f=(0,l.useObserveVidPic)(d);return"img"==s?u.default.createElement("img",a({ref:d,className:""+f,"data-src":t,alt:""},i)):"video"==s?u.default.createElement("video",a({ref:d,className:""+f,"data-src":t},o)):null}s.propTypes={vid_pic:o.default.string,type:o.default.string,video_props:o.default.object,img_props:o.default.object},s.defaultProps={video_props:{},img_props:{}},t.default=s},87934:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(67294)),n=o(r(45697)),u=o(r(15765));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.products;return a.default.createElement("div",{className:"ProductContent padding-8px bg-primary"},a.default.createElement("div",{className:"ProductContent_row display-flex justify-content-center flex-wrap"},t.map((function(e,t){return a.default.createElement("div",{key:t,className:"ProductContent_item"},a.default.createElement(u.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment}))}))))}r(90548),l.propTypes={products:n.default.array},t.default=l},98874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,u=e}finally{try{!a&&l.return&&l.return()}finally{if(n)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=r(67294),o=f(u),l=(f(r(45697)),r(25770)),c=r(35155),i=f(r(37824)),s=f(r(38326)),d=f(r(46163));function f(e){return e&&e.__esModule?e:{default:e}}r(37981);var p=[1,2,3,4,5,6],m=[1,2,3,4,5,6,7,8,9,10,11,12],_={pk:-1,gte_price:0,lte_price:1e8,in_stock:"",page:1};function v(e){var t,r,f=(t=regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.API_PhoneLaptop_L)(a({},_,t));case 3:n=e.sent,A&&r(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})),r=function(){var e=t.apply(this,arguments);return new Promise((function(t,r){return function a(n,u){try{var o=e[n](u),l=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(l).then((function(e){a("next",e)}),(function(e){a("throw",e)}));t(l)}("next")}))},function(e,t){return r.apply(this,arguments)}),v=(0,u.useState)(m),h=n(v,2),y=h[0],b=h[1],P=(0,u.useState)(p),g=n(P,2),E=g[0],N=g[1],w=(0,u.useState)(p),k=n(w,2),O=k[0],x=k[1],j=(0,u.useRef)(null),M=(0,u.useRef)(null),I=(0,u.useRef)(null),A=(0,c.useMounted)();return(0,u.useEffect)((function(){document.title="Phone Laptop",(0,i.default)({elm:j.current,callback:function(){return f({is_hot:1,size:12},b)}}),(0,i.default)({elm:M.current,callback:function(){return f({type_product:"phone",size:15},N)}}),(0,i.default)({elm:I.current,callback:function(){return f({type_product:"laptop",size:15},x)}})}),[]),o.default.createElement("div",{className:"PhoneLaptop"},o.default.createElement("div",{ref:j,className:"PhoneLaptop_banner"},o.default.createElement(s.default,{products:y})),o.default.createElement("div",{ref:M,className:"PhoneLaptop_phone"},o.default.createElement(d.default,{products:E,title:"Phone",link:"/phone-laptop-phones"})),o.default.createElement("div",{ref:I,className:"PhoneLaptop_laptop"},o.default.createElement(d.default,{products:O,title:"Laptop",link:"/phone-laptop-laptops"})))}v.propTypes={},t.default=v},38326:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],a=!0,n=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,u=e}finally{try{!a&&l.return&&l.return()}finally{if(n)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),u=r(67294),o=f(u),l=f(r(45697)),c=f(r(17089)),i=f(r(62944)),s=f(r(61498));r(39480);var d=f(r(15765));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}r(44149);var _=function(e){function t(){var e,r,n;p(this,t);for(var u=arguments.length,o=Array(u),l=0;l<u;l++)o[l]=arguments[l];return r=n=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={translateX:0},n.refProductAnimate=function(e){null!=e&&(n.ref_product_animate=e)},n.makeBtnDisabled=function(){n.stop_auto=!0,n.just_click=!0,setTimeout((function(){n.just_click=!1}),1e3)},n.handleNextPrev=function(e){if(!n.just_click){var t=(0,c.default)("ProductsAnimate_row","ProductsAnimate__0",n.props.products.length),r=a(t,2),u=r[0],o=r[1];e(n.state.translateX,u,o),n.makeBtnDisabled()}},n.nextPhones=function(){n.handleNextPrev((function(e,t,r){n.setState({translateX:e>=r?0:e+t<r?e+t:r})}))},n.prevPhones=function(){n.handleNextPrev((function(e,t,r){n.setState({translateX:0==e?r:e-t<0?0:e-t})}))},n.autoNext=function(){n.mounted&&("false"!=n.ref_product_animate.dataset.appearance&&(n.stop_auto||n.nextPhones(),n.stop_auto=!1),setTimeout((function(){(0,i.default)(n.ref_product_animate),setTimeout((function(){n.autoNext()}),1e3)}),7e3))},m(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.just_click=!1,this.stop_auto=!0,this.autoNext()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.translateX,t=this.props.products;return o.default.createElement("div",{className:"ProductsAnimate"},o.default.createElement("h3",{className:"ProductsAnimate_title App_title margin-0"},"HOT PRODUCTS"),o.default.createElement("div",null,o.default.createElement("div",{ref:this.refProductAnimate,className:"ProductsAnimate_contain brs-5px box-shadow-1","data-appearance":"false"},o.default.createElement("div",{className:"ProductsAnimate_row",style:{transform:"translateX("+-e+"px)"}},t.map((function(e,t){return o.default.createElement("div",{className:"ProductsAnimate__"+t,key:"ProductsAnimate__"+t},o.default.createElement(d.default,{link:"/phone-laptop:"+e.id,img:e.url,name:e.name,in_stock:e.in_stock,new_price:e.new_price,old_price:e.old_price,discount:e.discount,installment:e.installment,img_or_dataset:t<6}))}))),o.default.createElement(s.default,{handleNext:this.nextPhones,handlePrev:this.prevPhones}))))}}]),t}(u.Component);_.propTypes={products:l.default.array},t.default=_},46163:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(r(67294)),n=r(93191),u=l(r(45697)),o=l(r(87934));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.products,r=e.title,u=e.link;return a.default.createElement("div",{className:"SpecProducts"},a.default.createElement("div",{className:"SpecProducts_title"},a.default.createElement("h3",{className:"App_title margin-0"},a.default.createElement(n.Link,{className:"SpecProducts_text normal-text",to:u},r))),a.default.createElement("div",{className:"SpecProducts_list"},a.default.createElement(o.default,{products:t})))}r(20802),c.propTypes={products:u.default.array},t.default=c},97817:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});const a=r.p+"static/images_icons/31deee479af934727e709c9aa5680351.svg"},82463:(e,t,r)=>{"use strict";r.r(t)},90548:(e,t,r)=>{"use strict";r.r(t)},37981:(e,t,r)=>{"use strict";r.r(t)},39480:(e,t,r)=>{"use strict";r.r(t)},44149:(e,t,r)=>{"use strict";r.r(t)},20802:(e,t,r)=>{"use strict";r.r(t)}}]);
//# sourceMappingURL=8874.js.map