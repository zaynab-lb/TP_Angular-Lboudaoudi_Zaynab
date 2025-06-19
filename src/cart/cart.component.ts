import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';
import { MenuComponent } from '../menu/menu.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order/order.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
   imports: [CommonModule, RouterModule, MenuComponent, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  checkoutForm: FormGroup;
  isCheckout = false;
  paymentMethods = ['Carte de crédit', 'PayPal', 'Paiement à la livraison'];
  selectedMethod = 'Carte de crédit';

  constructor(
    public cartService: ShoppingCartService,
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.checkoutForm = this.fb.group({
      shippingInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
        phone: ['', [Validators.required, Validators.pattern(/^0[1-9]\d{8}$/)]],
        email: ['', [Validators.required, Validators.email]]
      }),
      paymentInfo: this.fb.group({
        cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
        cardHolder: ['', Validators.required],
        expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
        cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
      })
    });
  }

   proceedToCheckout(): void {
    this.isCheckout = true;
  }

  placeOrder(): void {
  if (this.checkoutForm.valid) {
    // Vérifier que les quantités sont toujours disponibles
    const items = this.cartService.getItems();
    const hasInvalidItems = items.some(item => {
      // Dans une vraie application, il faudrait vérifier avec le stock actuel
      // Ici on suppose que le service produit a une méthode getProductStock
      return item.getQuantity() <= 0;
    });

    if (hasInvalidItems) {
      alert('Certains produits ne sont plus disponibles en quantité suffisante. Veuillez mettre à jour votre panier.');
      return;
    }

    const shippingInfo = this.checkoutForm.get('shippingInfo')?.value;
    const paymentInfo = this.checkoutForm.get('paymentInfo')?.value;
    
    this.orderService.createOrder(
      items,
      shippingInfo,
      paymentInfo,
      this.cartService.getTotal()
    ).subscribe({
      next: (order) => {
        this.cartService.clearCart();
        this.router.navigate(['/order-confirmation', order.orderId]);
      },
      error: (err) => {
        console.error('Erreur lors de la commande:', err);
        if (err.error?.error) {
          alert(err.error.error);
        } else {
          alert('Une erreur est survenue lors de la commande');
        }
      }
    });
  }
}

  cancelCheckout(): void {
    this.isCheckout = false;
  }

  clearCart(): void {
    if (confirm('Êtes-vous sûr de vouloir vider votre panier ?')) {
      this.cartService.clearCart();
    }
  }
}
