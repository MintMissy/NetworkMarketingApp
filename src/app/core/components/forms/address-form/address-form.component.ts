import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent implements OnInit {
  @Input() addressGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
