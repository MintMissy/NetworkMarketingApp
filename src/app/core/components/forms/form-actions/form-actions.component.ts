import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form-actions',
  standalone: true,
  imports: [CommonModule, MatButtonModule, TranslateModule],
  templateUrl: './form-actions.component.html',
  styleUrls: ['./form-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormActionsComponent implements OnInit {
  @Output() submit = new EventEmitter<void>();
  @Output() discard = new EventEmitter<void>();

  constructor() {}

  onSubmitClick(event: Event) {
    event.preventDefault();
    this.submit.emit();
  }

  onDiscardClick(event: Event) {
    event.preventDefault();
    this.discard.emit();
  }

  ngOnInit(): void {}
}
