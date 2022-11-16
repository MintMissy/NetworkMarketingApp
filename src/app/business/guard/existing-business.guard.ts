import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { BusinessGuard } from './business.guard';

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
    return this.getSelectedBusiness().pipe(
      map((business) => business !== undefined),
      tap((value) => {
        if (!value) {
          this.redirectToBusinessesPage();
        }
      })
    );
  }
}
