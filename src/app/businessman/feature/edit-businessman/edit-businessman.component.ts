import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BusinessmanFormComponent } from '../../ui/businessman-form/businessman-form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-businessman',
  standalone: true,
  imports: [CommonModule, BusinessmanFormComponent],
  templateUrl: './edit-businessman.component.html',
  styleUrls: ['./edit-businessman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBusinessManComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  // TODO submit logic
  onSubmit() {}

  onDiscard() {
    this._router.navigate(['businessmen']);
  }
}
