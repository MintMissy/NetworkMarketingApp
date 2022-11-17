import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthenticationService } from './auth/data-access/authentication.service';
import { BehaviorSubject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavHideScreenWidth = 700;
  isUserLoggedIn!: BehaviorSubject<boolean>;
  userData$!: BehaviorSubject<User | null>;

  constructor(private _authService: AuthenticationService, private _store: Store) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this._authService.isLoggedIn$;
    this.userData$ = this._authService.userData$;
  }

  toggleSidenav() {
    if (this.sidenav.opened) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  onLogOut(): void {
    this._authService.logout();
  }

  onSidenavButtonClick() {
    if (window.innerWidth < this.sidenavHideScreenWidth) {
      this.toggleSidenav();
    }
  }
}
