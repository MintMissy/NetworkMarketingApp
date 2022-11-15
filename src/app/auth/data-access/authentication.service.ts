import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, first, map } from 'rxjs';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { AccountData } from '../model/account-data.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthProvider } from '@angular/fire/auth';
import { FirebaseUser } from '../model/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userData: any;
  private credentialData: any;
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _angularFireStore: AngularFirestore,
    private _router: Router
  ) {
    this._angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        this.isLoggedIn$.next(true);
      } else {
        localStorage.removeItem('user');
        JSON.parse(localStorage.getItem('user')!);
        this.isLoggedIn$.next(false);
      }
    });
  }

  getCredentialData() {
    return this.credentialData;
  }

  getUserData() {
    return this.userData;
  }

  isLoggedIn(): Observable<boolean> {
    return this._angularFireAuth.authState.pipe(
      first(),
      map((user) => !!user)
    );
  }

  createAccount(newAccountData: AccountData) {
    return this._angularFireAuth.setPersistence('local').then(() => {
      return this._angularFireAuth
        .createUserWithEmailAndPassword(newAccountData.email, newAccountData.password)
        .then((response) => {
          this.setUserData(response.user);
        });
    });
  }

  private login(credential: any) {
    this.credentialData = credential;
    this.isLoggedIn$.next(true);
    this._router.navigate(['']);
  }

  emailLogin(accountData: AccountData) {
    return this._angularFireAuth.setPersistence('local').then(() => {
      return this._angularFireAuth
        .signInWithEmailAndPassword(accountData.email, accountData.password)
        .then((response) => {
          this.setUserData(response.user);
          this._angularFireAuth.authState.subscribe((user) => {
            if (user) {
              this.login(response.credential);
            }
          });
        });
    });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this._angularFireStore.doc(`users/${user.uid}`);
    const userData: FirebaseUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userData, { merge: true });
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
    return this._angularFireAuth.setPersistence('local').then(() => {
      return this._angularFireAuth.signInWithPopup(provider).then((response) => {
        this.setUserData(response.user);
        this.login(response.credential);
      });
    });
  }

  logout(): void {
    this._angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.isLoggedIn$.next(false);
      this._router.navigate(['']);
    });
  }
}
