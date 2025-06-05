import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLogged: boolean = false;


  constructor() { }


  login() {
    this.isLogged = true;
    localStorage.setItem('isLogged', 'true');
    console.log(this.isLogged);

  }

  logout() {
    this.isLogged = false;
    localStorage.removeItem('isLogged');
    console.log(this.isLogged);

  }

  isAthenticated(){
    if (localStorage.getItem('isLogged') === 'true') {
      this.isLogged = true;
    }
    return this.isLogged
  }

}
