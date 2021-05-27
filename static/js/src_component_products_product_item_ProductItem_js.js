(self["webpackChunkmy_webpack"] = self["webpackChunkmy_webpack"] || []).push([["src_component_products_product_item_ProductItem_js"],{

/***/ "./src/_some_function/FormatNum.js":
/*!*****************************************!*\
  !*** ./src/_some_function/FormatNum.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var formatNum = exports.formatNum = function formatNum(num) {
    return new Intl.NumberFormat('en').format(num);
};

/***/ }),

/***/ "./src/_some_function/ImageObserve.js":
/*!********************************************!*\
  !*** ./src/_some_function/ImageObserve.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
/**
 * observe images_videos(HTML ELEMENT) then remove attr_remove(attribute like [data-source])
*/
var objObserver = function objObserver() {
    var images_videos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NodeList || HTMLCollection;
    var attr_remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (images_videos.length) {
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.removeAttribute(attr_remove);
                    observer.unobserve(entry.target);
                }
            });
        });
        images_videos.forEach(function (image) {
            return observer.observe(image);
        });
    }
};

exports.default = objObserver;

// 

var observerVidPic = exports.observerVidPic = function observerVidPic() {
    var image_video = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLPictureElement || HTMLVideoElement;
    var attr_remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (image_video) {
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.removeAttribute(attr_remove);
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(image_video);
    }
};

/***/ }),

/***/ "./src/component/products/product_item/ProductItem.js":
/*!************************************************************!*\
  !*** ./src/component/products/product_item/ProductItem.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormatNum = __webpack_require__(/*! ../../../_some_function/FormatNum */ "./src/_some_function/FormatNum.js");

var _ImageObserve = __webpack_require__(/*! ../../../_some_function/ImageObserve */ "./src/_some_function/ImageObserve.js");

var _SkeletonDiv = __webpack_require__(/*! ../../skeleton/skeleton_div/SkeletonDiv */ "./src/component/skeleton/skeleton_div/SkeletonDiv.js");

var _SkeletonDiv2 = _interopRequireDefault(_SkeletonDiv);

var _image_loading = __webpack_require__(/*! ../../../../image/image_loading.svg */ "./image/image_loading.svg");

var _image_loading2 = _interopRequireDefault(_image_loading);

__webpack_require__(/*! ./ProductItem.scss */ "./src/component/products/product_item/ProductItem.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
ProductItem.propTypes = {
    // link
    link: _propTypes2.default.string,
    // index for image observer
    img_or_dataset: _propTypes2.default.bool,
    // properties
    img: _propTypes2.default.string,
    name: _propTypes2.default.string,
    in_stock: _propTypes2.default.string,
    new_price: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    old_price: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    discount: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    installment: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
//


ProductItem.defaultProps = {
    img_or_dataset: true
};

//
function ProductItem(props) {
    var link = props.link,
        img_or_dataset = props.img_or_dataset,
        img = props.img,
        name = props.name,
        in_stock = props.in_stock,
        new_price = props.new_price,
        old_price = props.old_price,
        discount = props.discount,
        installment = props.installment;

    //

    var ref_image = (0, _react.useRef)(null);

    //
    (0, _react.useEffect)(function () {
        ref_image.current != null && (0, _ImageObserve.observerVidPic)(ref_image.current, 'data-src');
    }, [img]);

    //
    function handleOnClickLink(e) {
        !name && e.preventDefault();
    }

    // 
    return _react2.default.createElement(
        'div',
        { className: 'ProductItem', title: name },
        _react2.default.createElement(
            _reactRouterDom.Link,
            {
                to: link,
                className: 'ProductItem_link normal-text',
                onClick: handleOnClickLink
            },
            _react2.default.createElement(
                'div',
                { className: 'ProductItem_img' },
                !img ? _react2.default.createElement('img', { src: _image_loading2.default, alt: '' }) : img_or_dataset ? _react2.default.createElement('img', { src: img, alt: '' }) : _react2.default.createElement('img', { ref: ref_image, 'data-src': img, alt: '' })
            ),
            name ? _react2.default.createElement(
                'div',
                { className: 'ProductItem_info' },
                _react2.default.createElement(
                    'div',
                    { className: 'ProductItem_name label-field' },
                    name
                ),
                in_stock && _react2.default.createElement(
                    'div',
                    { className: 'text-red' },
                    in_stock
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ProductItem_price display-flex align-items-center flex-wrap' },
                    new_price && _react2.default.createElement(
                        'div',
                        { className: 'label-field font-italic' },
                        (0, _FormatNum.formatNum)(new_price)
                    ),
                    old_price && _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'ProductItem_old-price' },
                            (0, _FormatNum.formatNum)(old_price)
                        ),
                        _react2.default.createElement(
                            'sup',
                            { className: 'dv-vnd' },
                            '\u0111'
                        )
                    ),
                    discount && _react2.default.createElement(
                        'div',
                        { className: 'ProductItem_discount text-red' },
                        -discount + '%'
                    ),
                    installment !== undefined && _react2.default.createElement(
                        'div',
                        { className: 'ProductItem_installment brs-5px' },
                        installment,
                        '%'
                    )
                )
            ) : _react2.default.createElement(_SkeletonDiv2.default, { num: 2 })
        )
    );
}

