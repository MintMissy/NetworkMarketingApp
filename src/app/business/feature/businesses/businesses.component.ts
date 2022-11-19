import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { deleteBusiness, loadBusinesses } from '../../data-access/business.actions';

import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Business } from '../../model/business.model';
import { BusinessesListComponent } from '../../ui/businesses-list/businesses-list.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';
import { selectAllBusinesses } from '../../data-access/business.selectors';

@Component({
  selector: 'app-businesses',
  standalone: true,
  imports: [CommonModule, BusinessesListComponent],
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessesComponent implements OnInit {
  businesses$!: Observable<Business[]>;
  userData$!: Observable<User | null>;

  constructor(private _store: Store<AppState>, private _authService: AuthenticationService) {}

  ngOnInit(): void {
    this._store.dispatch(loadBusinesses());
    this.businesses$ = this._store.select(selectAllBusinesses);
    this.userData$ = this._authService.userData$;
  }

  deleteClick(business: Business) {
    this._store.dispatch(deleteBusiness({ id: business.id }));
  }
}
