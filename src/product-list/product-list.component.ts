import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { Product } from '../models/Product';
import { ProductService } from '../services/product/product.service';
import { Router } from '@angular/router';

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

   constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  
  loadProducts(): void {
  this.productService.getProducts().subscribe(products => {
    this.products = products;
  });
}

  goToAddProduct(): void {
  this.router.navigate(['/add-product']);
}

refresh(): void {
    this.loadProducts();
  }

  editProduct(id: number): void {
  this.router.navigate(['/edit-product', id]);
}


}
