import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-business-owner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-business-owner.component.html',
  styleUrls: ['./add-business-owner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBusinessOwnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
