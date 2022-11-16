import { TestBed } from '@angular/core/testing';

import { BusinessIdResolver } from './business-id.resolver';

describe('BusinessIdResolver', () => {
  let resolver: BusinessIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BusinessIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
