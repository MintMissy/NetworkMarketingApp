import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-sale-statistics',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule],
  templateUrl: './product-sale-statistics.component.html',
  styleUrls: ['./product-sale-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSaleStatisticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
