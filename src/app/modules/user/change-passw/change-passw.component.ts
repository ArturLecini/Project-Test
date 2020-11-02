import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-passw',
  templateUrl: './change-passw.component.html',
  styleUrls: ['./change-passw.component.css']
})
export class ChangePasswComponent implements OnInit {
     name: string;
        hide = true;
       
//message if email or password is valid
EMAIL = new FormControl('', [Validators.required, Validators.email]);
PASSWORD= new FormControl('', [ Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
cpassword = new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
 ID = new FormControl('', [ Validators.required,Validators.minLength(1),Validators.maxLength(10)]);
errorpasw(){
  return 'enter identic pasword';
}
getIDErrorMessage() {
  if (this.ID.hasError('required')) {
      return  'Please must enter your ID ';
        }else if (this.ID.hasError('minlength')) {
     return  'Please continu more 1 '  ;
    }
      return  'Max length is 10 characters'  ;
      } 
getErrorMessage() {
if (this.EMAIL.hasError('required') ){
return 'You must enter youremail';
   } else if (this.EMAIL.hasError('email')) {
return  'Not a valid email'  ;
   }}

getpErrorMessage() {
if (this.PASSWORD.hasError('required')) {
    return  'Please must enter your password ';
      }else if (this.PASSWORD.hasError('minlength')) {
   return  'Please continu more your password is min 8 characters '  ;
  }
    return  'Max length is 12 characters'  ;
    } 
    getcErrorMessage() { 
     if (this.cpassword.hasError('required')) {
         return  'Please confirm password'  ;
     }  else if (this.cpassword.hasError('minlength')) {
   return  'Please set correct password  '  ;
                  }else  {
         return  ' correct 8-12 caracters' ;  
        }
    }


incorrect(){
return " please hide pasword "}

constructor(private router: Router,
  private authService: AuthService ,
    private fb : FormBuilder ) 
{ 
this.name= "value";

}
 invalidLogin: boolean = false;
    ChangeForm: FormGroup;
ngOnInit(): void
{ 
window.localStorage.removeItem('token');
  this.ChangeForm = this.fb.group({
    'EMAIL':this.EMAIL ,
       'PASSWORD': this.PASSWORD,
       'cpassword': this.cpassword,
       'ID': this.ID,
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
if (this.ChangeForm.invalid) {
return ; 
}
const changeP = {
 
     PASSWORD: this.ChangeForm.controls.PASSWORD.value,
     ID: this.ChangeForm.controls.ID.value
    
 };

   this.authService.changepssw(changeP).subscribe((data) => {
    this.change()
  });
}
change(){  if (this.EMAIL.valid&&this.PASSWORD.valid && this.ID) {
              
               return  this.router.navigateByUrl('/login')
                    
                     }
                                
                    

} 

//after click sign up need hiden
Showhide() {
let x = document.getElementById("myDiv");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}
}


