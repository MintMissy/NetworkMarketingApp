import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../../ui/product-form/product-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  // TODO submit logic
  onSubmit() {}

  onDiscard() {
    this._router.navigate(['..']);
  }
}
