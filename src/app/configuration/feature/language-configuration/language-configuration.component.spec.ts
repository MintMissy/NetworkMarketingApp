import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageConfigurationComponent } from './language-configuration.component';

describe('LanguageConfigurationComponent', () => {
  let component: LanguageConfigurationComponent;
  let fixture: ComponentFixture<LanguageConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageConfigurationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
