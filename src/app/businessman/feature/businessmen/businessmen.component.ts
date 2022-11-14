import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BusinessmanCardComponent } from '../../ui/businessman-card/businessman-card.component';
import { Businessman } from '../../model/businessman.model';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-businessmen',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, BusinessmanCardComponent],
  templateUrl: './businessmen.component.html',
  styleUrls: ['./businessmen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessMenComponent implements OnInit {
  businessOwners!: Observable<Businessman[]>;

  constructor() {}

  ngOnInit(): void {}
}
