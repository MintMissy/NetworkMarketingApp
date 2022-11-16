import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessmenListComponent } from './businessmen-list.component';

describe('BusinessmenListComponent', () => {
  let component: BusinessmenListComponent;
  let fixture: ComponentFixture<BusinessmenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BusinessmenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessmenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
