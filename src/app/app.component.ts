import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './products/domain/product';
import { ProductListComponent } from './products/infrastructure/components/product-list/product-list.component';
import { ProductDetailComponent } from './products/infrastructure/components/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedProduct?: Product;

  onProductSelected(product: Product): void {
    this.selectedProduct = product;
  }
}
