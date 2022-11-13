import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BusinessOwner } from '../../model/business-owner.model';
import { BusinessOwnerCardComponent } from '../../ui/business-owner-card/business-owner-card.component';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-business-owners',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, BusinessOwnerCardComponent],
  templateUrl: './business-owners.component.html',
  styleUrls: ['./business-owners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessOwnersComponent implements OnInit {
  businessOwners!: Observable<BusinessOwner[]>;

  constructor() {}

  ngOnInit(): void {}
}
