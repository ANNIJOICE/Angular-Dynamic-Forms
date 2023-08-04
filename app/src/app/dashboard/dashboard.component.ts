import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  router = inject(Router)

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])

  }

}
