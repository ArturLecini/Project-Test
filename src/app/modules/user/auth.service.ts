
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap} from 'rxjs/operators'
import {  Router, Routes } from '@angular/router';
import * as moment from "moment";

import { environment } from '../../../environments/environment';
import { Observable,BehaviorSubject } from 'rxjs';

import { UserResponse, USER,LOGIN, ROLES } from '../../shared/models/user.interface';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private user = new BehaviorSubject<UserResponse>(null);
       get user$(): Observable<UserResponse> {
           return this.user.asObservable();
                                           }
       get userValue(): UserResponse {
             return this.user.getValue();
                                        }
  
  constructor(private http: HttpClient,private router : Router) {  
    
   
  
  }


  login(loginPayload: LOGIN) :Observable<UserResponse| void>{
    return this.http.post<UserResponse>('http://localhost:3000/login',loginPayload)
    .pipe(
      map((user: UserResponse) => {
        this.saveLocalStorage(user);
        this.user.next(user);
        return user;
      }),
      catchError((err) => this.handlerError(err))
    );
}
  signup(signupPayload): Observable<UserResponse| void>{
    return this.http.post<UserResponse>('http://localhost:3000/users/add/',signupPayload)
  }
  
  
  changepssw(changeP): Observable<UserResponse| void>{
    return this.http.patch<UserResponse>(`http://localhost:3000/change-password/${changeP.ID}` ,changeP)
  }
  
  logout(): void {
    localStorage.removeItem('token');
   this.router.navigate(['/login']);
  }


  private checkToken(): void {
    const user = JSON.parse(localStorage.getItem('token')) || null;

  }

  private saveLocalStorage(user: UserResponse): void {
    const { token, ID, message, ...rest } = user;
    localStorage.setItem('token', JSON.stringify(rest));
  }

  
//display error 
handlerError(err): Observable<never> {
  let errorMessage = 'An errror occured retrienving data';
  if (err) {
    errorMessage = `Error: code ${err.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}



 
  