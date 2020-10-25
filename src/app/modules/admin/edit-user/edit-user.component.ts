import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  
})
export class EditUserComponent implements OnInit {
 
  email = new FormControl('', [Validators.required, Validators.email]);
 
  
 
  getErrorMessage() {
    if (this.email.hasError('required') ){
      return 'Please You need a email';
    } else if (this.email.hasError('email')) {
      return  'Please need a valid email'  ;
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
