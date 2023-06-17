import {Component, NgModule, OnInit} from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {SwitchModule} from "../../../ui-kit/switch/switch.component";
import {TextInputModule} from "../../../ui-kit/text-input/text-input.component";
import {MatButtonModule} from "@angular/material/button";
import {AccessLevel} from "../../../constant/enum";
import {CommonModule} from "@angular/common";
import {MatDividerModule} from "@angular/material/divider";
import {RadioGroupModule} from "../../../ui-kit/radio-group/radio-group.component";

@Component({
  selector: 'app-add-users-dialog',
  templateUrl: './add-users-dialog.component.html',
  styleUrls: ['./add-users-dialog.component.scss']
})
export class AddUsersDialogComponent implements OnInit {

  addUsersForm: FormGroup
  counter: number = 1
  options = [
    {name: 'ADMIN', value: AccessLevel.ADMIN},
    {name: 'CONSULTANT', value: AccessLevel.CONSULTANT},
  ]

  isBtnDisabled: boolean = true

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddUsersDialogComponent>,
  ) {
  }

  ngOnInit(): void {
    this.addUsersForm = this.fb.group({
      users: this.fb.array([this.createUser()], [Validators.required])
    })
    this.users.valueChanges.subscribe(data => {
      if (this.isValid()) {
        this.isBtnDisabled = false
      }
    })
  }

  createUser(): FormGroup {
    return this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      isActive: this.fb.control(false),
      accessLevel: this.fb.control(null, [Validators.required]),
    })
  }

  get users(): FormArray {
    return this.addUsersForm.controls['users'] as FormArray
  }

  addUser() {
    if (this.isValid()) {
      this.isBtnDisabled = false
    }
    if (this.counter < 20) {
      this.counter++
      this.users.push(this.createUser())
    }
  }


  handleCloseDialog(data?: any) {
    this.dialogRef.close(data)

  }

  handleCancelCreateUser(i: number) {
    if (this.counter >= 0) {
      this.counter--;
      this.users.removeAt(i)
    }
  }

  isValid() {
    let isValid = false
    this.users.controls.some(item => {
      if (item.valid) isValid = true
    })
    return isValid
  }

}

@NgModule({
  declarations: [AddUsersDialogComponent],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    SwitchModule,
    TextInputModule,
    MatButtonModule,
    CommonModule,
    MatDividerModule,
    RadioGroupModule
  ],
  exports: [AddUsersDialogComponent]
})
export class AddUsersDialogModule {

}
