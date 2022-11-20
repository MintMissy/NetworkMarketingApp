import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsFormComponent implements OnInit {
  @Input() productDetailsGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.productDetailsGroup
      .get('name')
      ?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(256)]);
    this.productDetailsGroup
      .get('description')
      ?.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(512)]);
    this.productDetailsGroup
      .get('image')
      ?.setValidators([
        Validators.required,
        Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/g),
      ]);
    this.productDetailsGroup.get('price')?.setValidators([Validators.required, Validators.min(0)]);
  }
}
