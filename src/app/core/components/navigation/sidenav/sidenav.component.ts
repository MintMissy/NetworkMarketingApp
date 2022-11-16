import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Output() buttonClick = new EventEmitter<void>();
  @Output() logoutButtonClick = new EventEmitter<void>();
  @Input() isUserLoggedIn: boolean = false;
  @Input() loggedInUser!: User | null;

  onButtonClick() {
    this.buttonClick.emit();
  }

  onLogoutButtonClick() {
    this.logoutButtonClick.emit();
  }
}
