import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AddressFormComponent } from 'src/app/core/components/forms/address-form/address-form.component';
import { ContactDetailsFormComponent } from 'src/app/core/components/forms/contact-details-form/contact-details-form.component';
import { FormActionsComponent } from 'src/app/core/components/forms/form-actions/form-actions.component';
import { PersonDetailsFormComponent } from '../person-details-form/person-details-form.component';

@Component({
  selector: 'app-businessman-form',
  standalone: true,
  imports: [
    CommonModule,
    PersonDetailsFormComponent,
    AddressFormComponent,
    ContactDetailsFormComponent,
    FormActionsComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './businessman-form.component.html',
  styleUrls: ['./businessman-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmanFormComponent implements OnInit {
  @Input() title: string = 'Default Title';
  businessmanForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.businessmanForm = this.getForm();
  }

  onSubmit() {
    const value = this.businessmanForm.value;
  }

  private getForm(): FormGroup<any> {
    return this._formBuilder.group({
      details: this._formBuilder.group({
        firstName: [''],
        surname: [''],
        avatar: [''],
      }),
      address: this._formBuilder.group({
        country: [''],
        city: [''],
        street: [''],
        localNumber: [''],
        postalCode: [''],
      }),
      contactDetails: this._formBuilder.group({
        email: [''],
        telephone: [0],
      }),
    });
  }
}
