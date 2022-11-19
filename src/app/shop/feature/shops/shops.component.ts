import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { deleteShop, loadShops } from '../../data-access/shop.actions';

import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Shop } from '../../model/shop.model';
import { ShopsListComponent } from '../../ui/shops-list/shops-list.component';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [CommonModule, RouterModule, ShopsListComponent, MatDialogModule],
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopsComponent implements OnInit {
  shops$!: Observable<Shop[]>;
  userData$!: Observable<User | null>;

  constructor(
    private _store: Store<AppState>,
    private _authService: AuthenticationService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadShops());
    // TODO stores state
    // this.shops$ = this._store.select(selectShopsEntities());
    this.userData$ = this._authService.userData$;
  }

  deleteClick(shop: Shop) {
    const openedDialog = this._dialog.open(ConfirmDialogComponent);
    openedDialog.afterClosed().subscribe((result) => {
      if (result) {
        this._store.dispatch(deleteShop({ id: shop.id }));
      }
    });
  }
}
