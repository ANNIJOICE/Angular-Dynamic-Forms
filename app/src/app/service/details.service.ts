import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  public selectedService = new Subject<any>();

  constructor() { }

  public setSelectedService(serviceName: string) {
    this.selectedService.next(serviceName);
  }

  public getSelectedService(): Observable<any> {
    return this.selectedService.asObservable();
  }

}
