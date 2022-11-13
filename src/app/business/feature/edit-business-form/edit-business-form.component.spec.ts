import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessFormComponent } from './edit-business-form.component';

describe('EditBusinessFormComponent', () => {
  let component: EditBusinessFormComponent;
  let fixture: ComponentFixture<EditBusinessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditBusinessFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBusinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
