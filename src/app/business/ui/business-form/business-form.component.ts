import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { AddressFormComponent } from 'src/app/core/components/address-form/address-form.component';
import { BusinessDetailsComponent } from '../business-details/business-details.component';
import { CommonModule } from '@angular/common';
import { ContactDetailsFormComponent } from 'src/app/core/components/contact-details-form/contact-details-form.component';
import { FormActionsComponent } from 'src/app/core/components/form-actions/form-actions.component';
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
  ],
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessFormComponent implements OnInit {
  @Input() title: string = 'Default Title';

  constructor() {}

  ngOnInit(): void {}
}
