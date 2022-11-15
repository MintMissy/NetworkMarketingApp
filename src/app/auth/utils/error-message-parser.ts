export function errorToTranslateString(error: string): string {
  if (error === '') {
    return '';
  }

  if (error.includes('UNKNOWN_ERROR')) {
    return 'An unknown error occurred';
  }

  if (error.includes('EMAIL_EXISTS')) {
    return 'Email already exists';
  }

  if (error.includes('OPERATION_NOT_ALLOWED')) {
    return "This operation isn't allowed";
  }

  if (error.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
    return 'Access to this account has been temporarily disabled. Try signing up later.';
  }

  if (error.includes('EMAIL_NOT_FOUND')) {
    return "There's no user with that email";
  }

  if (error.includes('INVALID_PASSWORD')) {
    return 'Incorrect password';
  }

  if (error.includes('USER_DISABLED')) {
    return 'This user account has been disabled by an administrator';
  }

  return error;
}
