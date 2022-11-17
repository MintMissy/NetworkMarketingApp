import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Businessman } from '../../model/businessman.model';
import { BusinessmenListComponent } from '../../ui/businessmen-list/businessmen-list.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';
import { loadBusinessmen } from '../../data-access/businessman.actions';
import { selectAllBusinessmen } from '../../data-access/businessman.selectors';

@Component({
  selector: 'app-businessmen',
  standalone: true,
  imports: [CommonModule, RouterModule, BusinessmenListComponent],
  templateUrl: './businessmen.component.html',
  styleUrls: ['./businessmen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmenComponent implements OnInit {
  businessmen$!: Observable<Businessman[]>;
  userData$!: Observable<User | null>;

  constructor(private _store: Store<AppState>, private _authService: AuthenticationService) {
    this.businessmen$ = this._store.select(selectAllBusinessmen);
  }

  ngOnInit(): void {
    this._store.dispatch(loadBusinessmen());
    this.businessmen$ = this._store.select(selectAllBusinessmen);
    this.userData$ = this._authService.userData$;
  }
}
