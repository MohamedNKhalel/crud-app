import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  counter:number =0;
  constructor(private _NgxSpinnerService:NgxSpinnerService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.counter++;
    this._NgxSpinnerService.show()
    return next.handle(request).pipe(finalize(()=>{
      this.counter--;
      if(this.counter==0)this._NgxSpinnerService.hide()
    }));
  }
}
