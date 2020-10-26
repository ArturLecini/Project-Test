import { Component, OnInit ,Inject} from '@angular/core';

import {ThemePalette} from '@angular/material/core';

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

  
  
  

  constructor(private sharedService:SharedService ,) {}
  
  

  ngOnInit(): void {  
  }
  Showhide(){
    this.sharedService.sendClickEvent();
    }

}
