
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  EMAIL = new FormControl('', [Validators.required, Validators.email]);
  PASSWORD = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]);
  cpassword = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]);


  getErrorMessage() {
    if (this.EMAIL.hasError('required')) {
      return 'You must enter youremail';
    } else if (this.EMAIL.hasError('email')) {
      return 'Not a valid email';
    }
  }

  getpErrorMessage() {
    if (this.PASSWORD.hasError('required')) {
      return 'Please must enter your password ';
    } else if (this.PASSWORD.hasError('minlength')) {
      return 'Please continu more your password is min 8 characters ';
    }
    return 'Max length is 12 characters';
  }

  getcErrorMessage() {
    if (this.cpassword.hasError('required')) {
      return 'Please confirm you password';
    } else if (this.cpassword.hasError('minlength')) {
      return 'Please set correct password  ';
    } else {
      return ' confirm the password  is not the same';
    }
  }


  errorpasw() {
    return 'enter identic pasword';
  }

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }


  invalidLogin: boolean = false;
  SignupForm: FormGroup;
  ngOnInit(): void {

    this.SignupForm = this.fb.group({
      FIRSTNAME: [''],
      LASTNAME: [''],
      PHONE: [''],
      ADRESS: [''],

      'cpassword': this.cpassword,
      'EMAIL': this.EMAIL,
      'PASSWORD': this.PASSWORD,
    }, {
      validator: MustMatch('PASSWORD', 'cpassword')
    });

  }

  onSignup(): void {
    if (this.SignupForm.invalid) {
      return;
    }
    const signupPayload = {
      FIRSTNAME: this.SignupForm.controls.FIRSTNAME.value,
      LASTNAME: this.SignupForm.controls.LASTNAME.value,
      ADRESS: this.SignupForm.controls.ADRESS.value,
      PHONE: this.SignupForm.controls.PHONE.value,
      EMAIL: this.SignupForm.controls.EMAIL.value,
      PASSWORD: this.SignupForm.controls.PASSWORD.value,
      cpassword: this.SignupForm.controls.cpassword.value
    }
    this.authService.signup(signupPayload).subscribe((data) => {
      this.checkSignup();
    });


  }
  checkSignup() {
    if (this.EMAIL.valid && this.cpassword.valid) {
      return this.router.navigateByUrl('/layout')
    } else
      this.authService.handlerError
  }
}
//confirm password 
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