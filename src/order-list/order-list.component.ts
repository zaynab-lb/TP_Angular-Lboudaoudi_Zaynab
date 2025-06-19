import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { UserService } from '../services/user/user.service';
import { Order } from '../models/order';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, MenuComponent, RouterModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  isLoading = true;

  constructor(
    private orderService: OrderService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.orderService.getUserOrders(user.UserId).subscribe({
        next: (orders) => {
          this.orders = orders;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des commandes:', err);
          this.isLoading = false;
        }
      });
    }
  }
}