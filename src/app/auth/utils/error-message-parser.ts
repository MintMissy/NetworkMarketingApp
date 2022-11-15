export function errorToTranslateString(error: string): string {
  if (error === '') {
    return '';
  }

  if (error.includes('UNKNOWN_ERROR')) {
    return 'An unknown error occurred';
  }

  if (error.includes('(auth/email-already-exists)')) {
    return 'Email already exists';
  }

  if (error.includes('(auth/operation-not-allowed)')) {
    return "This operation isn't allowed";
  }

  if (error.includes('(auth/user-not-found)')) {
    return "There's no user with that email";
  }

  if (error.includes('(auth/wrong-password)')) {
    return 'Incorrect password';
  }

  return error;
}
