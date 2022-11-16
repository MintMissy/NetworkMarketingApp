import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Shop } from '../../model/shop.model';
import { ShopsListComponent } from '../../ui/shops-list/shops-list.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [CommonModule, RouterModule, ShopsListComponent],
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsComponent implements OnInit {
  shops$!: Observable<Shop[]>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {}
}
