export class Product{
    private productId: number;
    private productTitle: string;
    private productPrice: number;
    private productQuantity: number = 0;
    private productCategory: string;
    private productImage: string;

    constructor(productId: number, productTitle: string, productPrice: number, productQuantity: number, productCategory: string, productImage: string) {
        this.productId = productId;
        this.productTitle = productTitle;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.productCategory = productCategory;
        this.productImage = productImage;
    }

    public printProduct(): String {
        return `Product ID: ${this.productId}, Title: ${this.productTitle}, Price: ${this.productPrice}`;
    }

    public get ProductId(): number {
        return this.productId;
    }
    
    public set ProductId(productId: number) {
        this.productId = productId;
    }

    public get ProductTitle(): string {
        return this.productTitle;
    }

    public set ProductTitle(productTitle: string) {

        this.productTitle = productTitle;
    }

    public get ProductPrice(): number {
        return this.productPrice;
    }

    public set ProductPrice(productPrice: number) {
        this.productPrice = productPrice;
    }

    public get ProductQuantity(): number {
        return this.productQuantity;
    }

    public set ProductQuantity(productQuantity: number) {
        this.productQuantity = productQuantity;
    }

    public get ProductCategory(): string {
        return this.productCategory;
    }

    public set ProductCategory(productCategory: string) {
        this.productCategory = productCategory;
    }

    public get ProductImage(): string {
        return this.productImage;
    }

    public set ProductImage(productImage: string){
        this.productImage = productImage;
    }
}