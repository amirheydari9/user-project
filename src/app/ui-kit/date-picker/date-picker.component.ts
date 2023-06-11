import {Component, ElementRef, Input, NgModule, OnInit, Renderer2, Self, ViewChild} from '@angular/core';
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {TouchedErrorStateMatcher} from "../../utils/TouchedErrorStateMatcher";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerInputEvent, MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import * as _moment from 'moment';
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";

const moment = _moment;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;
  maxDate: any

  @ViewChild('input') input: ElementRef

  @Input() label: string
  @Input() error: number

  @Input() set max(value: string) {
    if (value) {
      this.maxDate = moment(value).format('YYYY-MM-DD')
    }
  }

  constructor(
    @Self() private controlDirective: NgControl,
    private renderer: Renderer2
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.control = this.controlDirective.control as FormControl
      if (this.value) {
        this.changed(moment(this.value).format('YYYY-MM-DD'));
      }
    })
  }

  errorMatcher() {
    return new TouchedErrorStateMatcher(this.control, this.error)
  }

  public onChanged($event: MatDatepickerInputEvent<any, any>): void {
    const date = moment($event.value).format('YYYY-MM-DD')
    this.changed(date);
  }

  reset(): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', null);
    this.changed(null);
  }

}

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [DatePickerComponent]
})
export class DatePickerModule {

}
