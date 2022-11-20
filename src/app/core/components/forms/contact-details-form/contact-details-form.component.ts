import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-details-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailsFormComponent implements OnInit {
  @Input() contactGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.contactGroup.get('email')?.setValidators([Validators.email, Validators.maxLength(256)]);
    this.contactGroup
      .get('telephone')
      ?.setValidators([Validators.min(9999999999), Validators.max(1000000000000)]);
  }
}
