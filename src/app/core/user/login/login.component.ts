import { Component ,OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({ 
    selector: 'app-login',
    templateUrl: 'login.component.html' ,
    styleUrls: ['./login.component.css']


})
export class LoginComponent implements OnInit {
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
        return 'You must enter your password';
      }
     
        return  'Please continue more  than 6'  ;
      
      
  
      
 
    }
    constructor() { }

    ngOnInit(): void {
    }
  
  }
  
 
