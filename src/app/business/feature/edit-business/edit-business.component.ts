import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-business',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBusinessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
