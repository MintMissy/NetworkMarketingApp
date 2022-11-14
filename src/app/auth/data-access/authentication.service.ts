import { ExistingAccountData, NewAccountData } from '../model/account-data.model';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);

  constructor() {}

  isLoggedIn(): boolean {
    return this.user.getValue() != null;
  }

  login(accountData: ExistingAccountData): void {}

  logout(): void {}

  createAccount(newAccountData: NewAccountData): void {}
}
