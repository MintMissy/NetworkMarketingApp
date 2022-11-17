import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Businessman } from '../../model/businessman.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-businessman-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './businessman-card.component.html',
  styleUrls: ['./businessman-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmanCardComponent implements OnInit {
  @Input() businessman!: Businessman;
  @Input() userId!: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
