import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)],);
  
 
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
  constructor() { }

  ngOnInit(): void {
  }

}
