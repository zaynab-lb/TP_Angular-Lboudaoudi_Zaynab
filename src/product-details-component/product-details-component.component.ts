import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-details-component.component.html',
  styleUrl: './product-details-component.component.css',
})
export class ProductDetailsComponent {
  @Input() product: Product | null = null;

}