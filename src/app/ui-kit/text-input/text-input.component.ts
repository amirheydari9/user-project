import {
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Input,
  NgModule,
  OnInit,
  Renderer2,
  Self,
  ViewChild
} from '@angular/core';
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {FormControl, FormsModule, NG_VALUE_ACCESSOR, NgControl, Validators} from "@angular/forms";
import {CustomValidators} from "../../utils/Custom-Validators";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FieldErrorModule} from "../field-errors/field-errors.component";
import {TouchedErrorStateMatcher} from "../../utils/TouchedErrorStateMatcher";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent extends BaseControlValueAccessor<string> implements OnInit {

  control: FormControl;
  @ViewChild('input') input: ElementRef

  @Input() label: string
  @Input() maxLength: number
  @Input() error: number

  constructor(
    @Self() private controlDirective: NgControl,
    private renderer: Renderer2,
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.control = this.controlDirective.control as FormControl;
      if (this.control.hasValidator(Validators.required)) {
        this.control.addValidators(CustomValidators.noWhitespace)
      }
    })
  }

  errorMatcher() {
    return new TouchedErrorStateMatcher(this.control, this.error)
  }

  public onChanged(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value;
    this.changed(value.trim());
  }

  reset(): void {
    this.renderer.setProperty(this.input.nativeElement, 'value', null);
    this.changed(null);
    this.writeValue(null);
  }

}


@NgModule({
  declarations: [TextInputComponent],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    FieldErrorModule
  ],
  exports: [TextInputComponent]
})
export class TextInputModule {

}
