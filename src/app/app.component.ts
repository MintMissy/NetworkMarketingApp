import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthenticationService } from './auth/data-access/authentication.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavHideScreenWidth = 700;
  isUserLoggedIn = false;
  constructor(private _authService: AuthenticationService) {}

  ngOnInit(): void {
    this._authService.autoLogin();

    this._authService.userSubject.subscribe((newUser) => {
      if (newUser == null) {
        this.isUserLoggedIn = false;
        return;
      }

      this.isUserLoggedIn = true;
    });
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
