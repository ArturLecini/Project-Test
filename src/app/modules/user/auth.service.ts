import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment'
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { USER, UserResponse } from '@models/';
import {catchError, map} from 'rxjs/operators'
import {JwtHelperService }from '@auth0/angular-jwt'

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedin = new BehaviorSubject<boolean>(false);
 constructor( private http: HttpClient) { 
   this.checkToken();
 }

 get isLogged():Observable<boolean>{
   return this.loggedin.asObservable();
 }

 login( authData: USER ) : Observable<UserResponse | void>{
  return this.http
  .post<UserResponse> (`http://localhost:3000/login`,authData).pipe(map((res:UserResponse)=>{
this.saveToken(res.token);
   this.loggedin.next(true);
   return res;
  }),
catchError((err)=> this.handlerError(err))

  );
}


logout(): void {
  localStorage.removeItem('token');
  this.loggedin.next(false);
}


private checkToken ():void{
  const userToken = localStorage.getItem('token');
  const isExpired =helper.isTokenExpired(userToken);
  if(isExpired){
    this.logout();
  }else  {
    this.loggedin.next(true);
  }
}


private saveToken (token: string):void{
  localStorage.setItem('token', token);
}


private handlerError(err):Observable<never>{
  let errorMessage ='An error occured retriving data';
  if (err){
    errorMessage= `Error : code ${err.messages}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
 
}
