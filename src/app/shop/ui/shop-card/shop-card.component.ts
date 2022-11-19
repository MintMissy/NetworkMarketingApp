import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Business } from 'src/app/business/model/business.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Shop } from '../../model/shop.model';
import { Store } from '@ngrx/store';
import { loadBusiness } from 'src/app/business/data-access/business.actions';
import { selectBusinessEntity } from 'src/app/business/data-access/business.selectors';

@Component({
  selector: 'app-shop-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent implements OnInit {
  @Input() shop!: Shop;
  @Input() userId!: string | undefined;
  business$!: Observable<Business | undefined>;

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(loadBusiness({ id: this.shop.details.businessId }));
    this.business$ = this._store.select(selectBusinessEntity(this.shop.details.businessId));
  }
}
