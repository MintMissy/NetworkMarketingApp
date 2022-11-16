import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-shop-details-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './shop-details-form.component.html',
  styleUrls: ['./shop-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopDetailsFormComponent implements OnInit {
  @Input() shopDetailsGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
