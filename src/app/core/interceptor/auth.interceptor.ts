import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';

import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._authService.userSubject.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(request);
        }

        const clonedRequest = request.clone({
          params: request.params.append('auth', user.token == null ? '' : user.token),
        });

        return next.handle(clonedRequest);
      })
    );
  }
}
