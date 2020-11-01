
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map} from 'rxjs/operators'

import * as moment from "moment";
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from '../../../environments/environment';
import { Observable,BehaviorSubject } from 'rxjs';

import { UserResponse, USER, ROLES } from '../../shared/models/user.interface';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000';

  login(loginPayload) :Observable<UserResponse| void>{
    return this.http.post<UserResponse>('http://localhost:3000/login',loginPayload)
   
  catchError((err)=> this.handlerError(err));
  
  }
  signup(signupPayload): Observable<UserResponse| void>{
    return this.http.post<UserResponse>('http://localhost:3000/users/add/',signupPayload)
   
  
  
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

  private handlerError(err): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

export class LocalStorageService {
 
  set(key: string, value: string) {
      localStorage.setItem(key, value);
  }

  get(key: string) {
      return localStorage.getItem(key);
  }

  remove(key: string) {
      localStorage.removeItem(key);
  }
}
