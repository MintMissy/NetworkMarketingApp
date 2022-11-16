import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AddressFormComponent } from 'src/app/core/components/forms/address-form/address-form.component';
import { ContactDetailsFormComponent } from 'src/app/core/components/forms/contact-details-form/contact-details-form.component';
import { FormActionsComponent } from 'src/app/core/components/forms/form-actions/form-actions.component';
import { BusinessService } from '../../data-access/business.service';
import { BusinessDetailsComponent } from '../business-details/business-details.component';

@Component({
  selector: 'app-business-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    BusinessDetailsComponent,
    AddressFormComponent,
    ContactDetailsFormComponent,
    FormActionsComponent,
    ReactiveFormsModule,
  ],
  providers: [BusinessService],
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessFormComponent implements OnInit {
  @Input() title: string = 'Default Title';
  businessForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private businessService: BusinessService) {}

  ngOnInit(): void {
    this.businessForm = this.getForm();
  }

  onSubmit() {
    const value = this.businessForm.value;
  }

  private getForm(): FormGroup<any> {
    return this._formBuilder.group({
      details: this._formBuilder.group({
        companyName: [''],
        description: [''],
        type: [''],
        ownerId: [''],
        backgroundImage: [''],
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
