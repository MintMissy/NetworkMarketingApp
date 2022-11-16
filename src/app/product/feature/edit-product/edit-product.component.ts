import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../../ui/product-form/product-form.component';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
