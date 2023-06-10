import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TextInputModule} from "../../../ui-kit/text-input/text-input.component";
import {SwitchModule} from "../../../ui-kit/switch/switch.component";
import {DatePickerModule} from "../../../ui-kit/date-picker/date-picker.component";

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {

  editUserForm: FormGroup
  maxDate: any;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      isActive: this.fb.control(null, [Validators.required]),
      accessLevel: this.fb.control(null, [Validators.required]),
      createdAt: this.fb.control(null, [Validators.required]),
    })
    this.maxDate = new Date().toISOString();
  }

}

@NgModule({
  declarations: [EditUserDialogComponent],
  imports: [
    TextInputModule,
    ReactiveFormsModule,
    SwitchModule,
    DatePickerModule
  ],
  exports: [EditUserDialogComponent]
})
export class EditUserDialogModule {

}
