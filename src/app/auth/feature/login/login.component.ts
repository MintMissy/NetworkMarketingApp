import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MediaListComponent } from '../../ui/media-list/media-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MediaListComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../auth-form-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.buildForm();
  }

  login() {}

  buildForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
