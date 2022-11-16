import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Shop } from '../../model/shop.model';
import { ShopCardComponent } from '../shop-card/shop-card.component';

@Component({
  selector: 'app-shops-list',
  standalone: true,
  imports: [CommonModule, ShopCardComponent],
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsListComponent implements OnInit {
  @Input() shops!: Shop[] | null;

  constructor() {}

  ngOnInit(): void {}
}
