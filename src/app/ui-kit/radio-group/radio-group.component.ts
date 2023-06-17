import {Component, Input, NgModule, OnInit, Self} from '@angular/core';
import {FormControl, FormsModule, NgControl} from "@angular/forms";
import {BaseControlValueAccessor} from "../../utils/BaseControlValueAccessor";
import {MatRadioChange, MatRadioModule} from "@angular/material/radio";
import {CommonModule} from "@angular/common";

export interface IRadioGroupOptions {
  name: string;
  value: string | number;
}

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent extends BaseControlValueAccessor<string | number> implements OnInit {

  control: FormControl;
  @Input() label: string
  @Input() options: IRadioGroupOptions[] = []

  constructor(
    @Self() private controlDirective: NgControl,
  ) {
    super()
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    this.control = this.controlDirective.control as FormControl;
  }

  handleChange($event: MatRadioChange) {
    this.changed($event.value)
  }
}

@NgModule({
  declarations: [RadioGroupComponent],
  imports: [
    MatRadioModule,
    CommonModule,
    FormsModule
  ],
  exports: [RadioGroupComponent]
})
export class RadioGroupModule {

}
