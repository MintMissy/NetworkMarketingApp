import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { AuthenticationService } from '../../data-access/authentication.service';
import { ChangeInputTypeDirective } from 'src/app/core/directive/change-input-type.directive';
import { CommonModule } from '@angular/common';
import { InvalidInputIconDirective } from 'src/app/core/directive/invalid-input-icon.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MediaListComponent } from '../../ui/media-list/media-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { errorToTranslateString } from '../../utils/error-message-parser';
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
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../auth-form-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  showLoadingSpinner: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loginForm = this.buildForm();
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }

    this.showLoadingSpinner = true;
    this.handleRequest(this._authService.emailLogin(this.loginForm.value));
  }

  googleLogin() {
    this.handleRequest(this._authService.googleLogin());
  }

  facebookLogin() {
    this.handleRequest(this._authService.facebookLogin());
  }

  githubLogin() {
    this.handleRequest(this._authService.githubLogin());
  }

  handleRequest(promise: Promise<any>) {
    promise
      .then((response: any) => {
        this.showLoadingSpinner = false;
        this.errorMessage = '';
        this._router.navigate(['']);
      })
      .catch((errorResponse: Error) => {
        this.showLoadingSpinner = false;
        this.errorMessage = errorToTranslateString(errorResponse.message);
        this._changeDetectorRef.detectChanges();
      });
  }

  buildForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [...getPasswordValidators()]],
    });
  }
}
