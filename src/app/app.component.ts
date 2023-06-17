import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {SelectionModel} from "@angular/cdk/collections";
import {UserInterface} from "./model/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {EditUserDialogComponent} from "./component/dialog/edit-user-dialog/edit-user-dialog.component";
import {usersData} from "./data/users";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {elementAt, first, Subscription} from "rxjs";
import {AddUsersDialogComponent} from "./component/dialog/add-users-dialog/add-users-dialog.component";
import {UUID} from 'uuid-generator-ts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'user-project';
  usersData = usersData
  searchControl: FormControl
  dateRangePicker: FormGroup
  subscription: Subscription

  displayedColumns: string[] = ['select', 'email', 'isActive', 'accessLevel', 'createdAt', 'action'];
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
    this.dateRangePicker = this.fb.group({
      start: this.fb.control(null),
      end: this.fb.control(null),
    })

    this.dateRangePicker.valueChanges.subscribe(data => {
      if (data.end) {
        const start = data.start.getTime();
        const end = data.end.getTime();
        this.usersData = this.usersData.filter(item => item.createdAt > start && item.createdAt < end)
        this.dataSource.data = this.usersData
      }
    })

    this.subscription = this.searchControl.valueChanges.subscribe(data => {
      if (data) {
        const emailFiltered = this.usersData.filter(item =>
          item.email.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
        const accessLevel = this.usersData.filter(item =>
          item.accessLevel.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
        this.dataSource.data = [...new Set([...emailFiltered, ...accessLevel])];
      } else {
        this.dataSource.data = this.usersData
      }
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

    const dialog = this.dialog.open(EditUserDialogComponent, {
      disableClose: true,
      data: element,
      width: '350px'
    })

    dialog.afterClosed().pipe(first()).subscribe(data => {
      if (data) {
        this.usersData = this.usersData.map(item => {
          if (item.id === element.id) {
            item = data
          }
          return item
        })
        this.dataSource.data = this.usersData
      }
    })

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
        this.usersData = this.usersData.filter(item => item.email !== element.email)
        this.dataSource.data = this.usersData
        Swal.fire('DONE')
      }
    })
  }

  handleDisableUsers() {
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
        this.selection.selected.map(item => {
          if (item.isActive) item.isActive = false
        })
        this.selection.clear()
        Swal.fire('DONE')
      }
    })
  }

  handleEnableUsers() {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        this.selection.selected.map(item => {
          if (!item.isActive) item.isActive = true
        })
        this.selection.clear()
        Swal.fire('DONE')
      }
    })
  }

  handleDeleteUsers() {
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
        let users: UserInterface[] = []
        this.selection.selected.forEach(item => {
          users = this.usersData.filter(val => val.id !== item.id)
          this.usersData = users
        })
        this.dataSource.data = users
        this.selection.clear()
        Swal.fire('DONE')
      }
    })
  }

  handleAddUsers() {
    const dialog = this.dialog.open(AddUsersDialogComponent, {
      width: '350px',
      height: 'auto',
      disableClose: true
    })
    dialog.afterClosed().pipe(first()).subscribe(data => {
      if (data) {
        data.forEach(item => {
          const row = {
            id: new UUID().toString(),
            createdAt: this.formatDate(),
            ...item
          }
          this.usersData = [row, ...this.usersData]
        })
        this.dataSource.data = this.usersData
      }
    })
  }

  formatDate() {
    let d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }
}
