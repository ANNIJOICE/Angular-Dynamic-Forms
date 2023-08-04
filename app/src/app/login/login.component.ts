import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApicallService } from '../shared/util/apicall.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LoginComponent {
  title = "MyApp"

  // router = inject(Router);

  constructor(private userapi: ApicallService, private route: Router) {}

  login(userValues: NgForm) {
    console.log(userValues);
    // this.userapi.login()
    // .subscribe(res =>  {
    //   if(res.login) {
        // sessionStorage.setItem('login', res.login);
        this.route.navigate(['/home']);
        alert("Logined successfully")
    //   }
    // })
  }


}
