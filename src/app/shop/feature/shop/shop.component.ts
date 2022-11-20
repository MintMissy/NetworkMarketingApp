import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { deleteProduct, loadProducts } from 'src/app/product/data-access/product.actions';

import { ActivatedRoute } from '@angular/router';
import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Business } from 'src/app/business/model/business.model';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { Product } from 'src/app/product/model/product.model';
import { ProductsListComponent } from 'src/app/product/ui/products-list/products-list.component';
import { Shop } from '../../model/shop.model';
import { ShopDetailsSectionComponent } from '../../ui/shop-details-section/shop-details-section.component';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { loadBusinesses } from 'src/app/business/data-access/business.actions';
import { selectBusinessesByUser } from 'src/app/business/data-access/business.selectors';
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
    TranslateModule,
    MatDialogModule,
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit {
  shop$!: Observable<Shop | undefined>;
  products$!: Observable<Product[]>;
  businesses$!: Observable<Business[]>;
  userBusinessesIds$!: Observable<string[]>;
  selectedShop!: string;

  constructor(
    private _store: Store<AppState>,
    private _authService: AuthenticationService,
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadProducts());
    this._store.dispatch(loadBusinesses());

    this.userBusinessesIds$ = this._store
      .select(selectBusinessesByUser(this._authService.getUserId()))
      .pipe(
        // @ts-ignore
        map((businesses: Business[]) => {
          return businesses
            .filter((business) => business !== undefined)
            .map((business) => business.id);
        })
      );

    this.selectedShop = this._activatedRoute.snapshot.paramMap.get('shopId')!;
    this.shop$ = this._store.select(selectShopEntity(this.selectedShop));
    // @ts-ignore
    this.products$ = this._store.select(selectProductsByShop(this.selectedShop));
  }

  onProductRemove(productId: string) {
    const openedDialog = this._dialog.open(ConfirmDialogComponent);
    openedDialog.afterClosed().subscribe((result) => {
      if (result) {
        this._store.dispatch(deleteProduct({ id: productId }));
      }
    });
  }

  isShopOwner(businessIds: string[], shopBusinessId: string) {
    return businessIds.includes(shopBusinessId);
  }
}
