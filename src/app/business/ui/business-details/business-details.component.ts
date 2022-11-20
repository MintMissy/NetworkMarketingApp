import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppState } from 'src/app/app.state';
import { Business } from '../../model/business.model';
import { BusinessIndustrySet } from '../../model/business-industry.enum';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { loadBusinesses } from '../../data-access/business.actions';
import { selectAllBusinesses } from '../../data-access/business.selectors';

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessDetailsComponent implements OnInit {
  @Input() businessDetailsGroup!: FormGroup;
  @Input() enabledNetworkSelection: boolean = false;
  BusinessIndustrySet = BusinessIndustrySet;
  businesses$!: Observable<Business[]>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(loadBusinesses());
    this.businesses$ = this._store.select(selectAllBusinesses);

    this.businessDetailsGroup
      .get('companyName')
      ?.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(256)]);
    this.businessDetailsGroup
      .get('description')
      ?.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(512)]);
    this.businessDetailsGroup.get('industry')?.setValidators([Validators.required]);
    this.businessDetailsGroup
      .get('backgroundImage')
      ?.setValidators([
        Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/g),
      ]);
    if (this.enabledNetworkSelection == false) {
      this.businessDetailsGroup.get('parentBusinessId')?.disable();
    }
  }
}
