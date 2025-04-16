import { Injectable } from '@angular/core';
import { UuidGenerator } from '../../shared/domain/uuid-generator.abstract';
import { Product } from '../domain/product';
import { ProductRepository } from '../domain/product.repository';

@Injectable({ providedIn: 'root' })
export class InMemoryProductRepository extends ProductRepository {
  private readonly uuidGenerator: UuidGenerator;
  private products: Product[];

  constructor(uuidGenerator: UuidGenerator) {
    super();
    this.uuidGenerator = uuidGenerator;
    this.products = [
      {
        id: this.uuidGenerator.create(),
        name: 'Laptop',
        description: 'Laptop de alto rendimiento',
        price: 1500,
      },
      {
        id: this.uuidGenerator.create(),
        name: 'Mouse',
        description: 'Mouse inalámbrico ergonómico',
        price: 500,
      },
      {
        id: this.uuidGenerator.create(),
        name: 'Monitor',
        description: 'Monitor de 24 pulgadas Full HD',
        price: 900,
      },
      {
        id: this.uuidGenerator.create(),
        name: 'Parlante de música',
        description: 'Parlante de música de alto rendimiento',
        price: 1000,
      },
    ];
  }

  override findAll(): Product[] {
    return this.products;
  }
}
