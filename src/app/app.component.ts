import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor() {}

  toggleSidenav() {
    if (this.sidenav.opened) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    // TODO close sidenav after clicking in the button
    // TODO add backdrop shadow that will close sidenav when innerWidth < 500
    // @ts-ignore
    if (event.target.innerWidth < 500) {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.mode = 'side';
      this.sidenav.open();
    }
  }
}
