import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {  Router, Routes } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  EMAIL = new FormControl('', [Validators.required, Validators.email]);
  PASSWORD = new FormControl('', [Validators.required,Validators.minLength(8)],);
  cpassword = new FormControl('', [Validators.required,Validators.minLength(8)]);
 
  getErrorMessage() {
        if (this.EMAIL.hasError('required') ){
                return 'Please You need a email';
          } else if (this.EMAIL.hasError('email')) {
                    return  'Please need a valid email'  ;
                 }
                    }

    getpErrorMessage() {
             if (this.PASSWORD.hasError('required')) {
                      return  'Please must enter your password ';
                    }  return  'Please continue more  than "8" characters'  ;
                      }

  getcErrorMessage() {
             if (this.cpassword.hasError('required')) {
                 return  'Please confirm password'  ;
                          } else if (this.SignupForm.controls.PASSWORD.value !== this.SignupForm.controls.cpassword.value) {
                  return  'Please set correct password'  ;
                    }
                }

  constructor(private router: Router, private authService : AuthService, private fb : FormBuilder) { }
 
 
  invalidLogin: boolean = false;
  SignupForm: FormGroup;
  ngOnInit(): void{ 



   
    window.localStorage.removeItem('token');
    this.SignupForm = this.fb.group({
      FIRSTNAME : [''],
      LASTNAME : [''],
      PHONE : [''],
      ADRESS: [''],
     'EMAIL':this.EMAIL ,
     'PASSWORD': this.PASSWORD,
    });

  } 
   /* 
    return this.router.navigateByUrl('/layout');
    } 
  } 
  console.log('form error please write your pasword andemail');
  */ 
 onSignup(): void {
    if (this.SignupForm.invalid) {
      return;
    }
    const signupPayload = {
      FIRSTNAME: this.SignupForm.controls.FIRSTNAME.value,
      LASTNAME: this.SignupForm.controls.LASTNAME.value,
      ADRESS: this.SignupForm.controls.ADRESS.value,
      PHONE : this.SignupForm.controls.PHONE.value,
      EMAIL: this.SignupForm.controls.EMAIL.value,
      PASSWORD: this.SignupForm.controls.PASSWORD.value

    }
    this.authService.signup(signupPayload).subscribe((data) => {
       this.router.navigateByUrl('/layout')
        if (this.EMAIL.valid&&this.PASSWORD.valid) {
           if(this.hide){
              if(data.status === 200) {
              ;
        window.localStorage.setItem('token', data.result.token);
              }
          }
      }
      else { 
        this.invalidLogin = true;
        alert(data.messages);
      }
    });
 }}
 
