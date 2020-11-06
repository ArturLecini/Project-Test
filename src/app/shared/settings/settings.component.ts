import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/modules/admin/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dataService: DataService,
) { }

  EMAIL = new FormControl('', [Validators.required, Validators.email]);
  ID = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]);
 
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

 
  //  
  EditForm: FormGroup;
 

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
    
    }
    this.dataService.edit(editUser).subscribe((data) => {
      this.router.navigateByUrl('/layout')
    });

  }
}



