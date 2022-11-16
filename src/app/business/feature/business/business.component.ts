import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
