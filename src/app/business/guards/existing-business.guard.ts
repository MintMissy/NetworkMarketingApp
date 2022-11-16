import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map } from 'rxjs';

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
    const postId = this.activeRoute.snapshot.paramMap.get('id');
    return this.getSelectedBusiness().pipe(map((business) => business !== undefined));
  }
}
