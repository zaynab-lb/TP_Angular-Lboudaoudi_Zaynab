import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/Product';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuComponent],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId!: number;
  product: any = {
    productTitle: '',
    productPrice: 0,
    productQuantity: 0,
    productCategory: '',
    productImage: ''
  };

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(this.productId.toString()).subscribe(p => this.product = p);
  }

 updateProduct(): void {
  console.log('Produit à mettre à jour :', this.product);
  this.productService.updateProduct(this.productId, this.product).subscribe({
    next: () => {
      console.log('Produit mis à jour avec succès');
      this.router.navigate(['/products']);
    },
    error: (err) => console.error('Erreur lors de la mise à jour :', err)
  });
}


  cancel(): void {
  this.router.navigate(['/products']);
}

}
