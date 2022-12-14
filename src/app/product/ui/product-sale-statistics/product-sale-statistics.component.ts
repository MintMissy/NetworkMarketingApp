import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-sale-statistics',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './product-sale-statistics.component.html',
  styleUrls: ['./product-sale-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSaleStatisticsComponent implements OnInit {
  @Input() saleStatisticsGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.saleStatisticsGroup.get('amountInStorage')?.setValidators([Validators.min(0)]);
    this.saleStatisticsGroup.get('soldAmount')?.setValidators([Validators.min(0)]);
  }
}
