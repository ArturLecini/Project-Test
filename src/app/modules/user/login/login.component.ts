import { Component ,OnInit} from '@angular/core';
import {FormControl,FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { SharedService } from '@shared/shared.service';
import { Subscription } from 'rxjs';
import {AccountComponent} from '../../admin/account/account.component'
import { AuthService } from '../auth.service';

@Component({ 
    selector: 'app-login',
    templateUrl: './login.component.html' ,
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
   constructor(private router: Router,
            public sharedService:SharedService, 
            private authService: AuthService ,
            private fb : FormBuilder ) 
{ 
  this.getRole() 
      this.name= "value";
      this.sharedService.getClickEvent();
       this.clickEventsubscription= this.sharedService.getClickEvent().subscribe(()=>{
        this.Showhide() })

}     public subscription: Subscription = new Subscription();
          clickEventsubscription:Subscription;
             name: string;
                hide = true;


              
//message if email or password is valid
  EMAIL = new FormControl('', [Validators.required, Validators.email]);
    PASSWORD= new FormControl('',[ Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
errorpasw(){
          return 'enter identic pasword';
        }

 getErrorMessage() {
      if (this.EMAIL.hasError('required') ){
        return 'You must enter your email';
           } else if (this.EMAIL.hasError('email')) {
        return  'Not a valid email'  ;
           }}

 getpErrorMessage() {
       if (this.PASSWORD.hasError('required')) {
            return  'Please must enter your password ';
              }else if (this.PASSWORD.hasError('minlength')) {
           return  'Please continue more, your password is min 8 characters '  ;
          }
            return  'Max length is 12 characters'  ;
            } 

    incorrect(){
      return "  hide pasword "}


         invalidLogin: boolean = false;
            LoginForm: FormGroup;
 ngOnInit(): void
 { 
      window.localStorage.removeItem('token');
          this.LoginForm = this.fb.group({
            'EMAIL':this.EMAIL ,
               'PASSWORD': this.PASSWORD,
         });

 } 


     /* 
      return this.router.navigateByUrl('/layout');
      } 
    } 
    console.log('form error please write your pasword andemail');
    */ 
   
onlogin(): void 
{
        if (this.LoginForm.invalid) {
        return ; 
      }
      const loginPayload = {
          EMAIL: this.LoginForm.controls.EMAIL.value,
             PASSWORD: this.LoginForm.controls.PASSWORD.value,
            
        }
           this.authService.login(loginPayload).subscribe((data) => {
           this.getroles();
            this.checklogin();     
          });
}
  checklogin(){ 
     if (this.EMAIL.valid&&this.PASSWORD.valid) {
                      if(this.hide ){  
            return  this.router.navigateByUrl('/layout')

                              }   else    
                                 return this.incorrect()  
       }
             this.authService.handlerError       
                           

  } 
 
   //after click sign up need hiden
 Showhide() {
   
      let x = document.getElementById("myDiv");
      if (x.style.display === "none") {
       return x.style.display = "block";
      } else {
      return  x.style.display = "none";
      }
    }
    getroles(){
      const ROLE = this.authService.userValue.ROLE
      
      localStorage.setItem('ROLE', ROLE)
     
    } getRole() {
        let roleAs = localStorage.getItem('ROLE');
       
        return roleAs;
      }
  }
  
 
