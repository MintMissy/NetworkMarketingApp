import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormActionsComponent } from 'src/app/core/components/forms/form-actions/form-actions.component';
import { Product } from '../../model/product.model';
import { ProductDetailsFormComponent } from '../product-details-form/product-details-form.component';
import { ProductSaleStatisticsComponent } from '../product-sale-statistics/product-sale-statistics.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormActionsComponent,
    ProductDetailsFormComponent,
    ProductSaleStatisticsComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {
  @Output() submit = new EventEmitter<Product>();
  @Output() discard = new EventEmitter<void>();
  @Input() product: Product = getDummyProduct();
  @Input() title: string = 'Default Title';
  productForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.getForm();
  }

  onSubmit() {
    if (!this.productForm.valid) {
      return;
    }

    this.submit.emit(this.productForm.value);
  }

  getFormGroup(name: string) {
    return this.productForm.get(name) as FormGroup;
  }

  private getForm(): FormGroup<any> {
    return this._formBuilder.group({
      details: this._formBuilder.group({
        name: [''],
        description: [''],
        image: [''],
        price: [0],
      }),
      saleStatistics: this._formBuilder.group({
        amountInStorage: [0],
        soldAmount: [0],
      }),
    });
  }
}

function getDummyProduct(): Product {
  return {
    details: {
      name: '',
      description: '',
      image: '',
      price: 0,
    },
    saleStatistics: {
      amountInStorage: 0,
      soldAmount: 0,
    },
  };
}
