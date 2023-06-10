import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSliderChange} from "@angular/material/slider";
import {FieldErrorModule} from "../field-errors/field-errors.component";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent extends BaseControlValueAccessor<boolean> implements OnInit {

  control: FormControl;

  @Input() label: string

  constructor(
    @Self() private controlDirective: NgControl,
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit() {
    this.control = this.controlDirective.control as FormControl
  }

  onChanged($event: MatSlideToggleChange) {
    this.changed($event.checked);
  }

}

@NgModule({
  declarations: [SwitchComponent],
  imports: [
    MatSlideToggleModule,
    FormsModule,
    FieldErrorModule
  ],
  exports: [SwitchComponent]
})
export class SwitchModule {

}
