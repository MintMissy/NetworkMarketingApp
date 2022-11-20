import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AddItemCardComponent } from '../cards/add-item-card/add-item-card.component';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../cards/content-card/content-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, AddItemCardComponent, TranslateModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
