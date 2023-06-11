import {Component, Input, NgModule} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {

  @Input()
  public formField: FormControl;

  public readonly errorMessages = {
    required: () => 'required',
    email: () => 'email is not valid',
    whitespace: (params) => params.message,
  };

  shouldShowErrors(): boolean {
    return this.formField && this.formField.errors && (this.formField.dirty || this.formField.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.formField.errors)
      .map(field => this.getMessage(field, this.formField.errors[field]));
  }

  getMessage(type: string, params: any): string {
    return this.errorMessages[type](params);
  }

}

@NgModule({
  declarations: [FieldErrorsComponent],
  imports: [CommonModule, MatFormFieldModule],
  exports: [FieldErrorsComponent]
})
export class FieldErrorModule {
}
