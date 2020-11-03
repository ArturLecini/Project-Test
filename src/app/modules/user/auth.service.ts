
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap} from 'rxjs/operators'
import {  Router, Routes } from '@angular/router';
import * as moment from "moment";
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from '../../../environments/environment';
import { Observable,BehaviorSubject } from 'rxjs';

import { UserResponse, USER,LOGIN, ROLES } from '../../shared/models/user.interface';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


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
  
  constructor(private http: HttpClient,private router : Router) {   this.checkToken();}


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
    return this.http.patch<UserResponse>(`http://localhost:3000/change-password/ ${changeP.ID}` ,changeP)
  }
  
  logout(): void {
    localStorage.removeItem('token');
   this.router.navigate(['/login']);
  }


  private checkToken(): void {
    const user = JSON.parse(localStorage.getItem('token')) || null;

    if (user) {
      const isExpired = helper.isTokenExpired(user.token);

      if (isExpired) {
        this.logout();
      } else {
        this.user.next(user);
      }
    }
  }
    

  private saveLocalStorage(user: UserResponse): void {
    const { token, ID, message, ...rest } = user;
    localStorage.setItem('token', JSON.stringify(rest));
  }

  handlerError(error): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (error) {
      errorMessage = `Error: code ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 
}


 
  