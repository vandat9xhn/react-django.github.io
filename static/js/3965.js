(self.webpackChunkmy_webpack=self.webpackChunkmy_webpack||[]).push([[3965],{50586:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default_voucher_arr=t.default_payment_arr=t.default_transporter_arr=void 0;var a=n(69565),r=n(8047),o=n(7605),d=n(61426),u=["Ninja Van","Giao hang nhanh","Giao hang tiet kiem","Viettel post"],l=["Ninja 1","Ninja 2","Ninja 3","Ninja 4","Ninja 5"],c=function(){return{id:(0,a.getRandomId)(),title:(0,d.getRandomFromArr)(l),price:(0,a.getRandomNumber)(1e4,35e3),info:"Price 1",transporter_model:1}},i=function(){return{id:(0,a.getRandomId)(),info:"a b c d e f as sd\nasd asd asd asd a",name:(0,d.getRandomFromArr)(u),created_time:"2021-04-22T10:00:13Z",price_arr:(0,o.getDefaultArr)(c,3,6)}},s=(t.default_transporter_arr=function(){return(0,o.getDefaultArr)(i,3,6)},t.default_payment_arr=function(){return[{name:"COD"},{name:"BANK"},{name:"VISA"},{name:"MOMO"}]},function(){return{id:(0,a.getRandomId)(),img:(0,r.getRandomVidPic)(),name:"Free 10k",info:"a b c dsa as a\nas da as asd asd saa sd",cost:(0,a.getRandomNumber)(1e4,5e4),transporter_count:8,payments:"Tất cả các hình thức thanh toán",total_num:100,used_count:15,min_spend:5e4,end_time:(new Date).getTime()}});t.default_voucher_arr=function(){return(0,o.getDefaultArr)(s,2,6)}},46301:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(67294)),r=o(n(45697));function o(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=e.size_icon,n=e.x,r=e.y,o=e.stroke;return a.default.createElement("svg",{className:"IconSent",width:t,height:t,viewBox:n+" "+r+" 200 200",strokeLinecap:"round"},a.default.createElement("path",{d:"M50,125 80,150 150,50",strokeWidth:"20",stroke:o,fill:"none"}))}d.propTypes={size_icon:r.default.string,stroke:r.default.string,x:r.default.number,y:r.default.number},d.defaultProps={size_icon:"1rem",stroke:"var(--blue)",x:0,y:0},t.default=d},27179:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatNum=function(e){return new Intl.NumberFormat("en").format(e)}},19457:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(67294));o(n(45697)),n(72422),o(n(69951));var r=o(n(18494));function o(e){return e&&e.__esModule?e:{default:e}}function d(){return a.default.createElement("div",{className:"LearnHTML"},a.default.createElement(r.default,null),a.default.createElement("div",{className:"h-100vh"}))}d.propTypes={},t.default=d},69951:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(67294)),r=(o(n(45697)),o(n(91879)));function o(e){return e&&e.__esModule?e:{default:e}}function d(e){return a.default.createElement("div",{className:"fashion-width"},a.default.createElement(r.default,{voucher_name:"",coin:100,checked_coin:!1,item_count:14,item_checked_count:2,total_price:2e4,handleChooseVoucher:function(e){},handleCheckedCoin:function(e){},handleSaveLiked:function(e){},handleDeleteItemChecked:function(e){},handleCheckedAll:function(e){},handleGoingToBuy:function(e){}}))}d.propTypes={},t.default=d},1018:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=u(n(67294)),o=(u(n(45697)),n(30796)),d=u(n(47256));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.title,n=e.old_user_name,a=e.old_phone,u=e.old_current_address,l=e.old_specific,c=e.old_type,i=e.is_default,s=e.handleBack,f=e.handleComplete;return(0,o.useMakeBodyHidden)({hidden_header:!1,blur_header:!0}),r.default.createElement("div",{className:"LearnFsAAScreen"},r.default.createElement(d.default,{title:t,old_user_name:n,old_phone:a,old_current_address:u,old_specific:l,old_type:c,is_default:i,handleBack:s,handleComplete:f}))}n(18235),l.propTypes=a({},d.default.propTypes),t.default=l},18494:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294),r=l(a),o=(l(n(45697)),n(15130)),d=n(65394),u=l(n(1018));function l(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=(0,a.useContext)(o.context_api),n=t.openScreenFloor,l=t.closeScreenFloor;function c(){l()}function i(e){console.log(e),l()}return r.default.createElement("div",null,r.default.createElement("div",{className:"cursor-pointer",onClick:function(){(0,d.openScreenWithElm)({openScreenFloor:n,elm:r.default.createElement(u.default,{title:"Chỉnh Sửa Địa Chỉ",old_user_name:"Ngoc My",old_phone:"0361234567",old_current_address:"Hà Nội, Quận Hà Động, Phường La Khê",old_specific:"127 Hà Đông",old_type:"home",is_default:!1,handleBack:c,handleComplete:i})})}},"Open screen add new fashion address"))}c.propTypes={},t.default=c},72422:(e,t,n)=>{"use strict";n.r(t)},18235:(e,t,n)=>{"use strict";n.r(t)}}]);
//# sourceMappingURL=3965.js.map