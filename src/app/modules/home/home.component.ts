import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SettingsComponent } from 'src/app/shared/settings/settings.component';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(
    public dialog: MatDialog,
    private router : Router, 
    public authService: AuthService) { }

  ngOnInit(): void {if(!window.localStorage.getItem('token')) {
    this.router.navigate(['login']);
    return;}
  }
  openEditDialog() {
    
    
    const dialogRef = this.dialog.open(SettingsComponent, {
      
    });
    dialogRef.afterClosed().subscribe(data => {
     
    });
  }
}

