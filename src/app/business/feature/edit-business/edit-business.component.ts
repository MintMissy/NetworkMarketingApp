import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { Business } from '../../model/business.model';
import { BusinessFormComponent } from '../../ui/business-form/business-form.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { selectBusinessEntity } from '../../data-access/business.selectors';
import { updateBusiness } from '../../data-access/business.actions';

@Component({
  selector: 'app-edit-business',
  standalone: true,
  imports: [CommonModule, BusinessFormComponent, TranslateModule],
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBusinessComponent implements OnInit {
  business$!: Observable<Business | undefined>;
  selectedBusinessId!: string;

  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectedBusinessId = this._activatedRoute.snapshot.paramMap.get('id')!;
    this.business$ = this._store.select(selectBusinessEntity(this.selectedBusinessId));
  }

  onSubmit(business: Business) {
    const businessCloned = {
      ...business,
      id: this.selectedBusinessId,
    };
    this._store.dispatch(updateBusiness({ business: businessCloned }));
  }

  onDiscard() {
    this.redirect();
  }

  redirect() {
    this._router.navigate(['businesses', 'my']);
  }
}
