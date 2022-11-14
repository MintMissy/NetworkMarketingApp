import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Product } from '../../../shop/model/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent implements OnInit {
  @Input() product!: Product;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
