import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { USER, USERD } from '@models/*';
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

  displayedColumns: string[] = ['ID', 'CREATED', 'FIRSTNAME', 'LASTNAME', 'PHONE', 'EMAIL', 'ADRESS', 'ROLE', 'actions'];
  dataSource = new MatTableDataSource();
  users: USERD[];

  @ViewChild(MatSort) sort: MatSort;
  ngSortAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  dialogConfig = new MatDialogConfig();
  constructor(private router: Router, public dialog: MatDialog, private dataService: DataService) { }

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

  openDialog(ID: number): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent); {

      width: '250px'
    }
    dialogRef.afterClosed().subscribe(result => {
      if(result &&result.deleteButtonPressed){ this.onDelete(ID);}
     
    });
  }


  openEDialog(ID: number): void {
    let dialogRef = this.dialog.open(EditDialogComponent); {
      this.dataService.getById(ID).subscribe((data) => {
      });
      width: '350px'
    }
    dialogRef.afterClosed().subscribe(result => {
      this.dataService.getAll().subscribe((users) => {
        this.dataSource.data = users;
      });
      console.log('The dialog was closed');
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
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  edit() {

  }


}
