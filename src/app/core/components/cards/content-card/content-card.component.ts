import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentCardComponent {
  @Input() imageSource!: string;
  @Input() subtitle!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() primaryButtonText!: string;
  @Input() primaryButtonLink!: string;
  @Input() primaryButtonColor: string = 'primary';
  @Input() secondaryButtonText!: string;
  @Input() secondaryButtonLink!: string;
}
