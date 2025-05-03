import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>('/api/products').pipe(
      map(products => products.map(p => new Product(
        p.productId,
        p.productTitle,
        p.productPrice,
        p.productQuantity,
        p.productImage
      )))
    );
  }
}