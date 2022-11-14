import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthenticationService } from '../../data-access/authentication.service';
import { ChangeInputTypeDirective } from 'src/app/core/directives/change-input-type.directive';
import { CommonModule } from '@angular/common';
import { InvalidInputIconDirective } from 'src/app/core/directives/invalid-input-icon.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MediaListComponent } from '../../ui/media-list/media-list.component';
import { RouterModule } from '@angular/router';
import { getPasswordValidators } from '../../utils/password-validator';

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
    ChangeInputTypeDirective,
    InvalidInputIconDirective,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../auth-form-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthenticationService) {}

  ngOnInit(): void {
    this.loginForm = this.buildForm();
  }

  login() {
    console.log(this.loginForm);
  }

  googleLogin() {
    return this._authService.googleLogin();
  }

  facebookLogin() {
    return this._authService.facebookLogin();
  }

  githubLogin() {
    return this._authService.githubLogin();
  }

  buildForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', ...getPasswordValidators()],
    });
  }
}
