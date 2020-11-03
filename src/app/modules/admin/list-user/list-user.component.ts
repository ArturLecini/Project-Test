import { takeUntil } from 'rxjs/operators';
import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import { USER, USERD } from '@models/*';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { AuthService } from '../../user/auth.service';

import { DeleteDialogComponent} from '../list-user/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../list-user/edit-dialog/edit-dialog.component';
import { DataService } from '../data.service';




@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit { 
  private destroy$ = new Subject<any>();

  displayedColumns: string[] = ['ID', 'FIRSTNAME', 'LASTNAME','PHONE', 'EMAIL' ,'actions'];
  dataSource = new MatTableDataSource();
users: USERD[];

  constructor(private router : Router,public dialog: MatDialog ,private dataService : DataService) {}
  
  ngOnInit() {

    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    
    //GET DATAAA
    this.dataService.getAll().subscribe((users) => {
      this.dataSource.data = users;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent);{
      width: '250px'}

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }






  openEDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent);{
      width: '550px'}

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }
  onDelete(ID: number): void {
    if (window.confirm('Do you really want remove this user')) {
      this.dataService
        .delete(ID)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {
          window.alert(res);
          // Update result after deleting the user.
          this.dataService.getAll().subscribe((users) => {
            this.dataSource.data = users;
          });
        });
    }
  }


  }

  