"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartItem = void 0;
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(itemProduct, quantity) {
        this.quantity = 0;
        this.itemProduct = itemProduct;
        this.quantity = quantity;
    }
    ShoppingCartItem.prototype.addProduct = function (item) {
        if (this.itemProduct.getProductId() === item.getItemProduct().getProductId())
            this.quantity += item.getQuantity();
    };
    ShoppingCartItem.prototype.subtractProduct = function (item) {
        if (this.itemProduct.getProductId() === item.getItemProduct().getProductId())
            this.quantity -= item.getQuantity();
    };
    ShoppingCartItem.prototype.displayProductItem = function () {
        return "Product ID: ".concat(this.itemProduct.printProduct, ", Quantity: ").concat(this.quantity);
    };
    ShoppingCartItem.prototype.getItemProduct = function () {
        return this.itemProduct;
    };
    ShoppingCartItem.prototype.setItemProduct = function (itemProduct) {
        this.itemProduct = itemProduct;
    };
    ShoppingCartItem.prototype.getQuantity = function () {
        return this.quantity;
    };
    ShoppingCartItem.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    return ShoppingCartItem;
}());
exports.ShoppingCartItem = ShoppingCartItem;
