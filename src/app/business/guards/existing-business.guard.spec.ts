import { TestBed } from '@angular/core/testing';

import { ExistingBusinessGuard } from './existing-business.guard';

describe('ExistingBusinessGuard', () => {
  let guard: ExistingBusinessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExistingBusinessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
