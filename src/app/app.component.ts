import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {SelectionModel} from "@angular/cdk/collections";
import {UserInterface} from "./model/user.interface";
import {AccessLevel, UserStatus} from "./constant/enum";

const ELEMENT_DATA: UserInterface[] = [
  {createdAt: 'Hydrogen', email: 'H', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Helium', email: 'He', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Lithium', email: 'Li', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Beryllium', email: 'Be', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Boron', email: 'B', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Carbon', email: 'C', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Nitrogen', email: 'N', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Oxygen', email: 'O', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Fluorine', email: 'F', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Neon', email: 'Ne', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Sodium', email: 'Na', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Magnesium', email: 'Mg', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Aluminum', email: 'Al', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Silicon', email: 'Si', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Phosphorus', email: 'P', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Sulfur', email: 'S', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Chlorine', email: 'Cl', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Argon', email: 'Ar', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Potassium', email: 'K', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
  {createdAt: 'Calcium', email: 'Ca', status: UserStatus.ACTIVE, accessLevel: AccessLevel.ADMIN},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'user-project';

  displayedColumns: string[] = ['select', 'email', 'createdAt', 'status', 'accessLevel', 'action'];
  dataSource = new MatTableDataSource<UserInterface>(ELEMENT_DATA);
  selection = new SelectionModel<UserInterface>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

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

}
