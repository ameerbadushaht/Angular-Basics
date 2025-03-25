import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private auth:AuthService, private router: Router) { }


  logIn(){
    this.auth.login();
    this.router.navigate(['about']);
  }
  logOut(){
    this.auth.logout();
  }


}
