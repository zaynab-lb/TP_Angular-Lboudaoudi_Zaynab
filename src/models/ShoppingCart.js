"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.itemsProduct = [];
        this.total = 0.0;
    }
    ShoppingCart.prototype.addItem = function (item) {
        var found = false;
        for (var i = 0; i < this.itemsProduct.length; i++) {
            if (this.itemsProduct[i].getItemProduct().getProductId() === item.getItemProduct().getProductId()) {
                this.itemsProduct[i].addProduct(item);
                found = true;
                break;
            }
        }
        if (!found) {
            this.itemsProduct.push(item);
        }
        this.total += item.getItemProduct().getProductPrice() * item.getQuantity();
    };
    ShoppingCart.prototype.removeItem = function (item) {
        for (var i = 0; i < this.itemsProduct.length; i++) {
            if (this.itemsProduct[i].getItemProduct().getProductId() === item.getItemProduct().getProductId()) {
                this.itemsProduct[i].subtractProduct(item);
                this.total -= item.getItemProduct().getProductPrice() * item.getQuantity();
                if (this.itemsProduct[i].getQuantity() <= 0) {
                    this.itemsProduct.splice(i, 1);
                }
                break;
            }
        }
    };
    ShoppingCart.prototype.getItems = function () {
        return this.itemsProduct;
    };
    ShoppingCart.prototype.setItemsProduct = function (itemsProduct) {
        this.itemsProduct = itemsProduct;
    };
    ShoppingCart.prototype.getTotal = function () {
        return this.total;
    };
    ShoppingCart.prototype.setTotal = function (total) {
        this.total = total;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
