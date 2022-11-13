import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { ProductFormComponent } from '../../ui/product-form/product-form.component';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductFormComponent implements OnInit {
  product: Product = {
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

  constructor() {}

  ngOnInit(): void {}
}
