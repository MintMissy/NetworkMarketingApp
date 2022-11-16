import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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

  onButtonClick() {
    this.buttonClick.emit();
  }

  onLogoutButtonClick() {
    this.logoutButtonClick.emit();
  }
}
