import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   constructor(private auth:AuthService, private router: Router) { }

 logIn(){
    this.auth.login();
    this.router.navigate(['about']);
  }
 logOut(){
    this.auth.logout();
  }
}
