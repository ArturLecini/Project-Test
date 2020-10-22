import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/core/user/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginDeactivateGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    login : LoginComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (login.name !=""){
      return window.confirm("Do you want to leave login now?")
    }
      return true;
  }
  
}
