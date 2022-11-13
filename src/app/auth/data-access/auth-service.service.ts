import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  user = new BehaviorSubject<User | null>(null);

  constructor() {}

  isLoggedIn(): boolean {
    return false;
  }

  login(): void {}

  logout(): void {}
}
