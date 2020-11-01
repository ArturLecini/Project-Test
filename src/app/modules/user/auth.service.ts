
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

import { UserResponse, USER, ROLES } from '../../shared/models/user.interface';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000';

  login(loginPayload) : Observable<UserResponse> {
    return this.http.post<UserResponse>('http://localhost:3000/login',loginPayload);
  }

  signup(signupPayload) : Observable<UserResponse> {
    return this.http.post<UserResponse>('http://localhost:3000/users/add/',signupPayload);
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
 


  
  }


