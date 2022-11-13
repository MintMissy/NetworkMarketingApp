import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-owner-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-owner-form.component.html',
  styleUrls: ['./business-owner-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessOwnerFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
