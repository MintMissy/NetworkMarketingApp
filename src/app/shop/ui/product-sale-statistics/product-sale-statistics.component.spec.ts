import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSaleStatisticsComponent } from './product-sale-statistics.component';

describe('ProductSaleStatisticsComponent', () => {
  let component: ProductSaleStatisticsComponent;
  let fixture: ComponentFixture<ProductSaleStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductSaleStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSaleStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
