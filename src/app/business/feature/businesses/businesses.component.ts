import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Business } from '../../model/business.model';
import { BusinessCardComponent } from '../../ui/business-card/business-card.component';
import { BusinessService } from '../../data-access/business.service';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-businesses',
  standalone: true,
  imports: [CommonModule, BusinessCardComponent, MatButtonModule, MatIconModule, CardComponent],
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessesComponent implements OnInit {
  businesses!: Observable<Business[]>;

  constructor(private _businessService: BusinessService) {}

  ngOnInit(): void {
    this.businesses = this._businessService.getBusinesses();
  }
}
