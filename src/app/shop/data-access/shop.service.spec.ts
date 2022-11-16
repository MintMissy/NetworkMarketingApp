import { ShopService } from './shop.service';
import { TestBed } from '@angular/core/testing';

describe('ShopService', () => {
  let service: ShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
