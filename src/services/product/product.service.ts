
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/Product';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService
{
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>('/api/products').pipe(
      map(products => products.map(p => new Product(
        p.productId,
        p.productTitle,
        p.productPrice,
        p.productQuantity,
        p.productCategory,
        p.productImage
      )))
    );
  }

  getProductById(id: string): Observable<Product> {
  //return this.http.get<Product>(`/api/products/${id}`);
  return this.http.get<any>(`/api/products/${id}`).pipe(
    map(p => new Product(
      p.productId,
      p.productTitle,
      p.productPrice,
      p.productQuantity,
      p.productCategory,
      p.productImage
    ))
  );
}

getProductStock(productId: number): Observable<number> {
  return this.http.get<any>(`/api/products/${productId}`).pipe(
    map(product => product.productQuantity)
  );
}
}