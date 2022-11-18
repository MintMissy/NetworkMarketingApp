import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-shop-details-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './shop-details-form.component.html',
  styleUrls: ['./shop-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopDetailsFormComponent implements OnInit {
  @Input() shopDetailsGroup!: FormGroup;

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
  }
}
