import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, filter, first, map, tap } from 'rxjs';

import { BusinessGuard } from './business.guard';
import { loadBusiness } from '../data-access/business.actions';
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

    return this.store.select(selectAllBusinesses).pipe(
      tap((businesses) => {
        if (businesses.length === 0) {
          this.store.dispatch(loadBusiness({ id: businessId }));
        }
      }),
      // Renavigation is handled in the effect on load business effect
      // At this point I haven't found a more design friendly and optimal way
      // to do this issue
      filter((businesses) => businesses.length > 0),
      map(() => true),
      first()
    );
  }
}
