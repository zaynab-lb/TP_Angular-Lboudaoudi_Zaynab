import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details-component/product-details-component.component";
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalog-component',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductDetailsComponent],
  templateUrl: './catalog-component.component.html',
  styleUrl: './catalog-component.component.css',
})
export class CatalogComponent implements OnInit {
  @Input() selectedProduct: Product | null = null;
  @Output() productSelected = new EventEmitter<Product>();

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        // Vous pourriez ajouter ici une gestion d'erreur plus élaborée
      }
    });
  }

  selectProduct(product: Product) {
    this.productSelected.emit(product);
  }
}