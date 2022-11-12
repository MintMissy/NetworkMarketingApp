import { Directive, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Directive({
  selector: '[appSidenav]',
})
export class SidenavDirective {
  @Input() sidenav!: MatDrawer;
  constructor(private element: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    // TODO close sidenav after clicking in the button
    // TODO add backdrop shadow that will close sidenav when innerWidth < 500
    // TODO move this logic to directive
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
