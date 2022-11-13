import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessFormComponent } from './add-business-form.component';

describe('AddBusinessFormComponent', () => {
  let component: AddBusinessFormComponent;
  let fixture: ComponentFixture<AddBusinessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddBusinessFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBusinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
