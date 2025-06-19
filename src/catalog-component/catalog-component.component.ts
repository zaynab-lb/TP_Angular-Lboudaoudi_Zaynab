import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details-component/product-details-component.component";
import { ProductService } from '../services/product/product.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { MenuComponent } from '../menu/menu.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-catalog-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, MenuComponent],
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



  constructor(private productService: ProductService, private route: ActivatedRoute, private userService: UserService,  private router: Router) {}


  ngOnInit(): void {
    this.checkAuthStatus();

    this.loadProductsFromRoute();
    //this.loadProducts(this.filteredProducts);
   this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadProductsFromRoute();
    });
  }

   loadProductsFromRoute() {
    this.route.queryParams.subscribe(params => {
      const filter = params['filter'] || null;
      this.loadProducts(filter);
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