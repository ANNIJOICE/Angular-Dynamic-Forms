import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  apiBase: string = "http://localhost:3000/app";

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("URL",request.url);
    const changedRequestUrl = request.clone({url: this.apiBase + request.url})

    return next.handle(changedRequestUrl);
  }
}
