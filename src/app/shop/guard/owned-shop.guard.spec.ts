import { TestBed } from '@angular/core/testing';

import { OwnedShopGuard } from './owned-shop.guard';

describe('OwnedShopGuard', () => {
  let guard: OwnedShopGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OwnedShopGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
