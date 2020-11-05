import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { USER } from '@models/*';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { EditDialogComponent } from '../list-user/edit-dialog/edit-dialog.component';
import { DataService } from '../data.service';
import { MatSort } from '@angular/material/sort';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, AfterViewInit {
  private destroy$ = new Subject<any>();

  displayedColumns: string[] = ['ID', 'ROLE', 'CREATED', 'UPDATED_AT', 'EMAIL', 'FIRSTNAME', 'LASTNAME', 'ADRESS', 'PHONE', 'actions'];
  dataSource = new MatTableDataSource();
  users: USER[];
  ID : number;

  //sord and paginator
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
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

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }
//initial data in form edit after open 
  openEditDialog( ID: number,ROLE: string,EMAIL : string ,FIRSTNAME:string,LASTNAME: string ,PHONE:number,ADRESS:string) {
    this.ID = ID;
    console.log(this.ID);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {ID: ID,ROLE:ROLE,EMAIL : EMAIL,FIRSTNAME:FIRSTNAME,LASTNAME: LASTNAME ,PHONE:PHONE,ADRESS:ADRESS}
    });
    dialogRef.afterClosed().subscribe(data => {
      this.dataService.getAll().subscribe((users) => {
        this.dataSource.data = users;
      });
    });
  }


}
