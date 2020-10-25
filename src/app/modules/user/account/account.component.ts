import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ThemePalette} from '@angular/material/core';
import { SharedService } from '@shared/shared.service';

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
  selector: 'app-account',
  templateUrl: './account.component.html',
  
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  showFiller = false
  color: ThemePalette = 'warn';
  checked = true;

  
  
  displayedColumns: string[] = ['position', 'name', 'email','addres', 'phone'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog,private sharedService:SharedService) {}
  
  
 

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {  
  }
  Showhide(){
    this.sharedService.sendClickEvent();
    }

}
@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.html',
  styleUrls: ['./dialog-content.css']
})
export class DialogContent {
 
}