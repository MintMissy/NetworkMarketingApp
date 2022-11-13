import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-business-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-business-form.component.html',
  styleUrls: ['./add-business-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBusinessFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
