import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsSectionComponent } from './person-details-section.component';

describe('PersonDetailsSectionComponent', () => {
  let component: PersonDetailsSectionComponent;
  let fixture: ComponentFixture<PersonDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PersonDetailsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
