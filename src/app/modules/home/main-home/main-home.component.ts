import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { SettingsComponent } from 'src/app/shared/settings/settings.component';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor(
   
    private router : Router, 
    public authService: AuthService) { }

  ngOnInit(): void {if(!window.localStorage.getItem('token')) {
    this.router.navigate(['login']);
    return;}
  }

}


