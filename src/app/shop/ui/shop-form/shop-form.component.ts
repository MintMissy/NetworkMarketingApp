import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormActionsComponent } from 'src/app/core/components/form-actions/form-actions.component';
import { ShopDetailsFormComponent } from '../shop-details-form/shop-details-form.component';

@Component({
  selector: 'app-shop-form',
  standalone: true,
  imports: [CommonModule, FormActionsComponent, ShopDetailsFormComponent],
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopFormComponent implements OnInit {
  @Input() title: string = 'Default Title';
  constructor() {}

  ngOnInit(): void {}
}
