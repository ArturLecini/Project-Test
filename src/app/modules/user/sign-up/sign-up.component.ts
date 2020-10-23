import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)],);
  confirm = new FormControl('', [Validators.required,Validators.minLength(6)]);
 
  getErrorMessage() {
    if (this.email.hasError('required') ){
      return 'Please You need a email';
    } else if (this.email.hasError('email')) {
      return  'Please need a valid email'  ;
    }
  }
    getpErrorMessage() {
        if (this.password.hasError('required')) {
          return  'Please must enter your password ';
    } 
      return  'Please continue more  than "6" characters'  ;
  }
  getcErrorMessage() {
    if (this.confirm.hasError('required')) {
  return  'Please confirm password'  ;
}
  else {
    return  'Please set correct password'  ;
  }
}

  constructor() { }

  ngOnInit(): void {
  }
  
}
