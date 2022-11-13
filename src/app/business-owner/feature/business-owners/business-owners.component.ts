import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-owners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-owners.component.html',
  styleUrls: ['./business-owners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessOwnersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
