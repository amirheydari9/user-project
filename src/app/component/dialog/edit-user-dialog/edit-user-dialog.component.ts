import {Component, Inject, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TextInputModule} from "../../../ui-kit/text-input/text-input.component";
import {SwitchModule} from "../../../ui-kit/switch/switch.component";
import {DatePickerModule} from "../../../ui-kit/date-picker/date-picker.component";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {UserInterface} from "../../../model/user.interface";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {AccessLevel} from "../../../constant/enum";

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {

  editUserForm: FormGroup
  maxDate: any;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: UserInterface,
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
  ) {
  }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      email: this.fb.control(this.data.email, [Validators.required, Validators.email]),
      isActive: this.fb.control(this.data.isActive),
      accessLevel: this.fb.control(this.data.accessLevel, [Validators.required]),
      createdAt: this.fb.control(this.data.createdAt, [Validators.required]),
    })
    this.maxDate = new Date().toISOString();
  }

  get AccessLevel(): typeof AccessLevel {
    return AccessLevel
  }

  handleCloseDialog(data?: UserInterface) {
    this.dialogRef.close(data)
  }
}

@NgModule({
  declarations: [EditUserDialogComponent],
  imports: [
    TextInputModule,
    ReactiveFormsModule,
    SwitchModule,
    DatePickerModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule
  ],
  exports: [EditUserDialogComponent]
})
export class EditUserDialogModule {

}
