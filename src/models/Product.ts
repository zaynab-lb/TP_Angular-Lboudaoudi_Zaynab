export class Product{
    private productId: number;
    private productTitle: string;
    private productPrice: number;
    private productQuantity: number = 0;
    private productImage: string;

    constructor(productId: number, productTitle: string, productPrice: number, productQuantity: number, productImage: string) {
        this.productId = productId;
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productImage = productImage;
    }

    public printProduct(): String {
        return `Product ID: ${this.productId}, Title: ${this.productTitle}, Price: ${this.productPrice}`;
    }

    public getProductId(): number {
        return this.productId;
    }
    
    public setProductId(productId: number): void {
        this.productId = productId;
    }

    public getProductTitle(): string {
        return this.productTitle;
    }

    public setProductTitle(productTitle: string): void {
        this.productTitle = productTitle;
    }

    public getProductPrice(): number {
        return this.productPrice;
    }

    public setProductPrice(productPrice: number): void {
        this.productPrice = productPrice;
    }

    public getProductQuantity(): number {
        return this.productQuantity;
    }

    public setProductQuantity(productQuantity: number): void {
        this.productQuantity = productQuantity;
    }

    public getProductImage(): string {
        return this.productImage;
    }

    public setProductImage(productImage: string): void {
        this.productImage = productImage;
    }
}