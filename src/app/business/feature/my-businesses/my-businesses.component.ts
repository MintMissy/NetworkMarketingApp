import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AddItemCardComponent } from 'src/app/core/components/cards/add-item-card/add-item-card.component';
import { BusinessesListComponent } from '../../ui/businesses-list/businesses-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-businesses',
  standalone: true,
  imports: [CommonModule, BusinessesListComponent, AddItemCardComponent],
  templateUrl: './my-businesses.component.html',
  styleUrls: ['./my-businesses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyBusinessesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
