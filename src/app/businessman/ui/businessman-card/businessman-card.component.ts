import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Businessman } from '../../model/businessman.model';

@Component({
  selector: 'app-businessman-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './businessman-card.component.html',
  styleUrls: ['./businessman-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmanCardComponent implements OnInit {
  @Input() businessOwner!: Businessman;

  constructor() {}

  ngOnInit(): void {}
}
