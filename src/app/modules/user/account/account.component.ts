import { Component, OnInit ,Inject} from '@angular/core';

import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

import { SharedService } from '@shared/shared.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  showFiller = false
  color: ThemePalette = 'warn';
  checked = true;

  
  
  

  constructor(public sharedService:SharedService ,private router: Router ) {}
  
  

  ngOnInit(): void {  if(!window.localStorage.getItem('token')) {
    this.router.navigate(['login']);
    return;}
  }
  Showhide(){
    this.sharedService.sendClickEvent();
    }

}
