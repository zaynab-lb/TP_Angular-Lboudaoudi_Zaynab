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

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders(); 
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe({
      next: orders => {
        console.log('Commandes reçues:', orders);
        this.orders = orders;
      },
      error: err => console.error("Erreur chargement des commandes", err)
    });
  }

  refresh(): void {
    this.loadOrders();
  }
}

