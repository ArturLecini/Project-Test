
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { UserResponse, LOGIN, ROLES, USERD, USER } from '../../shared/models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators'
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }



  AddUser(adduser): Observable<UserResponse | void> {
    return this.http.post<UserResponse>('http://localhost:3000/users/add', adduser)
    
  }

  getAll(): Observable<USERD[]> {
    return this.http
      .get<USERD[]>('http://localhost:3000/users')
      .pipe(catchError(this.handlerError));
  }

  getById(ID: number): Observable<USER> {
    return this.http
      .get<any>(`http://localhost:3000/users/${ID}`)
      .pipe(catchError(this.handlerError));
  }


  delete(ID: number): Observable<{}> {
    return this.http
      .delete<USERD>(`http://localhost:3000/users/delete/${ID}`)
      .pipe(catchError(this.handlerError));
  }


  edit(editUser): Observable<UserResponse | void> {
    return this.http.patch<UserResponse>(`http://localhost:3000/users/edit/${editUser.ID}`, editUser)
      .pipe(catchError(this.handlerError));
  }


  handlerError(err): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}