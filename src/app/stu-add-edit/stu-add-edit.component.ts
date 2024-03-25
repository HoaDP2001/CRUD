import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _fb: FormBuilder) {
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
      console.log(this.stuForm);
    }
  }
}
