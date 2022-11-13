import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOwnerCardComponent } from './business-owner-card.component';

describe('BusinessOwnerCardComponent', () => {
  let component: BusinessOwnerCardComponent;
  let fixture: ComponentFixture<BusinessOwnerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BusinessOwnerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessOwnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
