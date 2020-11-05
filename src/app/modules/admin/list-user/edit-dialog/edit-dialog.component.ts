
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { USER, } from '@models/*';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { element } from 'protractor';
import { ListUserComponent } from '../list-user.component';
import { userInfo } from 'os';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  EMAIL = new FormControl('', [Validators.required, Validators.email]);
  ID = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]);
  ROLE = new FormControl('', [ , Validators.required, Validators.minLength(4), Validators.maxLength(5)]);
  getIDErrorMessage() {
    if (this.ID.hasError('required')) {
      return 'Please must enter your ID ';
    } else if (this.ID.hasError('minlength')) {
      return 'Please continu more 1 ';
    }
    return 'Max length is 10 characters';
  }
  getErrorMessage() {
    if (this.EMAIL.hasError('required')) {
      return 'You must enter youremail';
    } else if (this.EMAIL.hasError('email')) {
      return 'Not a valid email';
    }
  }

  getRErrorMessage() {
    if (this.ROLE.hasError('required')) {
      return 'Please must enter user role ';
    } else if (this.ROLE.hasError('minlength')) {
      return 'Please set only user or admin  ';
    }
    return 'set correct user | admin';
  }

  constructor(
    
    private router: Router,
    private fb: FormBuilder,
    public dataService: DataService,
   @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  //  
  EditForm: FormGroup;
Data = this.data;

  options: any;
  ngOnInit(): void {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.EditForm = this.fb.group({
      FIRSTNAME: [''],
      LASTNAME: [''],
      PHONE: [''],
      ADRESS: [''],
     'ID': this.ID,
      'EMAIL': this.EMAIL,
      'ROLE': this.ROLE,
    });

  }
 
  //edit
  stopEdit(): void {
    if (this.EditForm.invalid) {
      return;
    }
    const editUser = {
      ID: this.EditForm.controls.ID.value,
      FIRSTNAME: this.EditForm.controls.FIRSTNAME.value,
      LASTNAME: this.EditForm.controls.LASTNAME.value,
      ADRESS: this.EditForm.controls.ADRESS.value,
      PHONE: this.EditForm.controls.PHONE.value,
      EMAIL: this.EditForm.controls.EMAIL.value,
      ROLE: this.EditForm.controls.ROLE.value,
    }
    this.dataService.edit(editUser).subscribe((data) => {
      this.router.navigateByUrl('/account')
    });

  }
}



