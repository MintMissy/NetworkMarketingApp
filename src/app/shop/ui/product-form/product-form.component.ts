import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormActionsComponent } from 'src/app/core/components/form-actions/form-actions.component';
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
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {
  @Input() title: string = 'Default Title';
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
