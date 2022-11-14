import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BusinessmanFormComponent } from '../../ui/businessman-form/businessman-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-businessman',
  standalone: true,
  imports: [CommonModule, BusinessmanFormComponent],
  templateUrl: './edit-businessman.component.html',
  styleUrls: ['./edit-businessman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBusinessManComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
