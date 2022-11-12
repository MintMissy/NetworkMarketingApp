import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';

@Directive({
  selector: '[appSidenav]',
})
export class SidenavDirective implements OnInit {
  @Input() drawerContainer!: MatDrawerContainer;
  @Input() drawer!: MatDrawer;
  @Input() sidenavHideScreenWidth!: number;
  private innerWidth: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.setInnerWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    // @ts-ignore
    this.setInnerWidth(event.target.innerWidth);
  }

  private setInnerWidth(newWidth: number): void {
    this.innerWidth = newWidth;
    this.updateElementView();
  }

  private updateElementView(): void {
    if (this.innerWidth < this.sidenavHideScreenWidth) {
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
