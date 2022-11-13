import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
