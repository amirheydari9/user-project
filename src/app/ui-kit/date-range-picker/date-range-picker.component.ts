import {Component, forwardRef, Input, NgModule, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    }
  ]
})
export class DateRangePickerComponent extends BaseControlValueAccessor<any> implements OnInit {

  @Input() label: string;
  range = new FormGroup({
    start: this.fb.control(null),
    end: this.fb.control(null)
  });

  constructor(private fb: FormBuilder) {
    super()
  }


  ngOnInit(): void {

  }

  override writeValue(value: any): void {
    value && this.range.patchValue(value, { emitEvent: false });
  }

  override registerOnChange(fn: any): void {
    this.range.valueChanges.subscribe(fn);
  }

  override setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.range.disable() : this.range.enable();
  }
}

@NgModule({
  declarations: [DateRangePickerComponent],
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  exports: [DateRangePickerComponent]
})
export class DateRangePickerModule {

}
