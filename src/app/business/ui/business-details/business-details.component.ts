import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
