import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-shops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-shops.component.html',
  styleUrls: ['./my-shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyShopsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
