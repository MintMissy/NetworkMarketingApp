import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() imageSource!: string;
  @Input() subtitle!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() primaryButtonText!: string;
  @Input() primaryButtonLink!: string;
  @Input() secondaryButtonText!: string;
  @Input() secondaryButtonLink!: string;
}
