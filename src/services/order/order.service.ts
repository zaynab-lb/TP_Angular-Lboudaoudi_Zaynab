import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ShoppingCartItem } from '../../models/ShoppingCartItem';
import { Order, PaymentInfo, ShippingInfo } from '../../models/order';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private userService: UserService) {}

  createOrder(items: ShoppingCartItem[], shippingInfo: ShippingInfo, paymentInfo: PaymentInfo, total: number): Observable<any> {
  const user = this.userService.getCurrentUser();
  
  // Convertir les items du panier en format simple pour l'API
  const orderItems = items.map(item => ({
    productId: item.getItemProduct().ProductId,
    productTitle: item.getItemProduct().ProductTitle,
    quantity: item.getQuantity(),
    price: item.getItemProduct().ProductPrice
  }));
  
  return this.http.post('/api/orders', {
    userId: user?.UserId,
    items: orderItems,
    shippingInfo,
    paymentInfo,
    total
  });
}

  getUserOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`/api/orders/${userId}`);
  }
}
