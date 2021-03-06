
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators'
import { Router, Routes } from '@angular/router';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UserResponse, USER, LOGIN, ROLES } from '../../shared/models/user.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {

    //if change token in localstorage this.checkToken()
    
  }
  //for activate admin mode with guards
  roleAs: string;
  getRole() {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }
  //get user data after login 
  private user = new BehaviorSubject<UserResponse>(null);
  get user$(): Observable<UserResponse> {
    return this.user.asObservable();
  }
  get userValue(): UserResponse {
    return this.user.getValue();
  }

  login(loginPayload: LOGIN): Observable<UserResponse | void> {
    return this.http.post<UserResponse>('http://localhost:3000/login', loginPayload)
      .pipe(
        map((user: UserResponse) => {

          this.saveLocalStorage(user);
          this.user.next(user);
          return user;
        }),
        catchError((err) => this.handlerError(err))
      );
  }
  signup(signupPayload): Observable<UserResponse | void> {
    return this.http.post<UserResponse>('http://localhost:3000/signup/', signupPayload)
      .pipe(
        map((user: UserResponse) => {
        }),
        catchError((err) => this.handlerError(err))
      );
  }
  changepssw(changeP): Observable<UserResponse | void> {
    return this.http.patch<UserResponse>(`http://localhost:3000/change-password/${changeP.ID}`, changeP)
      .pipe(
        map((user: UserResponse) => {
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  //remove token after logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('ROLE');
    this.router.navigate(['/login']);
  }


  private checkToken(): void {
    const user = JSON.parse(localStorage.getItem('token')) || null;
  }
  //save token
  private saveLocalStorage(user: UserResponse): void {
    const { token } = user;
    localStorage.setItem('token', token);
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




