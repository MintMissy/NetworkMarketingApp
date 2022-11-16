import { TestBed } from '@angular/core/testing';

import { OwnedBusinessGuard } from './owned-business.guard';

describe('OwnedBusinessGuard', () => {
  let guard: OwnedBusinessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OwnedBusinessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
