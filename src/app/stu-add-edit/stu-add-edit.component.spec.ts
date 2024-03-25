import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuAddEditComponent } from './stu-add-edit.component';

describe('StuAddEditComponent', () => {
  let component: StuAddEditComponent;
  let fixture: ComponentFixture<StuAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuAddEditComponent]
    });
    fixture = TestBed.createComponent(StuAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
