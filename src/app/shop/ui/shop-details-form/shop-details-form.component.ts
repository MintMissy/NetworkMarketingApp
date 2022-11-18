import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-shop-details-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './shop-details-form.component.html',
  styleUrls: ['./shop-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopDetailsFormComponent implements OnInit {
  @Input() shopDetailsGroup!: FormGroup;
  @Input() enabledEditingBusiness = false;

  constructor() {}

  ngOnInit(): void {
    this.shopDetailsGroup
      .get('name')
      ?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(256)]);
    this.shopDetailsGroup
      .get('description')
      ?.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(512)]);
    this.shopDetailsGroup
      .get('shopBanner')
      ?.setValidators([
        Validators.required,
        Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/g),
      ]);
    this.shopDetailsGroup.get('businessId')?.setValidators([Validators.required]);
    if (!this.enabledEditingBusiness) {
      this.shopDetailsGroup.get('businessId')?.disable();
    }
  }
}
