import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order/order.service';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-orders',
  standalone: true, 
  imports: [MenuComponent, CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  orders: Order[] = [];
  isLoading: boolean = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders(); 
  }

  loadOrders(): void {
    this.isLoading = true;
    this.orderService.getAllOrders().subscribe({
      next: orders => {
        console.log('Commandes reçues:', orders);
        this.orders = orders;
        this.isLoading = false;
      },
     error: err => {
        console.error("Erreur chargement des commandes", err);
        this.isLoading = false;
      }
    });
  }

  refresh(): void {
    this.loadOrders();
  }

  validateOrder(orderId: number): void {
  this.orderService.updateOrderStatus(orderId, "Validée").subscribe({
    next: () => {
      console.log(`Commande ${orderId} validée`);
      this.loadOrders(); // recharge la liste
    },
    error: err => console.error("Erreur de validation :", err)
  });
}

}

