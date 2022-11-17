import { Injector } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { selectShopEntity } from '../data-access/shop.selectors';

export abstract class ShopGuard {
  protected router: Router;
  protected store: Store<AppState>;

  constructor(private injectorObject: Injector) {
    this.router = this.injectorObject.get(Router);
    this.store = <Store<AppState>>this.injectorObject.get(Store);
  }

  protected getSelectedShop(paramMap: ParamMap) {
    const shopId = paramMap.get('shopId');
    if (shopId === null) {
      return of(undefined);
    }

    return this.store.select(selectShopEntity(shopId));
  }

  protected redirectToShopsPage() {
    this.router.navigate(['shops']);
  }
}
