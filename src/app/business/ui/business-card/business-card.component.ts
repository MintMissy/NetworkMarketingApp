import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Business } from '../../model/business.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessCardComponent {
  @Input() business!: Business;
  constructor() {}

  get imageUrl(): string {
    const background = this.business.backgroundImage;
    if (background == undefined || background == null || background == '') {
      return 'assets/images/cards/businesses.avif';
    }
    return background;
  }
}
