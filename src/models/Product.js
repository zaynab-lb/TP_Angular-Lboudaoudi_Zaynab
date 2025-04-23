"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productId, productTitle, productPrice, productQuantity, productImage) {
        this.productQuantity = 0;
        this.productId = productId;
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productImage = productImage;
    }
    Product.prototype.printProduct = function () {
        return "Product ID: ".concat(this.productId, ", Title: ").concat(this.productTitle, ", Price: ").concat(this.productPrice);
    };
    Product.prototype.getProductId = function () {
        return this.productId;
    };
    Product.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    Product.prototype.getProductTitle = function () {
        return this.productTitle;
    };
    Product.prototype.setProductTitle = function (productTitle) {
        this.productTitle = productTitle;
    };
    Product.prototype.getProductPrice = function () {
        return this.productPrice;
    };
    Product.prototype.setProductPrice = function (productPrice) {
        this.productPrice = productPrice;
    };
    Product.prototype.getProductQuantity = function () {
        return this.productQuantity;
    };
    Product.prototype.setProductQuantity = function (productQuantity) {
        this.productQuantity = productQuantity;
    };
    Product.prototype.getProductImage = function () {
        return this.productImage;
    };
    Product.prototype.setProductImage = function (productImage) {
        this.productImage = productImage;
    };
    return Product;
}());
exports.Product = Product;
