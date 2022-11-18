import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AuthProvider, User } from '@angular/fire/auth';
import { BehaviorSubject, Observable, first, map } from 'rxjs';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AppState } from 'src/app/app.state';
import { Businessman } from 'src/app/businessman/model/businessman.model';
import { Country } from 'src/app/core/model/country.enum';
import { FirebaseUserResponse } from '../model/firebase-user-response.model';
import { Injectable } from '@angular/core';
import { LoginData } from '../model/login-data.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { insertBusinessmanSuccess } from 'src/app/businessman/data-access/businessman.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private credentialData: any;
  userData$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _angularFireStore: AngularFirestore,
    private _router: Router,
    private _store: Store<AppState>
  ) {
    this._angularFireAuth.authState.subscribe((user) => {
      if (user) {
        // @ts-ignore
        this.userData$.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user')!);
        this.isLoggedIn$.next(true);
      } else {
        this.userData$.next(null);
        localStorage.removeItem('user');
        JSON.parse(localStorage.getItem('user')!);
        this.isLoggedIn$.next(false);
      }
    });
  }

  getUserId(): string {
    const user = this.userData$.getValue();
    return user === null ? '' : user.uid;
  }

  getCredentialData() {
    return this.credentialData;
  }

  isLoggedIn(): Observable<boolean> {
    return this._angularFireAuth.authState.pipe(
      first(),
      map((user) => !!user)
    );
  }

  createAccount(newAccountData: LoginData) {
    return this._angularFireAuth.setPersistence('local').then(() => {
      return this._angularFireAuth
        .createUserWithEmailAndPassword(newAccountData.email, newAccountData.password)
        .then((response) => {
          this.setUserData(response.user);
          // @ts-ignore
          this.createUserRecordInDatabase(response.user);
        });
    });
  }

  private login(credential: any) {
    this.credentialData = credential;
    this.isLoggedIn$.next(true);
    this._router.navigate(['']);
  }

  emailLogin(accountData: LoginData) {
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
    const userData: FirebaseUserResponse = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userData, { merge: true });
  }

  logout(): void {
    this._angularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData$.next(null);
      this.isLoggedIn$.next(false);
      this._router.navigate(['']);
    });
  }

  googleLogin() {
    return this.loginWithExternalProvider(new GoogleAuthProvider());
  }

  facebookLogin() {
    return this.loginWithExternalProvider(new FacebookAuthProvider());
  }

  githubLogin() {
    return this.loginWithExternalProvider(new GithubAuthProvider());
  }

  private loginWithExternalProvider(provider: AuthProvider) {
    return this._angularFireAuth.setPersistence('local').then(() => {
      return this._angularFireAuth.signInWithPopup(provider).then((response) => {
        this.setUserData(response.user);
        this.login(response.credential);

        if (response.additionalUserInfo?.isNewUser) {
          // @ts-ignore
          this.createUserRecordInDatabase(response.user);
        }
      });
    });
  }

  private createUserRecordInDatabase(user: User | null) {
    const businessman: Businessman = {
      id: user!.uid,
      details: {
        firstName: user === null || user.displayName === null ? '' : user.displayName,
        surname: '',
        avatar: user === null || user.photoURL === null ? '' : user.photoURL,
      },
      address: {
        country: Country.Undefined,
        city: '',
        street: '',
        localNumber: '',
        postalCode: '',
      },
      contactDetails: {
        telephone: user === null || user.phoneNumber === null ? 0 : parseInt(user.phoneNumber),
        email: user === null || user.email === null ? '' : user.email,
      },
      ownedBusinesses: [],
    };
    this._store.dispatch(insertBusinessmanSuccess({ businessman: businessman }));
  }
}
