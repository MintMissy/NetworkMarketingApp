import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Business } from '../../model/business.model';
import { BusinessesListComponent } from '../../ui/businesses-list/businesses-list.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadBusinesses } from '../../data-access/business.actions';
import { selectBusinessesByUser } from '../../data-access/business.selectors';

@Component({
  selector: 'app-my-businesses',
  standalone: true,
  imports: [CommonModule, BusinessesListComponent, AddItemCardComponent],
  templateUrl: './my-businesses.component.html',
  styleUrls: ['./my-businesses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyBusinessesComponent implements OnInit, OnDestroy {
  businesses$!: Observable<Business[]>;
  subscription!: Subscription;

  constructor(private _store: Store<AppState>, private _authService: AuthenticationService) {}

  ngOnInit(): void {
    this._store.dispatch(loadBusinesses());
    this.subscription = this._authService.userData$.subscribe((data) => {
      if (data === null) {
        return;
      }

      // @ts-ignore
      this.businesses$ = this._store.select(selectBusinessesByUser(data.uid));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
