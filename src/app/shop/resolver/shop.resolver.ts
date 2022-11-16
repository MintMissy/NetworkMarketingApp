import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject, take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { loadShop } from '../data-access/shop.actions';
import { selectShopEntity } from '../data-access/shop.selectors';

@Injectable({
  providedIn: 'root',
})
export class ShopResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const shopId = route.paramMap.get(':shopId');
    if (shopId == null) {
      return of(false);
    }

    const resolveResultSubject = new Subject<boolean>();

    this._store
      .select(selectShopEntity(shopId))
      .pipe(take(1))
      .subscribe((shop) => {
        if (shop !== undefined) {
          resolveResultSubject.next(false);
          return;
        }
        this._store.dispatch(loadShop({ id: shopId }));
        resolveResultSubject.next(true);
      });

    return resolveResultSubject.asObservable();
  }
}
