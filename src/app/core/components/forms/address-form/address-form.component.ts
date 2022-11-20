import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Country } from 'src/app/core/model/country.enum';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    TranslateModule,
  ],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent implements OnInit {
  @Input() addressGroup!: FormGroup;
  Country = Object.entries(Country);

  constructor() {}

  ngOnInit(): void {
    this.addressGroup
      .get('city')
      ?.setValidators([Validators.minLength(1), Validators.maxLength(100)]);
    this.addressGroup
      .get('street')
      ?.setValidators([Validators.minLength(1), Validators.maxLength(100)]);
    this.addressGroup
      .get('localNumber')
      ?.setValidators([Validators.minLength(1), Validators.maxLength(15)]);
    this.addressGroup
      .get('postalCode')
      ?.setValidators([Validators.minLength(1), Validators.maxLength(15)]);
  }
}
