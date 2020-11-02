import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { USER } from '@models/*';


import { AuthService } from '../../user/auth.service';

import { DeleteDialogComponent} from '../list-user/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../list-user/edit-dialog/edit-dialog.component';

export interface DataUser {
  position: number;
  name: string;
  email: string;
  addres: string;
  phone: string;
}
const ELEMENT_DATA: DataUser[] = [
  {position: 2, name: 'Hydrogen', email:'Artur.lecini98@gmail.com', addres:'kavaje',phone:"0685158629" }, 
  {position: 2, name: 'Hydrogen', email:'Artur.lecini98@gmail.com', addres:'kavaje',phone:"0685158629" }, 
  {position: 2, name: 'Hydrogen', email:'Artur.lecini98@gmail.com', addres:'kavaje',phone:"0685158629" }, 
  {position: 2, name: 'Hydrogen', email:'Artur.lecini98@gmail.com', addres:'kavaje',phone:"0685158629" }, 
  {position: 2, name: 'Hydrogen', email:'Artur.lecini98@gmail.com', addres:'kavaje',phone:"0685158629" }, 
  {position: 2, name: 'Hydrogen', email:'Artur.lecini98@gmail.com', addres:'kavaje',phone:"0685158629" }, 
];


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent  { 


  displayedColumns: string[] = ['position', 'name', 'email','addres', 'phone'];
  dataSource = ELEMENT_DATA;
  constructor(private router : Router,public dialog: MatDialog ,private authService : AuthService) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);{
      width: '250px'}

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }users: USER[];
  openEDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent);{
      width: '550px'}

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }



  ngOnInit() {
    /*if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }*/
   
  }
  }

  