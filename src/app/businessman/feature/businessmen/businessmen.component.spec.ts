import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMenComponent } from './businessmen.component';

describe('BusinessmenComponent', () => {
  let component: BusinessMenComponent;
  let fixture: ComponentFixture<BusinessMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessMenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
