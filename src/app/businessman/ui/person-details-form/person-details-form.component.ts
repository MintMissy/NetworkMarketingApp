import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-details-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-details-form.component.html',
  styleUrls: ['./person-details-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
