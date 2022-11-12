import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatSidenav } from '@angular/material/sidenav';

@Directive({
  selector: '[appSidenav]',
})
export class SidenavDirective implements OnInit {
  @Input() drawerContainer!: MatDrawerContainer;
  @Input() drawer!: MatDrawer;
  private innerWidth: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.setInnerWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    // TODO close sidenav after clicking in the button
    // @ts-ignore
    this.setInnerWidth(event.target.innerWidth);
  }

  private setInnerWidth(newWidth: number): void {
    this.innerWidth = newWidth;
    this.updateElementView();
  }

  private updateElementView(): void {
    if (this.innerWidth < 600) {
      this.drawer.mode = 'over';
      this.drawer.close();
      this.drawerContainer.hasBackdrop = true;
    } else {
      this.drawer.mode = 'side';
      this.drawer.open();
      this.drawerContainer.hasBackdrop = false;
    }
  }
}
