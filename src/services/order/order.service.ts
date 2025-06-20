import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ShoppingCartItem } from '../../models/ShoppingCartItem';
import { Order, PaymentInfo, ShippingInfo } from '../../models/order';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of, tap } from 'rxjs';

export interface OrderItem {
  productId: number;
  productTitle: string;
  quantity: number;
  price: number;
}

export interface ApiOrder {
  orderId: number;
  userId: number;
  items: OrderItem[];
  shippingInfo: ShippingInfo;
  paymentInfo: PaymentInfo;
  total: number;
  orderDate: string;
  status: string;
}

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
    return this.http.get<ApiOrder[]>(`/api/orders/${userId}`).pipe(
      map(apiOrders => apiOrders.map(apiOrder => this.mapApiOrderToOrder(apiOrder)))
    );
  }

  private mapApiOrderToOrder(apiOrder: ApiOrder): Order {
    return {
      orderId: apiOrder.orderId,
      userId: apiOrder.userId,
      items: apiOrder.items,
      shippingInfo: apiOrder.shippingInfo,
      paymentInfo: apiOrder.paymentInfo,
      total: apiOrder.total,
      orderDate: apiOrder.orderDate,
      status: apiOrder.status
    };
  }

 
getAllOrders(): Observable<Order[]> {
  console.log('Fetching all orders...'); // Log de débogage
  return this.http.get<ApiOrder[]>(`/api/allorders`).pipe(
    tap(orders => console.log('Orders received from API:', orders)), // Log les données reçues
    map(apiOrders => apiOrders.map(apiOrder => this.mapApiOrderToOrder(apiOrder))),
    catchError(error => {
      console.error('Error fetching orders:', error);
      return of([]); // Retourne un tableau vide en cas d'erreur
    })
  );
}

}
