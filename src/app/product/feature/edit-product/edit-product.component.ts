import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { ProductFormComponent } from '../../ui/product-form/product-form.component';
import { Store } from '@ngrx/store';
import { updateProduct } from '../../data-access/product.actions';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductComponent implements OnInit {
  selectedShop!: string;

  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(product: Product) {
    this.selectedShop = this._activatedRoute.snapshot.paramMap.get('shopId')!;
    const clonedProduct: Product = {
      ...product,
      shopId: this.selectedShop,
    };
    this._store.dispatch(updateProduct({ product: clonedProduct }));
  }

  onDiscard() {
    this._router.navigate(['..']);
  }
}
