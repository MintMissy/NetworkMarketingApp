import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  createMatchValidator as passwordMatchValidator,
  getPasswordValidators,
} from '../../utils/password-validator';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChangeInputTypeDirective } from 'src/app/core/directive/change-input-type.directive';
import { InvalidInputIconDirective } from 'src/app/core/directive/invalid-input-icon.directive';
import { AuthenticationService } from '../../data-access/authentication.service';
import { MediaListComponent } from '../../ui/media-list/media-list.component';
import { errorToTranslateString } from '../../utils/error-message-parser';

@Component({
  selector: 'app-sign-up',
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
  templateUrl: './sign-up.component.html',
  styleUrls: ['../auth-form-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  errorMessage: string = '';
  showLoadingSpinner: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  signUp() {
    if (!this.signUpForm.valid) {
      return;
    }

    this.showLoadingSpinner = true;
    this.handleRequest(this._authService.createAccount(this.signUpForm.value));
  }

  googleSignUp() {
    this.handleRequest(this._authService.googleLogin());
  }

  facebookSignUp() {
    this.handleRequest(this._authService.facebookLogin());
  }

  githubSignUp() {
    this.handleRequest(this._authService.githubLogin());
  }

  handleRequest(promise: Promise<any>) {
    promise
      .then((response: any) => {
        this.showLoadingSpinner = false;
        this.errorMessage = '';
      })
      .catch((errorMessage: string) => {
        this.showLoadingSpinner = false;
        this.errorMessage = errorToTranslateString(errorMessage);
        this._changeDetectorRef.detectChanges();
      });
  }

  buildForm(): void {
    this.signUpForm = this._formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [...getPasswordValidators()]],
        repeatedPassword: ['', [...getPasswordValidators()]],
      },
      {
        validator: passwordMatchValidator,
      }
    );
  }
}
