import { TestBed } from '@angular/core/testing';

import { ExistingShopGuard } from './existing-shop.guard';

describe('ExistingShopGuard', () => {
  let guard: ExistingShopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExistingShopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
