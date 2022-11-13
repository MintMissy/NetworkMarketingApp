import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-business-owner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-business-owner.component.html',
  styleUrls: ['./edit-business-owner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBusinessOwnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
