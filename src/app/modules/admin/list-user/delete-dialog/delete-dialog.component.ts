import { Component, OnInit } from '@angular/core';
import {MatDialog, } from '@angular/material/dialog'
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent  {

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);{
      width: '250px'}

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }
  
  }

 