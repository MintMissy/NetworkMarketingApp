import { ExistingAccountData, NewAccountData } from '../model/account-data.model';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private _angularFireAuth: AngularFireAuth, private _router: Router) {}

  isLoggedIn(): boolean {
    return this.user.getValue() != null;
  }

  emailLogin(accountData: ExistingAccountData): void {}

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
        console.log(result);
        console.log('successful login');
        this._router.navigate(['']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout(): void {
    this._angularFireAuth.signOut();
  }

  createAccount(newAccountData: NewAccountData): void {}
}
