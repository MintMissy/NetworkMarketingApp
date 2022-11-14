import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BusinessFormComponent } from '../../ui/business-form/business-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-business',
  standalone: true,
  imports: [CommonModule, BusinessFormComponent],
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBusinessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
