import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  getPasswordValidators,
  createMatchValidator as passwordMatchValidator,
} from '../../utils/password-validator';

import { AuthenticationService } from '../../data-access/authentication.service';
import { ChangeInputTypeDirective } from 'src/app/core/directives/change-input-type.directive';
import { CommonModule } from '@angular/common';
import { InvalidInputIconDirective } from 'src/app/core/directives/invalid-input-icon.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MediaListComponent } from '../../ui/media-list/media-list.component';
import { Subscription } from 'rxjs';
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
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm!: FormGroup;
  errorMessage: string = '';
  showLoadingSpinner: boolean = false;
  private subscription!: Subscription;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService,
    private _router: Router,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  signUp() {
    if (!this.signUpForm.valid) {
      return;
    }

    this.showLoadingSpinner = true;

    const observer = {
      next: (response: any) => {
        this.showLoadingSpinner = false;
        this.errorMessage = '';
        this._router.navigate(['auth', 'login']);
      },
      error: (errorMessage: string) => {
        this.showLoadingSpinner = false;
        this.errorMessage = errorToTranslateString(errorMessage);
        this._changeDetectorRef.detectChanges();
      },
    };

    this.subscription = this._authService.createAccount(this.signUpForm.value).subscribe(observer);
  }

  googleSignUp() {
    return this._authService.googleLogin();
  }

  facebookSignUp() {
    return this._authService.facebookLogin();
  }

  githubSignUp() {
    return this._authService.githubLogin();
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
