import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { loadBusiness } from '../data-access/business.actions';
import { selectBusinessEntity } from '../data-access/business.selectors';

@Injectable({
  providedIn: 'root',
})
export class BusinessIdResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>, private _activeRoute: ActivatedRoute) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const businessId = this._activeRoute.snapshot.paramMap.get('id');
    if (businessId == null) {
      return of(false);
    }

    const business = this._store.select(selectBusinessEntity(businessId));
    if (business !== undefined) {
      return of(false);
    }

    this._store.dispatch(loadBusiness({ id: businessId }));
    return of(true);
  }
}
