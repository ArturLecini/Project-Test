import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';
import {MatDialog, } from '@angular/material/dialog'

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

 
  email = new FormControl('', [ Validators.email]);
 
  
 
  getErrorMessage() {
    if (this.email.hasError('email')) {
      return  'Please need a valid email'  ;
    }
  }
  

  constructor(public dialog: MatDialog) {}
  openEDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent);{
      width: '550px'}

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
  }

}
