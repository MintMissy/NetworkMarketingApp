import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsSectionComponent } from './business-details-section.component';

describe('BusinessDetailsSectionComponent', () => {
  let component: BusinessDetailsSectionComponent;
  let fixture: ComponentFixture<BusinessDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BusinessDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
