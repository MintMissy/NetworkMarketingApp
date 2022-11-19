import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { ShopDetails } from '../../model/shop.model';

@Component({
  selector: 'app-shop-details-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './shop-details-section.component.html',
  styleUrls: ['./shop-details-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopDetailsSectionComponent implements OnInit {
  @Input() shopDetails!: ShopDetails;

  constructor() {}

  ngOnInit(): void {}
}
