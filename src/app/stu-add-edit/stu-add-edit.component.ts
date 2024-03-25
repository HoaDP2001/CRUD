import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-stu-add-edit',
  templateUrl: './stu-add-edit.component.html',
  styleUrls: ['./stu-add-edit.component.scss'],
})
export class StuAddEditComponent implements OnInit {
  stuForm: FormGroup;
  education: string[] = [
    'Matric',
    'Intermediate',
    'Diploma',
    'Gratuate',
    'Post Gratuate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _stuService: StudentService,
    private _dialogRef: MatDialogRef<StuAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.stuForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      address: '',
      experience: '',
      package: '',
    });
  }

  ngOnInit(): void {
    this.stuForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.stuForm.valid) {
      if (this.data) {
        this._stuService
          .updateStudent(this.data.id, this.stuForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar(
                'Student details updated successfully!',
                'Done'
              );
              this._dialogRef.close(true);
            },
            error: (error: any) => {
              console.log(error);
            },
          });
      } else {
        this._stuService.addStudent(this.stuForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar(
              'Student added successfully!',
              'Done'
            );
            this._dialogRef.close(true);
          },
          error: (error: any) => {
            console.log(error);
          },
        });
      }
    }
  }
}
