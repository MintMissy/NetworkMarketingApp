import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-actions',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormActionsComponent implements OnInit {
  @Output() submit = new EventEmitter<void>();
  @Output() discard = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
