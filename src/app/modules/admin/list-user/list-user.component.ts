import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { USER } from '@models/*';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { AuthService } from '../../user/auth.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


import { EditDialogComponent } from '../list-user/edit-dialog/edit-dialog.component';
import { DataService } from '../data.service';
import { MatSort } from '@angular/material/sort';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { runInThisContext } from 'vm';
import { AccountComponent } from '../../user/account/account.component';




@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, AfterViewInit {
  private destroy$ = new Subject<any>();

  displayedColumns: string[] = ['ID','ROLE',  'CREATED', 'UPDATED_AT','EMAIL','FIRSTNAME', 'LASTNAME', 'ADRESS', 'PHONE',  'actions'];
  dataSource = new MatTableDataSource();
  users: USER[];
 //sord and paginator
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //data filter
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  dialogConfig = new MatDialogConfig();
  constructor(
     private router: Router,
     public dialog: MatDialog, 
     private dataService: DataService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    //GET DATAAA
    this.dataService.getAll().subscribe((users) => {
      this.dataSource.data = users;
    });
   
   
  }
 ngSortAfterViewInit(): void {this.dataSource.paginator = this.paginator;} 
 ngAfterViewInit() { this.dataSource.sort = this.sort;}
 
 openDeleteDialog(ID: number): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent); {
      width: '250px'
    }
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.deleteButtonPressed) { this.onDelete(ID); }
    });
  }
onDelete(ID: number): void {
    this.dataService.delete(ID).pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        // Update result after deleting the user.
        this.dataService.getAll().subscribe((users) => {
          this.dataSource.data = users;
        });
      });
  }



  openEditDialog(ID: number): void {
    let dialogRef = this.dialog.open(EditDialogComponent);{ 
  }
  dialogRef.afterOpened().subscribe(user => {
   user =  this.onEdit(ID,user);
  });
 }
  
onEdit(ID:number,user){
      this.dataService.getById(ID).subscribe((user) => {
      console.log(user.ID,user.EMAIL,user.FIRSTNAME)
    });


  
  }


  
  


  
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  edit() {

  }


}
