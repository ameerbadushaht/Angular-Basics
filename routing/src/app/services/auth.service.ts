import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isLogged: boolean = false;


  constructor() { }


  login() {
    this.isLogged = true;

    console.log(this.isLogged);

  }

  logout() {
    this.isLogged = false;
    console.log(this.isLogged);

  }

  isAthenticated(){
    return this.isLogged
  }

}