exports.default = ProductItem;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/products/product_item/ProductItem.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/products/product_item/ProductItem.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ProductItem_discount, .ProductItem_installment {\n  position: absolute;\n  top: 5px;\n  font-size: 11px;\n}\n\n/* --------------------------------- */\n.ProductItem {\n  position: relative;\n  width: 12rem;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n.ProductItem:hover .ProductItem_img img {\n  bottom: 0.2rem;\n}\n\n.ProductItem_img {\n  height: 11rem;\n}\n.ProductItem_img img {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  transition: all 0.15s;\n}\n\n.ProductItem_info {\n  font-size: 14px;\n}\n\n.ProductItem_name {\n  display: -webkit-box;\n  -webkit-box-orient: horizontal;\n  -webkit-line-clamp: 3;\n  line-height: 1.5rem;\n  max-height: 3rem;\n  overflow: hidden;\n  text-transform: lowercase;\n}\n\n.ProductItem_price > div {\n  margin-right: 0.3rem;\n}\n\n.ProductItem_old-price {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n\n.ProductItem_installment {\n  left: 0;\n  padding: 0 0.2rem;\n  background-color: var(--gold);\n}\n\n.ProductItem_discount {\n  right: 0;\n}\n\n@media (max-width: 500px) {\n  .ProductItem {\n    width: 8rem;\n  }\n\n  .ProductItem_img {\n    height: 7.5rem;\n  }\n\n  .ProductItem_price > div {\n    margin-right: 0.2rem;\n  }\n}\n@media (max-width: 350px) {\n  .ProductItem {\n    width: 7rem;\n  }\n\n  .ProductItem_img {\n    height: 6.5rem;\n  }\n}\n@media (max-width: 280px) {\n  .ProductItem {\n    width: 6.5rem;\n  }\n\n  .ProductItem_img {\n    height: 6rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/component/products/product_item/ProductItem.scss"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,QAAA;EACA,eAAA;AAAJ;;AAGA,sCAAA;AAEA;EACI,kBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AADJ;AAKY;EACI,cAAA;AAHhB;;AASA;EACI,aAAA;AANJ;AAOI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EAEA,kBAAA;EACA,qBAAA;AANR;;AAUA;EACI,eAAA;AAPJ;;AAUA;EACI,oBAAA;EACA,8BAAA;EACA,qBAAA;EAEA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,yBAAA;AARJ;;AAYI;EACI,oBAAA;AATR;;AAaA;EACI,6BAAA;EACA,eAAA;AAVJ;;AAaA;EAEI,OAAA;EAEA,iBAAA;EACA,6BAAA;AAZJ;;AAeA;EAEI,QAAA;AAbJ;;AAiBA;EACI;IACI,WAAA;EAdN;;EAiBE;IACI,cAAA;EAdN;;EAkBM;IACI,oBAAA;EAfV;AACF;AAmBA;EACI;IACI,WAAA;EAjBN;;EAoBE;IACI,cAAA;EAjBN;AACF;AAoBA;EACI;IACI,aAAA;EAlBN;;EAqBE;IACI,YAAA;EAlBN;AACF","sourcesContent":["// installment discount\r\n%installment-discount {\r\n    position: absolute;\r\n    top: 5px;\r\n    font-size: 11px;\r\n}\r\n\r\n/* --------------------------------- */\r\n\r\n.ProductItem {\r\n    position: relative;\r\n    width: 12rem;\r\n    padding: 0.5rem;\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n        .ProductItem_img {\r\n            img {\r\n                bottom: 0.2rem;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.ProductItem_img {\r\n    height: 11rem;\r\n    img {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n\r\n        border-radius: 5px;\r\n        transition: all 0.15s;\r\n    }\r\n}\r\n\r\n.ProductItem_info {\r\n    font-size: 14px;\r\n}\r\n\r\n.ProductItem_name {\r\n    display: -webkit-box;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-line-clamp: 3;\r\n\r\n    line-height: 1.5rem;\r\n    max-height: 3rem;\r\n    overflow: hidden;\r\n    text-transform: lowercase;\r\n}\r\n\r\n.ProductItem_price {\r\n    & > div {\r\n        margin-right: 0.3rem;\r\n    }\r\n}\r\n// .\r\n.ProductItem_old-price {\r\n    text-decoration: line-through;\r\n    font-size: 11px;\r\n}\r\n// .\r\n.ProductItem_installment {\r\n    @extend %installment-discount;\r\n    left: 0;\r\n\r\n    padding: 0 0.2rem;\r\n    background-color: var(--gold);\r\n}\r\n// .\r\n.ProductItem_discount {\r\n    @extend %installment-discount;\r\n    right: 0;\r\n}\r\n\r\n//\r\n@media (max-width: 500px) {\r\n    .ProductItem {\r\n        width: 8rem;\r\n    }\r\n\r\n    .ProductItem_img {\r\n        height: 7.5rem;\r\n    }\r\n\r\n    .ProductItem_price {\r\n        & > div {\r\n            margin-right: 0.2rem;\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .ProductItem {\r\n        width: 7rem;\r\n    }\r\n\r\n    .ProductItem_img {\r\n        height: 6.5rem;\r\n    }\r\n}\r\n\r\n@media (max-width: 280px) {\r\n    .ProductItem {\r\n        width: 6.5rem;\r\n    }\r\n\r\n    .ProductItem_img {\r\n        height: 6rem;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./image/image_loading.svg":
/*!*********************************!*\
  !*** ./image/image_loading.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/images_icons/31deee479af934727e709c9aa5680351.svg");

/***/ }),

/***/ "./src/component/products/product_item/ProductItem.scss":
/*!**************************************************************!*\
  !*** ./src/component/products/product_item/ProductItem.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js!./ProductItem.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/component/products/product_item/ProductItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ProductItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_component_products_product_item_ProductItem_js.js.map