import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { Businessman } from '../../model/businessman.model';
import { BusinessmanCardComponent } from '../../ui/businessman-card/businessman-card.component';

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
