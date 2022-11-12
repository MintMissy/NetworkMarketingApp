import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
