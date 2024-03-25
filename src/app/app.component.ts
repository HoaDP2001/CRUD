import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StuAddEditComponent } from './stu-add-edit/stu-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CRUD Angular';

  constructor(private _dialog: MatDialog) {}

  openAddEditStuForm() {
    this._dialog.open(StuAddEditComponent);
  }
}
