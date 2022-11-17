import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { Business } from '../../model/business.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBusinessEntity } from '../../data-access/business.selectors';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessComponent implements OnInit {
  business$!: Observable<Business | undefined>;

  constructor(private _store: Store<AppState>, private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id == undefined) {
      return;
    }

    this.business$ = this._store.select(selectBusinessEntity(id));
  }
}
