import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ShopFormComponent } from '../../ui/shop-form/shop-form.component';

@Component({
  selector: 'app-add-shop',
  standalone: true,
  imports: [CommonModule, ShopFormComponent],
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddShopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
