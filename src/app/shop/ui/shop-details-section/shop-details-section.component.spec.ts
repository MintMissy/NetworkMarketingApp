import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsSectionComponent } from './shop-details-section.component';

describe('ShopDetailsSectionComponent', () => {
  let component: ShopDetailsSectionComponent;
  let fixture: ComponentFixture<ShopDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShopDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
