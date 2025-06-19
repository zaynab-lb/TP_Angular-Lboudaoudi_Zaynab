import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../services/product/product.service';
import { RouterModule , Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
   standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent, RouterModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    productTitle: '',
    productPrice: 0,
    productQuantity: 0,
    productCategory: '',
    productImage: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.productService.addProduct(this.product).subscribe({
        next: () => {
          this.successMessage = 'Produit ajouté avec succès.';
          setTimeout(() => this.router.navigate(['/products']), 1500);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Erreur lors de l\'ajout';
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
