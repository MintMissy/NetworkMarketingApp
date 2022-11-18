import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Shop } from '../../model/shop.model';
import { ShopFormComponent } from '../../ui/shop-form/shop-form.component';
import { Store } from '@ngrx/store';
import { insertShop } from '../../data-access/shop.actions';

@Component({
  selector: 'app-add-shop',
  standalone: true,
  imports: [CommonModule, ShopFormComponent],
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddShopComponent implements OnInit {
  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit(): void {}

  onSubmit(shop: Shop) {
    shop.productIds = [];
    this._store.dispatch(insertShop({ shop: shop }));
  }

  onDiscard() {
    this._router.navigate(['shops', 'my']);
  }
}
