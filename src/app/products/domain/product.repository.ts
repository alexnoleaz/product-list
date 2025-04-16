import { Product } from './product';

export abstract class ProductRepository {
  abstract findAll(): Product[];
}
