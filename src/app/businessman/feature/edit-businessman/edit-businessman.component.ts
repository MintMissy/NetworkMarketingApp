import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-businessman',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-businessman.component.html',
  styleUrls: ['./edit-businessman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBusinessManComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
