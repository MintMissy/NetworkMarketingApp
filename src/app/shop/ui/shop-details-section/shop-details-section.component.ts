import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ShopDetails } from '../../model/shop.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-shop-details-section',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule],
  templateUrl: './shop-details-section.component.html',
  styleUrls: ['./shop-details-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopDetailsSectionComponent implements OnInit {
  @Input() shopDetails!: ShopDetails;

  constructor() {}

  ngOnInit(): void {}
}
