import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, filter, first, map, tap } from 'rxjs';

import { BusinessmanGuard } from './businessman.guard';
import { loadBusinessman } from '../data-access/businessman.actions';
import { selectAllBusinessmen } from '../data-access/businessman.selectors';

@Injectable({
  providedIn: 'root',
})
export class ExistingBusinessmanGuard extends BusinessmanGuard implements CanActivate {
  constructor(private _injector: Injector) {
    super(_injector);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const businessmanId = route.paramMap.get('id');
    if (businessmanId === null) {
      return false;
    }

    return this.store.select(selectAllBusinessmen).pipe(
      tap((businessmen) => {
        if (businessmen.length === 0) {
          this.store.dispatch(loadBusinessman({ id: businessmanId }));
        }
      }),
      // Renavigation is handled in the effect on load businessman effect
      // At this point I haven't found a more design friendly and optimal way
      // to do this issue
      filter((businessmen) => businessmen.length > 0),
      map(() => true),
      first()
    );
  }
}
