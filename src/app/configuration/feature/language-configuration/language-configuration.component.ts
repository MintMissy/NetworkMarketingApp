import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-configuration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-configuration.component.html',
  styleUrls: ['./language-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageConfigurationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
