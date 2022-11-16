import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { Businessman } from '../../model/businessman.model';
import { BusinessmenListComponent } from '../../ui/businessmen-list/businessmen-list.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllBusinessmen } from '../../data-access/businessman.selectors';

@Component({
  selector: 'app-businessmen',
  standalone: true,
  imports: [CommonModule, RouterModule, BusinessmenListComponent],
  templateUrl: './businessmen.component.html',
  styleUrls: ['./businessmen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessMenComponent implements OnInit {
  businessmen$!: Observable<Businessman[]>;

  constructor(private _store: Store<AppState>) {
    this.businessmen$ = this._store.select(selectAllBusinessmen);
  }

  ngOnInit(): void {}
}
