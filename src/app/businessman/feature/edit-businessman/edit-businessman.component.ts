import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { Businessman } from '../../model/businessman.model';
import { BusinessmanFormComponent } from '../../ui/businessman-form/businessman-form.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBusinessmanEntity } from '../../data-access/businessman.selectors';
import { updateBusinessman } from '../../data-access/businessman.actions';

@Component({
  selector: 'app-edit-businessman',
  standalone: true,
  imports: [CommonModule, BusinessmanFormComponent],
  templateUrl: './edit-businessman.component.html',
  styleUrls: ['./edit-businessman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBusinessManComponent implements OnInit {
  businessman$!: Observable<Businessman | undefined>;
  selectedId!: string;
  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectedId = this._activatedRoute.snapshot.paramMap.get('id')!;
    this.businessman$ = this._store.select(selectBusinessmanEntity(this.selectedId));
  }

  onSubmit(businessman: Businessman) {
    const businessmanClone: Businessman = {
      ...businessman,
      id: this.selectedId,
    };
    this._store.dispatch(updateBusinessman({ businessman: businessmanClone }));
  }

  onDiscard() {
    this._router.navigate(['..']);
  }
}
