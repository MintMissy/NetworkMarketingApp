import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormActionsComponent } from 'src/app/core/components/forms/form-actions/form-actions.component';
import { Shop } from '../../model/shop.model';
import { ShopDetailsFormComponent } from '../shop-details-form/shop-details-form.component';

@Component({
  selector: 'app-shop-form',
  standalone: true,
  imports: [CommonModule, FormActionsComponent, ShopDetailsFormComponent, ReactiveFormsModule],
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopFormComponent implements OnInit {
  @Output() submit = new EventEmitter<Shop>();
  @Output() discard = new EventEmitter<void>();
  @Input() shop: Shop = this.getDummyShop();
  @Input() title: string = 'Default Title';
  shopForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.shopForm = this.getForm();
  }

  onSubmit() {
    if (!this.shopForm.valid) {
      return;
    }

    this.submit.emit(this.shopForm.value);
  }

  getFormGroup(name: string) {
    return this.shopForm.get(name) as FormGroup;
  }

  private getForm(): FormGroup<any> {
    return this._formBuilder.group({
      details: this._formBuilder.group({
        name: [''],
        description: [''],
        shopBanner: [''],
      }),
    });
  }

  getDummyShop(): Shop {
    return {
      id: '',
      businessId: '',
      details: {
        name: '',
        description: '',
        shopBanner: '',
      },
      productIds: [],
    };
  }
}
