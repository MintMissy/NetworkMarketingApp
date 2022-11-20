import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-person-details-form',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './person-details-form.component.html',
  styleUrls: ['./person-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailsFormComponent implements OnInit {
  @Input() personDetailsGroup!: FormGroup;

  ngOnInit(): void {
    this.personDetailsGroup.get('firstName')?.setValidators(Validators.max(256));
    this.personDetailsGroup.get('surname')?.setValidators(Validators.max(256));
    this.personDetailsGroup
      .get('avatar')
      ?.setValidators([
        Validators.pattern(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/g),
      ]);
  }
}
