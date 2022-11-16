import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Businessman } from '../../model/businessman.model';
import { BusinessmanCardComponent } from '../businessman-card/businessman-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-businessmen-list',
  standalone: true,
  imports: [CommonModule, BusinessmanCardComponent],
  templateUrl: './businessmen-list.component.html',
  styleUrls: ['./businessmen-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmenListComponent implements OnInit {
  @Input() businessmen!: Businessman[] | null;

  constructor() {}

  ngOnInit(): void {}
}
