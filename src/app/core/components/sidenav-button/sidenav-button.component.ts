import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-button',
  templateUrl: './sidenav-button.component.html',
  styleUrls: ['./sidenav-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavButtonComponent {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() link!: string;

  constructor() {}
}
