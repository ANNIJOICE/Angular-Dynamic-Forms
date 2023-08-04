import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LOGIN } from './constants'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  http = inject(HttpClient);

  constructor() { }


  login(): Observable<any> {
    return this.http.get("/login"); // Use <LOGIN> as the type argument for get()
  }
}
