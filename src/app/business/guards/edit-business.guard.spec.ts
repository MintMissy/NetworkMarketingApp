import { TestBed } from '@angular/core/testing';

import { EditBusinessGuard } from './edit-business.guard';

describe('EditBusinessGuard', () => {
  let guard: EditBusinessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditBusinessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
