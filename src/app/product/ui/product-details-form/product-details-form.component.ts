import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-details-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsFormComponent implements OnInit {
  @Input() productDetailsGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
