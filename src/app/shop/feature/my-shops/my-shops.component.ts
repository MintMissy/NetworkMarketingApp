import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { deleteShop, loadShops } from '../../data-access/shop.actions';

import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { Shop } from '../../model/shop.model';
import { ShopsListComponent } from '../../ui/shops-list/shops-list.component';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';
import { loadBusinesses } from 'src/app/business/data-access/business.actions';
import { selectBusinessesByUser } from 'src/app/business/data-access/business.selectors';
import { selectShopsByBusinesses } from '../../data-access/shop.selectors';

@Component({
  selector: 'app-my-shops',
  standalone: true,
  imports: [CommonModule, ShopsListComponent, AddItemCardComponent, MatDialogModule],
  templateUrl: './my-shops.component.html',
  styleUrls: ['./my-shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyShopsComponent implements OnInit, OnDestroy {
  shops!: Shop[];
  userData$!: Observable<User | null>;
  destroySignal = new Subject<void>();

  constructor(
    private _store: Store<AppState>,
    private _dialog: MatDialog,
    private _authService: AuthenticationService,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userData$ = this._authService.userData$;

    this._store.dispatch(loadBusinesses());
    this._store.dispatch(loadShops());
    this._store
      .select(selectBusinessesByUser(this._authService.getUserId()))
      .pipe(
        takeUntil(this.destroySignal),
        map((businesses) => businesses.map((business) => business?.id))
      )
      .subscribe((businessesIds) => {
        this._store
          // @ts-ignore
          .select(selectShopsByBusinesses(businessesIds))
          .pipe(takeUntil(this.destroySignal))
          .subscribe((selectedShops) => {
            // @ts-ignore
            this.shops = selectedShops;
            this._changeDetectorRef.markForCheck();
          });
      });
  }

  ngOnDestroy(): void {
    this.destroySignal.next();
    this.destroySignal.unsubscribe();
  }

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
