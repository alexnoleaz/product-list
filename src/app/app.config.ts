import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { RegularUuidGenerator } from './shared/infrastructure/regular-uuid-generator.service';
import { UuidGenerator } from './shared/domain/uuid-generator.abstract';
import { ProductRepository } from './products/domain/product.repository';
import { InMemoryProductRepository } from './products/infrastructure/in-memory-product.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: UuidGenerator, useClass: RegularUuidGenerator },
    { provide: ProductRepository, useClass: InMemoryProductRepository },
  ],
};
