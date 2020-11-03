
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
  PASSWORD= new FormControl('', [ Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
  cpassword = new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
 
  
  getErrorMessage() {
            if (this.EMAIL.hasError('required') ){
            return 'You must enter youremail';
               } else if (this.EMAIL.hasError('email')) {
                 return  'Not a valid email'  ;
            }
          }

 getpErrorMessage() {
               if (this.PASSWORD.hasError('required')) {
               return  'Please must enter your password ';
             }else if (this.PASSWORD.hasError('minlength')) {
            return  'Please continu more your password is min 8 characters '  ;
              }
             return  'Max length is 12 characters'  ;
                } 

  getcErrorMessage() { let pass = this.SignupForm.controls.PASSWORD.value;
              let confirmPass = this.SignupForm.controls.cpassword.value;
             if (this.cpassword.hasError('required')) {
                 return  'Please confirm password'  ;
             }  else if (this.cpassword.hasError('minlength')) {
           return  'Please set correct password  '  ;
                          }else if (pass !== confirmPass ) {
                 return  ' correct 8-12 caracters' ;  
                }
            }



  constructor(private router: Router, private authService : AuthService, private fb : FormBuilder) { }
 
  invalidLogin: boolean = false;
  SignupForm: FormGroup;
  ngOnInit(): void{ 

    this.SignupForm = this.fb.group({
      FIRSTNAME : [''],
      LASTNAME : [''],
      PHONE : [''],
      ADRESS: [''],
      'cpassword': this.cpassword,
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
      PASSWORD: this.SignupForm.controls.PASSWORD.value,
      cpassword: this.SignupForm.controls.cpassword.value
    }
    this.authService.signup(signupPayload).subscribe((data) => {
       this.router.navigateByUrl('/layout')
        if (this.EMAIL.valid&&this.PASSWORD.valid) {
           if(this.hide){
        
          }
      }
      else { 
        this.invalidLogin = true;
       
      }
    });
 }}
 
