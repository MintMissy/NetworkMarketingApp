import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _angularFireAuth: AngularFireAuth) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._angularFireAuth.idToken.pipe(
      take(1),
      exhaustMap((token) => {
        if (token == null) {
          return next.handle(request);
        }

        const clonedRequest = request.clone({
          params: request.params.append('auth', token),
        });

        return next.handle(clonedRequest);
      })
    );
  }
}
