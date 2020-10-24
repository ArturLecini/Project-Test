import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email','addres', 'phone'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
