import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { CommonModule } from '@angular/common';
import { ShopsListComponent } from '../../ui/shops-list/shops-list.component';

@Component({
  selector: 'app-my-shops',
  standalone: true,
  imports: [CommonModule, ShopsListComponent, AddItemCardComponent],
  templateUrl: './my-shops.component.html',
  styleUrls: ['./my-shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyShopsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
