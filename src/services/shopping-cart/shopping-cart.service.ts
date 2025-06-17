// shopping-cart.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../../models/Product';
import { ShoppingCart} from '../../models/ShoppingCart';
import { UserService } from '../user/user.service';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartItem } from '../../models/ShoppingCartItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private carts: {[key: number]: ShoppingCart} = {};
  private cartItemCountSubject = new BehaviorSubject<number>(0);

  constructor(private userService: UserService, private http: HttpClient) {
    this.updateCartItemCount();
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCountSubject.asObservable();
  }

  // Méthode pour mettre à jour le compteur
  private updateCartItemCount(): void {
    const user = this.userService.getCurrentUser();
    if (user && this.carts[user.UserId]) {
      const count = this.carts[user.UserId].getItems().reduce((total, item) => total + item.getQuantity(), 0);
      this.cartItemCountSubject.next(count);
    } else {
      this.cartItemCountSubject.next(0);
    }
  }

  private getCurrentCart(): ShoppingCart {
    const user = this.userService.getCurrentUser();
    if (!user) {
      throw new Error('User not logged in');
    }

    if (!this.carts[user.UserId]) {
      this.carts[user.UserId] = new ShoppingCart();
      // Charger le panier depuis l'API si nécessaire
      this.loadCart(user.UserId);
    }

    return this.carts[user.UserId];
  }

  addItem(product: Product, quantity: number = 1): void {
    const cart = this.getCurrentCart();
    const item = new ShoppingCartItem(product, quantity);
    cart.addItem(item);
    this.saveCart();
    this.updateCartItemCount();
  }

  removeItem(product: Product, quantity: number = 1): void {
    const cart = this.getCurrentCart();
    const item = new ShoppingCartItem(product, quantity);
    cart.removeItem(item);
    this.saveCart();
    this.updateCartItemCount();
  }

  getItems() {
    return this.getCurrentCart().getItems();
  }

  getTotal() {
    return this.getCurrentCart().getTotal();
  }

  private saveCart(): void {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.http.post('/api/cart', this.carts[user.UserId].getItems())
        .subscribe(() => console.log('Cart saved'));
    }
  }

  private loadCart(userId: number): void {
    this.http.get('/api/cart').subscribe((items: any) => {
      // Implémentez la logique pour charger les items dans le panier
      this.updateCartItemCount();
    });
  }

  clearCart(): void {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.carts[user.UserId] = new ShoppingCart();
      this.saveCart();
       this.updateCartItemCount();
    }
  }
}