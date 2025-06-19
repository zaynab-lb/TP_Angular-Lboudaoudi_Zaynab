import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order/order.service';
import { MenuComponent } from '../menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-order-confirmation',
  imports: [MenuComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnInit{
  order: Order | null = null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      // Dans une vraie application, vous feriez une requête pour récupérer les détails de la commande
      this.order = {
        orderId: +orderId,
        userId: 1, // À remplacer par l'utilisateur actuel
        items: [],
        shippingInfo: {
          firstName: 'Prénom',
          lastName: 'Nom',
          address: 'Adresse',
          city: 'Ville',
          postalCode: '00000',
          phone: '0600000000',
          email: 'email@example.com'
        },
        paymentInfo: {
          cardNumber: '************1234',
          cardHolder: 'Nom sur carte',
          expiryDate: 'MM/AA',
          cvv: '***'
        },
        total: 0,
        orderDate: new Date().toISOString(),
        status: 'En traitement'
      };
    }
  }
}
