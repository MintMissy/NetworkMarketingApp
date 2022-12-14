import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { BusinessmanGuard } from './businessman.guard';

@Injectable({
  providedIn: 'root',
})
export class UserProfileGuard extends BusinessmanGuard implements CanActivate {
  constructor(private _injector: Injector, private _authService: AuthenticationService) {
    super(_injector);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userId = this._authService.getUserId();
    return this.getSelectedBusinessman(route.paramMap).pipe(
      map((businessman) => businessman?.id === userId),
      tap((value) => {
        if (!value) {
          this.redirectToBusinessmanPage();
        }
      })
    );
  }
}
