
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {MatDialog, } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

 
  EMAIL = new FormControl('', [Validators.required, Validators.email]);
  

getErrorMessage() {
    if (this.EMAIL.hasError('required') ){
      return 'You must enter youremail';
         } else if (this.EMAIL.hasError('email')) {
      return  'Not a valid email'  ;
         }}

  constructor(public dialog: MatDialog,private router : Router , private fb : FormBuilder, public dataService : DataService) {}
  openEDialog(ID): void {
    console.log('user->',);
    let dialogRef = this.dialog.open(EditDialogComponent);{
      width: '550px'}
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       });
     }

EditForm : FormGroup;

  ngOnInit(): void {
    if(!window.localStorage.getItem('token')) {
    this.router.navigate(['login']);
    return;}

    this.EditForm = this.fb.group({
      FIRSTNAME : [''],
      LASTNAME : [''],
      PHONE : [''],
      ADRESS: [''],
     
     'EMAIL':this.EMAIL ,
    });

  } 
  onEdit(): void {
    if (this.EditForm.invalid) {
      return;
    }
    const editUser = {
      FIRSTNAME: this.EditForm.controls.FIRSTNAME.value,
      LASTNAME: this.EditForm.controls.LASTNAME.value,
      ADRESS: this.EditForm.controls.ADRESS.value,
      PHONE : this.EditForm.controls.PHONE.value,
      EMAIL: this.EditForm.controls.EMAIL.value,
    
    }
    this.dataService.edit(editUser).subscribe((data) => {
       this.router.navigateByUrl('/layout')
       
      });
    
 }


}
 


