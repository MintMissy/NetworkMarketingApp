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
  autoLogOutTimeout!: NodeJS.Timeout;

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

  autoLogin() {
    const data = localStorage.getItem('user');
    if (data == null) {
      return;
    }

    const userData: {
      email: string;
      _localId: string;
      _token: string;
      _expirationDate: string;
    } = JSON.parse(data);

    const user = new User(
      userData.email,
      userData._localId,
      userData._token,
      new Date(userData._expirationDate)
    );

    if (user.token) {
      this.userSubject.next(user);
    }

    const date = new Date().getTime();
    const expirationDate = new Date(userData._expirationDate).getTime();
    this.autoLogOut((expirationDate - date) / 1000);
  }

  autoLogOut(expirationDate: number) {
    this.autoLogOutTimeout = setTimeout(() => {
      this.logout();
    }, expirationDate * 1000);
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
    this.autoLogOut(+response.expiresIn * 1000);
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

    if (this.autoLogOutTimeout) {
      clearTimeout(this.autoLogOutTimeout);
    }
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
