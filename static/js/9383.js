(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[9383],{9277:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.base_product_arr=void 0;var l,r=a(39727),n=a(69565),s=a(8047),o=a(7605),i=a(61426),u=a(25561),d=(l=a(41733))&&l.__esModule?l:{default:l},c=function(){var e=(0,n.getRandomNumber)(2,200),t=(0,n.getRandomNumber)(50,600),a=(0,n.getRandomNumber)(t+5,t+50),l=(0,n.getRandomNumber)(t+100,t+300),o=(0,n.getRandomNumber)(l+5,l+50);return{id:(0,n.getRandomNumber)(),name:(0,i.getRandomFromArr)(u.product_name_arr),img:(0,s.getRandomVidPic)(),flash_img:(0,r.getRandomBool)()?d.default:null,total:e,sold:(0,r.getRandomBool)()?(0,n.getRandomNumber)(0,e):0,rate_avg:(0,n.getRandomNumber)(0,50)/10,is_like:(0,r.getRandomBool)(),is_plus:(0,r.getRandomBool)(),is_mall:(0,r.getRandomBool)(),shop_deals:["ShopDacBiet","Mua 3 & giảm 3%"].slice(0,(0,r.getRandomBool)()?2:1),address:"Hà Nội",new_price:1e3*t,old_price:1e3*a,new_price_max:1e3*l,old_price_max:1e3*o,discount:(0,r.getRandomBool)()?(0,n.getRandomNumber)(1,50)+((0,r.getRandomBool)()?"%":"K"):""}};t.base_product_arr=function(){return(0,o.getDefaultArr)(c,20,30)}},5306:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.useObserveVidPic=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],l=!0,r=!1,n=void 0;try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);l=!0);}catch(e){r=!0,n=e}finally{try{!l&&o.return&&o.return()}finally{if(r)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,r.useState)("vid_pic-observe opacity-0"),2),a=t[0],l=t[1];return(0,r.useEffect)((function(){e.current&&(0,n.default)({elements:[e.current],callback:function(){l("vid_pic-observe opacity-1")}})}),[e]),a};var l,r=a(67294),n=(l=a(66810))&&l.__esModule?l:{default:l}},11880:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(67294)),r=n(a(45697));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.size_icon,a=e.color;return l.default.createElement("svg",{className:"IconsStar",width:t,height:t,viewBox:"0 0 200 200",stroke:"none"},l.default.createElement("path",{className:"IconsStar_normal",d:"M100 10L120.206 72.1885H185.595L132.694 110.623L152.901 \r 172.812L100 134.377L47.0993 172.812L67.3056 110.623L14.4049 \r 72.1885H79.7937L100 10Z",fill:a}))}s.propTypes={size_icon:r.default.string,color:r.default.string},s.defaultProps={size_icon:"1rem",color:"var(--gold)"},t.default=s},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},66810:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.elements,a=e.threshold,l=void 0===a?0:a,r=e.callback,n=void 0===r?function(){}:r,s=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.src=e.target.dataset.src,e.target.removeAttribute("data-src"),t.unobserve(e.target),n())}))}),{threshold:l});t.forEach((function(e){s.observe(e)}))}},48751:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makePriceToPrice=function(e,t){return(0,l.formatNum)(e)+"  "+(t?"- "+(0,l.formatNum)(t):"")};var l=a(27179)},75147:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e};t.API_IsLogin=i,t.API_IsLogin_URL=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return i(l({},e,{url:t}),l({},e,{url:a}))};var r=o(a(87421)),n=o(a(62667)),s=a(50918);function o(e){return e&&e.__esModule?e:{default:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return 1!=localStorage.is_login||s.is_api_fake?(0,n.default)(t):(0,r.default)(e)}},51468:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_FashionUserContentRate_R=t.API_FashionRate_L=t.API_FashionProduct_R=t.API_FsProductDetail_L=t.API_FashionProduct_L=t.API_FashionHotImage_L=t.API_FashionShop_R=t.API_FashionShop_L=void 0;var l,r=(l=a(62667))&&l.__esModule?l:{default:l},n=a(75147),s=a(50918),o=a(66925),i=a(25561),u=a(9277),d=a(55847),c=a(81524);t.API_FashionShop_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.API_FakeReal)(Array(6).fill(),(function(){return(0,r.default)({url:"api/shopee/product-l/",method:"GET",params:e})}),e)},t.API_FashionShop_R=function(e){return(0,s.API_FakeReal)((0,o.default_shop_obj)(),(function(){return(0,r.default)({url:"api/shopee/shop-r/"+e+"/",method:"GET"})}))},t.API_FashionHotImage_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.API_FakeReal)((0,i.default_hot_image_arr)(),(function(){return(0,r.default)({url:"api/shopee/l-hot-image/",method:"GET",params:e})}))},t.API_FashionProduct_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.API_FakeReal)((0,u.base_product_arr)(),(function(){return(0,r.default)({url:"api/shopee/product-l/",method:"GET",params:e})}),e)},t.API_FsProductDetail_L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.API_FakeReal)((0,d.default_product_detail_arr)(),(function(){return(0,r.default)({url:"api/shopee/product-detail-l/",method:"GET",params:e})}),e)},t.API_FashionProduct_R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,s.API_FakeReal)((0,d.default_product_obj)(),(function(){return(0,n.API_IsLogin_URL)({method:"GET",params:t},"api/shopee/product-token-r/"+e+"/","api/shopee/product-r/"+e+"/")}))},t.API_FashionRate_L=function(e){return(0,s.API_FakeReal)((0,d.default_rate_arr)(),(function(){return(0,r.default)({url:"api/shopee/product-rate-l/",method:"GET",params:e})}),e)},t.API_FashionUserContentRate_R=function(e){return(0,s.API_FakeReal)((0,c.default_content_more)(),(function(){return(0,r.default)({url:"api/shopee/rate-r/",method:"GET",params:e})}),e)}},65535:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(67294)),r=s(a(45697)),n=s(a(18416));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.rate_avg,a=e.size_icon,r=e.color,s=e.handleChangeRate,o=[1,2,3,4,5].map((function(e){var a=t+1-e;return a<=0?0:a>=1?1:a}));return l.default.createElement("div",{className:"StarsRate"},l.default.createElement("div",{className:"display-flex align-items-center"},o.map((function(e,t){return l.default.createElement(n.default,{key:""+t,rate_icon:e,star_ix:t+1,size_icon:a,color:r,handleChangeRate:s})}))))}o.propTypes={rate_avg:r.default.number,size_icon:r.default.string,handleChangeRate:r.default.func},o.defaultProps={rate_avg:5},t.default=o},18416:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(67294)),r=s(a(45697)),n=s(a(11880));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.star_ix,a=e.rate_icon,r=e.size_icon,s=e.color,o=e.handleChangeRate;return l.default.createElement("div",{className:"StarRate pos-rel",onClick:function(){o(t)}},l.default.createElement(n.default,{color:"var(--md-bg-ccc)",size_icon:r}),l.default.createElement("div",{className:"StarRate_rate pos-abs top-0 left-0 overflow-hidden "+(a?"":"display-none"),style:{width:a?100*a+"%":void 0}},l.default.createElement(n.default,{size_icon:r,color:s})))}a(54915),o.propTypes={rate_avg:r.default.number,star_ix:r.default.number,size_icon:r.default.string,handleChangeRate:r.default.func},o.defaultProps={handleChangeRate:function(){}},t.default=o},46371:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(67294)),r=n(a(45697));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.discount;return l.default.createElement("div",{className:"DiscountSymbol pos-rel"},l.default.createElement("div",{className:"text-align-center"},l.default.createElement("div",{className:"text-red font-13px"},t),l.default.createElement("div",{className:"text-white font-11px"},"GIẢM")))}a(38282),s.propTypes={discount:r.default.string},t.default=s},19400:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r=a(67294),n=u(r),s=u(a(45697)),o=a(5306),i=a(32006);function u(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.vid_pic,a=e.type,s=e.video_props,u=e.img_props,d=(0,i.type_video_or_img)(t,a),c=(0,r.useRef)(null),f=(0,o.useObserveVidPic)(c);return"img"==d?n.default.createElement("img",l({ref:c,className:""+f,"data-src":t,alt:""},u)):"video"==d?n.default.createElement("video",l({ref:c,className:""+f,"data-src":t},s)):null}d.propTypes={vid_pic:s.default.string,type:s.default.string,video_props:s.default.object,img_props:s.default.object},d.defaultProps={video_props:{},img_props:{}},t.default=d},10339:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r=d(a(67294)),n=d(a(45697)),s=a(93191),o=a(55852),i=d(a(22080)),u=d(a(71467));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.id,a=e.img,l=e.flash_img,n=e.discount,d=e.is_like,c=e.is_mall,f=e.is_plus,_=e.name,m=e.rate_avg,p=e.sold,h=e.shop_deals,v=e.shop_discount,g=e.address,b=e.old_price,E=e.old_price_max,P=e.new_price,y=e.new_price_max,F=e.show_heart_rate,N=e.show_sold,x=e.show_address,w=e.use_same;return r.default.createElement("div",{className:"FashionFaceItem pos-rel bg-primary h-100per "+(o.IS_MOBILE?"FashionFaceItem-mobile":"FashionFaceItem-pc")},r.default.createElement(s.Link,{to:"/fashion:"+t,className:"normal-text",onClick:function(e){e.stopPropagation()}},r.default.createElement("div",{className:"FashionFaceItem_contain"},r.default.createElement("div",{className:"FashionFaceItem_head pos-rel"},r.default.createElement("div",{className:"pos-abs-100"},r.default.createElement(i.default,{img:a,flash_img:l,discount:n,is_like:d,is_mall:c,is_plus:f}))),r.default.createElement("div",null,r.default.createElement(u.default,{name:_,rate_avg:m,sold:p,address:g,shop_deals:h,shop_discount:v,old_price:b,new_price:P,old_price_max:E,new_price_max:y,show_heart_rate:F,show_sold:N,show_address:x})))),!w||o.IS_MOBILE?null:r.default.createElement("div",{className:"FashionFaceItem_same pos-abs top-100per left-0 w-100per z-index-lv1 display-none"},r.default.createElement(s.Link,{to:"/fashion/same-product?id="+t},r.default.createElement("div",{className:"FashionFaceItem_same_contain padding-8px bg-fashion-red text-align-center"},r.default.createElement("span",{className:"text-white font-500"},"Tìm sản phẩm tương tự")))))}a(68404),a(52101),c.propTypes=l({id:n.default.number},i.default.propTypes,u.default.propTypes,{use_same:n.default.bool}),c.defaultProps={use_same:!0},t.default=c},22080:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(a(67294)),r=i(a(45697)),n=i(a(46371)),s=i(a(54967)),o=i(a(44582));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.img,a=e.flash_img,r=e.discount,i=e.is_like,u=e.is_mall,d=e.is_plus;return l.default.createElement("div",{className:"FashionFaceItemBd h-100per"},l.default.createElement("div",{className:"FashionFaceItemBd_contain pos-rel h-100per bg-primary"},l.default.createElement(o.default,{img:t,flash_img:a}),l.default.createElement("div",{className:"pos-abs left-0 top-0"},l.default.createElement(s.default,{is_like:i,is_mall:u,is_plus:d})),r?l.default.createElement("div",{className:"pos-abs right-0 top-0"},l.default.createElement(n.default,{discount:r})):null))}a(89251),u.propTypes={img:r.default.string,flash_img:r.default.string,discount:r.default.string,is_like:r.default.bool,is_mall:r.default.bool,is_plus:r.default.bool},t.default=u},71467:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(67294)),r=d(a(45697)),n=a(48751),s=d(a(65535)),o=d(a(37866));a(499);var i=d(a(7938)),u=d(a(77595));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.name,a=e.sold,r=e.rate_avg,d=e.shop_deals,c=e.address,f=e.shop_discount,_=e.old_price,m=e.old_price_max,p=e.new_price,h=e.new_price_max,v=e.show_heart_rate,g=e.show_sold,b=e.show_address;return l.default.createElement("div",{className:"FashionFaceItemFoot padding-8px font-12px text-secondary"},l.default.createElement("div",{className:"FashionFaceItemFoot_name overflow-hidden"},l.default.createElement("span",null,t)),l.default.createElement("div",{className:"FashionFaceItemFoot_tag margin-top-2px margin-bottom-2px display-flex align-items-center font-10px overflow-hidden"},f?l.default.createElement(u.default,{discount:f,class_main:"text-nowrap"}):null,d.map((function(e,t){return l.default.createElement(i.default,{key:t,label:e,class_main:"margin-left-2px fashion-value-padding line-12px color-fashion font-10px text-nowrap"})}))),l.default.createElement("div",{className:""},l.default.createElement("div",{className:"text-nowrap"},0==_||_?l.default.createElement("span",null,l.default.createElement("del",null,(0,n.makePriceToPrice)(_,m))):null,l.default.createElement("span",{className:"text-red"},"₫ ",(0,n.makePriceToPrice)(p,h))),v?l.default.createElement("div",{className:"flex-between-center"},l.default.createElement("div",{className:"FashionFaceItemFoot_heart",onClick:function(e){e.preventDefault(),handleLike()}},l.default.createElement(o.default,null)),l.default.createElement("div",null,l.default.createElement(s.default,{rate_avg:r,size_icon:"11px"}))):null,g?l.default.createElement("div",{className:"text-align-end"},l.default.createElement("span",{className:"text-third"},"Đã bán ",a)):null),b?l.default.createElement("div",{className:"text-align-end"},l.default.createElement("span",{className:"text-third"},c)):null)}c.propTypes={name:r.default.string,sold:r.default.number,rate_avg:r.default.number,shop_deals:r.default.array,shop_discount:r.default.string,address:r.default.string,old_price:r.default.number,old_price_max:r.default.number,new_price:r.default.number,new_price_max:r.default.number,show_heart_rate:r.default.bool,show_sold:r.default.bool,show_address:r.default.bool},c.defaultProps={show_heart_rate:!0,show_sold:!0,show_address:!0},t.default=c},44582:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s(a(67294)),r=s(a(45697)),n=s(a(19400));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.img,a=e.flash_img;return l.default.createElement(l.default.Fragment,null,l.default.createElement(n.default,{vid_pic:t,type:"img",img_props:{className:"pos-abs-100 wh-100 object-fit-cover"}}),a?l.default.createElement(n.default,{vid_pic:a,type:"img",img_props:{className:"pos-abs-100 wh-100"}}):null)}o.propTypes={img:r.default.string,flash_img:r.default.string},t.default=o},54967:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(67294)),r=n(a(45697));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.is_like,a=e.is_mall,r=e.is_plus,n=e.class_text,s=e.use_side;return t||a?a?l.default.createElement("div",{className:"FashionMallLike pos-rel"},s?l.default.createElement("div",{className:"FashionMallLike_side FashionMallLike_side-mall pos-abs top-0 right-100per h-100per bg-fashion-mall"}):null,l.default.createElement("div",{className:"pos-rel  padding-x-4px bg-fashion-mall text-nowrap text-white font-500 "+n},"Mall")):t?l.default.createElement("div",{className:"FashionMallLike pos-rel"},s?l.default.createElement("div",{className:"FashionMallLike_side FashionMallLike_side-like pos-abs top-0 right-100per h-100per bg-fashion-red"}):null,l.default.createElement("div",{className:"pos-rel padding-x-4px bg-fashion-red text-nowrap text-white font-500 "+n},"Yêu thích ",r?"+":"")):void 0:null}a(92962),s.propTypes={is_like:r.default.bool,is_mall:r.default.bool,is_plus:r.default.bool,use_side:r.default.bool,class_text:r.default.string},s.defaultProps={is_like:!1,is_mall:!1,is_plus:!1,use_side:!0,class_text:""},t.default=s},7938:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(67294)),r=n(a(45697));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.label,a=e.class_main;return l.default.createElement("div",{className:"FsShopDealLabel "+a},t)}a(87008),s.propTypes={label:r.default.string,class_main:r.default.string},s.defaultProps={class_main:"fashion-value-padding color-fashion font-12px"},t.default=s},77595:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n(a(67294)),r=n(a(45697));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.discount,a=e.class_main;return l.default.createElement("div",{className:"FsShopDiscountLabel bg-discount-gold pos-rel text-white "+a},l.default.createElement("span",null,"Giảm ",t),l.default.createElement("div",{className:"FsShopDiscountLabel_side pos-abs left-0 trans-x--50per top-0 h-100per"}),l.default.createElement("div",{className:"FsShopDiscountLabel_side pos-abs left-100per trans-x--50per top-0 h-100per"}))}a(92293),s.propTypes={discount:r.default.string,class_main:r.default.string},s.defaultProps={class_main:""},t.default=s},41733:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});const l=a.p+"static/images_icons/4accffc776bd68a771e517af8d27f3c3.png"},54915:(e,t,a)=>{"use strict";a.r(t)},38282:(e,t,a)=>{"use strict";a.r(t)},68404:(e,t,a)=>{"use strict";a.r(t)},52101:(e,t,a)=>{"use strict";a.r(t)},89251:(e,t,a)=>{"use strict";a.r(t)},499:(e,t,a)=>{"use strict";a.r(t)},92962:(e,t,a)=>{"use strict";a.r(t)},87008:(e,t,a)=>{"use strict";a.r(t)},92293:(e,t,a)=>{"use strict";a.r(t)}}]);
//# sourceMappingURL=9383.js.map