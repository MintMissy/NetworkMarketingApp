import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BusinessIndustrySet } from '../../model/business-industry.enum';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessDetailsComponent implements OnInit {
  @Input() businessDetailsGroup!: FormGroup;
  BusinessIndustrySet = BusinessIndustrySet;

  constructor() {}

  ngOnInit(): void {}
}
