import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Shop } from '../../model/shop.model';
import { ShopsListComponent } from '../../ui/shops-list/shops-list.component';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';
import { loadShops } from '../../data-access/shop.actions';
import { selectShopsEntities } from '../../data-access/shop.selectors';

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
  userData$!: Observable<User | null>;

  constructor(private _store: Store<AppState>, private _authService: AuthenticationService) {}

  ngOnInit(): void {
    this._store.dispatch(loadShops());
    // TODO stores state
    // this.shops$ = this._store.select(selectShopsEntities());
    this.userData$ = this._authService.userData$;
  }
}
