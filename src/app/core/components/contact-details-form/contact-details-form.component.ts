import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-details-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailsFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
