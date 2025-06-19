import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OrderService } from '../services/order/order.service';
import { MenuComponent } from '../menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-order-confirmation',
  imports: [MenuComponent, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnInit{
  order: Order | null = null;
  isLoading = true;
  error: string | null = null;
  isAuthenticated = false;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    public userService: UserService
  ){
    this.isAuthenticated = this.userService.isAuthenticated(); // Initialisation
  }

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    const userId = this.userService.getCurrentUser()?.UserId;
    
    if (orderId && userId) {
      this.orderService.getUserOrders(userId).subscribe({
        next: (orders) => {
          const foundOrder = orders.find(o => o.orderId === +orderId);
          if (foundOrder) {
            this.order = foundOrder;
          } else {
            this.error = 'Commande non trouvée';
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erreur lors du chargement de la commande:', err);
          this.error = 'Erreur lors du chargement de la commande';
          this.isLoading = false;
        }
      });
    } else {
      this.error = 'ID de commande ou utilisateur manquant';
      this.isLoading = false;
    }
  }
}
