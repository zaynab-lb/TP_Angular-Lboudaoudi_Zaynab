import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
import {ProductDetailsComponent } from "../product-details-component/product-details-component.component";
import { Input } from '@angular/core';

@Component({
  selector: 'app-catalog-component',
  standalone: true,
  imports: [FormsModule, CommonModule,ProductDetailsComponent],
  templateUrl: './catalog-component.component.html',
  styleUrl: './catalog-component.component.css',
})
export class CatalogComponent {
  @Input() selectedProduct: Product | null = null;
  @Output() productSelected = new EventEmitter<Product>();

  products: Product[] = [
    new Product(1, 'Clavier', 150 , 15 , 'assets/images/clavier.jpeg'),
    new Product(2, 'Souris', 60 , 5 , 'assets/images/souris.jpeg'),
    new Product(3, 'Écran', 5000 , 40 , 'assets/images/ecran.jpeg'),
    new Product(4, 'PC portable', 9000 , 9 , 'assets/images/pc.jpeg'),
    new Product(5, 'Tapis Souris', 30 , 100 , 'assets/images/tapis.jpeg'),
  ];

  selectProduct(product: Product) {
    this.productSelected.emit(product);
  }
}