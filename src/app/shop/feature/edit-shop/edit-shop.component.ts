import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Shop } from '../../model/shop.model';
import { ShopFormComponent } from '../../ui/shop-form/shop-form.component';
import { Store } from '@ngrx/store';
import { insertShop } from '../../data-access/shop.actions';
import { selectShopEntity } from '../../data-access/shop.selectors';

@Component({
  selector: 'app-edit-shop',
  standalone: true,
  imports: [CommonModule, ShopFormComponent],
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditShopComponent implements OnInit {
  shop$!: Observable<Shop | undefined>;

  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const shopId = this._activatedRoute.snapshot.paramMap.get('shopId');
    if (shopId === null) {
      this.redirect();
      return;
    }

    this.shop$ = this._store.select(selectShopEntity(shopId));
  }

  onSubmit(shop: Shop) {
    this._store.dispatch(insertShop({shop: shop}));
  }

  redirect() {
    this._router.navigate(['shops', 'my']);
  } 

  onDiscard() {
    this.redirect();
  }
}
