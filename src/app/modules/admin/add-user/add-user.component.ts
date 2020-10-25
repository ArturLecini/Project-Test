import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators,FormBuilder} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Router} from '@angular/router';
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

  constructor(private router: Router,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]  });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }  onSubmit() {if (this.email.valid&&this.password.valid) {
    if(this.hide){
    return this.router.navigateByUrl('/layout');
    } 
  } 
  console.log('form error please write your pasword and email');
  
}
}