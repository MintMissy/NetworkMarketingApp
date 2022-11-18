import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './add-item-card.component.html',
  styleUrls: ['./add-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemCardComponent implements OnInit {
  @Input() link!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() icon: string = 'add';

  constructor() {}

  ngOnInit(): void {}
}
