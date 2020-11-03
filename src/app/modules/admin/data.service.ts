
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,BehaviorSubject } from 'rxjs';
import { UserResponse, LOGIN, ROLES, USERD } from '../../shared/models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap} from 'rxjs/operators'
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:3000';

  
  AddUser(adduser): Observable<UserResponse| void>{
    return this.http.post<UserResponse>('http://localhost:3000/users/add',adduser)
      }

  getAll(): Observable<USERD[]> {
    return this.http
      .get<USERD[]>('http://localhost:3000/users')
      .pipe(catchError(this.handlerError));
       }

  delete(ID: number): Observable<{}> {
    return this.http
      .delete<USERD>(`http://localhost:3000/users/delete/${ID}`)
     
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