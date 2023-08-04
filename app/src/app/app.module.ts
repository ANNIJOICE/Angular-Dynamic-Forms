import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from 'src/app/shared/api.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { RadioComponent } from './service/radio/radio.component';
import { CheckboxComponent } from './service/checkbox/checkbox.component';
import { DetailsService } from './service/details.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ServiceComponent,
    RadioComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DetailsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
