import { Component ,OnInit} from '@angular/core';
import {FormControl ,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { SharedService } from '@shared/shared.service';
import { Subscription } from 'rxjs';


@Component({ 
    selector: 'app-login',
    templateUrl: './login.component.html' ,
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  clickEventsubscription:Subscription;
name: string;
hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required,Validators.minLength(6)]);

   errorpasw(){
   return 'enter identic pasword';
 }

    
    getErrorMessage() {
      if (this.email.hasError('required') ){
        return 'You must enter your email';
      } else if (this.email.hasError('email')) {
        return  'Not a valid email'  ;
      }}
      getpErrorMessage() {
          if (this.password.hasError('required')) {
            return  'Please must enter your password ';
      }
        return  'Your password is more  than "6" characters'  ;
    }
 


    constructor(private router: Router,private sharedService:SharedService) { 
      
      this.name= "value";
       this.clickEventsubscription= this.sharedService.getClickEvent().subscribe(()=>{
        this.Showhide();
        })
    }

    ngOnInit(){ 
    }//after click sign up need hiden
    Showhide() {
      let x = document.getElementById("myDiv");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    onSubmit() {if (this.email.valid&&this.password.valid) {
      return this.router.navigateByUrl('/layout');
      
    } 
    console.log('form error please write your pasword and email');
    
}
  }
  
 

