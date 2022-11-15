import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
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
    this.loginForm = this.buildForm();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }

    this.showLoadingSpinner = true;

    const observer = {
      next: (response: any) => {
        this.showLoadingSpinner = false;
        this.errorMessage = '';
        this._router.navigate(['']);
      },
      error: (errorResponse: Error) => {
        // this.openedDialog.close();
        this.showLoadingSpinner = false;
        this.errorMessage = errorToTranslateString(errorResponse.message);
        this._changeDetectorRef.detectChanges();
      },
    };

    this.subscription = this._authService.emailLogin(this.loginForm.value).subscribe(observer);
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [...getPasswordValidators()]],
    });
  }
}
