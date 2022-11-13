import { BusinessOwnerService } from './business-owner.service';
import { TestBed } from '@angular/core/testing';

describe('BusinessOwnerService', () => {
  let service: BusinessOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
