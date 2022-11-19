import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Language, LanguageSet } from 'src/app/core/model/language.enum';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-language-configuration',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    TranslateModule,
  ],
  templateUrl: './language-configuration.component.html',
  styleUrls: ['./language-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageConfigurationComponent implements OnInit {
  languageSet = LanguageSet;
  selectedLanguage!: Language;

  constructor(private _translate: TranslateService) {}

  ngOnInit(): void {}

  handleLanguageChange(language: Language) {
    this._translate.setDefaultLang(language + '');
  }
}
