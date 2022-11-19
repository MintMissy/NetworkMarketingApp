import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { AppState } from 'src/app/app.state';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { Shop } from '../../model/shop.model';
import { ShopsListComponent } from '../../ui/shops-list/shops-list.component';
import { Store } from '@ngrx/store';
import { deleteShop } from '../../data-access/shop.actions';

@Component({
  selector: 'app-my-shops',
  standalone: true,
  imports: [CommonModule, ShopsListComponent, AddItemCardComponent, MatDialogModule],
  templateUrl: './my-shops.component.html',
  styleUrls: ['./my-shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyShopsComponent implements OnInit {
  constructor(private _store: Store<AppState>, private _dialog: MatDialog) {}

  ngOnInit(): void {}

  // TODO method implementation in childred
  deleteClick(shop: Shop) {
    const openedDialog = this._dialog.open(ConfirmDialogComponent);
    openedDialog.afterClosed().subscribe((result) => {
      if (result) {
        this._store.dispatch(deleteShop({ id: shop.id }));
      }
    });
  }
}
