import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Business } from '../../model/business.model';
import { BusinessCardComponent } from '../business-card/business-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-businesses-list',
  standalone: true,
  imports: [CommonModule, BusinessCardComponent],
  templateUrl: './businesses-list.component.html',
  styleUrls: ['./businesses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessesListComponent implements OnInit {
  @Input() businesses!: Business[] | null;

  constructor() {}

  ngOnInit(): void {}
}
