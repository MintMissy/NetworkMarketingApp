import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-shop-details-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule],
  templateUrl: './shop-details-form.component.html',
  styleUrls: ['./shop-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopDetailsFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
