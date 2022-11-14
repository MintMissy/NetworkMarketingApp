import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
