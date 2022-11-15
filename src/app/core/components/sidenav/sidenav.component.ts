import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<void>();
  isUserLoggedIn: boolean = false;

  // TODO move logic to smart component
  constructor(private _authService: AuthenticationService) {}

  ngOnInit(): void {
    this._authService.userSubject.subscribe((newUser) => {
      if (newUser == null) {
        this.isUserLoggedIn = false;
        return;
      }
      this.isUserLoggedIn = true;
    });
  }

  onButtonClick() {
    this.buttonClick.emit();
  }

  onLogoutButtonClick() {
    this._authService.logout();
  }
}
