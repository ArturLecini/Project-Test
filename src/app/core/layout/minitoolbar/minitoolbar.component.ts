import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/user/auth.service';
import { SettingsComponent } from 'src/app/shared/settings/settings.component';

@Component({
  selector: 'app-minitoolbar',
  templateUrl: './minitoolbar.component.html',
  styleUrls: ['./minitoolbar.component.css']
})
export class MinitoolbarComponent implements OnInit {

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



