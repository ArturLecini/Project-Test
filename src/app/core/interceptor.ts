import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = window.localStorage.getItem('token');
   if (request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    } if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token
        }
      });
    }
  
    
  
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    return next.handle(request);


 
  }
}
