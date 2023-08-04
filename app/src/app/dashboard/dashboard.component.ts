import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../service/details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  router = inject(Router)

  constructor(private detailsService: DetailsService) {}

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])

  }

  updateService(serviceName: string) {
    this.router.navigate(['/service'], {queryParams: { name: serviceName }})
    // this.detailsService.setSelectedService(serviceName);
  }

}
