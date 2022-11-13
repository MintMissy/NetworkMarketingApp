import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
