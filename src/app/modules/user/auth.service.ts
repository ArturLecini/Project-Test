
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap} from 'rxjs/operators'

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
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000';
  handlerError(error): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (error) {
      errorMessage = `Error: code ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  login(loginPayload: LOGIN) :Observable<UserResponse| void>{
    return this.http.post<UserResponse>('http://localhost:3000/login',loginPayload)
  
  }
  signup(signupPayload): Observable<UserResponse| void>{
    return this.http.post<UserResponse>('http://localhost:3000/users/add',signupPayload)
  }
  
  changepssw(changeP): Observable<UserResponse| void>{
    return this.http.patch<UserResponse>(`http://localhost:3000/change-password/ ${changeP.ID}` ,changeP)
  }
  getAll() : Observable<UserResponse> {
    return this.http.get<UserResponse>(this.baseUrl +'/users');
  }

  getById(ID: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.baseUrl+'/users' + ID);
  }

  newUser(user: USER): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.baseUrl, user);
  }

  deleteUser(ID: number): Observable<UserResponse> {
    return this.http.delete<UserResponse>(this.baseUrl+'/users' + ID);
  }
 
  
  private checkToken(): void {
    const user = JSON.parse(localStorage.getItem('token')) || null;

    if (user) {
      const isExpired = helper.isTokenExpired(user.token);

      if (isExpired) {
        
      } else {
       
      }
    }
  }

  private saveLocalStorage(user: UserResponse): void {
    const { ID, message, ...rest } = user;
    localStorage.setItem('text', JSON.stringify(rest));
  }

 
}


 
  