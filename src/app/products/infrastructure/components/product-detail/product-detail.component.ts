import { Component, Input } from '@angular/core';
import { Product } from '../../../domain/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  @Input() product?: Product;
}
