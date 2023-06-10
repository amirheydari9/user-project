import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {SelectionModel} from "@angular/cdk/collections";
import {UserInterface} from "./model/user.interface";
import {AccessLevel} from "./constant/enum";
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "./component/dialog/edit-user-dialog/edit-user-dialog.component";

const ELEMENT_DATA: UserInterface[] = [
  {createdAt: 'Hydrogen', email: 'H', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Helium', email: 'He', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Lithium', email: 'Li', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Beryllium', email: 'Be', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Boron', email: 'B', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Carbon', email: 'C', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Nitrogen', email: 'N', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Oxygen', email: 'O', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Fluorine', email: 'F', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Neon', email: 'Ne', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Sodium', email: 'Na', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Magnesium', email: 'Mg', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Aluminum', email: 'Al', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Silicon', email: 'Si', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Phosphorus', email: 'P', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Sulfur', email: 'S', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Chlorine', email: 'Cl', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Argon', email: 'Ar', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Potassium', email: 'K', isActive: true, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Calcium', email: 'Ca', isActive: true, accessLevel: AccessLevel.ADMIN},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'user-project';

  displayedColumns: string[] = ['select', 'email', 'createdAt', 'isActive', 'accessLevel', 'action'];
  dataSource = new MatTableDataSource<UserInterface>(ELEMENT_DATA);
  selection = new SelectionModel<UserInterface>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private dialog: MatDialog
  ) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: UserInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.email + 1}`;
  }

  handleEditUser() {

    this.dialog.open(EditUserDialogComponent)

  }

  handleDeleteUser() {

  }
}
