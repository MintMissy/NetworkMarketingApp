export function isLetterCapital(letter: string): boolean {
  if (letter.length !== 1) {
    return false;
  }
  return letter === letter.toUpperCase();
}
