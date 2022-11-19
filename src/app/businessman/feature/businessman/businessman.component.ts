import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AddressSectionComponent } from 'src/app/core/components/display-sections/address-section/address-section.component';
import { AppState } from 'src/app/app.state';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { Businessman } from '../../model/businessman.model';
import { CommonModule } from '@angular/common';
import { ContactSectionComponent } from 'src/app/core/components/display-sections/contact-section/contact-section.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { PersonDetailsSectionComponent } from '../../ui/person-details-section/person-details-section.component';
import { Store } from '@ngrx/store';
import { User } from '@angular/fire/auth';
import { selectBusinessmanEntity } from '../../data-access/businessman.selectors';

@Component({
  selector: 'app-businessman',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ContactSectionComponent,
    AddressSectionComponent,
    PersonDetailsSectionComponent,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './businessman.component.html',
  styleUrls: ['./businessman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessmanComponent implements OnInit {
  businessman$!: Observable<Businessman | undefined>;
  loggedInUser$!: Observable<User | null>;
  selectedUserId!: string;

  constructor(
    private _store: Store<AppState>,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loggedInUser$ = this._authService.userData$.asObservable();
    this.selectedUserId = this._activatedRoute.snapshot.paramMap.get('id')!;
    this.businessman$ = this._store.select(selectBusinessmanEntity(this.selectedUserId));
  }
}
