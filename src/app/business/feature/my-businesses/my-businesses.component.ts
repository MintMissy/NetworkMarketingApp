import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { deleteBusiness, loadBusinesses } from '../../data-access/business.actions';

import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Business } from '../../model/business.model';
import { BusinessesListComponent } from '../../ui/businesses-list/businesses-list.component';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { User } from '@angular/fire/auth';
import { selectBusinessesByUser } from '../../data-access/business.selectors';

@Component({
  selector: 'app-my-businesses',
  standalone: true,
  imports: [
    CommonModule,
    BusinessesListComponent,
    AddItemCardComponent,
    MatDialogModule,
    TranslateModule,
  ],
  templateUrl: './my-businesses.component.html',
  styleUrls: ['./my-businesses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyBusinessesComponent implements OnInit, OnDestroy {
  businesses$!: Observable<Business[]>;
  subscription!: Subscription;
  userData!: User | null;

  constructor(
    private _store: Store<AppState>,
    private _authService: AuthenticationService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadBusinesses());
    this.subscription = this._authService.userData$.subscribe((data) => {
      this.userData = data;
      if (data === null) {
        return;
      }

      // @ts-ignore
      this.businesses$ = this._store.select(selectBusinessesByUser(data.uid));
    });
  }

  deleteClick(business: Business) {
    const openedDialog = this._dialog.open(ConfirmDialogComponent);
    openedDialog.afterClosed().subscribe((result) => {
      if (result) {
        this._store.dispatch(deleteBusiness({ id: business.id }));
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
