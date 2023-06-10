import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {SelectionModel} from "@angular/cdk/collections";
import {UserInterface} from "./model/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "./component/dialog/edit-user-dialog/edit-user-dialog.component";
import {usersData} from "./data/users";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {FormBuilder, FormControl} from "@angular/forms";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'user-project';
  usersData = usersData
  searchControl: FormControl
  subscription: Subscription

  displayedColumns: string[] = ['select', 'email', 'createdAt', 'isActive', 'accessLevel', 'action'];
  dataSource = new MatTableDataSource<UserInterface>(this.usersData);
  selection = new SelectionModel<UserInterface>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.searchControl = this.fb.control(null)
    this.subscription = this.searchControl.valueChanges.subscribe(data => {
      const emailFiltered = this.usersData.filter(item =>
        item.email.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
      const accessLevel = this.usersData.filter(item =>
        item.accessLevel.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
      this.dataSource.data = [...new Set([...emailFiltered, ...accessLevel])];
    })
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

  handleEditUser(element) {

    this.dialog.open(EditUserDialogComponent)

  }

  handleDeleteUser(element) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        const data = this.usersData.filter(item => item.email !== element.email)
        this.usersData = data
        this.dataSource.data = data
        Swal.fire(
          'Removed!',
          'Item removed successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Item is safe.)',
          'error'
        )
      }
    })
  }
}
