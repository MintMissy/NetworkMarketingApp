import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { Business } from '../../model/business.model';
import { BusinessesListComponent } from '../../ui/businesses-list/businesses-list.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadBusinesses } from '../../data-access/business.actions';
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

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(loadBusinesses());
    this.businesses$ = this._store.select(selectAllBusinesses);
    this.businesses$.subscribe((businesses) => {
      console.log('===========');
      console.log(businesses);
    });
  }
}
