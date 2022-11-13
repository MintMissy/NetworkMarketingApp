import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CardComponent } from 'src/app/core/components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Shop } from '../../model/store.model';
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
