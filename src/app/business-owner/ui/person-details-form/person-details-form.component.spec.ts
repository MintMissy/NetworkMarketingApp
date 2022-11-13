import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsFormComponent } from './person-details-form.component';

describe('PersonDetailsFormComponent', () => {
  let component: PersonDetailsFormComponent;
  let fixture: ComponentFixture<PersonDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PersonDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
