import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Output() buttonClick = new EventEmitter<void>();

  constructor(private _authService: AuthenticationService) {}

  isUserLoggedIn(): boolean {
    return this._authService.isLoggedIn();
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
