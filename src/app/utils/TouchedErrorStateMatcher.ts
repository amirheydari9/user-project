import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class TouchedErrorStateMatcher implements ErrorStateMatcher {

  constructor(
    private formControl: FormControl,
    private errors: any
  ) {
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(
      this.formControl
      && this.formControl.invalid
      && (this.formControl.dirty || this.formControl.touched || this.errors)
    );
  }
}
