import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, mergeMap, Observable, tap } from 'rxjs';

import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { selectBusinessmanBusinesses } from 'src/app/businessman/data-access/businessman.selectors';
import { BusinessGuard } from './business.guard';

@Injectable({
  providedIn: 'root',
})
export class OwnedBusinessGuard extends BusinessGuard implements CanActivate {
  constructor(private _injector: Injector, private _authService: AuthenticationService) {
    super(_injector);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const selectedBusiness = this.getSelectedBusiness().pipe(
      map((business) => (business?.ownerId === undefined ? '' : business.ownerId))
    );

    const userId = this._authService.getUserData().uid;
    const userOwnedBusinesses = this.store.select(selectBusinessmanBusinesses(userId));

    return userOwnedBusinesses.pipe(
      mergeMap((businesses) =>
        selectedBusiness.pipe(map((selectedBusiness) => businesses.includes(selectedBusiness)))
      ),
      tap((value) => {
        if (!value) {
          this.redirectToBusinessesPage();
        }
      })
    );
  }
}
