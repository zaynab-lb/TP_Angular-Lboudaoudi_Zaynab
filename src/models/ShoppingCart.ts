import { ShoppingCartItem } from "./ShoppingCartItem";
export class ShoppingCart{
    private itemsProduct : ShoppingCartItem[] = [];
    private total : number = 0.0;

    constructor() {}

    public addItem(item: ShoppingCartItem): void {
        let found = false;
        for (let i = 0; i < this.itemsProduct.length; i++) {
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
    }

    public removeItem(item: ShoppingCartItem): void {
        for (let i = 0; i < this.itemsProduct.length; i++) {
            if (this.itemsProduct[i].getItemProduct().getProductId() === item.getItemProduct().getProductId()) {
                this.itemsProduct[i].subtractProduct(item);
                this.total -= item.getItemProduct().getProductPrice() * item.getQuantity();
                if (this.itemsProduct[i].getQuantity() <= 0) {
                    this.itemsProduct.splice(i, 1);
                }
                break;
            }
        }
    }

    public getItems(): ShoppingCartItem[] {
        return this.itemsProduct;
    }

    public setItemsProduct(itemsProduct: ShoppingCartItem[]): void {
        this.itemsProduct = itemsProduct;
    }

    public getTotal(): number {
        return this.total;
    }

    public setTotal(total: number): void {
        this.total = total;
    }
}