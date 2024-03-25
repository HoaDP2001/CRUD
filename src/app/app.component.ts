import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StuAddEditComponent } from './stu-add-edit/stu-add-edit.component';
import { StudentService } from './services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'address',
    'experience',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _studentService: StudentService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getStudentList();
  }

  openAddEditStuForm() {
    const dialogRef = this._dialog.open(StuAddEditComponent);

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) this.getStudentList();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getStudentList() {
    this._studentService.getStudentList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteStudent(id: any) {
    this._studentService.deleteStudent(id).subscribe({
      next: (res) => {
        this.getStudentList();
        this._coreService.openSnackBar('Student deleted!', 'Done');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  openEditStuForm(data: any) {
    const dialogRef = this._dialog.open(StuAddEditComponent, { data });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) this.getStudentList();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
