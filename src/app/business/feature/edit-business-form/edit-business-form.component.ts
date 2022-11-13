import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-business-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-business-form.component.html',
  styleUrls: ['./edit-business-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditBusinessFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
