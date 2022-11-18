import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Business } from '../../model/business.model';
import { BusinessFormComponent } from '../../ui/business-form/business-form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { insertBusiness } from '../../data-access/business.actions';

@Component({
  selector: 'app-add-business',
  standalone: true,
  imports: [CommonModule, BusinessFormComponent],
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBusinessComponent implements OnInit {
  constructor(
    private _router: Router,
    private _store: Store<AppState>,
    private _authService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  onSubmit(business: Business) {
    const userId = this._authService.userData$.value?.uid;
    if (userId == undefined) {
      this.redirect();
      return;
    }

    business.ownerId = userId;
    business.shopIds = [];

    business.details.parentBusinessId = null;
    business.shopIds = [];

    this._store.dispatch(insertBusiness({ business: business }));
  }

  onDiscard() {
    this.redirect();
  }

  redirect() {
    this._router.navigate(['businesses']);
  }
}
