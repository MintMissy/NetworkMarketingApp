import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function getPasswordValidators() {
  // Minimum of 8 characters
  // Maximum of 128 characters
  // At least one number
  // At least one letter
  // Don't contain ^ ~ ` ^ < >
  return [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(128),
    Validators.pattern('^(?=.*[A-Za-z])^(?=.*[1-9])^[^~`^<>]+$'),
  ];
}

export function passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password');
  const repeatedPassword = group.get('repeatPassword');
  return password === repeatedPassword ? null : { notSame: true };
}
