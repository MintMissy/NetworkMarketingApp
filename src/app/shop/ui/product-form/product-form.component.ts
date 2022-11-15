import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FormActionsComponent } from 'src/app/core/components/form-actions/form-actions.component';
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
  @Input() title: string = 'Default Title';
  productForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.getForm();
  }

  onSubmit() {
    const value = this.productForm.value;
  }

  private getForm(): FormGroup<any> {
    return this._formBuilder.group({
      details: this._formBuilder.group({
        name: [''],
        description: [''],
        image: [''],
        price: [0],
        bannerUrl: [''],
      }),
      saleStatistics: this._formBuilder.group({
        amountInStorage: [0],
        soldAmount: [0],
      }),
    });
  }
}
