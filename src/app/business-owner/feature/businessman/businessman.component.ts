import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-businessman',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './businessman.component.html',
  styleUrls: ['./businessman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
