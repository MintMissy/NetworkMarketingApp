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
import { Businessman } from '../../model/businessman.model';
import { CommonModule } from '@angular/common';
import { ContactDetailsFormComponent } from 'src/app/core/components/forms/contact-details-form/contact-details-form.component';
import { Country } from 'src/app/core/model/country.enum';
import { FormActionsComponent } from 'src/app/core/components/forms/form-actions/form-actions.component';
import { PersonDetailsFormComponent } from '../person-details-form/person-details-form.component';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule,
  ],
  templateUrl: './businessman-form.component.html',
  styleUrls: ['./businessman-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmanFormComponent implements OnInit {
  @Input() businessman: Businessman = this.getDummyBusinessman();
  @Output() submit = new EventEmitter<Businessman>();
  @Output() discard = new EventEmitter<void>();
  businessmanForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.businessmanForm = this.getForm();
  }

  getFormGroup(name: string) {
    return this.businessmanForm.get(name) as FormGroup;
  }

  onSubmit() {
    this.submit.emit(this.businessmanForm.value);
  }

  private getForm(): FormGroup<any> {
    return this._formBuilder.group({
      details: this._formBuilder.group({
        firstName: [this.businessman.details.firstName],
        surname: [this.businessman.details.surname],
        avatar: [this.businessman.details.avatar],
      }),
      address: this._formBuilder.group({
        country: [this.businessman.address.country],
        city: [this.businessman.address.city],
        street: [this.businessman.address.street],
        localNumber: [this.businessman.address.localNumber],
        postalCode: [this.businessman.address.postalCode],
      }),
      contactDetails: this._formBuilder.group({
        email: [this.businessman.contactDetails.email],
        telephone: [this.businessman.contactDetails.telephone],
      }),
    });
  }

  getDummyBusinessman(): Businessman {
    return {
      details: {
        firstName: '',
        surname: '',
        avatar: '',
      },
      address: {
        country: Country.Poland,
        city: '',
        street: '',
        localNumber: '',
        postalCode: '',
      },
      contactDetails: {
        email: '',
        telephone: null,
      },
      ownedBusinesses: [],
    };
  }
}
