import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BusinessDetails } from '../../model/business.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-business-details-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './business-details-section.component.html',
  styleUrls: ['./business-details-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessDetailsSectionComponent implements OnInit {
  @Input() businessDetails!: BusinessDetails;

  constructor() {}

  ngOnInit(): void {}
}
