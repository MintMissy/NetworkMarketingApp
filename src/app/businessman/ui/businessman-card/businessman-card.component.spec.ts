import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessmanCardComponent } from './businessman-card.component';

describe('BusinessmanCardComponent', () => {
  let component: BusinessmanCardComponent;
  let fixture: ComponentFixture<BusinessmanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessmanCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessmanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
