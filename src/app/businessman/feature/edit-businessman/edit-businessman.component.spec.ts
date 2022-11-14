import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessManComponent } from './edit-businessman.component';

describe('EditBusinessOwnerComponent', () => {
  let component: EditBusinessManComponent;
  let fixture: ComponentFixture<EditBusinessManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBusinessManComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditBusinessManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
