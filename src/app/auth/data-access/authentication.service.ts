import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { AccountData } from '../model/account-data.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthResponseData } from '../model/auth-response-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _router: Router,
    private _httpClient: HttpClient
  ) {}

  isLoggedIn(): boolean {
    return this.user.getValue() != null;
  }

  emailLogin(accountData: AccountData): Observable<AuthResponseData> {
    const requestBody = {
      ...accountData,
      returnSecureToken: true,
    };

    return this._httpClient
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9LF0rwuGOtws-ybfEryLCE3CBvyzj510',
        requestBody
      )
      .pipe(catchError(this.mapResponseErrorToMessage));
  }

  googleLogin() {
    return this.authLogin(new GoogleAuthProvider());
  }

  facebookLogin() {
    return this.authLogin(new FacebookAuthProvider());
  }

  githubLogin() {
    return this.authLogin(new GithubAuthProvider());
  }

  authLogin(provider: any) {
    return this._angularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('successful login');
        this._router.navigate(['']);
      })
      .catch((errorResponse) => this.mapResponseErrorToMessage(errorResponse));
  }

  logout(): void {
    this._angularFireAuth.signOut();
  }

  createAccount(newAccountData: AccountData): Observable<AuthResponseData> {
    const requestBody = {
      ...newAccountData,
      returnSecureToken: true,
    };

    return this._httpClient
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9LF0rwuGOtws-ybfEryLCE3CBvyzj510',
        requestBody
      )
      .pipe(catchError(this.mapResponseErrorToMessage));
  }

  mapResponseErrorToMessage(errorResponse: any): Observable<never> {
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error('UNKNOWN_ERROR'));
    }

    return throwError(() => new Error(errorResponse.error.error.message));
  }
}
