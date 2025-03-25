import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

constructor( private auth:AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAthenticated()) {
      this.router.navigate(['/about'])
      console.log(this.auth.isAthenticated());

      return false
    }
      else{
        return true
      }
  }
}
