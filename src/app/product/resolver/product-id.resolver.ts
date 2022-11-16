import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject, take } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { loadProduct } from '../data-access/product.actions';
import { selectProductEntity } from '../data-access/product.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductIdResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const productId = route.paramMap.get(':productId');
    if (productId == null) {
      return of(false);
    }

    const resolveResultSubject = new Subject<boolean>();

    this._store
      .select(selectProductEntity(productId))
      .pipe(take(1))
      .subscribe((product) => {
        if (product !== undefined) {
          resolveResultSubject.next(false);
          return;
        }
        this._store.dispatch(loadProduct({ id: productId }));
        resolveResultSubject.next(true);
      });

    return resolveResultSubject.asObservable();
  }
}
