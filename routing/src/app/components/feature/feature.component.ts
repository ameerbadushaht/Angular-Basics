import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
   constructor(private auth:AuthService, private router: Router) { }

  logOut(){
    this.auth.logout();
    window.location.reload();
  }
}
