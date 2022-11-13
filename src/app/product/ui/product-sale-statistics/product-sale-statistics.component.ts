import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-sale-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-sale-statistics.component.html',
  styleUrls: ['./product-sale-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSaleStatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
