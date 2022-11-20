import { Pipe, PipeTransform } from '@angular/core';

import { isLetterCapital as isCapitalLetter } from '../util/string-util';

@Pipe({
  name: 'countryTextTransform',
  standalone: true,
})
export class CountryTextTransformPipe implements PipeTransform {
  transform(string: string, ...args: unknown[]): unknown {
    let transformedString = string[0];

    for (let i = 1; i < string.length; i++) {
      const letter = string[i];

      if (isCapitalLetter(letter)) {
        transformedString += ' ';
      }
      transformedString += letter;
    }

    return transformedString;
  }
}
