import { Component ,OnInit} from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
@Component({ 
    selector: 'app-login',
    templateUrl: 'login.component.html' ,
    styleUrls: ['./login.component.css']


})
export class LoginComponent implements OnInit {
 errorpasw(){
   return 'enter identic pasword';
 }
  
    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required,Validators.minLength(6)]);
    getErrorMessage() {
      if (this.email.hasError('required') ){
        return 'You must enter your email';
      } else if (this.email.hasError('email')) {
        return  'Not a valid email'  ;
      }}
      getpErrorMessage() {
          if (this.password.hasError('required')) {
            return  'Please must enter your password ';
      }
     
        return  'Your password is more  than "6" characters'  ;
    }
 
    constructor() { }

    ngOnInit(): void {
    }
  
  }
  
 
