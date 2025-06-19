import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { Product } from '../models/Product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;

   constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Erreur lors du chargement des produits", err);
        this.isLoading = false;
      }
    });
  }
}
