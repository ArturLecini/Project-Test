import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]
})
export class AddUserComponent implements OnInit {
  constructor(private fb: FormBuilder,
    public router: Router,
    private dataService: DataService) { }

  isLinear = false;
  hide = true;
  EMAIL = new FormControl('', [Validators.required, Validators.email]);
  PASSWORD = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]);
  cpassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]);
  ROLE = new FormControl('', [, Validators.required, Validators.minLength(4), Validators.maxLength(5)]);

  //email error message
  getErrorMessage() {
    if (this.EMAIL.hasError('required')) {
      return 'You must enter youremail';
    } else if (this.EMAIL.hasError('email')) {
      return 'Not a valid email';
    }
  }

  //password error message
  getpErrorMessage() {
    if (this.PASSWORD.hasError('required')) {
      return 'Please must enter your password ';
    } else if (this.PASSWORD.hasError('minlength')) {
      return 'Please continu more your password is min 8 characters ';
    }
    return 'Max length is 12 characters';
  }

  //confirm password error message
  getcErrorMessage() {
    if (this.cpassword.hasError('required')) {
      return 'Please confirm you password';
    } else if (this.cpassword.hasError('minlength')) {
      return 'Please set correct password  ';
    } else {
      return ' confirm the password  is not the same';
    }
  }

  //role error messages
  getRErrorMessage() {
    if (this.ROLE.hasError('required')) {
      return 'Please must enter user role ';
    } else if (this.ROLE.hasError('minlength')) {
      return 'Please set only user or admin  ';
    }
    return 'set correct user | admin';
  }

  //hide passsword error mesages
  incorrect() {
    return "  hide pasword "
  }


  AddForm: FormGroup;
  AddFormR: FormGroup;

  ngOnInit(): void {
    //if not loget ->login
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }

    this.AddForm = this.fb.group({
      FIRSTNAME: [''],
      LASTNAME: [''],
      PHONE: [''],
      ADRESS: [''],

    });

    this.AddFormR = this.fb.group({
      'ROLE': this.ROLE,
      'cpassword': this.cpassword,
      'EMAIL': this.EMAIL,
      'PASSWORD': this.PASSWORD
    },
      {
        validator: MustMatch('PASSWORD', 'cpassword')
      });
  }
  //add new user
  onAdd(): void {
    if (this.AddForm.invalid && this.AddFormR.invalid) {
      return;
    }
    const adduser = {
      ROLE: this.AddFormR.controls.ROLE.value,
      FIRSTNAME: this.AddForm.controls.FIRSTNAME.value,
      LASTNAME: this.AddForm.controls.LASTNAME.value,
      ADRESS: this.AddForm.controls.ADRESS.value,
      PHONE: this.AddForm.controls.PHONE.value,
      EMAIL: this.AddFormR.controls.EMAIL.value,
      PASSWORD: this.AddFormR.controls.PASSWORD.value,
      cpassword: this.AddFormR.controls.cpassword.value
    }
    this.dataService.AddUser(adduser).subscribe((data) => {
      return this.router.navigateByUrl('/account');
    });
  }
}

//confirm password validator  
function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }
    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}