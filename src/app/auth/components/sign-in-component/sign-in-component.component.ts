import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
