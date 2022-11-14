import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-businessman-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './businessman-form.component.html',
  styleUrls: ['./businessman-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessmanFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
