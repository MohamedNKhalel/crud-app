import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {

  constructor() {}
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token:any={
      Authorization:'Bearer '+localStorage.getItem('userToken')
    }
    if(localStorage.getItem('userToken')!=null){
      request = request.clone(
        {
          setHeaders:token
        }
      )
    }
    return next.handle(request);
  }
}
