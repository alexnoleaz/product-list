import { Injectable } from '@angular/core';
import { UuidGenerator } from '../domain/uuid-generator.abstract';

@Injectable({ providedIn: 'root' })
export class RegularUuidGenerator implements UuidGenerator {
  create(): string {
    return crypto.randomUUID();
  }
}
