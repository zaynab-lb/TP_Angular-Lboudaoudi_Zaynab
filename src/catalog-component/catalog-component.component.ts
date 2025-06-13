import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details-component/product-details-component.component";
import { ProductService } from '../services/product/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-catalog-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css'],
})
export class CatalogComponent implements OnInit {
  @Input() selectedProduct: Product | null = null;
  @Output() productSelected = new EventEmitter<Product>();

  products: Product[] = [];
  filteredProducts: Product[] = [];
  isAuthenticated: boolean = false;
  userName: string = '';

  @Input()
  myValue: string = "";
  filter: string = "";



  constructor(private productService: ProductService, private route: ActivatedRoute, private userService: UserService) {}


  ngOnInit(): void {
    this.checkAuthStatus();
    //this.loadProducts(this.filteredProducts);
    this.route.queryParams.subscribe(params => {
      const filter = params['filter'] || null;
      this.loadProducts(filter);
      //this.filteredProducts = filter ? this.products.filter(p => p.ProductCategory === filter) : this.products;
    });
  }

  checkAuthStatus(): void {
    this.isAuthenticated = this.userService.isAuthenticated();
    if (this.isAuthenticated) {
      const user = this.userService.getCurrentUser();
      this.userName = user ? user.fullName() : '';
    }
  }

  signOut(): void {
    this.userService.signOut();
    this.isAuthenticated = false;
    this.userName = '';
  }

  private loadProducts(filter: string | null): void {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.filteredProducts = filter
          ? products.filter(p => p.ProductCategory === filter)
          : products;
      },
      error: (error) => {
        console.error('Error loading products:', error);
      }
    });
  }

  selectProduct(product: Product) {
    this.productSelected.emit(product);
  }
}