import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-stu-add-edit',
  templateUrl: './stu-add-edit.component.html',
  styleUrls: ['./stu-add-edit.component.scss'],
})
export class StuAddEditComponent {
  stuForm: FormGroup;
  education: string[] = [
    'Matric',
    'Intermediate',
    'Diploma',
    'Gratuate',
    ' Post Gratuate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _stuService: StudentService,
    private _dialogRef: DialogRef<StuAddEditComponent>
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

  onFormSubmit() {
    if (this.stuForm.valid) {
      this._stuService.addStudent(this.stuForm.value).subscribe({
        next: (val: any) => {
          alert('Student added successfully!');
          this._dialogRef.close();
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }
}
