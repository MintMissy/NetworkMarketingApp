import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AddressFormComponent } from 'src/app/core/components/address-form/address-form.component';
import { CommonModule } from '@angular/common';
import { ContactDetailsFormComponent } from 'src/app/core/components/contact-details-form/contact-details-form.component';
import { FormActionsComponent } from 'src/app/core/components/form-actions/form-actions.component';
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
  ],
  templateUrl: './businessman-form.component.html',
  styleUrls: ['./businessman-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmanFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
