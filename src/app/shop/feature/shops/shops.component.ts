import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { Shop } from '../../model/shop.model';
import { ShopCardComponent } from '../../ui/shop-card/shop-card.component';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, ShopCardComponent],
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsComponent implements OnInit {
  shops!: Observable<Shop[]>;

  constructor() {}

  ngOnInit(): void {}
}
