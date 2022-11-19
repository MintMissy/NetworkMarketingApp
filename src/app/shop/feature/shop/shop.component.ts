import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product/model/product.model';
import { ProductsListComponent } from 'src/app/product/ui/products-list/products-list.component';
import { Shop } from '../../model/shop.model';
import { ShopDetailsSectionComponent } from '../../ui/shop-details-section/shop-details-section.component';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/product/data-access/product.actions';
import { selectProductsByShop } from 'src/app/product/data-access/product.selectors';
import { selectShopEntity } from '../../data-access/shop.selectors';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    ProductsListComponent,
    ShopDetailsSectionComponent,
    MatButtonModule,
    AddItemCardComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit {
  shop$!: Observable<Shop | undefined>;
  products$!: Observable<Product[]>;

  constructor(
    private _store: Store<AppState>,
    private _authService: AuthenticationService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadProducts());

    const shopId = this._activatedRoute.snapshot.paramMap.get('shopId')!;
    this.shop$ = this._store.select(selectShopEntity(shopId));
    // @ts-ignore
    this.products$ = this._store.select(selectProductsByShop(shopId));
  }
}
