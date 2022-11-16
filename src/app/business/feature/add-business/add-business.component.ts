import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BusinessFormComponent } from '../../ui/business-form/business-form.component';

@Component({
  selector: 'app-add-business',
  standalone: true,
  imports: [CommonModule, BusinessFormComponent],
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBusinessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
