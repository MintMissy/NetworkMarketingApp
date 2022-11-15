import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { AccountData } from '../model/account-data.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthProvider } from '@angular/fire/auth';
import { AuthResponseData } from '../model/auth-response-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userSubject = new BehaviorSubject<User | null>(null);

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _router: Router,
    private _httpClient: HttpClient
  ) {}

  isLoggedIn(): boolean {
    return this.userSubject.getValue() != null;
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
      .pipe(catchError(this.convertResponseErrorToMessage), tap(this.handleUserChange.bind(this)));
  }

  handleUserChange(response: AuthResponseData): void {
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      new Date(new Date().getTime() + +response.expiresIn * 1000)
    );

    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
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

  private authLogin(provider: AuthProvider) {
    return this._angularFireAuth
      .signInWithPopup(provider)
      .then((response) => {
        console.log('successful login');
        console.log(response);

        // TODO handle getting information from other requests
        // this.handleUserChange(response.credential).bind(this);
        this._router.navigate(['']);
      })
      .catch((errorResponse) => this.convertResponseErrorToMessage(errorResponse));
  }

  logout(): void {
    this._angularFireAuth.signOut().then(() => {});
    this._router.navigate(['']);
    this.userSubject.next(null);
    localStorage.removeItem('user');
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
      .pipe(catchError(this.convertResponseErrorToMessage), tap(this.handleUserChange.bind(this)));
  }

  convertResponseErrorToMessage(errorResponse: any): Observable<never> {
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error('UNKNOWN_ERROR'));
    }

    return throwError(() => new Error(errorResponse.error.error.message));
  }
}
