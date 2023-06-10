import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {

  static noWhitespace(control: AbstractControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {whitespace: {message: 'invalid input value'}}
  }

}
