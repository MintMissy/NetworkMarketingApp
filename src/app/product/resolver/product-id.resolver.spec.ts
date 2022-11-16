import { TestBed } from '@angular/core/testing';

import { ProductIdResolver } from './product-id.resolver';

describe('ProductIdResolver', () => {
  let resolver: ProductIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
