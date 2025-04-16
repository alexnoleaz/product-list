import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductRepository } from '../../../domain/product.repository';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProductId?: string;

  @Output() select: EventEmitter<Product>;

  private readonly productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
    this.select = new EventEmitter<Product>();
  }

  ngOnInit(): void {
    this.products = this.productRepository.findAll();
  }

  onSelect(product: Product): void {
    this.selectedProductId = product.id;
    this.select.emit(product);
  }

  getCssClasses(product: Product): string[] {
    const classes: string[] = [];

    if (this.selectedProductId === product.id) classes.push('product-selected');

    if (product.price > 1000) classes.push('product-expensive');
    else classes.push('product-cheap');

    return classes;
  }
}
