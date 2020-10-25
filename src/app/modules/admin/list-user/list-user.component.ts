import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



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
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent  { 


  displayedColumns: string[] = ['position', 'name', 'email','addres', 'phone'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContent);{
      width: '250px'}

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }
  
  }

  @Component({
    selector: 'dialog-content',
    templateUrl: './dialog-content.html',
    styleUrls: ['./dialog-content.css']
  })
  export class DialogContent {
    constructor(
      public dialogRef: MatDialogRef<DialogContent>) {}
  
    onNoClick(): void {
      this.dialogRef.close
  }}