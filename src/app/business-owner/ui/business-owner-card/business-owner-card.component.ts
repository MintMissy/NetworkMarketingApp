import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { BusinessOwner } from '../../model/business-owner.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-owner-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-owner-card.component.html',
  styleUrls: ['./business-owner-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessOwnerCardComponent implements OnInit {
  @Input() businessOwner!: BusinessOwner;

  constructor() {}

  ngOnInit(): void {}
}
