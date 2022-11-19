import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Address } from 'src/app/core/model/address.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-address-section',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './address-section.component.html',
  styleUrls: ['./address-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressSectionComponent implements OnInit {
  @Input() address!: Address;

  constructor() {}

  ngOnInit(): void {}
}
