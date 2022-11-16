import { TestBed } from '@angular/core/testing';

import { BusinessmanIdResolver } from './businessman-id.resolver';

describe('BusinessmanIdResolver', () => {
  let resolver: BusinessmanIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BusinessmanIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
