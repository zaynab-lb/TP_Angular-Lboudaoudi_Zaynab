import { Product } from './Product';
export class ShoppingCartItem {
    private itemProduct : Product;
    private quantity : number = 0;

    constructor(itemProduct: Product, quantity: number) {
        this.itemProduct = itemProduct;
        this.quantity = quantity;
    }

    public addProduct(item: ShoppingCartItem): void {
        if (this.itemProduct.getProductId() === item.getItemProduct().getProductId())
            this.quantity += item.getQuantity();
    }
    
    public subtractProduct(item: ShoppingCartItem): void {
        if (this.itemProduct.getProductId() === item.getItemProduct().getProductId())
            this.quantity -= item.getQuantity();
    }

    public displayProductItem(): string {
        return `Product ID: ${this.itemProduct.printProduct}, Quantity: ${this.quantity}`;
    }

    public getItemProduct(): Product {
        return this.itemProduct;
    }

    public setItemProduct(itemProduct: Product): void {
        this.itemProduct = itemProduct;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }
}