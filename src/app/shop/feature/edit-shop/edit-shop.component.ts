import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Shop } from '../../model/shop.model';
import { ShopFormComponent } from '../../ui/shop-form/shop-form.component';
import { Store } from '@ngrx/store';
import { selectShopEntity } from '../../data-access/shop.selectors';
import { updateShop } from '../../data-access/shop.actions';

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
  selectedShop!: string;

  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectedShop = this._activatedRoute.snapshot.paramMap.get('shopId')!;
    if (this.selectedShop === null) {
      this.redirect();
      return;
    }

    this.shop$ = this._store.select(selectShopEntity(this.selectedShop));
  }

  onSubmit(shop: Shop) {
    const clonedShop: Shop = { ...shop, id: this.selectedShop };
    this._store.dispatch(updateShop({ shop: clonedShop }));
  }

  redirect() {
    this._router.navigate(['shops', 'my']);
  }

  onDiscard() {
    this.redirect();
  }
}
