
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,BehaviorSubject } from 'rxjs';
import { UserResponse, USER,LOGIN, ROLES } from '../../shared/models/user.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

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
  

}