import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Shop } from '../../model/shop.model';

@Component({
  selector: 'app-shop-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent implements OnInit {
  @Input() shop!: Shop;

  constructor() {}

  ngOnInit(): void {}
}
