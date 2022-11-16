import { TestBed } from '@angular/core/testing';

import { ExistingProductGuard } from './existing-product.guard';

describe('ExistingProductGuard', () => {
  let guard: ExistingProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExistingProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
