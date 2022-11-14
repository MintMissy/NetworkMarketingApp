import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaListComponent implements OnInit {
  @Output() googleIconClick = new EventEmitter<void>();
  @Output() facebookIconClick = new EventEmitter<void>();
  @Output() githubIconClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
