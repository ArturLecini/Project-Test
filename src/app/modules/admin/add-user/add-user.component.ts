import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators,FormBuilder} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Router} from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddUserComponent implements OnInit {
 firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = false;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [ Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
 

 errorpasw(){
 return 'enter identic pasword';
}
  getErrorMessage() {
    if (this.email.hasError('required') ){
      return 'You must enter your email';
    } else if (this.email.hasError('email')) {
      return  'Not a valid email'  ;
    }}
    getpErrorMessage() {
     if (this.password.hasError('required')) {
          return  'Please must enter your password ';
    }else if (this.password.hasError('minlength')) {
      return  'Please continu more your password is min 8 characters '  ;
    }
    return  'Max length is 12 characters'  ;
      
  } 

     
 

  incorrect(){
    return"  hide pasword "}

    constructor(private formBuilder: FormBuilder,private router: Router) { }

    addForm: FormGroup;
  
    ngOnInit() {
      this.addForm = this.formBuilder.group({
      
        username: ['', Validators.required],
        password: ['', Validators.required],
        firstName: ['', ],
        lastName: ['', ],
       phone: ['', ],
      });
  
    }
  
    onSubmit() {
      
          this.router.navigate(['list-user']);
        
    }
  
  }