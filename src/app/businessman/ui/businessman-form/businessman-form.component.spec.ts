import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessmanFormComponent } from './businessman-form.component';

describe('BusinessmanFormComponent', () => {
  let component: BusinessmanFormComponent;
  let fixture: ComponentFixture<BusinessmanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BusinessmanFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessmanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
