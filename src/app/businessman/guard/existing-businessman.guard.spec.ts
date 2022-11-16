import { TestBed } from '@angular/core/testing';

import { ExistingBusinessmanGuard } from './existing-businessman.guard';

describe('ExistingBusinessmanGuard', () => {
  let guard: ExistingBusinessmanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExistingBusinessmanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
