import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {TextInputModule} from "./ui-kit/text-input/text-input.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {EditUserDialogModule} from "./component/dialog/edit-user-dialog/edit-user-dialog.component";
import {AddUsersDialogModule} from "./component/dialog/add-users-dialog/add-users-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateRangePickerModule} from "./ui-kit/date-range-picker/date-range-picker.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    TextInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    EditUserDialogModule,
    AddUsersDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    DateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
