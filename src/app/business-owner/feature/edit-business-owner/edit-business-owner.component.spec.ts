import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessOwnerComponent } from './edit-business-owner.component';

describe('EditBusinessOwnerComponent', () => {
  let component: EditBusinessOwnerComponent;
  let fixture: ComponentFixture<EditBusinessOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditBusinessOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBusinessOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
