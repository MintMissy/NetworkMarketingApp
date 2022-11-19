import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AddressFormComponent } from 'src/app/core/components/forms/address-form/address-form.component';
import { Business } from '../../model/business.model';
import { BusinessDetailsComponent } from '../business-details/business-details.component';
import { BusinessIndustry } from '../../model/business-industry.enum';
import { BusinessService } from '../../data-access/business.service';
import { CommonModule } from '@angular/common';
import { ContactDetailsFormComponent } from 'src/app/core/components/forms/contact-details-form/contact-details-form.component';
import { Country } from 'src/app/core/model/country.enum';
import { FormActionsComponent } from 'src/app/core/components/forms/form-actions/form-actions.component';
import { MatButtonModule } from '@angular/material/button';

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
  @Output() submit = new EventEmitter<Business>();
  @Output() discard = new EventEmitter<void>();
  @Input() title: string = 'Default Title';
  @Input() business: Business = this.getDummyBusiness();
  @Input() enabledNetworkSelection = false;
  businessForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.businessForm = this.getForm();
  }

  onSubmit() {
    if (!this.businessForm.valid) {
      return;
    }

    this.submit.emit(this.businessForm.value);
  }

  getFormGroup(name: string) {
    return this.businessForm.get(name) as FormGroup;
  }

  private getForm(): FormGroup<any> {
    return this._formBuilder.group({
      id: [this.business.id],
      details: this._formBuilder.group({
        parentBusinessId: [this.business.details.parentBusinessId],
        companyName: [this.business.details.companyName],
        description: [this.business.details.description],
        industry: [this.business.details.industry],
        ownerId: [this.business.details.ownerId],
        backgroundImage: [this.business.details.backgroundImage],
      }),
      address: this._formBuilder.group({
        country: [this.business.address.country],
        city: [this.business.address.city],
        street: [this.business.address.street],
        localNumber: [this.business.address.localNumber],
        postalCode: [this.business.address.postalCode],
      }),
      contactDetails: this._formBuilder.group({
        email: [this.business.contactDetails.email],
        telephone: [this.business.contactDetails.telephone],
      }),
    });
  }

  getDummyBusiness(): Business {
    return {
      id: '',
      ownerId: '',
      shopIds: [],
      details: {
        parentBusinessId: '',
        companyName: '',
        description: '',
        industry: BusinessIndustry.UNSET,
        ownerId: '',
        backgroundImage: '',
      },
      address: {
        country: Country.Undefined,
        city: '',
        street: '',
        localNumber: '',
        postalCode: '',
      },
      contactDetails: {
        email: '',
        telephone: null,
      },
    };
  }
}
