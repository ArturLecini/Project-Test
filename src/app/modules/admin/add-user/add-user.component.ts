import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators,FormBuilder} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AddUserComponent implements OnInit {
 
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)],);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = false;
  
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
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]  });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}