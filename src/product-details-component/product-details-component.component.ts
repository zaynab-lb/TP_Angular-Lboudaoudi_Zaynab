import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-details-component',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './product-details-component.component.html',
  styleUrl: './product-details-component.component.css',
})
export class ProductDetailsComponent {
  @Input() product: Product | null = null;
  quantity: number = 1;

  constructor(
    private routes: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService
  ) {}

 ngOnInit(): void {
    const id = this.routes.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (prod: Product) => {
          this.product = prod;
          console.log('Produit chargé :', this.product);
        },
        error: (err) => {
          console.error('Erreur chargement produit :', err);
        }
      });
    }
  }

  addToCart(): void {
    if (this.product && this.quantity > 0 && this.quantity <= (this.product.ProductQuantity || 0)) {
      this.cartService.addItem(this.product, this.quantity);
      alert('Produit ajouté au panier');
    }
  }
 
}