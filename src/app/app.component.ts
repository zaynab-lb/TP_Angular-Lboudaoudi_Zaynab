import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogComponent } from "../catalog-component/catalog-component.component";
import { Product } from '../models/Product';
import { ProductDetailsComponent } from "../product-details-component/product-details-component.component";

@Component({
  selector: 'app-root',
  imports: [CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP2';
  selectedProduct: Product | null = null;

  onProductSelected(product: Product | null) {
    this.selectedProduct = product;
  }
}