import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, filter, first, map, tap } from 'rxjs';

import { BusinessmanGuard } from './businessman.guard';
import { loadBusinessmen } from '../data-access/businessman.actions';
import { select } from '@ngrx/store';
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

    return this.store.pipe(
      select(selectAllBusinessmen),
      tap((businessmen) => {
        if (businessmen.length === 0) {
          this.store.dispatch(loadBusinessmen());
        }
      }),
      filter((businessmen) => businessmen.length > 0),
      map((businessmen) =>
        businessmen.map((businessman) => businessman.id).includes(businessmanId)
      ),
      tap((isExisting) => {
        if (!isExisting) {
          this.redirectToBusinessmanPage();
        }
      }),
      first()
    );

    return this.getSelectedBusinessman(route.paramMap).pipe(
      map((businessman) => businessman !== undefined),
      tap((value) => {
        if (!value) {
          this.redirectToBusinessmanPage();
        }
      })
    );
  }
}
