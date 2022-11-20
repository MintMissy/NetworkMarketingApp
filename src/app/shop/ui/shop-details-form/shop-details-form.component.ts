import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Business } from 'src/app/business/model/business.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { loadBusinesses } from 'src/app/business/data-access/business.actions';
import { selectBusinessesByUser } from 'src/app/business/data-access/business.selectors';

@Component({
  selector: 'app-shop-details-form',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    TranslateModule,
  ],
  templateUrl: './shop-details-form.component.html',
  styleUrls: ['./shop-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopDetailsFormComponent implements OnInit, OnDestroy {
  @Input() shopDetailsGroup!: FormGroup;
  @Input() enabledEditingBusiness = false;
  userBusinesses$!: Observable<Business[]>;
  subscription!: Subscription;

  constructor(private _store: Store<AppState>, private _authService: AuthenticationService) {}

  ngOnInit(): void {
    this._store.dispatch(loadBusinesses());
    this.subscription = this._authService.userData$.subscribe((data) => {
      if (data === null) {
        return;
      }

      // @ts-ignore
      this.userBusinesses$ = this._store.select(selectBusinessesByUser(data.uid));
    });

    this.shopDetailsGroup
      .get('name')
      ?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(256)]);
    this.shopDetailsGroup
      .get('description')
      ?.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(512)]);
    this.shopDetailsGroup
      .get('shopBanner')
      ?.setValidators([
        Validators.required,
        Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/g),
      ]);
    this.shopDetailsGroup.get('businessId')?.setValidators([Validators.required]);
    if (!this.enabledEditingBusiness) {
      this.shopDetailsGroup.get('businessId')?.disable();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
