import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { BusinessmanGuard } from './businessman.guard';

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
