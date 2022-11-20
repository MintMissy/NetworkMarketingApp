import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { ProductFormComponent } from '../../ui/product-form/product-form.component';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { insertProduct } from '../../data-access/product.actions';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent, TranslateModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnInit {
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
    this._store.dispatch(insertProduct({ product: clonedProduct }));
  }

  onDiscard() {
    this._router.navigate(['..']);
  }
}
