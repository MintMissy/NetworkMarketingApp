import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Businessman } from '../../model/businessman.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-businessman-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './businessman-card.component.html',
  styleUrls: ['./businessman-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmanCardComponent implements OnInit {
  @Input() businessman!: Businessman;

  constructor() {}

  ngOnInit(): void {}
}
