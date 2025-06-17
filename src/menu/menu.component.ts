import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../models/User';
import { ShoppingCartService } from '../services/shopping-cart/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  shopName = "TechMarket"; // Nom de votre boutique
  isAuthenticated: boolean = false;
  userName: string = '';
  cartItemCount: number = 0;
  private cartSubscription?: Subscription;

  constructor(public userService: UserService, private cartService: ShoppingCartService) {
    // Example: subscribe to cart changes if using observables
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  ngOnInit(): void {
    this.checkAuthStatus();

    this.cartSubscription = this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  ngOnDestroy(): void {
    // Nettoyer la souscription pour éviter les fuites mémoire
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }


  checkAuthStatus(): void {
    this.isAuthenticated = this.userService.isAuthenticated();
    if (this.isAuthenticated) {
      const user = this.userService.getCurrentUser();
      this.userName = user ? user.fullName() : '';
    }
  }

  signOut(): void {
    this.userService.signOut();
    this.isAuthenticated = false;
    this.userName = '';
  }
  

}