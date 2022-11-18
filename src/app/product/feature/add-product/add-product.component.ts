import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { ProductFormComponent } from '../../ui/product-form/product-form.component';
import { Store } from '@ngrx/store';
import { insertProduct } from '../../data-access/product.actions';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit {
  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(product: Product) {
    product.shopId = this._activatedRoute.snapshot.paramMap.get('shopId')!;
    this._store.dispatch(insertProduct({ product: product }));
  }

  onDiscard() {
    this._router.navigate(['..']);
  }
}
