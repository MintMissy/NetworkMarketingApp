import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { Business } from '../../model/business.model';
import { BusinessFormComponent } from '../../ui/business-form/business-form.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBusinessEntity } from '../../data-access/business.selectors';
import { updateBusiness } from '../../data-access/business.actions';

@Component({
  selector: 'app-edit-business',
  standalone: true,
  imports: [CommonModule, BusinessFormComponent],
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBusinessComponent implements OnInit {
  business$!: Observable<Business | undefined>;
  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const businessId = this.activatedRoute.snapshot.paramMap.get('id');
    if (businessId === null) {
      this.redirect();
      return;
    }

    this.business$ = this._store.select(selectBusinessEntity(businessId));
  }

  onSubmit(business: Business) {
    this._store.dispatch(updateBusiness({ business: business }));
  }

  onDiscard() {
    this.redirect();
  }

  redirect() {
    this._router.navigate(['businesses', 'my']);
  }
}
