import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/util/auth.guard';
import { ServiceComponent } from './service/service.component';

// const routes: Routes = [{
//   path: "login",
//   component: LoginComponent,
  // canActivate: [AuthGuard]
// }, {
//   path: 'home',
//   component: DashboardComponent
// }];

const routes: Routes = [
  {
 path: "login",
 component: LoginComponent
}, {
  path: 'home',
  component: DashboardComponent
},
{
  path: 'service',
  component: ServiceComponent
},
{
  path: '**',
  redirectTo: "login",
  pathMatch: 'full'
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
