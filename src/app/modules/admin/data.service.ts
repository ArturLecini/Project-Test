
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { UserResponse, LOGIN, ROLES, USER } from '../../shared/models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators'
const helper = new JwtHelperService();





@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  private token=localStorage.getItem('token');
  
  

  private httpOptions = {
    headers: new HttpHeaders({'token':this.token ,'Content-Type':'application/json'})
  
    
  };
  AddUser(adduser): Observable<UserResponse | void> {
    return this.http.post<UserResponse>('http://localhost:3000/users/add', adduser,this.httpOptions)
  
  }
  getAll(): Observable<USER[]> {
    console.log(this.httpOptions)
    return this.http
      .get<USER[]>('http://localhost:3000/users',this.httpOptions )
      .pipe(catchError(this.handlerError));
  }

  getById(ID: number): Observable<USER> {
    return this.http
      .get<USER>(`http://localhost:3000/users/${ID}`)
      .pipe(catchError(this.handlerError));
  }

  delete(ID: number): Observable<{}> {
    return this.http
      .delete<USER>(`http://localhost:3000/users/delete/${ID}`,this.httpOptions)
      .pipe(catchError(this.handlerError));
  }

  edit(editUser): Observable<UserResponse | void> {
    return this.http.patch<UserResponse>(`http://localhost:3000/users/edit/${editUser.ID}`, editUser,this.httpOptions)
      .pipe(catchError(this.handlerError));
  }
  editdata(editUser): Observable<UserResponse | void> {
    return this.http.put<UserResponse>(`http://localhost:3000/edit/${editUser.ID}`, editUser)
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