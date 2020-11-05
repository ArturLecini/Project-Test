import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, } from '@angular/material/dialog'
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent  {

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private dialogRef: MatDialogRef<DeleteDialogComponent>) {}
  cancel() {
    // send data to parent component
    this.dialogRef.close({ data: 'you cancelled' })
  }
  onDeleteClick() {
    // send data to parent component
    this.dialogRef.close({deleteButtonPressed:true});
  }
  }

 