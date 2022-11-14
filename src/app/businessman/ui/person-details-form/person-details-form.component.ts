import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-person-details-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule],
  templateUrl: './person-details-form.component.html',
  styleUrls: ['./person-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailsFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
