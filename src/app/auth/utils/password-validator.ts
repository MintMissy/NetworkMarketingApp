import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

export function getPasswordValidators() {
  // At least 8 characters
  // At least one number
  // At least one letter
  return [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$')];
}

export function passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password');
  const repeatedPassword = group.get('repeatPassword');
  return password === repeatedPassword ? null : { notSame: true };
}
