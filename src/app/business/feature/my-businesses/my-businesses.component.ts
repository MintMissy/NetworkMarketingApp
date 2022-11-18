import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-businesses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-businesses.component.html',
  styleUrls: ['./my-businesses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyBusinessesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
