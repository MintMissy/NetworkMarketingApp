import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { AuthServiceService } from 'src/app/auth/data-access/auth-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Output() buttonClick = new EventEmitter<void>();

  constructor(private authService: AuthServiceService) {}

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onButtonClick() {
    this.buttonClick.emit();
  }
}
