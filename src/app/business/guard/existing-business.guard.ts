import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, filter, first, map, tap } from 'rxjs';

import { BusinessGuard } from './business.guard';
import { loadBusinesses } from '../data-access/business.actions';
import { select } from '@ngrx/store';
import { selectAllBusinesses } from '../data-access/business.selectors';

@Injectable({
  providedIn: 'root',
})
export class ExistingBusinessGuard extends BusinessGuard implements CanActivate {
  constructor(private _injector: Injector) {
    super(_injector);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const businessId = route.paramMap.get('id');
    if (businessId === null) {
      this.redirectToBusinessesPage();
      return false;
    }

    return this.store.pipe(
      select(selectAllBusinesses),
      tap((businesses) => {
        if (businesses.length === 0) {
          this.store.dispatch(loadBusinesses());
        }
      }),
      filter((businesses) => businesses.length > 0),
      map((businesses) => businesses.map((business) => business.id).includes(businessId)),
      tap((isExisting) => {
        if (!isExisting) {
          this.redirectToBusinessesPage();
        }
      }),
      first()
    );
  }
}
