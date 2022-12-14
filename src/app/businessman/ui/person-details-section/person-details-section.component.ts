import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PersonDetails } from '../../model/businessman.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-person-details-section',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule],
  templateUrl: './person-details-section.component.html',
  styleUrls: ['./person-details-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailsSectionComponent implements OnInit {
  @Input() personDetails!: PersonDetails;

  constructor() {}

  ngOnInit(): void {}
}
