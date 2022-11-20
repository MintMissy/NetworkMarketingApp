import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AddressSectionComponent } from 'src/app/core/components/display-sections/address-section/address-section.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Business } from '../../model/business.model';
import { BusinessDetailsSectionComponent } from '../../ui/business-details-section/business-details-section.component';
import { CommonModule } from '@angular/common';
import { ContactSectionComponent } from 'src/app/core/components/display-sections/contact-section/contact-section.component';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { User } from '@angular/fire/auth';
import { selectBusinessEntity } from '../../data-access/business.selectors';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactSectionComponent,
    AddressSectionComponent,
    BusinessDetailsSectionComponent,
    MatButtonModule,
    TranslateModule,
  ],
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessComponent implements OnInit {
  business$!: Observable<Business | undefined>;
  loggedInUser$!: Observable<User | null>;

  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id')!;

    this.loggedInUser$ = this._authService.userData$.asObservable();
    this.business$ = this._store.select(selectBusinessEntity(id));
  }
}
