"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productId, productTitle, productPrice, productQuantity, productCategory, productImage) {
        this.productQuantity = 0;
        this.productId = productId;
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productCategory = productCategory;
        this.productImage = productImage;
    }
    Product.prototype.printProduct = function () {
        return "Product ID: ".concat(this.productId, ", Title: ").concat(this.productTitle, ", Price: ").concat(this.productPrice);
    };
    Object.defineProperty(Product.prototype, "ProductId", {
        get: function () {
            return this.productId;
        },
        set: function (productId) {
            this.productId = productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductTitle", {
        get: function () {
            return this.productTitle;
        },
        set: function (productTitle) {
            this.productTitle = productTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductPrice", {
        get: function () {
            return this.productPrice;
        },
        set: function (productPrice) {
            this.productPrice = productPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductQuantity", {
        get: function () {
            return this.productQuantity;
        },
        set: function (productQuantity) {
            this.productQuantity = productQuantity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductCategory", {
        get: function () {
            return this.productCategory;
        },
        set: function (productCategory) {
            this.productCategory = productCategory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductImage", {
        get: function () {
            return this.productImage;
        },
        set: function (productImage) {
            this.productImage = productImage;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
